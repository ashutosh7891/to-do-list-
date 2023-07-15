import { useState , useEffect } from "react";
import React  from "react";


function App() {

    const [inputText , setInputText] = useState("");
    const [items , setItems] = useState([])


    const handleChange = (event) => {
        
        const newValue = event.target.value;
        setInputText(newValue)
        console.log(newValue);

    }

    const addItem = () => {
        setItems((preValue) => {
                return [...preValue , inputText]
        })
        setInputText("")
    }

    const handleKeyPress = (event) => {

        if (event.key === "Enter") {
            addItem();
        }

    }

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(items));
      }, [items]);
    
      // Retrieve items from local storage when the component mounts
      useEffect(() => {
        const storedItems = localStorage.getItem("todoItems");
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      }, []);


    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange = {handleChange}  onKeyDown={handleKeyPress}   type="text" value={inputText}/>
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem , index) =>{
                    return <li key={index}>{todoItem}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
  
  export default App;