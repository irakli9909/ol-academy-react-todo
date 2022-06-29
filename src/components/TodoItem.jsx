import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { AiFillEdit } from 'react-icons/ai';
export default function Todoitem( props ) {
const { todo, removeTodo, completeTodo, isCheckboxed, edit } = props;
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      <input
        type={"checkbox"}
        onClick={(e) => isCheckboxed(todo.id, e.target.checked)}
      />
      {todo.text}
      <div className="iconsConteiner">
        <AiFillEdit
          className="check"
          style={{ marginRight: 5 }}
          onClick={() => edit(todo.text, todo.id)}
        ></AiFillEdit>

        <RiCloseCircleLine
          className="check"
          style={{ marginRight: 5 }}
          onClick={() => removeTodo(todo.id)}
        />
        <BiCheckCircle
          className="check"
          onClick={() => completeTodo(todo.id)}
        />
      </div>
    </div>
  );
}
