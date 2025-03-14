import "./App.css";
import BearCounter from "./components/bears/BearCounter";
import BearIncreaser from "./components/bears/BearIncreaser";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Hallo Du</h1>
      <Button description="fjdaskl" title="jfdks" />

      <BearCounter />
      <BearCounter />
      <BearCounter />
      <BearIncreaser />
    </>
  );
}

export default App;
