import { useUpdateTrigger } from "@/hooks/useUpdateTrigger.ts";
import React, { useEffect, useState } from "react";
import { useI18n } from "../../i18n/Context";
import { ElevatorManager } from "../../logic/ElevatorManager";
import * as S from "./styles.ts";

interface BuildingProps {
  elevatorCount?: number;
  maxFloors?: number;
}

export const Building: React.FC<BuildingProps> = ({
  elevatorCount = 2,
  maxFloors = 10,
}) => {
  const { t } = useI18n();
  const [manager, setManager] = useState<ElevatorManager | null>(null);
  const setUpdateTrigger = useUpdateTrigger();

  useEffect(() => {
    const managerInstance = new ElevatorManager(elevatorCount, 1, maxFloors);
    setManager(managerInstance);
  }, [elevatorCount, maxFloors]);

  useEffect(() => {
    if (!manager) return;

    const interval = setInterval(() => {
      if (manager) {
        manager.update();
        setUpdateTrigger();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [manager, setUpdateTrigger]);

  const handleFloorClick = (floor: number) => {
    if (!manager) return;
    manager.callElevatorToFloor(floor);
    setUpdateTrigger();
  };

  if (!manager) {
    return <div>Loading...</div>;
  }

  const elevators = manager.getAllElevators();
  const floors = Array.from({ length: maxFloors }, (_, i) => i + 1);

  return (
    <S.BuildingContainer>
      <S.BuildingTitle>
        {t("elevator.status")} - {elevators.length}
      </S.BuildingTitle>

      <S.BuildingContent>
        <S.ElevatorShaftsContainer>
          {/* Floor Number Labels Column */}
          <S.FloorLabelsColumn>
            <S.FloorLabelsTitle>Floor</S.FloorLabelsTitle>
            {floors.map((floorNumber) => (
              <S.FloorLabel key={floorNumber}>{floorNumber}</S.FloorLabel>
            ))}
          </S.FloorLabelsColumn>

          {elevators.map((elevator) => (
            <S.ElevatorShaft key={elevator.id}>
              <S.ElevatorLabel>
                {t("elevator.status")} #{elevator.id}
              </S.ElevatorLabel>
              {floors.map((floorNumber) => (
                <S.Floor
                  key={floorNumber}
                  isElevatorHere={elevator.currentFloor === floorNumber}
                  direction={elevator.direction}
                  isActive={elevator.queue.includes(floorNumber)}
                >
                  {elevator.currentFloor === floorNumber && (
                    <S.ElevatorIcon>🚀</S.ElevatorIcon>
                  )}
                </S.Floor>
              ))}
            </S.ElevatorShaft>
          ))}
        </S.ElevatorShaftsContainer>

        <S.FloorsContainer>
          <S.FloorsTitle>{t("floor.select")}</S.FloorsTitle>
          <S.FloorsGrid>
            {floors.map((floorNumber) => (
              <S.FloorButton
                key={floorNumber}
                onClick={() => handleFloorClick(floorNumber)}
                isSelected={false}
              >
                {floorNumber}
              </S.FloorButton>
            ))}
          </S.FloorsGrid>
        </S.FloorsContainer>
      </S.BuildingContent>

      <S.ElevatorStatus>
        {elevators.map((elevator) => (
          <S.ElevatorInfo key={elevator.id}>
            <S.InfoTitle>
              {t("elevator.status")} #{elevator.id}
            </S.InfoTitle>
            <S.InfoText>
              {t("elevator.currentFloor")}: {elevator.currentFloor}
            </S.InfoText>
            <S.InfoText>
              {t("elevator.direction")}:{" "}
              {elevator.direction === "up"
                ? t("elevator.up")
                : elevator.direction === "down"
                ? t("elevator.down")
                : t("elevator.idle")}
            </S.InfoText>
            {elevator.queue.length > 0 && (
              <S.InfoText>Queue: {elevator.queue.join(", ")}</S.InfoText>
            )}
          </S.ElevatorInfo>
        ))}
      </S.ElevatorStatus>
    </S.BuildingContainer>
  );
};
