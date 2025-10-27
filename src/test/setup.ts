import "@testing-library/jest-dom";

// Mock the translation imports
jest.mock("../i18n/locales/en.json", () => ({
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
  },
  messages: {
    welcome: "Welcome to the Elevator Control System",
    noElevator: "No elevator assigned",
    emergencyStop: "Emergency stop activated",
  },
}));

jest.mock("../i18n/locales/es.json", () => ({
  app: { title: "Test", subtitle: "Test" },
  elevator: {
    status: "Test",
    currentFloor: "Test",
    direction: "Test",
    moving: "Test",
    idle: "Test",
    up: "Test",
    down: "Test",
  },
  floor: { call: "Test", floor: "Test", arrival: "Test", select: "Test" },
  controls: { call: "Test", select: "Test", emergency: "Test", resume: "Test" },
  messages: { welcome: "Test", noElevator: "Test", emergencyStop: "Test" },
}));

jest.mock("../i18n/locales/fr.json", () => ({
  app: { title: "Test", subtitle: "Test" },
  elevator: {
    status: "Test",
    currentFloor: "Test",
    direction: "Test",
    moving: "Test",
    idle: "Test",
    up: "Test",
    down: "Test",
  },
  floor: { call: "Test", floor: "Test", arrival: "Test", select: "Test" },
  controls: { call: "Test", select: "Test", emergency: "Test", resume: "Test" },
  messages: { welcome: "Test", noElevator: "Test", emergencyStop: "Test" },
}));

jest.mock("../i18n/locales/de.json", () => ({
  app: { title: "Test", subtitle: "Test" },
  elevator: {
    status: "Test",
    currentFloor: "Test",
    direction: "Test",
    moving: "Test",
    idle: "Test",
    up: "Test",
    down: "Test",
  },
  floor: { call: "Test", floor: "Test", arrival: "Test", select: "Test" },
  controls: { call: "Test", select: "Test", emergency: "Test", resume: "Test" },
  messages: { welcome: "Test", noElevator: "Test", emergencyStop: "Test" },
}));
