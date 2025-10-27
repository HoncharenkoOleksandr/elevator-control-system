import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { I18nProvider } from "../../i18n/Context";
import { Elevator } from "./index";

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

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <I18nProvider defaultLocale="en">{children}</I18nProvider>;
};

describe("Elevator Component", () => {
  it("renders elevator status and controls", async () => {
    render(
      <TestWrapper>
        <Elevator maxFloor={10} />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getByText("Elevator Status")).toBeInTheDocument();
    });
    expect(screen.getByText(/Current Floor/i)).toBeInTheDocument();
    expect(screen.getByText("Select Floor")).toBeInTheDocument();
  });

  it("displays initial floor as 1", async () => {
    render(
      <TestWrapper>
        <Elevator maxFloor={10} />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getAllByText("1").length).toBeGreaterThan(0);
    });
  });

  it("calls elevator to a specific floor", async () => {
    render(
      <TestWrapper>
        <Elevator maxFloor={10} />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getAllByText("1").length).toBeGreaterThan(0);
    });

    const floorButtons = screen.getAllByText("5");
    const button = floorButtons.find((el) => el.tagName === "BUTTON");
    expect(button).toBeInTheDocument();

    fireEvent.click(button!);

    await waitFor(() => {
      expect(button).toHaveStyle("background: rgb(255, 193, 7)");
    });
  });

  it("renders all floors up to maxFloor", async () => {
    render(
      <TestWrapper>
        <Elevator maxFloor={5} />
      </TestWrapper>
    );

    await waitFor(() => {
      expect(screen.getAllByText("1").length).toBeGreaterThan(0);
    });

    expect(screen.getAllByText("2").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3").length).toBeGreaterThan(0);
    expect(screen.getAllByText("4").length).toBeGreaterThan(0);
    expect(screen.getAllByText("5").length).toBeGreaterThan(0);
  });
});
