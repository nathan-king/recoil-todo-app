import "./App.scss";
import { Todos, Buttons } from "./components";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/Theme";
import { useState } from "react";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="container">
            <Todos />
            <Buttons />
          </div>
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
