import { useState } from "react";
import styles from "./number.module.css";

export default function Number() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  const handleInputChange = (e) => {
    const inputNumber = e.target.value;
    setNumber(inputNumber);

    // Generate the table based on the input number
    const newTable = [];
    if (inputNumber !== "") {
      for (let i = 1; i <= parseInt(inputNumber); i++) {
        newTable.push(i);
      }
    }
    setTable(newTable);
  };

  return (
    <div className={styles.Number}>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={handleInputChange}
      />
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {table.map((num) => (
              <tr key={num}>
                <td>{num}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
