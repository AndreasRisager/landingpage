import Carousel from 'react-grid-carousel';
import CarouselItem from './CarouselItem';

export default function Gallery() {
  return (
    <Carousel cols={1} rows={1} gap={0} autoplay={3000} loop>
      <Carousel.Item>
         <CarouselItem image="https://picsum.photos/1920/1080?random=1"
         copy="Vær med fra starten!"
         ctaLink="/founders"
         ctaCopy="Klik her, hvis du vil være nede med de fede" />  
      </Carousel.Item>
      <Carousel.Item>
         <CarouselItem image="https://picsum.photos/1920/1080?random=2"
         copy="Vil du gerne blive klogere?"
         ctaLink="/newsletter"
         ctaCopy="Få gratis nyheder" />  
      </Carousel.Item>
      <Carousel.Item>
         <CarouselItem image="https://picsum.photos/1920/1080?random=3"
         copy="Synes du også Chokolade er godt?"
         ctaLink="/chokolade"
         ctaCopy="Ja!!" />  
      </Carousel.Item>
    </Carousel>
  )
}