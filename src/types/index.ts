export type ElevatorDirection = "up" | "down" | "idle";
export type ElevatorState = "moving" | "idle";

export interface ElevatorData {
  id: number;
  currentFloor: number;
  targetFloor: number | null;
  direction: ElevatorDirection;
  state: ElevatorState;
  queue: number[];
}
