import React from "react";
import styled from "styled-components";

const re = /<(\w)+>(.*?)<\/\1>/gi;

const Container = styled.div``;

const PosterContainer = styled.div``;

const Poster = styled.img``;

const MetaContainer = styled.div``;

const MetaRow = styled.div``;

const Title = styled.h3``;

const Rating = styled.div``;

const Actor = styled.div``;

const Director = styled.div``;

const PubDate = styled.div``;

const SearchCompoent = ({ title, subtitle, pubDate, image, director, actor, userRating }) => {
  const reTitle = title && title.replace(re, "$2");
  return (
    <Container>
      <PosterContainer>
        <Poster src={image} alt={reTitle} />
      </PosterContainer>
      <MetaContainer>
        <Title>
          {reTitle} ({subtitle})
        </Title>
        <Rating>
          {userRating}
        </Rating>
        <MetaRow>
          <Director>
            {director}
          </Director>
          <Actor>
            {actor}
          </Actor>
        </MetaRow>
      </MetaContainer>
    </Container>
  );
};

export default SearchCompoent;
