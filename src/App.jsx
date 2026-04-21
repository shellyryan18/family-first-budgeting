export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(180deg, #eef6fb 0%, #f8fcfd 100%)",
        color: "#2f3e46",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "rgba(255,255,255,0.92)",
          borderBottom: "1px solid #d6e6ef",
          padding: "20px 0",
          boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1120px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
                fontWeight: "900",
                color: "#1f3c46",
                background: "linear-gradient(135deg, #dff3ec 0%, #edf9f4 100%)",
                padding: "10px 16px",
                borderRadius: "14px",
                display: "inline-block",
                boxShadow: "0 6px 18px rgba(95,143,163,0.12)",
              }}
            >
              Family First Budgeting
            </h1>

            <p
              style={{
                margin: "8px 0 0",
                fontStyle: "italic",
                color: "#6c7a86",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Fighting the economy, one family at a time
            </p>
          </div>

          <a href="#contact" style={headerButton}>
            Contact Me
          </a>
        </div>
      </header>

      <main>
        <section
          style={{
            width: "90%",
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "80px 0",
          }}
        >
          <h2
            style={{
              fontSize: "46px",
              lineHeight: 1.1,
              color: "#1f3c46",
              maxWidth: "700px",
              marginBottom: "18px",
            }}
          >
            Helping families feel less overwhelmed and more in control of their
            money.
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#5f6b75",
              maxWidth: "620px",
              marginTop: 0,
              lineHeight: 1.7,
            }}
          >
            I help you organize bills, build a realistic budget, and create a
            plan that actually works for your real life.
          </p>

          <div
            style={{
              marginTop: "26px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a href="#services" style={primaryButton}>
              View Services
            </a>

            <a href="#contact" style={secondaryButton}>
              Ask a Question
            </a>

            <<a
  href="PASTE_YOUR_GOOGLE_FORM_LINK_HERE"
  target="_blank"
  rel="noopener noreferrer"
  style={primaryButton}
>
  Get Started Now
</a>

          <p
            style={{
              fontSize: "13px",
              color: "#6c7a86",
              marginTop: "8px",
            }}
          >
            Ready to move forward? Start your budget plan today.
          </p>

          <div style={promoBox}>
            🎉 Limited Time: First 5 clients get one month of budgeting help
            free
          </div>

          <p
            style={{
              marginTop: "18px",
              fontSize: "14px",
              color: "#6c7a86",
              fontWeight: "600",
            }}
          >
            ✔ No judgment • ✔ Simple plans • ✔ Built for real life
          </p>
        </section>

        <section id="services" style={{ padding: "20px 0 80px" }}>
          <div style={container}>
            <div
              style={{
                textAlign: "center",
                maxWidth: "720px",
                margin: "0 auto 36px",
              }}
            >
              <p style={eyebrow}>Services</p>
              <h3 style={sectionTitle}>How I can help</h3>
              <p style={sectionText}>
                Practical support for people who want to feel more organized,
                less stressed, and more confident about their finances.
              </p>
            </div>

            <div style={grid}>
              <Card
                title="Budget Setup"
                items={[
                  "Income breakdown",
                  "Expense tracking",
                  "Simple plan",
                ]}
              />
              <Card
                title="Bill Organization"
                items={[
                  "Due dates",
                  "Priority planning",
                  "Clear structure",
                ]}
              />
              <Card
                title="Ongoing Support"
                items={[
                  "Check-ins",
                  "Goal tracking",
                  "Accountability",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          style={{
            width: "90%",
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "0 0 70px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <div style={aboutCard}>
            <p style={eyebrow}>About</p>
            <h3 style={{ color: "#1f3c46", marginTop: 0, fontSize: "32px" }}>
              Why Family First Budgeting?
            </h3>

            <p style={bodyText}>
              Built from real-life experience helping families manage bills,
              stress, and everyday finances.
            </p>

            <p style={bodyText}>
              With an Associate&apos;s degree in Business Management and hands-on
              budgeting experience, my goal is to help families create realistic
              plans that feel simple, clear, and manageable.
            </p>
          </div>

          <div id="contact" style={contactCard}>
            <p style={contactEyebrow}>Contact</p>

            <h3 style={{ marginTop: 0, fontSize: "32px" }}>
              Have questions first?
            </h3>

            <p style={{ fontWeight: "bold", lineHeight: 1.6, fontSize: "16px" }}>
              🎉 First 5 clients receive one full month of budgeting support
              free
            </p>

            <p
              style={{
                color: "#eaf6fb",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Not ready to fully commit yet? Send me a message here and I’ll be
              happy to answer your questions.
            </p>

            <form
              action="https://formspree.io/f/myklprdd"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Website Contact Form Submission"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Tell me what you need help with"
                required
                rows="5"
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <button type="submit" style={submitButton}>
                Send Message
              </button>
            </form>

            <p style={{ marginTop: "20px", lineHeight: 1.7 }}>
              <strong>Email:</strong>{" "}
              MSullivan.FamilyFirstBudgeting@outlook.com
            </p>

            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              Follow for tips and updates:
            </p>

            <a
              href="https://www.facebook.com/FamilyFirstBudgeting/"
              target="_blank"
              rel="noopener noreferrer"
              style={facebookButton}
            >
              Follow on Facebook
            </a>
          </div>
        </section>

        <section
          id="privacy"
          style={{
            width: "90%",
            maxWidth: "820px",
            margin: "0 auto",
            padding: "10px 0 70px",
          }}
        >
          <div style={privacyCard}>
            <h3 style={privacyTitle}>Privacy Policy</h3>

            <p style={privacyDate}>Effective Date: April 2026</p>

            <p style={policyText}>
              Family First Budgeting (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) values your privacy. This Privacy Policy explains
              how we collect, use, and protect your information when you use our
              website.
            </p>

            <h4 style={policyHeading}>Information We Collect</h4>
            <p style={policyText}>
              We may collect your name, email address, and any information you
              submit through our forms.
            </p>

            <h4 style={policyHeading}>How We Use Your Information</h4>
            <p style={policyText}>
              We use your information to respond to your inquiries, provide
              budgeting services, and communicate with you regarding your
              request.
            </p>

            <h4 style={policyHeading}>Third-Party Services</h4>
            <p style={policyText}>
              We may use services like Formspree to process submissions.
            </p>

            <h4 style={policyHeading}>Contact</h4>
            <p style={{ ...policyText, marginBottom: 0 }}>
              MSullivan.FamilyFirstBudgeting@outlook.com
            </p>
          </div>
        </section>
      </main>

      <footer style={footer}>
        <p style={{ maxWidth: "900px", margin: "0 auto", lineHeight: 1.7 }}>
          Disclaimer: Family First Budgeting provides budgeting support and
          general financial organization guidance only. This service does not
          constitute financial, legal, tax, or investment advice.
        </p>

        <div style={footerLinks}>
          <a href="#contact" style={footerLink}>
            Contact
          </a>
          <a href="#privacy" style={footerLink}>
            Privacy Policy
          </a>
          <a
            href="https://www.facebook.com/FamilyFirstBudgeting/"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            Facebook
          </a>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div style={serviceCard}>
      <h4
        style={{
          color: "#1f3c46",
          marginTop: 0,
          marginBottom: "10px",
          fontSize: "22px",
        }}
      >
        {title}
      </h4>
      <ul style={{ color: "#5f6b75", lineHeight: 1.85, paddingLeft: "20px" }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const container = {
  width: "90%",
  maxWidth: "1120px",
  margin: "0 auto",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "22px",
};

const primaryButton = {
  background: "linear-gradient(135deg, #7fb8a4 0%, #6fae99 100%)",
  color: "#fff",
  padding: "13px 20px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  boxShadow: "0 8px 20px rgba(127,184,164,0.26)",
};

const secondaryButton = {
  border: "1px solid #cfe3ed",
  background: "#ffffff",
  color: "#2f3e46",
  padding: "13px 20px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
};

const headerButton = {
  background: "linear-gradient(135deg, #7fb8a4 0%, #6fae99 100%)",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  boxShadow: "0 8px 20px rgba(127,184,164,0.28)",
};

const promoBox = {
  marginTop: "24px",
  background: "linear-gradient(135deg, #dff3ec 0%, #edf9f4 100%)",
  border: "1px solid #9fd0bf",
  padding: "18px 20px",
  borderRadius: "18px",
  maxWidth: "560px",
  fontWeight: "800",
  color: "#23404a",
  boxShadow: "0 10px 22px rgba(127,184,164,0.14)",
};

const eyebrow = {
  textTransform: "uppercase",
  letterSpacing: "2px",
  color: "#6c7a86",
  fontSize: "13px",
  fontWeight: "700",
  marginBottom: "10px",
};

const sectionTitle = {
  fontSize: "38px",
  color: "#1f3c46",
  margin: "0 0 12px",
};

const sectionText = {
  color: "#5f6b75",
  fontSize: "17px",
  lineHeight: 1.75,
  margin: 0,
};

const aboutCard = {
  background: "#ffffff",
  padding: "32px",
  borderRadius: "24px",
  border: "1px solid #d6e6ef",
  boxShadow: "0 12px 28px rgba(31,60,70,0.06)",
};

const contactCard = {
  background: "linear-gradient(180deg, #5f8fa3 0%, #537f91 100%)",
  color: "#fff",
  padding: "32px",
  borderRadius: "24px",
  boxShadow: "0 14px 30px rgba(95,143,163,0.22)",
};

const contactEyebrow = {
  textTransform: "uppercase",
  letterSpacing: "2px",
  color: "#d9edf5",
  fontSize: "13px",
  fontWeight: "700",
  marginBottom: "10px",
};

const inputStyle = {
  padding: "13px",
  borderRadius: "12px",
  border: "none",
  fontSize: "15px",
  outline: "none",
};

const submitButton = {
  background: "linear-gradient(135deg, #7fb8a4 0%, #6fae99 100%)",
  color: "#fff",
  padding: "13px",
  borderRadius: "12px",
  border: "none",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
  boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
};

const facebookButton = {
  display: "inline-block",
  marginTop: "10px",
  background: "#7fb8a4",
  color: "#fff",
  padding: "10px 16px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  boxShadow: "0 8px 18px rgba(0,0,0,0.14)",
};

const privacyCard = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 12px 28px rgba(31,60,70,0.06)",
};

const privacyTitle = {
  textAlign: "center",
  margin: "0 0 10px",
  fontSize: "32px",
  color: "#1f3c46",
};

const privacyDate = {
  textAlign: "center",
  fontSize: "14px",
  color: "#6c7a86",
  marginBottom: "24px",
};

const policyHeading = {
  color: "#1f3c46",
  fontSize: "20px",
  marginTop: "22px",
  marginBottom: "10px",
  textAlign: "center",
};

const policyText = {
  color: "#5f6b75",
  lineHeight: 1.8,
  fontSize: "15px",
  textAlign: "center",
};

const serviceCard = {
  background: "#ffffff",
  padding: "26px",
  borderRadius: "24px",
  border: "1px solid #d6e6ef",
  boxShadow: "0 12px 28px rgba(31,60,70,0.05)",
};

const bodyText = {
  lineHeight: 1.8,
  color: "#5f6b75",
  fontSize: "16px",
};

const footer = {
  marginTop: "10px",
  padding: "22px 20px",
  background: "#f4f9fb",
  textAlign: "center",
  fontSize: "12px",
  color: "#6c7a86",
  borderTop: "1px solid #d6e6ef",
};

const footerLinks = {
  marginTop: "12px",
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  flexWrap: "wrap",
};

const footerLink = {
  color: "#6c7a86",
  textDecoration: "underline",
};