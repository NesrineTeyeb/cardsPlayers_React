import "./App.css";
import PlayersList from "./components/PlayersList";
// import { Form } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px" }}>Player Cards</h1>
      {/* <Form.Control size="lg" type="text" placeholder="Large text" style={{width: "50%"}} className="center"/> */}
      <PlayersList />
    </div>
  );
}

export default App;
