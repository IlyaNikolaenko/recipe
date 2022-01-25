import './App.css';
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";
import {Favorite} from "./pages/favorite";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="recipe/" exact element={<Main />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
