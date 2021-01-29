import React, { useContext } from "react";

import GlobalStyle from './styles/global';
import { ThemeProvider } from "styled-components";
import { Context } from "./hooks/context";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  const { theme } = useContext(Context);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
