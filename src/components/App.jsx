import React from 'react';
import './app.css';
import useFetchQuotes from "./useFetchQuotes";
import {Quote} from "./Quote";

function App() {
  const {quotes, loading} = useFetchQuotes();

  return (
    <div className="app">
      <main>
        <h1>Welcome to A React Application!</h1>
        {loading && <p>Loading...</p>}
        {
          !loading && quotes.map(quote => (<Quote key={quote.author} content={quote.quote}/>))
        }
      </main>
    </div>
  );
}

export default App;