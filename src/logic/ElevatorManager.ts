import { ElevatorData } from "@/types";

export class ElevatorManager {
  private elevators: Map<number, ElevatorData> = new Map();

  constructor(
    elevatorCount: number = 2,
    initialFloor: number = 1,
    private maxFloor: number = 10
  ) {
    this.initializeElevators(elevatorCount, initialFloor);
  }

  private initializeElevators(count: number, startFloor: number): void {
    for (let i = 1; i <= count; i++) {
      this.elevators.set(i, {
        id: i,
        currentFloor: startFloor,
        targetFloor: null,
        direction: "idle",
        state: "idle",
        queue: [],
      });
    }
  }

  callElevator(fromFloor: number, toFloor: number): number {
    const bestElevator = this.findBestElevator(fromFloor);

    if (bestElevator) {
      this.assignCallToElevator(bestElevator, fromFloor, toFloor);
      return bestElevator;
    }

    return -1;
  }

  callElevatorToFloor(floor: number): number {
    const bestElevator = this.findBestElevator(floor);

    if (bestElevator) {
      this.goToFloor(bestElevator, floor);
      return bestElevator;
    }

    return -1;
  }

  private goToFloor(elevatorId: number, floor: number): void {
    const elevator = this.elevators.get(elevatorId);
    if (!elevator) return;

    if (!elevator.queue.includes(floor)) {
      elevator.queue.push(floor);
    }

    if (elevator.direction === "up" || elevator.direction === "idle") {
      elevator.queue.sort((a, b) => a - b);
    } else if (elevator.direction === "down") {
      elevator.queue.sort((a, b) => b - a);
    }

    if (elevator.state === "idle") {
      elevator.targetFloor = elevator.queue[0] ?? null;

      if (elevator.targetFloor === null) {
        elevator.direction = "idle";
      } else if (elevator.targetFloor > elevator.currentFloor) {
        elevator.direction = "up";
      } else {
        elevator.direction = "down";
      }

      elevator.state = "moving";
    }
  }

  private findBestElevator(callFloor: number): number | null {
    const idleElevators = Array.from(this.elevators.entries()).filter(
      ([, elevator]) => elevator.state === "idle"
    );

    if (idleElevators.length > 0) {
      let bestElevator: number | null = null;
      let minDistance = Infinity;

      for (const [id, elevator] of idleElevators) {
        const distance = Math.abs(elevator.currentFloor - callFloor);
        if (distance < minDistance) {
          minDistance = distance;
          bestElevator = id;
        }
      }

      return bestElevator;
    }

    let bestElevator: number | null = null;
    let minDistance = Infinity;

    for (const [id, elevator] of this.elevators) {
      if (!this.canServeCall(elevator, callFloor)) {
        continue;
      }

      const distance = this.calculateDistance(elevator, callFloor);

      if (distance < minDistance) {
        minDistance = distance;
        bestElevator = id;
      }
    }

    return bestElevator;
  }

  private canServeCall(elevator: ElevatorData, callFloor: number): boolean {
    if (elevator.state === "idle") {
      return true;
    }

    if (elevator.direction === "up") {
      const maxInQueue = Math.max(
        ...elevator.queue,
        elevator.targetFloor ?? elevator.currentFloor,
        elevator.currentFloor
      );
      return callFloor >= elevator.currentFloor && callFloor <= maxInQueue;
    } else if (elevator.direction === "down") {
      const minInQueue = Math.min(
        ...elevator.queue,
        elevator.targetFloor ?? elevator.currentFloor,
        elevator.currentFloor
      );
      return callFloor <= elevator.currentFloor && callFloor >= minInQueue;
    }

    return true;
  }

  private calculateDistance(elevator: ElevatorData, callFloor: number): number {
    if (elevator.state === "idle") {
      return Math.abs(elevator.currentFloor - callFloor);
    }

    if (elevator.direction === "up") {
      if (callFloor < elevator.currentFloor) {
        return Infinity;
      }
      return callFloor - elevator.currentFloor;
    } else if (elevator.direction === "down") {
      if (callFloor > elevator.currentFloor) {
        return Infinity;
      }
      return elevator.currentFloor - callFloor;
    }

    return Math.abs(elevator.currentFloor - callFloor);
  }

  private assignCallToElevator(
    elevatorId: number,
    fromFloor: number,
    toFloor: number
  ): void {
    const elevator = this.elevators.get(elevatorId);
    if (!elevator) return;

    if (!elevator.queue.includes(fromFloor)) {
      elevator.queue.push(fromFloor);
    }
    if (!elevator.queue.includes(toFloor)) {
      elevator.queue.push(toFloor);
    }

    if (elevator.direction === "up" || elevator.direction === "idle") {
      elevator.queue.sort((a, b) => a - b);
    } else if (elevator.direction === "down") {
      elevator.queue.sort((a, b) => b - a);
    }

    if (elevator.state === "idle") {
      elevator.targetFloor = elevator.queue[0] ?? null;

      if (elevator.targetFloor === null) {
        elevator.direction = "idle";
      } else if (elevator.targetFloor > elevator.currentFloor) {
        elevator.direction = "up";
      } else {
        elevator.direction = "down";
      }

      elevator.state = "moving";
    }
  }

  update(): void {
    for (const elevator of this.elevators.values()) {
      if (elevator.state === "idle") continue;

      const target = elevator.targetFloor ?? elevator.currentFloor;

      if (elevator.currentFloor < target) {
        elevator.currentFloor += 1;
      } else if (elevator.currentFloor > target) {
        elevator.currentFloor -= 1;
      }

      if (elevator.currentFloor === target) {
        elevator.queue = elevator.queue.filter(
          (floor) => floor !== elevator.currentFloor
        );

        if (elevator.queue.length > 0) {
          elevator.targetFloor = elevator.queue[0] ?? null;

          if (elevator.targetFloor === null) {
            elevator.direction = "idle";
          } else if (elevator.targetFloor > elevator.currentFloor) {
            elevator.direction = "up";
          } else {
            elevator.direction = "down";
          }
        } else {
          elevator.targetFloor = null;
          elevator.direction = "idle";
          elevator.state = "idle";
        }
      }
    }
  }

  getElevator(id: number): ElevatorData | undefined {
    return this.elevators.get(id);
  }

  getAllElevators(): ElevatorData[] {
    return Array.from(this.elevators.values());
  }

  addElevator(): void {
    const newId = this.elevators.size + 1;
    this.elevators.set(newId, {
      id: newId,
      currentFloor: 1,
      targetFloor: null,
      direction: "idle",
      state: "idle",
      queue: [],
    });
  }

  removeElevator(id: number): void {
    this.elevators.delete(id);
  }

  setMaxFloor(floors: number): void {
    this.maxFloor = floors;
  }

  getMaxFloor(): number {
    return this.maxFloor;
  }
}
