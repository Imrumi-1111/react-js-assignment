import { Fragment, useState } from "react";
import styles from "./calculator.module.css";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { PiDivide, PiEquals } from "react-icons/pi";
import { FiDelete } from "react-icons/fi";

export default function Calculator() {
  const [num, setNum] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  function handleNumChange(e) {
    setNum(e.target.value);
  }

  function handleNum2Change(e) {
    setNum2(e.target.value);
  }

  const handleOperation = (op) => {
    setOperation(op);
  };

  const handleResult = () => {
    let res = 0;
    if (operation === "+") {
      res = parseFloat(num) + parseFloat(num2);
    } else if (operation === "-") {
      res = parseFloat(num) - parseFloat(num2);
    } else if (operation === "*") {
      res = parseFloat(num) * parseFloat(num2);
    } else if (operation === "/") {
      res = parseFloat(num) / parseFloat(num2);
    }
    setResult(res);
  };

  function handleDelete() {
    setNum("");
    setNum2("");
    setResult("");
  }

  return (
    <Fragment>
      <div className={styles.Calculator}>
        <h1>Calculator</h1>
        <div className={styles.Calculator_input}>
          <input type="number" onChange={handleNumChange} />
          <input type="number" onChange={handleNum2Change} />
        </div>
        <div className={styles.Calculator_btn}>
          <button onClick={() => handleOperation("+")}>
            <BsPlusLg />
          </button>
          <button onClick={() => handleOperation("-")}>
            <BiMinus />
          </button>
          <button onClick={() => handleOperation("*")}>
            <RxCross2 />
          </button>
          <button>
            <PiDivide onClick={() => handleOperation("/")} />
          </button>
          <button onClick={handleResult}>
            <PiEquals />
          </button>
          <button onClick={handleDelete}>
            <FiDelete />
          </button>
        </div>
        <div className={styles.Calculator_result}>
          <h1>Result : {result}</h1>
        </div>
      </div>
    </Fragment>
  );
}
