import {useEffect, useState} from "react";

const useFetchQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      fetch('http://icodeit-quotes-lb-1858777931.ap-southeast-2.elb.amazonaws.com/quotes').then(r => r.json()).then(data => {
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