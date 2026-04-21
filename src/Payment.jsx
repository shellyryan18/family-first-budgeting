import { useEffect } from "react";

export default function Payment() {
  useEffect(() => {
    const scriptId = "paypal-hosted-buttons-sdk";

    const renderButtons = () => {
      if (!window.paypal || !window.paypal.HostedButtons) return;

      // MONTHLY BUTTON
      if (
        document.getElementById("paypal-container-monthly") &&
        !document.getElementById("paypal-container-monthly").hasChildNodes()
      ) {
        window.paypal
          .HostedButtons({
            hostedButtonId: "MUJ2HRPYMBQ7Q",
          })
          .render("#paypal-container-monthly");
      }

      // 3-MONTH BUTTON
      if (
        document.getElementById("paypal-container-3month") &&
        !document.getElementById("paypal-container-3month").hasChildNodes()
      ) {
        window.paypal
          .HostedButtons({
            hostedButtonId: "RXQX8NU5GSLM4",
          })
          .render("#paypal-container-3month");
      }
    };

    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      renderButtons();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAf1lH5KtGCcavkfw0oCuJI3ZiXLJi5UvvcP4qr9HI53qh9NiR-6Sdb1DIOz0SsVziW-1d2tdePVrwmdE&components=hosted-buttons&enable-funding=venmo&currency=USD";
    script.async = true;
    script.onload = renderButtons;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={page}>
      <div style={container}>
        <h1 style={title}>Choose Your Plan</h1>

        <p style={subtitle}>
          You're one step away from getting your budget organized and under
          control.
        </p>

        {/* MONTHLY PLAN */}
        <div style={card}>
          <h2>Monthly Plan</h2>
          <p style={price}>$50</p>

          <ul style={list}>
            <li>Full monthly budget setup</li>
            <li>Bill organization</li>
            <li>Paycheck planning</li>
            <li>Custom plan for your situation</li>
          </ul>

          <div id="paypal-container-monthly" />
        </div>

        {/* 3-MONTH PLAN */}
        <div
          style={{
            ...card,
            marginTop: "30px",
            border: "2px solid #7fb8a4",
          }}
        >
          <h2>3-Month Plan (Save 10%)</h2>
          <p style={price}>$135</p>

          <ul style={list}>
            <li>Everything in monthly plan</li>
            <li>3 months of support</li>
            <li>Consistency & accountability</li>
            <li>Save $15</li>
          </ul>

          <div id="paypal-container-3month" />
        </div>

        <p style={small}>
          No long-term contracts. Continue only if it’s helping you.
        </p>
      </div>
    </div>
  );
}

const page = {
  fontFamily: "Arial, sans-serif",
  minHeight: "100vh",
  background: "#eef6fb",
  padding: "40px 20px",
  textAlign: "center",
};

const container = {
  maxWidth: "700px",
  margin: "0 auto",
  background: "#ffffff",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  border: "1px solid #d6e6ef",
};

const title = {
  color: "#1f3c46",
};

const subtitle = {
  color: "#5f6b75",
  marginBottom: "30px",
};

const card = {
  background: "#f9fcfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "20px",
};

const price = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#7fb8a4",
};

const list = {
  textAlign: "left",
  marginBottom: "20px",
  color: "#5f6b75",
  lineHeight: "1.8",
};

const small = {
  marginTop: "25px",
  fontSize: "13px",
  color: "#6c7a86",
};