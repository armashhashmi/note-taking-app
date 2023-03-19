import React, { useState } from "react";
import LeftSection from "../components/LeftSection/LeftSection";
import RightSection from "../components/RightSection/RightSection";
import styles from "../page/Page.module.css";

function Page() {
  return (
    <div className={styles.container}>
      <LeftSection />
    </div>
  );
}

export default Page;
