import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./Form";
import { Items } from "./Items";

const getLocalStorage = () => {
  let list = localStorage.getItem('list')

  if( list ){
    list = JSON.parse(localStorage.getItem('list'))
  }else{
    list = []
  }

  return list;
}

const setLocalStorage = (items) => {
  localStorage.setItem('list',JSON.stringify(items))
}

const defaultList = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => {

  const [items, setItems] = useState(defaultList);

  const addItem = ( itemName ) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    };
    const updateItems = [...items, newItem];
    setItems(updateItems);
    setLocalStorage(updateItems)
  }

  const removeItem = ( itemId ) => {
    const newItems = items.filter((item) => item.id !== itemId);

    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (<section className="section-center">
    <Form addItem={addItem}/>
    <Items items={items} removeItem={removeItem} />
  </section>);
};

export default App;
