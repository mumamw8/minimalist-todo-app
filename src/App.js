import React, { useState } from "react";
import Item from "./components/Item.js";
import AddItem from "./components/AddItem.js";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
    <header className="flex max-w-md mx-auto my-12">
      <h1 className="text-4xl items-center justify-center mx-auto">Minimalist Todo</h1>
    </header>
    <div className="grid grid-cols-[1fr,min(480px),1fr] mx-auto container">
      <div className="col-start-2">
      <div className="container mx-auto px-2">
        {items.map((item, key) => (
          <Item key={key} listItem={item} itemDelete={index => {
            // console.log(index.parentElement, key);
            const newList = items;
            const updateList = newList.splice(key, 1);
            setItems([...newList]);
            console.log('new List:', items);
          }} />
        ))}
      </div>
      <AddItem itemAdd={text => {setItems(items.concat(text))}} />
      </div>
    </div>
    </>
  );
}

export default App;
