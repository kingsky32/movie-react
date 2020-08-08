import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getDetailMovie from "../components/getDetailMovie";
import getSearchMovie from "../components/getSearchMovie";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
`;

const PosterContainer = styled.div`
  flex: 1;
  margin-right: 2.5rem;
`;

const Poster = styled.img`width: 100%;`;

const MetaContainer = styled.div`flex: 3;`;

const Status = styled.ul``;

const Stat = styled.li``;

const Title = styled.h3`
  font-size: 3.2rem;
  font-weight: 600;
`;

const SubTitle = styled.span`font-size: 1.8rem;`;

const Actors = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;

const Actor = styled.li``;

const PrdtYear = styled.span``;

const Category = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;

const Cate = styled.li``;

const Meta = styled.div`display: flex;`;

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
        <Title>
          {movie.movieNm}
        </Title>
        <SubTitle>
          {movie.movieNmEn}
        </SubTitle>
        <Meta>
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
          <PrdtYear>
            {movie.prdtYear}
          </PrdtYear>
        </Meta>
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
