import { useContext, useRef, useState, useEffect } from "react";
import style from "./style.module.css";
import { ContextProvider } from "./../../HOC";

function ItemTodo({ title, background, id }) {
  const [isEdit, setIsEdit] = useState(false);
  const { removeItem , updateItem} = useContext(ContextProvider);
  const [valueInput, setValueInput] = useState(title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEdit) inputRef.current?.focus();
  }, [isEdit]);

  useEffect(() => {
    setValueInput(title)
  }, [title]);

  const handleRemove = () => {
    removeItem(id);
  };

  const handleSetEdit = () => {
    setIsEdit(true);
  };

  const handleBlur = () => {
    // setValueInput(title)
    // setIsEdit(false)
  };

  const handleChangeTitle = (event) => {
    setValueInput(event.target.value);
  };

  const handleUpdate = () => {
    setIsEdit(false)
    updateItem({
        title : valueInput, background, id
    })
  };

  return (
    <div className={style.container} style={{ background: background }}>
      <div className={style.title}>
        {isEdit ? (
          <input
            onChange={handleChangeTitle}
            ref={inputRef}
            value={valueInput}
            onBlur={handleBlur}
          />
        ) : (
          <span> {valueInput} </span>
        )}
      </div>

      {isEdit ? (
        <button className={style.buttonSubmitEdit} onClick={handleUpdate}>
          
          update
        </button>
      ) : (
        <div className={style.config} onClick={handleSetEdit}>
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1168 0.877856C14.1047 -0.110632 15.7078 -0.110632 16.6957 0.877856L17.1211 1.30395C18.109 2.29254 18.109 3.89532 17.1211 4.88321L10.1883 11.8195C9.88242 12.1219 9.50625 12.3434 9.09141 12.4629L5.57578 13.4684C5.28047 13.5527 4.96406 13.4684 4.74609 13.2223C4.53164 13.0359 4.44727 12.7195 4.53164 12.4242L5.53711 8.9086C5.65664 8.49375 5.87813 8.11758 6.18047 7.81172L13.1168 0.877856ZM15.4723 2.07106C15.1734 1.74165 14.6391 1.74165 14.3086 2.07106L13.2855 3.09375L14.9062 4.71446L15.9293 3.65977C16.2598 3.36094 16.2598 2.82657 15.9293 2.49715L15.4723 2.07106V2.07106ZM7.16133 9.37266L6.5707 11.4293L8.62734 10.8387C8.76797 10.8 8.89102 10.7262 8.99297 10.6242L13.7145 5.90625L12.0938 4.28555L7.37578 9.00704C7.27383 9.10899 7.2 9.23204 7.16133 9.37266V9.37266ZM7.03125 2.25C7.49883 2.25 7.875 2.62793 7.875 3.09375C7.875 3.56133 7.49883 3.9375 7.03125 3.9375H3.09375C2.31715 3.9375 1.6875 4.5668 1.6875 5.34375V14.9063C1.6875 15.6832 2.31715 16.3125 3.09375 16.3125H12.6562C13.4332 16.3125 14.0625 15.6832 14.0625 14.9063V10.9688C14.0625 10.5012 14.4387 10.125 14.9062 10.125C15.3738 10.125 15.75 10.5012 15.75 10.9688V14.9063C15.75 16.6148 14.3648 18 12.6562 18H3.09375C1.38516 18 0 16.6148 0 14.9063V5.34375C0 3.63516 1.38516 2.25 3.09375 2.25H7.03125Z"
                fill="white"
              />
            </svg>
          </button>

          <button onClick={handleRemove}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="21.1945"
                height="3.97398"
                rx="1.98699"
                transform="matrix(-0.713079 0.701084 -0.713079 -0.701084 17.9471 2.78609)"
                fill="white"
              />
              <rect
                width="21.1945"
                height="3.97398"
                rx="1.98699"
                transform="matrix(-0.713079 -0.701084 0.713079 -0.701084 15.1663 18)"
                fill="white"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemTodo;
