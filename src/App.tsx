import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  let items = [
    "DunnyTM",
    "Hannalee",
    "Jason",
    "Angela",
    "Anne",
    "Angeli",
    "Ryu",
    "Katie",
    "Margaret",
    "Joanne",
    "Sunny",
    "Eric",
    "Panos",
    "Nathaniel",
    "Evan",
    "Leo",
    "Derek",
    "Karen",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="The Watering Hole"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
