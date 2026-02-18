import { Carousel, CarouselItem } from "react-bootstrap";

function ImgCarousel({ images = [], className, loading }) {
  return (
    <Carousel>
      {images.map((img, index) => (
        <CarouselItem>
          <img
            className={`${className} w-100 rounded carousel-height`}
            src={img}
            alt={`Slide${index + 1}`}
            loading={index === 0 ? loading : "lazy"}
          ></img>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export default ImgCarousel;
