import React from "react";
import aboutImg from "../assets/images/about-img.jpg";

const About = () => {
  return (
    <section class="about" id="about">
      <div class="image">
        <img src={aboutImg} alt="" />
      </div>

      <div class="content">
        <span>about us</span>
        <h3 class="title">Every day is a chance to become better</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quia
          accusamus dicta inventore nobis obcaecati vero odio, id dolorum.
          Consequatur ex, aperiam deserunt nostrum perferendis illum unde ipsa?
          Consequatur, distinctio?
        </p>
        <div class="box-container">
          <div class="box">
            <h3>
              <i class="fas fa-check"></i>body and mind
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div class="box">
            <h3>
              <i class="fas fa-check"></i>healthy life
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div class="box">
            <h3>
              <i class="fas fa-check"></i>strategies
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div class="box">
            <h3>
              <i class="fas fa-check"></i>workout
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
        </div>
        <a href="#" class="btn">
          read more
        </a>
      </div>
    </section>
  );
};

export default About;
