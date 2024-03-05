import ListGroup from "./components/ListGroup";
import React from "react";

function App() {
  let items = [
    "Message Written here",
    "continued",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="HAPPY BIRTHDAY KATRINA!!"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
