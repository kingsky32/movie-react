import React, { useEffect, useState } from "react";
import getSearchMovie from "../components/getSearchMovie";

const Search = ({ location: { search } }) => {
  const searchName = search.split("=")[1];
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const getData = async () => {
        setIsLoading(true);
        try {
          const data = await getSearchMovie({ searchName });
          console.log(data);
          setSearchData(data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    },
    [searchName]
  );

  console.log(searchData);

  return isLoading && <div />;
};

export default Search;
