import { useContext, useState } from "react";
import { ContextProvider } from "./../HOC";
import ItemTodo from "./ItemTodo";
import style from "./style.module.css";

function TodoAppContainer() {
  const { value, addItem } = useContext(ContextProvider);
  const [title, setTitle] = useState("");

  const renderListTodo = () => {
    return value.map((item) => {
      return (
        <ItemTodo
          key={item.id}
          id={item.id}
          background={item.background}
          title={item.title}
        />
      );
    });
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    addItem({
      id: Date.now(),
      title,
      background: "green",
    });
  };
  return (
    <div className={style.container}>
      <div className={style.add}>
        <div className={style.input}>
          <input type="text" value={title} onChange={handleChange} />
        </div>
        <button onClick={addTodo}>add</button>
      </div>
      {renderListTodo()}

      {!value.length && (
        <div style={{ padding: "12px" }}> không có item nào </div>
      )}
    </div>
  );
}

export default TodoAppContainer;
