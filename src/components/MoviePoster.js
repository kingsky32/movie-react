import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin-bottom: .5rem;
  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;

const SubTitle = styled.p`
  color: ${props => props.theme.darkGreyColor};
  font-size: 1.2rem;
  margin-bottom: .5rem;
  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;

const PubDate = styled.p`
  color: ${props => props.theme.darkGreyColor};
  font-size: 1.2rem;
  margin-bottom: .5rem;
  &:hover {
    color: ${props => props.theme.mainColor};
  }
`;

const Category = styled.ul``;

const Cate = styled.li``;

const re = /<(\w)+>(.*)<\/\1>/;

const MoviePoster = ({
  title,
  subtitle,
  pubDate,
  image,
  actor,
  director,
  userRating,
  cate = []
}) => {
  return (
    <Container>
      <PosterContainer>
        <Link to="/">
          <Poster url={image} />
        </Link>
      </PosterContainer>
      <Title>
        <Link to="/">
          {title && title.match(re)[2]}
        </Link>
      </Title>
      <SubTitle>
        <Link to="/">
          {subtitle}
        </Link>
      </SubTitle>
      <PubDate>
        <Link to="/">
          {pubDate}
        </Link>
      </PubDate>
      <Category>
        {cate.map(cate =>
          <Cate>
            {cate}
          </Cate>
        )}
      </Category>
    </Container>
  );
};

MoviePoster.propTypes = {};

export default MoviePoster;