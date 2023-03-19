import React, { useEffect, useState } from "react";
import styles from "../RightSection/RightSection.module.css";
function RightSection({ notesHead, setNotesHead }) {
  const [contents, setContents] = useState([]);
  const [date, setDate] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [time, setTime] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septempber",
    "October",
    "November",
    "December",
  ];
  let content = "";
  const onChangeHandler = (e) => {
    content = e.target.value;
  };

  const onClickHandler = () => {
    setContents([...contents, content]);
    const date = new Date();
    setDate(date.getDate());
    setYear(date.getFullYear());
    setMonth(months[date.getMonth()]);

    setTime(new Date().toLocaleTimeString());
  };

  return (
    <>
      <div className={styles.container}>
        <p>{notesHead} "yo" </p>

        {contents?.map((ele) => (
          <div className={styles.contentBox}>
            <div className={styles.dateTime}>
              <div>{time}</div>
              <div>
                {date} {month} {year}
              </div>
            </div>
            <div className={styles.content} key={ele}>
              {" "}
              {ele}{" "}
            </div>
          </div>
        ))}

        {/* <div className={styles.inputBox}> */}
        <input
          className={styles.inputBox}
          onChange={onChangeHandler}
          name="text"
          type="text"
          placeholder="Enter your text here........"
        />
        <input
          className={styles.submitButton}
          onClick={onClickHandler}
          type="submit"
          value={"➡️"}
        />
        {/* </div> */}
      </div>
    </>
  );
}

export default RightSection;
