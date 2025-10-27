import styled from "styled-components";

export const ElevatorContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 8px;
  }
`;

export const StatusSection = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const Label = styled.span`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FloorDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const FloorNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DirectionIndicator = styled.div<{
  direction: "up" | "down" | "idle";
}>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  color: ${(props) =>
    props.direction === "up"
      ? "#28a745"
      : props.direction === "down"
      ? "#dc3545"
      : "#666"};
`;

export const DirectionText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const EmergencyStatus = styled.div`
  padding: 0.75rem 1rem;
  background: #fff3cd;
  border: 2px solid #ffc107;
  border-radius: 8px;
  color: #856404;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const EmergencyButton = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c82333;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const ResumeButton = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #218838;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const ControlsSection = styled.div`
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  border: 2px solid #e9ecef;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const FloorButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

interface FloorButtonProps {
  isActive: boolean;
  isCurrent: boolean;
}

export const FloorButton = styled.button<FloorButtonProps>`
  padding: 1rem;
  background: ${(props) =>
    props.isCurrent ? "#007bff" : props.isActive ? "#ffc107" : "#f8f9fa"};
  color: ${(props) =>
    props.isCurrent ? "white" : props.isActive ? "#333" : "#666"};
  border: 2px solid
    ${(props) =>
      props.isCurrent ? "#007bff" : props.isActive ? "#ffc107" : "#dee2e6"};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.875rem;
  }
`;

export const ArrivalNotification = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #28a745;
  color: white;
  padding: 2rem 3rem;
  border-radius: 16px;
  font-size: 1.5rem;
  font-weight: 600;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation: pulse 0.5s ease-in-out;

  @keyframes pulse {
    0%,
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.05);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    font-size: 1.25rem;
  }
`;
