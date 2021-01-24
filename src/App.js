import "./App.scss";
import { Todos, Buttons, SortButton, Numbers } from "./components";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="container">
          <SortButton />
          <Numbers />
          <Todos />
          <Buttons />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
