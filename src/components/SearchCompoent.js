import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getMovieDetail from "./getMovieDetail";
import { Helmet } from "react-helmet";
import getDetailMovie from "./getDetailMovie";
import moment from "moment";

const re = /<(\w)+>(.*?)<\/\1>/gi;

const Container = styled.div`
  padding-top: 5rem;
  height: 15rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
`;

const PosterContainer = styled.div`
  width: 12rem;
  height: 15rem;
  margin-right: 2.5rem;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MetaContainer = styled.div`flex: 3;`;

const WatchGradeNm = styled.p``;

const Stat = styled.p`
  font-size: 1.4rem;
  padding: .5rem 1rem;
  background-color: ${props => props.theme.mainColor}25;
  font-weight: 500;
  margin-left: .5rem;
  color: ${props => props.theme.mainColor};
`;

const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 400;
  margin-bottom: .25rem;
  display: flex;
  align-items: center;
`;

const SubTitle = styled.h5`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

const Actors = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;

const ActorTitle = styled.li`
  font-size: 1.4rem;
  margin-right: .5rem;
`;

const Directors = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  margin-right: 1rem;
`;

const DirectorTitle = styled.li`
  font-size: 1.4rem;
  margin-right: .5rem;
`;

const Director = styled.ul`font-size: 1.4rem;`;

const Actor = styled.li`font-size: 1.4rem;`;

const Category = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-bottom: 1rem;
`;

const Cate = styled.li`
  font-size: 1.4rem;
  &:first-child::after {
    content: '/';
  }
`;

const Cut = styled.span`
  width: .1rem;
  height: 1rem;
  display: block;
  background-color: ${props => props.theme.darkGreyColor}50;
  margin: 0 1rem;
`;

const OpenDt = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.4rem;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 300;
`;

const Meta = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const SearchCompoent = ({
  movieCd,
  movieNm,
  directors,
  genreAlt,
  movieNmEn,
  nationAlt,
  prdtStatNm,
  prdtYear,
  repGenreNm,
  repNationNm,
  typeNm
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [poster, setPoster] = useState("");
  const [movie, setMovie] = useState(null);
  useEffect(
    () => {
      const getData = async () => {
        try {
          const data = await getDetailMovie({ movieCd });
          const [posterData] = await getMovieDetail({
            searchName: data.movieInfo.movieNm,
            display: 1
          });
          setMovie(data.movieInfo);
          setPoster(posterData.image);
          setIsLoading(false);
        } catch (error) {
          setTimeout(getData, 150);
        }
      };
      getData();
    },
    [movieCd]
  );
  return (
    !isLoading &&
    <Container>
      <Helmet>
        <title>
          Movies | {movie.movieNm}
        </title>
      </Helmet>
      <PosterContainer>
        <Poster src={poster} />
      </PosterContainer>
      <MetaContainer>
        <Title>
          {movie.movieNm}
          ({movie.prdtYear})
          <Stat>{movie.prdtStatNm}</Stat>
        </Title>
        <SubTitle>
          {movie.movieNmEn}
        </SubTitle>
        <Category>
          {movie.genres.map((genre, idx) =>
            <Cate key={idx}>
              {genre.genreNm}
            </Cate>
          )}
          <Cut />
          {movie.nations.map((nation, idx) =>
            <Cate key={idx}>
              {nation.nationNm}
            </Cate>
          )}
        </Category>
        <OpenDt>
          {moment(movie.openDt).format("YYYY.MM.DD")}
          <Cut />
          {movie.showTm}분,{" "}
          {movie.audits.map((audit, idx) =>
            <WatchGradeNm key={idx}>
              {audit.watchGradeNm}
            </WatchGradeNm>
          )}
        </OpenDt>
        <Meta>
          <Directors>
            <DirectorTitle>감독</DirectorTitle>
            {movie.directors.map((director, idx) =>
              <Director key={idx}>
                {director.peopleNm}
              </Director>
            )}
          </Directors>
          <Actors>
            <ActorTitle>주연</ActorTitle>
            {movie.actors.map((actor, idx) =>
              <Actor key={idx}>
                {actor.peopleNm}
                {idx < movie.actors.length - 1 && ", "}
              </Actor>
            )}
          </Actors>
        </Meta>
      </MetaContainer>
    </Container>
  );
};

export default SearchCompoent;
