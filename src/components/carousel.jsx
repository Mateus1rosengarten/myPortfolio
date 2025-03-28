import { Carousel, CarouselItem } from "react-bootstrap";
import "../components/card.css";

function ImgCarousel({ img1, img2, img3,img4, imgCustom,imgLoading }) {
  return (
    <Carousel>
      <CarouselItem>
        <img className={`${imgCustom} w-100`} src={img1} loading={imgLoading} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img className={`${imgCustom} w-100`} src={img2}  alt=""  />
      </CarouselItem>
      <CarouselItem>
        <img className={`${imgCustom} w-100`} src={img3}  alt=""   />
      </CarouselItem>
      {img4 && <CarouselItem>
        <img className={`${imgCustom} w-100`} src={img4}  alt=""   />
      </CarouselItem> }
    </Carousel>
  );
}

export default ImgCarousel;
