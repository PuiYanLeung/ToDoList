import { useState } from "react";
import styled from 'styled-components';

const Button = styled.button `
  border: solid 4px red;
`

const Input = styled.input `
  border: teal 4px dotted;
  width: 600px

`
const App =() => {

  const [items, setItems] = useState([{name: "Wake Up" }]);
  const [itemName, setItemName] = useState("");

  const addItem = event => {
    event.preventDefault();
    setItems([...items, {name: itemName}]);
    setItemName("");
  };

  const deleteItem = (del_name) =>{
    alert("You have deleted: "+ del_name);
    setItems(items.filter(item => item.name !== del_name));
  }

  const updateInput = (e) =>{
    setItemName(e.target.value)
  }

  return(
    <>
    <h2>To Do List</h2>
      <form onSubmit={addItem}>
        <label>
          <input name="item" type="text" value={itemName} onChange={updateInput} />
        </label>
        <Button type="submit">add task</Button>
      </form>
      <ul>
        {items.map(item => (
          <li onClick={()=>deleteItem(item.name)}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

 export default App;
