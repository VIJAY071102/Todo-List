import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState(["eat", "sleep"]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (e) => {
    setNewTask(e.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim() !== "") setTask([...task, newTask]);
    setNewTask("");
  };

  const handleRemove = (index) => {
    const t = task.filter((e, i) => i != index);
    setTask([...t]);
  };
  const handleUp = (index) => {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask([...updatedTask]);
    }
  };

  const handleDown = (index) => {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask([...updatedTask]);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div className="input">
        <input
          type="text"
          value={newTask}
          onChange={handleInput}
          placeholder="enter task to do"
          className="input-box"
        />
        <button onClick={handleAdd} className="add-btn">
          ADD
        </button>
      </div>
      <div className="todo-body">
        <ol>
          {task.map((ele, index) => {
            return (
              <li key={index} className="li">
                {" "}
                <span className="text">{ele}</span>
                <button className="del-btn" onClick={() => handleRemove(index)}>
                  delete
                </button>
                <button className="up-btn" onClick={() => handleUp(index)}>
                  move-up
                </button>
                <button className="down-btn" onClick={() => handleDown(index)}>
                  move-down
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
export default Todo;
