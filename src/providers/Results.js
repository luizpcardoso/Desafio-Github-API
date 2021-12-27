import { createContext, useContext, useState } from "react";
import api from "../services";

export const ResultContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [Search, setSearch] = useState("");
  const [userDetail, setUserDetail] = useState([]);

  const resultsSearch = (search) => {
    setSearch(search);
    api
      .get(`/search/users?q=${search}`)
      .then((response) => {
        setResults(response.data.items);
      })
      .catch((error) => console.log(error));
  };

  const DetailForModal = (user) => {
    api
      .get(`/users/${user}`)
      .then((response) => {
        setUserDetail(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        resultsSearch,
        Search,
        setSearch,
        DetailForModal,
        userDetail,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResults = () => useContext(ResultContext);
