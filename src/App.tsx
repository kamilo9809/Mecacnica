import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter basename="">
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
