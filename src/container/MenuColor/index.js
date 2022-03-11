import { Radio, Dropdown } from "antd";
import { useState } from "react";
import style from "./style.module.css";

const MenuOverlay = ({onChange}) => {
  const [value, setValue] = useState(1);

  const onChangeValue = (e) => {
    setValue(e.target.value);
    onChange(e.target.value)
  };

  return (
    <div className={style.menu}>
      <Radio.Group onChange={onChangeValue} value={value}>
        <Radio value="green" style={{ background : "#FF5C00" }} ></Radio>
        <Radio value="#FF5C00"></Radio>
        <Radio value="#FF1717"></Radio>
        <Radio value="#E1CB02"></Radio>
        <Radio value="#0029FF"></Radio>
        <Radio value="#00E14D"></Radio>
        <Radio value="#1790FF"></Radio>
        <Radio value="#7000FF"></Radio>
        <Radio value="black"></Radio>
        <Radio value="grey"></Radio>

        <Radio value="#BE0072"></Radio>
        <Radio value="#BE0022"></Radio>
        <Radio value="#690003"></Radio>
        <Radio value="#634100"></Radio>
        <Radio value="#0E6300"></Radio>
        <Radio value="#0E6301"></Radio>
        <Radio value="#0E6303"></Radio>
        <Radio value="#0E6344"></Radio>
        <Radio value="#0E6366"></Radio>
        <Radio value="#0E6377"></Radio>
      </Radio.Group>
    </div>
  );
};

function MenuColor({onChange}) {
  return (
    <Dropdown arrow overlay={MenuOverlay({onChange})} trigger={["click"]}>
      <div className="ant-dropdown-link">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0631 11.5195C15.974 11.5825 14.1261 13.5691 14.1261 14.9634C14.1261 16.4335 15.0452 17.3722 16.0631 17.4234C16.9405 17.4667 18 16.5467 18 14.9634C18 13.4875 16.1522 11.5825 16.0631 11.5195ZM5.9774 17.4234C6.34348 17.7953 6.82966 18 7.34682 18C7.86398 18 8.35016 17.7953 8.71624 17.4234L15.4955 10.5355L14.8108 9.83983L7.34682 2.25627L5.12612 0L3.7567 1.39135L5.9774 3.64762L0.567524 9.14415C0.201442 9.5161 0 10.0101 0 10.5355C0 11.061 0.201442 11.5549 0.567524 11.9269L5.9774 17.4234ZM7.34682 5.03898L12.7567 10.5355H1.93694L7.34682 5.03898Z"
            fill="#333333"
          />
        </svg>
      </div>
    </Dropdown>
  );
}

export default MenuColor;
