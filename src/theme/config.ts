import { Theme } from "theme-ui";

export const theme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#333",
    background: "#f5f5f5",
    primary: "#007bff",
    secondary: "#6c757d",
    accent: "#ffc107",
    muted: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    modes: {
      dark: {
        text: "#f5f5f5",
        background: "#1a1a1a",
        primary: "#0d6efd",
        secondary: "#6c757d",
      },
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: "0 2px 4px rgba(0,0,0,0.1)",
    medium: "0 4px 6px rgba(0,0,0,0.1)",
    large: "0 10px 20px rgba(0,0,0,0.15)",
  },
  radii: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "16px",
    round: "50%",
  },
  breakpoints: ["576px", "768px", "992px", "1200px"],
};
