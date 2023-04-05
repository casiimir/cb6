import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import Modal from "./components/modal/Modal";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const onHandleAddTodoBtn = () =>
    dispatch({ type: "SET_MODAL_VISIBILITY", payload: true });

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <button onClick={onHandleAddTodoBtn} className={styles.addTodo}>
          {"+"}
        </button>
        {state.isModalVisibile && <Modal />}
      </Context.Provider>
    </div>
  );
}

export default App;
