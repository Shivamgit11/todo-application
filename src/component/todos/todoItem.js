import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { TodoActions } from "../../store/todo-slice";

const TodoItem = (props) => {
  console.log(props);
  const { id, todo } = props.item;
  const dispatch = useDispatch();

  const deleteExpenseHandler = () => {
    console.log("inside delete", id);
   

    console.log("Deleted Done");

    dispatch(TodoActions.removeTodos(id));
  };

  const editExpenseHandler = () => {
   
    document.getElementById("todo").value = todo;
    
    dispatch(TodoActions.removeTodos(id));
    

    // <ShowExpense id={id} />;
  };

  return (
    <Fragment>
      {/* <h1>Hello</h1> */}
      <li key={Math.random()}>
        <span>{todo}</span>
        <div >
          <button onClick={editExpenseHandler}>Edit</button>
          <button onClick={deleteExpenseHandler}>Delete</button>
        </div>
      </li>
    </Fragment>
  );
};

export default TodoItem;
