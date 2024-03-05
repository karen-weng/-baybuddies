import ListGroup from "./components/ListGroup";
import React from "react";
import styles from './MyComponent.module.css'; // Import CSS module


function App() {

  let items = [
    "Hope youre having a great day, are you enjoying 19?",
    "legal enough to get your own peach schnapps",
    "maybe we can make a peach lantern for you sometime",
    "anyways, CONGRATS on making it to 19",
    "you know how your goal at somepoint was to make it to 18",
    "well now you're 1 year past that",
    "its been a wild year tho",
    "like we had the whole transition from highschool to uni",
    "classmates to roommates (room neighbours as well, sorry for kicking the wall when i study)",
    "and the whole mess of Japan",
    "I feel like the fact that we've had imperfect moments have made us stronger",
    "",
    "random funny things notable to 18:",
    "you hinge adventures, SPEED, and boaz (no clue how his name is spelt)",
    "late night convos (unfit to be parents, your perfect family cousins & the chaotic family)",
    "skating",
    "your at one point favourite blue sweater",
    "THE GUESS WHO, that was soo funny",
    "cake making (we need to do that again)",
    "",
    "cya next time same time",
    "maybe ill know how to make a better website",
    "you'll be in your major",
    "both second years",
    "HAPPY BIRHTDAY :D",
    "your favourite roommate,",
    "Karen",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <ListGroup
        items={items}
        heading="  HAPPY BIRTHDAY KATRINA!!"
        onSelectItem={handleSelectItem}
      />

    </div>

  );


}

export default App;
