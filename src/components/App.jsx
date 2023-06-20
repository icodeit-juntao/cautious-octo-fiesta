import React, {useState, useEffect} from 'react';
import './app.css';

const Quote = ({content}) => {
  console.log(content);
  return (<p className="quote">
    {content}
  </p>)
}

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      fetch('https://quotes-204h.onrender.com/quotes').then(r => r.json()).then(data => setQuotes(data))
    }

    fetchQuotes();
  }, [])

  return (
    <div className="app">
      <main>
        <h1>Welcome to A React Application!</h1>
        {
          quotes.map(quote => (<Quote key={quote.author} content={quote.quote} />))
        }
      </main>
    </div>
  );
}

export default App;