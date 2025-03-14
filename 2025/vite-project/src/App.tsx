import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Hallo Du</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button title="Save" description=" afjkadslf jdasklfasdj dkaslf" />
        <Button title="Save" description=" afjkadslf jdasklfasdj dkaslf" />
        <Button title="Save" description=" afjkadslf jdasklfasdj dkaslf" />
        <Button title="Save" description=" afjkadslf jdasklfasdj dkaslf" />
        <Button title="Save" description=" afjkadslf jdasklfasdj dkaslf" />
      </div>
    </>
  );
}

export default App;
