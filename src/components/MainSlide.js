import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const Container = styled.div`
  height: 30rem;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${props => props.theme.whiteColor};
    width: 3.4rem;
    height: 3.4rem;
    border-radius: .5rem;
    &::after {
      font-size: 1.5rem;
    }
    &:hover {
      background-color: ${props => props.theme.whiteColor}25;
    }
  }
`;

const Slide = styled.div`
  height: 30rem;
  background-color: ${props => props.theme.darkColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const MainSlide = ({ slide = [] }) => {
  const opts = {
    width: "520",
    height: "300",
    playerVars: {
      autoplay: 0
    }
  };
  return (
    <Container>
      <Swiper
        effect="coverflow"
        slidesPerView="3"
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true
        }}
        navigation
      >
        {slide.map((slide, idx) =>
          <SwiperSlide key={idx}>
            <Slide>
              <YouTube videoId={slide.videoId} opts={opts} />
            </Slide>
          </SwiperSlide>
        )}
      </Swiper>
    </Container>
  );
};

export default MainSlide;
