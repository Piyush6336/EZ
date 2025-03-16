import React, { useState } from "react";
import "./App.css";
import icon1 from "./assest/img.png";
import icon2 from "./assest/img1.png";
import icon3 from "./assest/img2.png";
import icon4 from "./assest/img3.png";
import icon5 from "./assest/img4.png";
import icon6 from "./assest/img5.png";
const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const services = [
    { title: "Presentation Design", icon: icon1 },
    { title: "Audio - Visual Production", icon: icon4 },
    { title: "Translation Services", icon: icon5 },
    { title: "Graphic Design", icon: icon2 },
    { title: "Research & Analytics", icon: icon6 },
    { title: "Data Processing", icon: icon3 },
  ];

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Invalid email format");
      return;
    }

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setMessage("Emails ending with @ez.works are not allowed.");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (error) {
      setMessage("Error submitting form.");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-content">
          <img
            src={require("./assest/EZLogo.png")}
            alt="EZ Works Logo"
            className="logo-img"
          />
          <p style={{ color: "#112949" }} className="paragraph">
            A Suite Of Business Support Services
          </p>
          <p
            className="description"
            style={{ lineHeight: "1.5", color: "#112949" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit, sed do eiusmod tempor incididunt...Lorem <br />
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* <div className="form-container">
            <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%", // Full width input
                  maxWidth: "230px", // Lambi length set
                  padding: "12px 24px", // Size increase (mota input box)
                  fontSize: "18px", // Text size increase
                  fontWeight: "bold", // Mota text
                  border: "2px solid #ABABAB", // Border color same as button
                  borderRadius: "5px", // Smooth edges
                  outline: "none", // No extra border on focus
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#EA7B2C", // Button color
                  color: "white", // Text color
                  fontSize: "18px", // Text size
                  fontWeight: "bold", // Mota text
                  padding: "12px 24px", // Button size increase
                  border: "none", // Remove border
                  borderRadius: "5px", // Slightly rounded edges
                  cursor: "pointer", // Pointer on hover
                }}
              >
                Contant Me
              </button>
            </form>
            {message && <p className="error">{message}</p>}
          </div> */}
        <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input" // ✅ Class use karo
              />
              <button type="submit" className="submit-btn">
                Contact Me
              </button>
            </form>
            {message && <p className="error">{message}</p>}
          </div>
        </div>
        

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={service.icon} alt="icon" className="icon" />
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">
                Lorem ipsum dolor sit<br></br> amet, lorem ipsum<br></br> dolor
                sit amet.Lorem<br></br> ipsum dolor sit amet
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Form;
