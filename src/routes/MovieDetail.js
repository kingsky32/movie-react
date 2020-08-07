import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getDetailMovie from "../components/getDetailMovie";
import getSearchMovie from "../components/getSearchMovie";

const Container = styled.div``;

const PosterContainer = styled.div``;

const Poster = styled.img``;

const MetaContainer = styled.div``;

const Status = styled.ul``;

const Stat = styled.li``;

const Title = styled.h3``;

const SubTitle = styled.span``;

const Actors = styled.ul``;

const Actor = styled.li``;

const Category = styled.ul``;

const Cate = styled.li``;

const MovieDetail = ({ match: { params: { movieCd } } }) => {
  const [movie, setMovie] = useState(null);
  const [poster, setPoster] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const getData = async () => {
        try {
          const data = await getDetailMovie({ movieCd });
          const [posterData] = await getSearchMovie({
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

  console.log(movie);
  return (
    !isLoading &&
    <Container>
      <PosterContainer>
        <Poster src={poster} />
      </PosterContainer>
      <MetaContainer>
        <Status>
          <Stat>
            {movie.prdtStatNm}
          </Stat>
          {movie.audits.map((audit, idx) =>
            <Stat key={idx}>
              {audit.watchGradeNm}
            </Stat>
          )}
        </Status>
        <Title>
          {movie.movieNm}
        </Title>
        <SubTitle>
          {movie.movieNmEn}
        </SubTitle>
        <Actors>
          {movie.actors.map((actor, idx) =>
            <Actor key={idx}>
              {actor.peopleNm}
            </Actor>
          )}
        </Actors>
        <Category>
          {movie.genres.map((genre, idx) =>
            <Cate key={idx}>
              {genre.genreNm}
            </Cate>
          )}
        </Category>
      </MetaContainer>
    </Container>
  );
};

export default MovieDetail;
