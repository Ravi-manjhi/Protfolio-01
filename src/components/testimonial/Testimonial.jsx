import React from "react";
import ArticleTestimonial from "./ArticleTestimonial";
import "./testimonial.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <ArticleTestimonial
            img={require("../../assets/avatar2.jpg")}
            name="Deepak Joshi"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleTestimonial
            img={require("../../assets/avatar3.jpg")}
            name="rajkumar chauhan"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleTestimonial
            img={require("../../assets/avatar4.jpg")}
            name="Jasmin bano"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleTestimonial
            img={require("../../assets/avatar1.jpg")}
            name="neha sharma"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonial;
