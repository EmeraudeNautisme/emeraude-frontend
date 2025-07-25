import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css/autoplay";

export default function Trust() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_STRAPI_URL}/api/slideentreprises?populate=*`
      );

      setSlides(response.data.data);
    };

    fetchSlides();
  }, []);

  return (
    <TrustStyled>
      <div className="title">
        <img src="/boussole.png" />
        <h2>Ils nous font confiance</h2>
        <img src="/wave.png" />
      </div>
      <div className="slider-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={60}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          allowTouchMove={false}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${slide.image.url}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <p>Et quelques milliers de particuliers ...</p>
      </div>
    </TrustStyled>
  );
}

const TrustStyled = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
  padding: 0 70.5px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
      font-family: "Rozha One";
      color: #084887;
      font-size: 55px;
      font-weight: 400;
      background: #fff;
      position: relative;
      z-index: 150;
      padding: 0 30px;
    }
  }

  .slider-container {
    max-width: 1780px;
    width: 100%;
    border: 1px solid #084887;
    margin-top: -55px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 47px;
    padding: 105px 50px 25px 50px;
    text-align: center;

    p {
      font-size: 32px;
      color: #084887;
      font-weight: 400;
    }
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
    transition-timing-function: linear !important;
  }

  .swiper-slide {
    width: auto !important;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 820px) {
    padding: 0 17px;
  }

  @media screen and (max-width: 700px) {
    .slider-container {
      border: none;
    }

    .title h2 {
      font-size: 45px;
    }
  }
`;
