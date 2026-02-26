import { Carousel, CarouselItem } from "react-bootstrap";

function ImgCarousel({ images = [], className }) {
  return (
    <Carousel>
      {images.map((img, index) => (
        <CarouselItem key={index}>
          <img
            className={`${className} w-100 rounded carousel-height`}
            src={img}
            alt={`Slide${index + 1}`}
            loading="lazy"
          ></img>
        </CarouselItem>
      ))}
    </Carousel>
  );
}

export default ImgCarousel;
