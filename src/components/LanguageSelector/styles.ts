import styled from "styled-components";

export const LanguageSelectorContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.75rem;
    gap: 0.375rem;
    margin-bottom: 1.5rem;
  }
`;

interface LanguageButtonProps {
  isActive: boolean;
}

export const LanguageButton = styled.button<LanguageButtonProps>`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.isActive ? "#007bff" : "#ffffff")};
  color: ${(props) => (props.isActive ? "white" : "#666")};
  border: 2px solid ${(props) => (props.isActive ? "#007bff" : "#dee2e6")};
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.isActive ? "#0056b3" : "#e9ecef")};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  }
`;
