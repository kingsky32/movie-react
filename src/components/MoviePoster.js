import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const PosterContainer = styled.div``;

const Poster = styled.img``;

const Title = styled.h5``;

const Category = styled.ul``;

const Cate = styled.li``;

const MoviePoster = (props, { imageUrl, cate = [] }) => {
  return (
    <Container>
      <PosterContainer>
        <Poster src={imageUrl} />
      </PosterContainer>
      <Title />
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
