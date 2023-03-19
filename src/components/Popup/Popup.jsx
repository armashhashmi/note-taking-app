import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styles from "../Popup/Popup.module.css";
function Popup({
  args,

  show,
  notes,

  setShow,
  setNotes,
}) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    // console.log(args);
    setModal(!modal);
  };
  // Logic Implementation:-
  let gn = "";
  let cn = "";
  const onChangeHandler = (e) => {
    gn = e.target.value;
    // console.log(groupName);
  };
  const onChangeHandler2 = (e) => {
    if (e.target.id == "purple") {
      cn = "#b38bfa";
    } else if (e.target.id == "pink") {
      cn = "#ff79f2";
    } else if (e.target.id == "sky") {
      cn = "#43e6fc";
    } else if (e.target.id == "orange") {
      cn = "#f19576";
    } else if (e.target.id == "blue") {
      cn = "#0047ff";
    } else if (e.target.id == "lightBlue") {
      cn = "#6691ff";
    }
    // console.log(colour);
  };
  const array = [];
  let data = { groupName: "", colour: "" };
  const onButtonClick = () => {
    data = { groupName: gn, colour: cn };
    array.push(data);
    // array.push(data);
    setNotes([...notes, ...array]);

    console.log("notes:", notes);

    // setGroupName([...groupName, gn]);
    // setColour([...colour, cn]);

    // console.log(groupName);
    // console.log(colour);
  };

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          toggle();
        }}
      >
        + Create Notes
      </button>

      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader className={styles.modalHeader} toggle={toggle}>
          Create New Notes
        </ModalHeader>
        <ModalBody className={styles.modalBody}>
          <div className={styles.groupName}>
            <p>Group Name</p>
            <input
              onChange={onChangeHandler}
              className={styles.inputBox}
              type="text"
              name="groupName"
              id=""
              placeholder="Enter your group name..."
            />
          </div>
          <div className={styles.chooseColour}>
            <p>Choose Colour</p>
            <div className={styles.pickColour}>
              <div
                className={styles.purple}
                id="purple"
                onClick={onChangeHandler2}
              >
                1
              </div>
              <div className={styles.pink} id="pink" onClick={onChangeHandler2}>
                2
              </div>
              <div className={styles.sky} id="sky" onClick={onChangeHandler2}>
                3
              </div>
              <div
                className={styles.orange}
                id="orange"
                onClick={onChangeHandler2}
              >
                4
              </div>
              <div className={styles.blue} id="blue" onClick={onChangeHandler2}>
                5
              </div>
              <div
                className={styles.lightblue}
                id="lightBlue"
                onClick={onChangeHandler2}
              >
                6
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-4"
            color="secondary"
            onClick={() => {
              toggle();
              onButtonClick();
            }}
          >
            Create
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;
