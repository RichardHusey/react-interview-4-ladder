import react, { useState } from "react";
import "./styles.css";

const LADDER_IMAGE =
  "https://raw.githubusercontent.com/jusshe/coding-challenge-pictures/main/ladder.png";

export default function App() {
  return (
    <div className="App">
      <h1>React-Interview-4-Ladder </h1>
      <Ladder img={LADDER_IMAGE} />
    </div>
  );
}

const Ladder = ({ img }) => {
  const ladderIds = [5, 4, 3, 2, 1];
  const [hovered, setHovered] = useState(0);

  const getSize = (id) => {
    return hovered >= id ? 150 : 80;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20
      }}
    >
      {ladderIds.map((id) => (
        <img
          src={img}
          onMouseEnter={() => setHovered(id)}
          onMouseOut={() => setHovered(0)}
          height={getSize(id)}
          width={getSize(id)}
        />
      ))}
    </div>
  );
};
