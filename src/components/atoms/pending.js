import styles from './pending.module.css'

import React from "react";

const PendingTasks = ({ count }) => {
  return (
  <div className={styles.pending}>
  <h3>{count} Pending Tasks</h3>
  </div>
  )
};

export default PendingTasks;
