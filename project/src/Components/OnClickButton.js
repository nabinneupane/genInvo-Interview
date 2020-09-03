import { useEffect, useState } from "react";
import axios from "axios";

const OnClickButton = (repo, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [name, setName] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const api_github = `https://api.github.com/search/repositories?q=created:>2020-05-22&sort=stars&order=desc&page=${pageNumber}`;

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios(api_github)
      .then(({ data }) => {
        console.log(data);
        setName((prevName) => {
          return [...prevName, data.items];
        });
        setHasMore(data.items.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [pageNumber]);
  return { loading, error, name, hasMore };
};

export default OnClickButton;
