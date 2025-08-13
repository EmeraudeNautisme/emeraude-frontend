import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Hero() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_STRAPI_URL}/api/slides?populate=*`
      );

      setSlides(response.data.data);
    };
    fetchSlides();
  }, []);

  return (
    <HeroStyled>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 7000 }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="slide-image">
                <img src={slide.image.url} alt="slide" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="presentation">
        <h1>Le spécialiste du bateau semi-rigide</h1>
        <img src="/wave.png" alt="vague" />
        <p>
          Experts en réparation de flotteurs de bateaux semi-rigides. De la
          micro-fuite à la déchirure en passant par la fabrication de flotteurs
          sur mesure ou le refit intégral.
          <br />
          <br />
          <span>Rénovation de votre bateau, nous avons la solution !</span>
        </p>
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.div`
  width: 100%;
  height: 893px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .presentation {
    position: absolute;
    z-index: 150;
    left: 70px;
    top: 50%;
    max-width: 740px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 21px;
    transform: translateY(-50%);

    h1 {
      font-size: 65px;
      font-family: "Rozha One";
      font-weight: 400;
      line-height: 65px;
    }

    img {
      width: 131px;
      height: 18px;
    }

    p {
      font-size: 22px;
      font-weight: 400;
      font-family: "Fira Sans";
    }

    span {
      font-style: italic;
      font-weight: 700;
    }
  }

  .slide-image {
    width: 100%;
    height: 100%;
  }

  .slide-image img {
    width: 100%;
    height: 893px;
    object-fit: cover;
    object-position: center;
  }

  .swiper-pagination-bullet {
    height: 14px;
    width: 14px;
    border: 4px solid #fff;
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    width: 46px;
    background: #fff;
    border-radius: 50px;
  }

  .swiper-pagination {
    bottom: 69px;
    left: 98px;
    width: auto;
  }

  @media screen and (max-width: 1024px) {
    .swiper-pagination {
      bottom: 20px;
      left: 20px;
    }

    .presentation {
      left: 22px;
    }
  }

  @media screen and (max-width: 750px) {
    .presentation {
      h1 {
        font-size: 50px;
      }
    }
  }
`;
