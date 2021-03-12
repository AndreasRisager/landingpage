import "./Testimonials.scss";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
   return (
      <section className="testimonials">
         <TestimonialCard image="https://picsum.photos/200/200?random=1" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat nulla illum voluptatibus ex quia expedita quod! Quibusdam consequatur amet cum vero! In, dolorem earum. Eveniet repudiandae assumenda et tenetur!" />
         <TestimonialCard image="https://picsum.photos/200/200?random=2" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat nulla illum voluptatibus ex quia expedita quod! Quibusdam consequatur amet cum vero! In, dolorem earum. Eveniet repudiandae assumenda et tenetur!" />
         <TestimonialCard image="https://picsum.photos/200/200?random=3" copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugiat nulla illum voluptatibus ex quia expedita quod! Quibusdam consequatur amet cum vero! In, dolorem earum. Eveniet repudiandae assumenda et tenetur!" />
      </section>
   )
}