import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RootApp from "./layout/RootApp";

function App() {
  return (
    <BrowserRouter>
      <RootApp />
    </BrowserRouter>
  );
}

export default App;
