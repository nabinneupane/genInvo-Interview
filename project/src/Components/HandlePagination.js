import { useEffect, useState } from "react";

const HandlePagination = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [callback, isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + window.scrollY < document.body.offsetHeight &&
      isFetching
    )
      return;

    setIsFetching(true);
  }
  return [isFetching, setIsFetching];
};

export default HandlePagination;
