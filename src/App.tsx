import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Building } from "./components/Building";
import { AppLayout } from "./components/Layout/AppLayout";
import { I18nProvider } from "./i18n/Context";
import { theme } from "./theme/config";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nProvider defaultLocale="en">
        <AppLayout>
          <Building elevatorCount={3} maxFloors={10} />
        </AppLayout>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
