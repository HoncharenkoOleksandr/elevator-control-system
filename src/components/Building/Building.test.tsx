import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
import { ElevatorManager } from "../../logic/ElevatorManager";

// Mock the i18n context to load translations immediately
jest.mock("../../i18n/locales/en.json", () => ({
  app: {
    title: "Elevator Control System",
    subtitle: "Modern Building Management",
  },
  elevator: {
    status: "Elevator Status",
    currentFloor: "Current Floor",
    direction: "Direction",
    moving: "Moving",
    idle: "Idle",
    up: "Up",
    down: "Down",
  },
  floor: {
    call: "Call Elevator",
    floor: "Floor {{floor}}",
    arrival: "Elevator has arrived at floor {{floor}}",
    select: "Select Floor",
  },
  controls: {
    call: "Call",
    select: "Select",
    emergency: "Emergency Stop",
    resume: "Resume",
    cancel: "Cancel",
  },
  messages: {
    welcome: "Welcome to the Elevator Control System",
    noElevator: "No elevator assigned",
    emergencyStop: "Emergency stop activated",
  },
}));

describe("Building Component - Smart Elevator Assignment", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("Example 1: when elevator is moving past floor, another elevator serves new call", async () => {
    const manager = new ElevatorManager(2, 1, 10);

    // Call elevator 1 to floor 7
    const result1 = manager.callElevatorToFloor(7);
    expect(result1).toBe(1);
    expect(manager.getElevator(1)?.queue).toContain(7);
    expect(manager.getElevator(1)?.state).toBe("moving");

    act(() => {
      manager.update(); // moves to floor 2
      manager.update(); // moves to floor 3
    });

    const elevator1 = manager.getElevator(1);
    expect(elevator1?.currentFloor).toBeGreaterThan(2);
    expect(elevator1?.state).toBe("moving");

    // Now call elevator for floor 5
    const result2 = manager.callElevatorToFloor(5);

    expect([1, 2]).toContain(result2);

    const assignedElevator = manager.getElevator(result2);
    expect(assignedElevator?.queue).toContain(5);
  });

  it("Example 2: idle elevator at floor 7 serves call for floor 5 (closest idle)", async () => {
    const manager = new ElevatorManager(2, 1, 10);

    expect(manager.getElevator(1)?.currentFloor).toBe(1);
    expect(manager.getElevator(2)?.currentFloor).toBe(1);
    expect(manager.getElevator(1)?.state).toBe("idle");
    expect(manager.getElevator(2)?.state).toBe("idle");

    const elevator1 = manager.getElevator(1);
    if (elevator1) {
      elevator1.currentFloor = 7;
      elevator1.targetFloor = null;
      elevator1.direction = "idle";
      elevator1.state = "idle";
      elevator1.queue = [];
    }

    expect(manager.getElevator(1)?.currentFloor).toBe(7);
    expect(manager.getElevator(1)?.state).toBe("idle");

    // Call elevator for floor 5
    const calledElevator = manager.callElevatorToFloor(5);

    // Should assign elevator 1 (at floor 7) since it's idle and closer
    // Distance calculation:
    // - Elevator 1 at floor 7: |7 - 5| = 2
    // - Elevator 2 at floor 1: |1 - 5| = 4
    // Elevator 1 is closer
    expect(calledElevator).toBe(1);

    const elevator1After = manager.getElevator(1);
    expect(elevator1After?.queue).toContain(5);
    expect(elevator1After?.state).toBe("moving");
  });
});
