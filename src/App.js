import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import { useState } from "react";

function App() {
  const [visitors, setVisitors] = useState(0);
  const [island, setIsland] = useState({
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  });

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList
          changeIsland={setIsland}
          visitors={visitors}
          setVisitors={setVisitors}
        />
        <IslandForm
          island={island}
          visitors={visitors}
          setVisitors={setVisitors}
        />
      </div>
    </div>
  );
}

export default App;