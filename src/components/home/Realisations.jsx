import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "axios";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

export default function Realisations() {
  const [showNavigation, setShowNavigation] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_STRAPI_URL}/api/sliderealisations?populate=*`
      );

      setSlides(response.data.data);
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth > 1780);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <RealisationsStyled>
      <div className="title">
        <img src="/bateau.png" />
        <h2>Nos réalisations</h2>
        <img src="/wave.png" />
      </div>
      <div className="slider-container">
        <span
          style={showNavigation ? {} : { display: "none" }}
          className="custom-prev"
        >
          <img src="/prev.png" />
        </span>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={23}
          slidesPerGroup={3}
          navigation={
            showNavigation
              ? {
                  prevEl: ".custom-prev",
                  nextEl: ".custom-next",
                }
              : false
          }
          breakpoints={{
            1680: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },

            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },

            250: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          pagination={{ clickable: true }}
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
        <span
          style={showNavigation ? {} : { display: "none" }}
          className="custom-next"
        >
          <img src="/next.png" />
        </span>
      </div>
    </RealisationsStyled>
  );
}

const RealisationsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 150px;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
      font-family: "Rozha One";
      font-size: 55px;
      font-weight: 400;
      color: #084887;
    }
  }

  .swiper {
    max-width: 1560px;
    padding: 0 0 50px 0;
  }

  .swiper-slide {
    width: 505px;
    height: 305px;
    border-radius: 15px;
    border: 2px solid #084887;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slider-container {
    width: 100%;
    position: relative;
  }

  .custom-prev {
    position: absolute;
    top: 50%;
    left: 35px;
    z-index: 150;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .custom-next {
    position: absolute;
    top: 50%;
    right: 35px;
    z-index: 150;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .swiper-pagination-bullet {
    opacity: 1;
    width: 19px;
    height: 19px;
    border: 5px solid #084887;
    background: transparent;
  }

  .swiper-pagination-bullet-active {
    background-color: #084887;
  }

  @media screen and (max-width: 1780px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 80px;
  }

  @media screen and (max-width: 700px) {
    .title h2 {
      font-size: 45px;
    }
  }
`;
