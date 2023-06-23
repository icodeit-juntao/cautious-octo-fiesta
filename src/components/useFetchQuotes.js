import {useEffect, useState} from "react";

const useFetchQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      fetch('https://quote-service-lb-1897730902.ap-southeast-2.elb.amazonaws.com/quotes?count=1').then(r => r.json()).then(data => {
        setLoading(false);
        setQuotes(data);
      }).catch(e => {
        setLoading(false);
      })
    }

    fetchQuotes();
  }, [])

  return {quotes, loading};
}

export default useFetchQuotes;