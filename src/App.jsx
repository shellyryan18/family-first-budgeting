import React, { useState } from "react";
import { track } from "@vercel/analytics";

export default function App() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("");

  async function handleContactSubmit(e) {
    e.preventDefault();
    setContactStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setContactStatus("Message sent successfully.");
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      setContactStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div style={page}>
      <div style={container}>
        <h1 style={title}>Family First Budgeting</h1>
        <h1 style={title}>
  Stop Guessing With Your Money — Start Feeling In Control Again
</h1>
<p style={subtext}>
  I build real, personalized plans based on your actual income and bills — so you always know what’s coming next.
</p>

        <p style={slogan}>Fighting the economy, one family at a time</p>

        <p style={promo}>🎉 First 5 clients receive their first month FREE</p>

        <div style={aboutWrapper}>
  <h2 style={aboutTitle}>About Family First Budgeting</h2>

  <p style={aboutText}>
    My mission is simple — to help everyday families feel in control of their
    money again.
  </p>

  <p style={aboutText}>
    Too often, budgeting feels overwhelming. Bills come in, paychecks go out,
    and it can feel like you’re just hoping there’s enough left over to make it
    to the next cycle.
  </p>

  <p style={aboutText}>
    At Family First Budgeting, I take your real income and your actual bills
    and build a personalized plan that shows exactly how everything works
    together — paycheck by paycheck.
  </p>

  <div style={aboutList}>
    <p>✔ Know what gets paid and when</p>
    <p>✔ See what your account will look like after each paycheck</p>
    <p>✔ Understand what you actually have left over</p>
    <p>✔ Clearly see how much you can save vs use for everyday life</p>
  </div>

  <p style={aboutText}>
    This is something I personally do with every paycheck I receive — I even
    have my own finances mapped out for a full year ahead.
  </p>

  <p style={aboutClosing}>
    No judgment. No pressure. Just a simple, realistic plan that works for your
    life.
  </p>

  <p style={aboutBold}>
    Stop stressing. Stop guessing. Start living.
  </p>
</div>

        <a href="/#/intake" style={button}>
          Get Started Now
        </a>

        <p style={subtext}>
          Ready to take control of your finances? Let’s start today.
        </p>

        <div style={contactSection}>
          <h2 style={contactHeading}>Just Contact Me</h2>
          <p style={contactIntro}>
            Not ready to fully commit yet? Send me a message here and I’ll be
            happy to answer your questions.
          </p>

          <form onSubmit={handleContactSubmit} style={formStyle}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={contactData.name}
              onChange={(e) =>
                setContactData({ ...contactData, name: e.target.value })
              }
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={contactData.email}
              onChange={(e) =>
                setContactData({ ...contactData, email: e.target.value })
              }
              style={inputStyle}
            />

            <textarea
              placeholder="Tell me what you need help with"
              required
              rows="5"
              value={contactData.message}
              onChange={(e) =>
                setContactData({ ...contactData, message: e.target.value })
              }
              style={inputStyle}
            />

            <button type="submit" style={button}>
              Send Message
            </button>

            {contactStatus && <p style={statusText}>{contactStatus}</p>}
          </form>
        </div>

        <div style={contactBox}>
          <p style={contactText}>
            📧 MSullivan.FamilyFirstBudgeting@outlook.com
          </p>

          <a
            href="https://www.facebook.com/FamilyFirstBudgeting/"
            target="_blank"
            rel="noopener noreferrer"
            style={fbLink}
          >
            Visit us on Facebook
          </a>
        </div>

        <p style={disclaimer}>
          Family First Budgeting provides budgeting guidance and support only.
          We do not provide financial, legal, tax, or investment advice.
        </p>
      </div>
    </div>
  );
}

const page = {
  fontFamily: "Arial, sans-serif",
  background: "#eef6fb",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

const container = {
  background: "#ffffff",
  padding: "40px",
  borderRadius: "20px",
  maxWidth: "720px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  border: "1px solid #d6e6ef",
};

const title = {
  color: "#1f3c46",
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const slogan = {
  color: "#7fb8a4",
  fontSize: "16px",
  marginBottom: "20px",
  fontWeight: "600",
};

const promo = {
  background: "#e8f6f1",
  padding: "10px",
  borderRadius: "10px",
  color: "#2e6f5e",
  fontWeight: "bold",
  marginBottom: "20px",
};

const description = {
  color: "#5f6b75",
  lineHeight: "1.6",
  marginBottom: "25px",
};

const button = {
  background: "linear-gradient(135deg, #7fb8a4 0%, #6fae99 100%)",
  color: "#fff",
  padding: "14px 22px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  boxShadow: "0 8px 20px rgba(127,184,164,0.26)",
  display: "inline-block",
  marginBottom: "10px",
  border: "none",
  cursor: "pointer",
};

const subtext = {
  fontSize: "13px",
  color: "#6c7a86",
  marginBottom: "30px",
};

const contactSection = {
  textAlign: "left",
  marginTop: "10px",
  paddingTop: "20px",
  borderTop: "1px solid #e0e7ec",
};

const contactHeading = {
  textAlign: "center",
  color: "#1f3c46",
  marginBottom: "10px",
};

const contactIntro = {
  textAlign: "center",
  color: "#5f6b75",
  marginBottom: "20px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cfd8dc",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box",
};

const statusText = {
  textAlign: "center",
  color: "#5f6b75",
  marginTop: "10px",
};

const contactBox = {
  borderTop: "1px solid #e0e7ec",
  paddingTop: "15px",
  marginTop: "30px",
};

const contactText = {
  color: "#1f3c46",
  marginBottom: "8px",
};

const fbLink = {
  color: "#7fb8a4",
  textDecoration: "none",
  fontWeight: "600",
};

const disclaimer = {
  marginTop: "25px",
  fontSize: "12px",
  color: "#8a97a3",
};
const aboutWrapper = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "18px",
  padding: "24px",
  marginTop: "20px",
  marginBottom: "25px",
  textAlign: "left",
};

const aboutTitle = {
  textAlign: "center",
  color: "#1f3c46",
  fontSize: "26px",
  marginBottom: "14px",
};

const aboutText = {
  color: "#5f6b75",
  lineHeight: "1.7",
  marginBottom: "12px",
};

const aboutList = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "12px",
  padding: "14px 18px",
  margin: "16px 0",
  color: "#1f3c46",
  lineHeight: "1.7",
};

const aboutClosing = {
  color: "#1f3c46",
  fontWeight: "500",
  marginBottom: "10px",
};

const aboutBold = {
  color: "#1f3c46",
  fontWeight: "700",
  fontSize: "16px",
  marginBottom: 0,
};