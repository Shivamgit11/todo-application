import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { TodoActions } from "../../store/todo-slice";
import ShowTodo from "./showtodo";
const Todos = () => {
  const dispatch = useDispatch();
  const todoref = useRef();
  const showUserHandler = (event) => {
    event.preventDefault();
    const enteredTodo = todoref.current.value;
    console.log(enteredTodo);

    const obj = {
      todo: enteredTodo,
    };

    console.log(obj.todo);

    dispatch(
      TodoActions.addTodos({
        id: Math.random(),
        todo: obj.todo,
      })
    );
  };
  return (
    <Fragment>
      <form onSubmit={showUserHandler}>
        <label>Enter todos</label>
        <input type="text" id="todo" ref={todoref} />
        <button>Add Todo</button>
      </form>
      <ShowTodo />
    </Fragment>
  );
};

export default Todos;
