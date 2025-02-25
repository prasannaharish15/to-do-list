import { useState } from "react";

function Todolist() {
    const [itemArr, setItem] = useState([]);
    const [newtask, setTask] = useState("");

    function handle(event) {
        setTask(event.target.value);
    }

    function handleAdd() {
        if (newtask.trim() !== "") {
            setItem((prev) => [...prev, newtask]);
            setTask(""); 
        }
    }

    function handleDelete(index) {
        setItem((prev) => prev.filter((_, i) => i !== index));
    }

    function handleUp(index) {
        if (index > 0) {
            const updatedList = [...itemArr];
            [updatedList[index], updatedList[index - 1]] = [updatedList[index - 1], updatedList[index]];
            setItem(updatedList);
        }
    }

    function handleDown(index) {
        if (index < itemArr.length - 1) {
            const updatedList = [...itemArr];
            [updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]];
            setItem(updatedList);
        }
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input type="text" value={newtask} onChange={handle} placeholder="Enter the task..." />
                <button onClick={handleAdd}>Add</button>
                <ol>
                    {itemArr.map((item, index) => (
                        <li key={index}>
                            <span>{item}</span>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            <button onClick={() => handleUp(index)}>⬆️</button>
                            <button onClick={() => handleDown(index)}>⬇️</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default Todolist;
