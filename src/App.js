import "./App.scss";
import { Todos, Buttons, SortButton, Numbers } from "./components";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./utils/Theme";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="container">
            <SortButton />
            <Numbers />
            <Todos />
            <Buttons />
          </div>
        </div>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
