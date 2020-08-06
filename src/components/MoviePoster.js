import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import getSearchMovie from "./getSearchMovie";
import LoadingComponent from "./LoadingComponent";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  padding: 0 .5rem;
`;

const Poster = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  width: 100%;
  padding-bottom: 133%;
  transition: .25s transform ease;
`;

const PosterContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.mainColor};
  &:hover {
    ${Poster} {
      transform: translate(.5rem, -.5rem);
    }
  }
`;

const Title = styled.h5`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: .5rem;
  a:hover {
    color: ${props => props.theme.mainColor};
  }
`;

const SubTitle = styled.p`
  color: ${props => props.theme.darkGreyColor};
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-bottom: .5rem;
  a:hover {
    color: ${props => props.theme.mainColor};
  }
`;

const PubDate = styled.p`
  color: ${props => props.theme.darkGreyColor};
  font-size: 1.2rem;
  margin-bottom: .5rem;
  a:hover {
    color: ${props => props.theme.mainColor};
  }
`;

const Category = styled.ul``;

const Cate = styled.li``;

const MoviePoster = ({ movieNm, cate = [] }) => {
  const [isLoading, setIsloading] = useState(true);
  const [boxOfficeList, setBoxOfficeList] = useState([]);

  useEffect(
    () => {
      const getData = async () => {
        try {
          setIsloading(true);
          const [data] = await getSearchMovie({ searchName: movieNm, display: 1 });
          setBoxOfficeList(data);
          setIsloading(false);
        } catch (error) {
          setTimeout(getData, 250);
        }
      };
      getData();
    },
    [movieNm]
  );

  return isLoading
    ? <LoadingComponent />
    : boxOfficeList &&
      <Container>
        <PosterContainer>
          <Link to="/">
            <Poster url={boxOfficeList.image} />
          </Link>
        </PosterContainer>
        <Title>
          <Link to="/">
            {movieNm}
          </Link>
        </Title>
        <SubTitle>
          <Link to="/">
            {boxOfficeList.subtitle}
          </Link>
        </SubTitle>
        <PubDate>
          <Link to="/">
            {boxOfficeList.pubDate}
          </Link>
        </PubDate>
        <Category>
          {cate.map(cate =>
            <Cate>
              {cate}
            </Cate>
          )}
        </Category>
      </Container>;
};

MoviePoster.propTypes = {};

export default MoviePoster;
