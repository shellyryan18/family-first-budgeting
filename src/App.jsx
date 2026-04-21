import React from "react";

export default function App() {
  return (
    <div style={page}>
      <div style={container}>
        {/* HEADER */}
        <h1 style={title}>Family First Budgeting</h1>

        <p style={slogan}>
          Fighting the economy, one family at a time
        </p>

        {/* PROMO */}
        <p style={promo}>
          🎉 First 5 clients receive their first month FREE
        </p>

        {/* DESCRIPTION */}
        <p style={description}>
          I help families take control of their finances by creating simple,
          realistic monthly budget plans based on your real income and actual
          bills — no judgment, no complicated systems.
        </p>

        {/* BUTTON */}
        <a
          href="https://forms.gle/ZN72H1Sj7r9Vn6wu7"
          target="_blank"
          rel="noopener noreferrer"
          style={button}
        >
          Get Started Now
        </a>

        <p style={subtext}>
          Ready to take control of your finances? Let’s start today.
        </p>

        {/* CONTACT */}
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

        {/* DISCLAIMER */}
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
  maxWidth: "650px",
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
};

const subtext = {
  fontSize: "13px",
  color: "#6c7a86",
  marginBottom: "25px",
};

const contactBox = {
  borderTop: "1px solid #e0e7ec",
  paddingTop: "15px",
  marginTop: "10px",
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