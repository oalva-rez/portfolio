import React from "react";
import { useForm } from "react-hook-form";
import avatar from "../../assets/contact-avatar.webp";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <main className="contact--container">
      <img src={avatar} alt="avatar" className="contact--avatar" />

      <div className="contact--heading">
        <h1>Get in touch.</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          You can shoot me an email @:&nbsp;
          <a href="mailto:ozkaralvarez10@gmail.com">
            ozkaralvarez10@gmail.com
          </a>{" "}
          <br />
          Dont hesitate to use the form for any requests or questions.
        </p>
        <input
          type="text"
          placeholder="Name"
          className="contact--name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          className="contact--email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Subject"
          className="contact--subject"
          {...register("Subject", { required: true, maxLength: 12 })}
        />
        <textarea
          placeholder="Message"
          style={{ fontFamily: "inherit" }}
          className="contact--message"
          {...register("Message", { required: true, min: 0 })}
        />
        <input type="submit" />
      </form>
    </main>
  );
}
