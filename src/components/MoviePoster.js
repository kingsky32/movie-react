import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import getSearchMovie from "./getSearchMovie";
import LoadingComponent from "./LoadingMoviePoster";

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
  width: 100%;
  height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: .5rem;
  a:hover {
    color: ${props => props.theme.mainColor};
  }
`;

const SubTitle = styled.p`
  color: ${props => props.theme.darkGreyColor};
  font-size: 1.2rem;
  line-height: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
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

const MoviePoster = ({ movieNm, movieCd, cate = [] }) => {
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
          setTimeout(getData, 150);
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
          <Link to={`/movies/movie/${movieCd}`}>
            <Poster url={boxOfficeList.image} />
          </Link>
        </PosterContainer>
        <Title>
          <Link to={`/movies/movie/${movieCd}`}>
            {movieNm}
          </Link>
        </Title>
        <SubTitle>
          <Link to={`/movies/movie/${movieCd}`}>
            {boxOfficeList.subtitle}
          </Link>
        </SubTitle>
        <PubDate>
          <Link to={`/movies/movie/${movieCd}`}>
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
