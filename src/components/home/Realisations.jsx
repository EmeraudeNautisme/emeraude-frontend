import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "axios";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";

export default function Realisations() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_STRAPI_URL}/api/sliderealisations?populate=*`
      );

      setSlides(response.data.data);

      console.log(response.data.data);
    };

    fetchSlides();
  }, []);

  return (
    <RealisationsStyled>
      <div className="title">
        <img className="boat" src="/bateau.png" />
        <h2>Nos réalisations</h2>
        <img className="wave" src="/wave.png" />
      </div>

      <div className="slider-wrapper">
        <span className="custom-prev">
          <img src="/prev.png" />
        </span>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={23}
          slidesPerGroup={3}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide className="slide" key={slide.id}>
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${slide.image.url}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <span className="custom-next">
          <img src="/next.png" />
        </span>
      </div>
    </RealisationsStyled>
  );
}

const RealisationsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  gap: 30px;
  margin-bottom: 50px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 55px;

    h2 {
      font-family: "Rozha One";
      color: #084887;
      font-weight: 400;
    }
  }

  .boat {
    width: 78px;
  }

  .wave {
    width: 148px;
  }

  .slider-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .custom-next {
    position: absolute;
    top: 50%;
    right: 35px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .custom-prev {
    position: absolute;
    top: 50%;
    left: 35px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .swiper {
    width: calc(3 * 505px + 2 * 23px);
    overflow: hidden;
    padding-bottom: 45px;
  }

  .swiper-slide {
    width: 505px !important;
    height: 305px !important;

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      border: 2px solid #084887;
    }
  }

  .swiper-pagination-bullet {
    background: transparent;
    border: 5px solid #084887;
    width: 19px;
    height: 19px;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #084887;
  }
`;
