import { useState, useEffect } from "react";
import { GET } from "./utils/http.js";
import "./App.css";

function App() {
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    GET().then((data) => setQuoteList(data.quotes));
  }, []);

  return (
    <div className="App">
      {/* <h1>CIAO RAGAZZI</h1>
      <img src="https://picsum.photos/200/300" alt="img photo" />
      <button>Click</button> */}

      {quoteList.map((quote) => (
        <div className="quote" key={quote.id}>
          <p>{quote.quote}</p>
          <i>{quote.author}</i>
        </div>
      ))}
    </div>
  );
}

export default App;
