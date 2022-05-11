import React from "react";
import { BiArrowToRight } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="contact-information">
        <h2 className="heading heading-2">Visit Us</h2>
        <p className="text text-lg-x mt-lg">Museum street 1, Amsterdam</p>
        <p className="text text-lg-x mt-lg">Daily, 9am - 5pm</p>
      </div>

      <div className="contact-form">
        <h3 className="heading heading-3 text--uppercase">
          Let&apos;s stay in touch
        </h3>
        <form className="form-control mt-lg-x">
          <input
            className="form-input"
            type="email"
            id="email"
            placeholder="Email"
          />
          <span className="form-icon">
            <BiArrowToRight className="input__icon" />
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
