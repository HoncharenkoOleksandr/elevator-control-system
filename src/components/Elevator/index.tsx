import React, { useEffect, useState } from "react";
import { useI18n } from "../../i18n/Context";
import * as S from "./styles";

export type Direction = "up" | "down" | "idle";

export interface ElevatorState {
  currentFloor: number;
  direction: Direction;
  targetFloors: number[];
}

interface ElevatorProps {
  maxFloor?: number;
}

const ElevatorDefaultState: ElevatorState = {
  currentFloor: 1,
  direction: "idle",
  targetFloors: [],
};

export const Elevator: React.FC<ElevatorProps> = ({ maxFloor = 10 }) => {
  const { t } = useI18n();
  const [state, setState] = useState<ElevatorState>(ElevatorDefaultState);
  const [arrivalFloor, setArrivalFloor] = useState<number | null>(null);

  const floorNumbers = Array.from({ length: maxFloor }, (_, i) => i + 1);

  useEffect(() => {
    if (state.targetFloors.length === 0) return;

    const nextFloor = state.targetFloors[0];
    const direction = nextFloor > state.currentFloor ? "up" : "down";

    setState((prev) => ({ ...prev, direction }));

    const moveElevator = () => {
      setState((prev) => {
        let newCurrentFloor = prev.currentFloor;

        if (newCurrentFloor < nextFloor) {
          newCurrentFloor = prev.currentFloor + 1;
        } else if (newCurrentFloor > nextFloor) {
          newCurrentFloor = prev.currentFloor - 1;
        } else {
          setTimeout(() => {
            setArrivalFloor(nextFloor);
            setTimeout(() => setArrivalFloor(null), 2000);
          }, 300);

          return {
            ...prev,
            currentFloor: newCurrentFloor,
            targetFloors: prev.targetFloors.slice(1),
            direction:
              prev.targetFloors.slice(1).length > 0
                ? prev.targetFloors.slice(1)[0] > newCurrentFloor
                  ? "up"
                  : "down"
                : "idle",
          };
        }

        return {
          ...prev,
          currentFloor: newCurrentFloor,
        };
      });
    };

    const interval = setInterval(moveElevator, 1000);
    return () => clearInterval(interval);
  }, [state.targetFloors, state.currentFloor]);

  const callElevator = (floor: number) => {
    setState((prev) => {
      const newTargets = [...prev.targetFloors, floor];
      return { ...prev, targetFloors: newTargets.sort((a, b) => a - b) };
    });
  };

  return (
    <S.ElevatorContainer>
      <S.StatusSection>
        <S.Title>{t("elevator.status")}</S.Title>

        <S.FloorDisplay>
          <S.Label>{t("elevator.currentFloor")}:</S.Label>
          <S.FloorNumber>{state.currentFloor}</S.FloorNumber>
        </S.FloorDisplay>

        <S.DirectionIndicator direction={state.direction}>
          <S.Label>{t("elevator.direction")}:</S.Label>
          <S.DirectionText>
            {state.direction === "up"
              ? "↑"
              : state.direction === "down"
              ? "↓"
              : t("elevator.idle")}
          </S.DirectionText>
        </S.DirectionIndicator>
      </S.StatusSection>

      <S.ControlsSection>
        <S.SectionTitle>{t("floor.select")}</S.SectionTitle>
        <S.FloorButtonsGrid>
          {floorNumbers.map((floor) => (
            <S.FloorButton
              key={floor}
              onClick={() => callElevator(floor)}
              isActive={state.targetFloors.includes(floor)}
              isCurrent={state.currentFloor === floor}
            >
              {floor}
            </S.FloorButton>
          ))}
        </S.FloorButtonsGrid>
      </S.ControlsSection>

      {arrivalFloor && (
        <S.ArrivalNotification>
          {t("floor.arrival", { floor: arrivalFloor })}
        </S.ArrivalNotification>
      )}
    </S.ElevatorContainer>
  );
};
