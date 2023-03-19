import React, { useEffect, useState } from "react";
import styles from "../LeftSection/LeftSection.module.css";
import Popup from "../Popup/Popup";
import RightSection from "../RightSection/RightSection";

function LeftSection() {
  const [notes, setNotes] = useState([]);

  const [show, setShow] = useState(false);
  const [notesHead, setNotesHead] = useState();

  const onChangeHandler = (e) => {
    console.log(e);
    setNotesHead(e.target.id);
    console.log(notesHead);
  };

  const onButtonClick = () => {
    setShow(true);
    console.log(show);
  };
  useEffect(() => {
    const data = localStorage.getItem("notes-title");
    if (data) {
      setNotes(JSON.parse(data) || []);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes-title", JSON.stringify(notes));
    }
  }, [notes]);

  return (
    <>
      <div className={styles.container}>
        <p>Pocket Notes</p>
        <Popup
          show={show}
          setShow={setShow}
          notes={notes}
          setNotes={setNotes}
        />
        <div className={styles.groupHeadingOuter}>
          <div className={styles.groupHeading}>
            {notes.map((ele) => (
              <div
                key={ele.colour}
                id={ele.colour}
                className={styles.groupTitle}
                style={{ backgroundColor: `${ele.colour}` }}
              >
                {ele.groupName[0]}
              </div>
            ))}
          </div>
          <div onClick={onChangeHandler} className={styles.groupHeading}>
            {notes.map((ele) => (
              <div
                key={ele.groupName}
                id={ele.groupName}
                onClick={() => {
                  // onChangeHandler();
                  onButtonClick();
                }}
                className={styles.groupName}
              >
                {ele.groupName}
              </div>
            ))}
          </div>
        </div>
      </div>
      {show && (
        <RightSection notesHead={notesHead} setNotesHead={setNotesHead} />
      )}
    </>
  );
}

export default LeftSection;
