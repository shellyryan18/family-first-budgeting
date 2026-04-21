import React from "react";

export default function Payment() {
  return (
    <div style={page}>
      <div style={container}>
        <h1 style={header}>Choose Your Plan</h1>

        <p style={subheader}>
          You're one step away from getting your finances under control.
        </p>

        <p style={urgency}>⚡ Limited availability — secure your spot today</p>

        <div style={grid}>
          <div style={card}>
            <h2 style={planTitle}>Monthly Plan</h2>
            <p style={price}>$50</p>

            <ul style={list}>
              <li>Full monthly budget setup</li>
              <li>Bill organization</li>
              <li>Paycheck planning</li>
              <li>Custom plan for your situation</li>
            </ul>

            <a
              href="https://www.paypal.com/ncp/payment/MUJ2HRPYMBQ7Q"
              target="_blank"
              rel="noopener noreferrer"
              style={button}
            >
              Pay Monthly Plan
            </a>
          </div>

          <div style={featuredCard}>
            <p style={badge}>Best Value</p>

            <h2 style={planTitle}>3-Month Plan</h2>
            <p style={saveText}>Save 10%</p>
            <p style={price}>$135</p>

            <ul style={list}>
              <li>Everything in monthly plan</li>
              <li>3 months of support</li>
              <li>Priority adjustments</li>
            </ul>

            <a
              href="https://www.paypal.com/ncp/payment/RXQX8NU5GSLM4"
              target="_blank"
              rel="noopener noreferrer"
              style={button}
            >
              Pay 3-Month Plan
            </a>
          </div>
        </div>

        <p style={secure}>🔒 Secure checkout powered by PayPal</p>
      </div>
    </div>
  );
}

const page = {
  fontFamily: "Arial, sans-serif",
  background: "#eef6fb",
  minHeight: "100vh",
  padding: "40px 20px",
};

const container = {
  maxWidth: "960px",
  margin: "0 auto",
  textAlign: "center",
};

const header = {
  fontSize: "42px",
  color: "#1f3c46",
  marginBottom: "10px",
};

const subheader = {
  color: "#6c7a86",
  marginBottom: "10px",
  fontSize: "18px",
};

const urgency = {
  color: "#d9534f",
  fontWeight: "700",
  marginBottom: "28px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "24px",
  alignItems: "stretch",
};

const card = {
  background: "#f9fcfd",
  border: "1px solid #d6e6ef",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  textAlign: "left",
};

const featuredCard = {
  ...card,
  border: "2px solid #7fb8a4",
  position: "relative",
};

const badge = {
  display: "inline-block",
  background: "#e8f6f1",
  color: "#2e6f5e",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "700",
  marginBottom: "12px",
};

const planTitle = {
  color: "#1f3c46",
  fontSize: "32px",
  fontWeight: "800",
  marginTop: 0,
  marginBottom: "8px",
  textAlign: "center",
};

const saveText = {
  textAlign: "center",
  color: "#2e6f5e",
  fontWeight: "700",
  marginBottom: "4px",
};

const price = {
  color: "#7fb8a4",
  fontSize: "34px",
  fontWeight: "800",
  textAlign: "center",
  marginTop: 0,
  marginBottom: "18px",
};

const list = {
  color: "#5f6b75",
  lineHeight: "1.8",
  marginBottom: "24px",
  paddingLeft: "22px",
};

const button = {
  display: "block",
  width: "100%",
  textAlign: "center",
  background: "linear-gradient(135deg, #7fb8a4 0%, #6fae99 100%)",
  color: "#fff",
  padding: "14px 18px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  boxShadow: "0 8px 20px rgba(127,184,164,0.26)",
};

const secure = {
  marginTop: "28px",
  color: "#6c7a86",
  fontSize: "13px",
  textAlign: "center",
};