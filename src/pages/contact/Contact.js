import React, { useState } from "react";
import { useForm } from "react-hook-form";
import avatar from "../../assets/contact-avatar.webp";
import MoonLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  const override = {
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "0 auto",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setIsSending(true);
    fetch(
      "https://portfolio-emailer.netlify.app/.netlify/functions/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.status === 200) {
        setIsSending(false);
        alert("Woohoo! Message sent.");
        reset({ name: "", email: "", message: "", subject: "" });
      } else {
        setIsSending(false);
        alert("Oops! Something went wrong.");
      }
    });
  };

  return (
    <main className="contact--container">
      <Helmet>
        <title>Ozkar Alvarez | Contact</title>
        <meta
          name="description"
          content="Get in touch with me, a web developer with experience in creating responsive, 
          user-friendly websites and web applications. My contact page provides several ways for 
          you to get in touch with me, including an email form and my contact information. If you 
          have any questions about my work, or if you're interested in collaborating on a project, 
          please don't hesitate to reach out. I'm always happy to discuss potential opportunities."
        />
      </Helmet>
      <img src={avatar} alt="avatar" className="contact--avatar" />

      <div className="contact--heading">
        <h1>Get in touch.</h1>
      </div>
      {isSending ? (
        <MoonLoader
          color={"#fdb827"}
          loading={isSending}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : null}
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
          {...register("name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Email"
          className="contact--email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Subject"
          className="contact--subject"
          {...register("subject", { required: true, maxLength: 12 })}
        />
        <textarea
          placeholder="Message"
          style={{ fontFamily: "inherit" }}
          className="contact--message"
          {...register("message", { required: true, min: 0 })}
        />
        <input type="submit" />
      </form>
    </main>
  );
}
