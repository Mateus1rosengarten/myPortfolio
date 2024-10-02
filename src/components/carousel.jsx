import { Carousel, CarouselItem } from "react-bootstrap";
import "../components/card.css";

function ImgCarousel({ img1, img2, img3, imgCustom }) {
  return (
    <Carousel>
      <CarouselItem>
        <img className={`${imgCustom} w-100`} src={img1} />
      </CarouselItem>
      <CarouselItem>
        <img className={`${imgCustom} w-100`} src={img2} />
      </CarouselItem>
      <CarouselItem>
        <img className={`${imgCustom} w-100`} src={img3} />
      </CarouselItem>
    </Carousel>
  );
}

export default ImgCarousel;
