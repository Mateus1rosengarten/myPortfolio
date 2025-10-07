import { Carousel, CarouselItem } from "react-bootstrap";
import "../components/card.css";

function ImgCarousel({ images = [], imgCustom, imgLoading }) {
  return (
    <Carousel>
      {images.map((img, index) => (
        <CarouselItem>
          <img
            className={`${imgCustom} w-100 rounded`}
            src={img}
            alt={`Slide${index + 1}`}
            loading={index === 0 ? imgLoading : "lazy"}
          ></img>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export default ImgCarousel;
