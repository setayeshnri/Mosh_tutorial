import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {};
  const [alertVisible, setAlertVisibility]= useState(false)
  return (
    <div>
      {alertVisible&& <Alert onClose={()=> setAlertVisibility(false)}>Hello World</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
