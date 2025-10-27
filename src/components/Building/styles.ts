import styled from "styled-components";

export const BuildingContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BuildingTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const BuildingContent = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ElevatorShaftsContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const FloorLabelsColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  min-width: 80px;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 60px;
  }
`;

export const FloorLabelsTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const FloorLabel = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.25rem;
  }
`;

export const ElevatorShaft = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  min-width: 80px;
  align-items: center;

  @media (max-width: 768px) {
    min-width: 60px;
  }
`;

export const ElevatorLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.625rem;
  }
`;

interface FloorProps {
  isElevatorHere?: boolean;
  direction?: "up" | "down" | "idle";
  isActive?: boolean;
}

export const Floor = styled.div<FloorProps>`
  width: 80px;
  height: 80px;
  background: ${(props) =>
    props.isElevatorHere
      ? "#28a745"
      : props.isActive
      ? "#ffc107"
      : "rgba(255, 255, 255, 0.1)"};
  border: 3px solid
    ${(props) =>
      props.isElevatorHere
        ? "#28a745"
        : props.isActive
        ? "#ffc107"
        : "rgba(255, 255, 255, 0.3)"};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ElevatorIcon = styled.div`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FloorsContainer = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FloorsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

export const FloorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
`;

export const FloorButton = styled.button<{ isSelected?: boolean }>`
  padding: 1.5rem;
  background: ${(props) =>
    props.isSelected ? "#007bff" : "rgba(255, 255, 255, 0.1)"};
  color: white;
  border: 3px solid
    ${(props) => (props.isSelected ? "#007bff" : "rgba(255, 255, 255, 0.3)")};
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.isSelected ? "#0056b3" : "rgba(255, 255, 255, 0.2)"};
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.25rem;
  }
`;

export const DestinationSelector = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
`;

export const SelectedFloorText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const DestinationButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const DestinationButton = styled.button`
  padding: 1rem;
  background: #007bff;
  color: white;
  border: 2px solid #007bff;
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 1rem;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 1rem;
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
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ElevatorStatus = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ElevatorInfo = styled.div`
  flex: 1;
  min-width: 250px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const InfoTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const InfoText = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
