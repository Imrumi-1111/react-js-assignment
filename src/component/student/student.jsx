import { Fragment, useState } from "react";
import styles from "./student.module.css";

export default function StudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setStudents] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    const studentDetails = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      mobile: mobile,
    };
    setStudents([...students, studentDetails]);
    setFirstName("");
    setLastName("");
    setEmailId("");
    setMobile("");
  }

  return (
    <Fragment>
      <div className={styles.Fragment}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label>
              {" "}
              First Name{" "}
              <input
                type="text"
                placeholder="Type here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.input}>
            <label>
              {" "}
              Last Name{" "}
              <input
                type="text"
                placeholder="Type here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.input}>
            <label>
              {" "}
              E-mail Id{" "}
              <input
                type="text"
                placeholder="Type here"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.input}>
            <label>
              {" "}
              Mobile{" "}
              <input
                type="number"
                placeholder="Type here"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
        {students.length > 0 && (
          <table>
            <div className={styles.main}>
              <thead>
                <tr>
                  <div className={styles.table}>
                    <div className={styles.table_details}>
                      <th>First Name</th>
                    </div>
                    <div className={styles.table_details}>
                      <th>Last Name</th>
                    </div>
                    <div className={styles.table_details}>
                      <th>E-mail Id</th>
                    </div>
                    <div className={styles.table_details}>
                      <th>Mobile</th>
                    </div>
                  </div>
                </tr>
              </thead>
              <tbody>
                {students.map((element, index) => (
                  <tr key={index}>
                    <div className={styles.content}>
                      <div className={styles.content_details}>
                        <td>{element.firstName}</td>
                      </div>
                      <div className={styles.content_details}>
                        <td>{element.lastName}</td>
                      </div>
                      <div className={styles.content_details}>
                        <td>{element.emailId}</td>
                      </div>
                      <div className={styles.content_details}>
                        <td>{element.mobile}</td>
                      </div>
                    </div>
                  </tr>
                ))}
              </tbody>
            </div>
          </table>
        )}
      </div>
    </Fragment>
  );
}
