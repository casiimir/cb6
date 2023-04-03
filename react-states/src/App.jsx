import { useReducer, useState } from "react";
import { GlobalContext, initGlobalState } from "./store";
import { globalReducer } from "./store/reducers";
import Counter from "./components/counter";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Counter />
        <button onClick={() => console.log("App ===>", state.value)}>
          Show Counter Component Value
        </button>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
