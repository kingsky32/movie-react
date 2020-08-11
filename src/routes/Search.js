import React, { useEffect, useState } from "react";
import getSearchMovie from "../components/getSearchMovie";
import SearchCompoent from "../components/SearchCompoent";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 5rem 0;
`;

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
  return (
    <Container>
      {!isLoading &&
        searchData &&
        searchData.map((data, idx) => <SearchCompoent key={idx} {...data} />)}
    </Container>
  );
};

export default Search;
