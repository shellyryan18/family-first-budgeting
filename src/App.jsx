export default function App() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(180deg, #eef6fb 0%, #f8fcfd 100%)",
      color: "#2f3e46",
      minHeight: "100vh",
    }}>

      {/* HEADER */}
      <header style={{
        background: "rgba(255,255,255,0.92)",
        borderBottom: "1px solid #d6e6ef",
        padding: "20px 0",
        boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(8px)",
      }}>
        <div style={{
          width: "90%",
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          <div>
            <h1 style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: "900",
              color: "#1f3c46",
              background: "linear-gradient(135deg, #dff3ec 0%, #edf9f4 100%)",
              padding: "10px 16px",
              borderRadius: "14px",
              boxShadow: "0 6px 18px rgba(95,143,163,0.12)",
            }}>
              Family First Budgeting
            </h1>

            <p style={{
              margin: "8px 0 0",
              fontStyle: "italic",
              color: "#6c7a86",
              fontSize: "14px",
              fontWeight: "600",
            }}>
              Fighting the economy, one family at a time
            </p>
          </div>

          <a href="#contact" style={{
            background: "linear-gradient(135deg, #7fb8a4 0%, #6fae99 100%)",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "700",
          }}>
            Get Started
          </a>

        </div>
      </header>

      {/* HERO */}
      <main>
        <section style={{
          width: "90%",
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "80px 0",
        }}>

          <h2 style={{
            fontSize: "46px",
            lineHeight: 1.1,
            color: "#1f3c46",
            maxWidth: "700px",
          }}>
            Helping families feel less overwhelmed and more in control of their money.
          </h2>

          <p style={{
            fontSize: "18px",
            color: "#5f6b75",
            maxWidth: "600px",
            marginTop: "15px",
          }}>
            I help you organize bills, build a realistic budget, and create a plan that actually works for your real life.
          </p>

          <div style={{ marginTop: "25px", display: "flex", gap: "12px" }}>
            <a href="#services" style={buttonPrimary}>View Services</a>
            <a href="#contact" style={buttonSecondary}>Contact Me</a>
          </div>

          <div style={promoBox}>
            🎉 First 5 clients get ONE MONTH of budgeting help FREE
          </div>

        </section>

        {/* SERVICES */}
        <section id="services" style={{ padding: "60px 0" }}>
          <div style={container}>
            <h3 style={sectionTitle}>How I can help</h3>

            <div style={grid}>
              <Card title="Budget Setup" items={["Income breakdown", "Expense tracking", "Simple plan"]} />
              <Card title="Bill Organization" items={["Due dates", "Priority planning", "Clear structure"]} />
              <Card title="Ongoing Support" items={["Check-ins", "Goal tracking", "Accountability"]} />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "60px 0" }}>
          <div style={container}>
            <div style={contactBox}>

              <h3>Ready to get started?</h3>

              <form action="https://formspree.io/f/myklprdd" method="POST" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input type="text" name="name" placeholder="Your Name" required style={inputStyle}/>
                <input type="email" name="email" placeholder="Your Email" required style={inputStyle}/>
                <textarea name="message" placeholder="Tell me what you need help with" required style={inputStyle}/>
                <button type="submit" style={buttonPrimary}>Send Message</button>
              </form>

              <p style={{ marginTop: "15px" }}>
                MSullivan.FamilyFirstBudgeting@outlook.com
              </p>

            </div>
          </div>
        </section>

        {/* PRIVACY POLICY */}
        <section id="privacy" style={{
          width: "90%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "60px 0",
        }}>
          <div style={policyBox}>

            <h3 style={{ textAlign: "center" }}>Privacy Policy</h3>
            <p style={policyText}><strong>Effective Date:</strong> April 2026</p>

            <p style={policyText}>
              Family First Budgeting values your privacy. This policy explains how we collect, use, and protect your information.
            </p>

            <h4 style={policyHeading}>Information We Collect</h4>
            <p style={policyText}>
              We may collect your name, email, and any information submitted through our contact form.
            </p>

            <h4 style={policyHeading}>How We Use Your Information</h4>
            <p style={policyText}>
              We use your information to respond to you, provide services, and communicate with you.
            </p>

            <p style={policyText}>
              We do not sell or share your information for marketing purposes.
            </p>

            <h4 style={policyHeading}>Third-Party Services</h4>
            <p style={policyText}>
              We may use Formspree to process submissions.
            </p>

            <h4 style={policyHeading}>Data Security</h4>
            <p style={policyText}>
              We take reasonable steps to protect your data.
            </p>

            <h4 style={policyHeading}>Contact</h4>
            <p style={policyText}>
              MSullivan.FamilyFirstBudgeting@outlook.com
            </p>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={footer}>
        <p>
          Disclaimer: This service does not provide financial, legal, or tax advice.
        </p>

        <div style={{ marginTop: "10px" }}>
          <a href="#privacy">Privacy Policy</a> |{" "}
          <a href="#contact">Contact</a>
        </div>
      </footer>

    </div>
  );
}

/* STYLES */
const container = { width: "90%", maxWidth: "1100px", margin: "0 auto" };
const sectionTitle = { fontSize: "30px", marginBottom: "20px" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: "20px" };

const buttonPrimary = {
  background: "#7fb8a4",
  color: "#fff",
  padding: "10px 16px",
  borderRadius: "10px",
  textDecoration: "none",
};

const buttonSecondary = {
  border: "1px solid #ccc",
  padding: "10px 16px",
  borderRadius: "10px",
  textDecoration: "none",
};

const promoBox = {
  marginTop: "20px",
  padding: "15px",
  background: "#dff3ec",
  borderRadius: "12px",
  fontWeight: "bold",
};

const contactBox = {
  background: "#5f8fa3",
  color: "#fff",
  padding: "25px",
  borderRadius: "15px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
};

const policyBox = {
  background: "#fff",
  padding: "25px",
  borderRadius: "15px",
};

const policyHeading = {
  textAlign: "center",
  marginTop: "20px",
};

const policyText = {
  textAlign: "center",
};

const footer = {
  textAlign: "center",
  padding: "20px",
  fontSize: "12px",
};
function Card({ title, items }) {
  return (
    <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
      <h4>{title}</h4>
      <ul>
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}