import React, { useEffect } from "react";

export default function Payment() {
  useEffect(() => {
    if (window.paypal) {
      window.paypal
        .HostedButtons({
          hostedButtonId: "MUJ2HRPYMBQ7Q",
        })
        .render("#paypal-monthly");

      window.paypal
        .HostedButtons({
          hostedButtonId: "RXQX8NU5GSLM4",
        })
        .render("#paypal-3month");
    }
  }, []);

  return (
    <div style={page}>
      <h1 style={header}>Choose Your Plan</h1>

      <p style={subheader}>
        You're one step away from getting your finances under control.
      </p>

      <p style={urgency}>⚡ Limited availability — secure your spot today</p>

      <div style={grid}>
        {/* MONTHLY */}
        <div style={card}>
          <h2 style={planTitle}>Monthly Plan</h2>
          <p style={price}>$50</p>

          <ul style={list}>
            <li>Full monthly budget setup</li>
            <li>Bill organization</li>
            <li>Paycheck planning</li>
            <li>Custom plan for your situation</li>
          </ul>

          <div style={paypalWrapper}>
            <div id="paypal-monthly"></div>
          </div>
        </div>

        {/* 3 MONTH */}
        <div style={card}>
          <h2 style={planTitle}>3-Month Plan (Save 10%)</h2>
          <p style={price}>$135</p>

          <ul style={list}>
            <li>Everything in monthly plan</li>
            <li>3 months of support</li>
            <li>Priority adjustments</li>
          </ul>

          <div style={paypalWrapper}>
            <div id="paypal-3month"></div>
          </div>
        </div>
      </div>

      <p style={secure}>🔒 Secure checkout powered by PayPal</p>
    </div>
  );
}

/* ================= STYLES ================= */

const page = {
  fontFamily: "Arial, sans-serif",
  background: "#eef6fb",
  minHeight: "100vh",
  padding: "40px 20px",
  textAlign: "center",
};

const header = {
  fontSize: "36px",
  color: "#1f3c46",
  marginBottom: "10px",
};

const subheader = {
  color: "#6c7a86",
  marginBottom: "10px",
};

const urgency = {
  color: "#d9534f",
  fontWeight: "600",
  marginBottom: "25px",
};

const grid = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

const card = {
  background: "#f9fcfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "25px",
  width: "320px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
};

const planTitle = {
  color: "#1f3c46",
  fontSize: "26px",
  fontWeight: "800",
  marginBottom: "5px",
};

const price = {
  color: "#7fb8a4",
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "15px",
};

const list = {
  textAlign: "left",
  color: "#5f6b75",
  marginBottom: "20px",
  lineHeight: "1.6",
};

const paypalWrapper = {
  background: "#ffffff",
  padding: "12px",
  borderRadius: "12px",
};

const secure = {
  marginTop: "30px",
  color: "#6c7a86",
  fontSize: "13px",
};