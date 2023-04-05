// import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
import { useContext } from "react";
import { Context } from "../../store";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";

const Task = ({ taskData }) => {
  // const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   GET(`users/${taskData.userId}`).then((data) => setUserData(data));
  // }, []);

  const { store, dispatch } = useContext(Context);

  const onHandleSetCompleted = () => {
    dispatch({ type: "SET_TASK_COMPLETED", payload: taskData.id });
  };

  const onHandleDeleteTask = () => {
    dispatch({ type: "DELETE_TASK", payload: taskData.id });
  };

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.info}>
        <img src={taskData.image} alt={taskData.username} />
        {taskData.completed && <button onClick={onHandleDeleteTask}>V</button>}
      </div>
      <div className={styles.content}>
        <span>{taskData.username}</span>
        <p onClick={onHandleSetCompleted}>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;
