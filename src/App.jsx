export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#eef6fb", color: "#2f3e46", minHeight: "100vh" }}>
      
      <header style={{ background: "#ffffff", borderBottom: "1px solid #d6e6ef", padding: "22px 0", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
        <div style={{ width: "90%", maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          
          <div>
            <h1 style={{ margin: 0, fontSize: "32px", fontWeight: "900", color: "#23404a", background: "#dff3ec", padding: "8px 14px", borderRadius: "12px" }}>
              Family First Budgeting
            </h1>

            <p style={{ margin: "8px 0 0", fontStyle: "italic", color: "#6c7a86", fontSize: "14px", fontWeight: "600" }}>
              Fighting the economy, one family at a time
            </p>
          </div>

          <a href="#contact" style={{ background: "#7fb8a4", color: "#fff", padding: "12px 18px", borderRadius: "12px", textDecoration: "none", fontWeight: "700" }}>
            Get Started
          </a>

        </div>
      </header>

      <main>

        <section style={{ width: "90%", maxWidth: "1100px", margin: "0 auto", padding: "80px 0" }}>
          
          <h2 style={{ fontSize: "44px", maxWidth: "700px", marginTop: "10px", color: "#23404a" }}>
            Helping families feel less overwhelmed and more in control of their money.
          </h2>

          <p style={{ maxWidth: "650px", fontSize: "18px", lineHeight: 1.6, color: "#5f6b75" }}>
            I help you organize bills, build a realistic budget, and create a plan that actually works for your real life.
          </p>

          <p style={{ fontWeight: "bold", marginTop: "20px" }}>
            ✔ Feeling overwhelmed with bills? <br />
            ✔ Living paycheck to paycheck? <br />
            ✔ Not sure where your money is going? <br /><br />
            I help you create a simple plan that actually works.
          </p>

          <div style={{ marginTop: "25px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#services" style={{ background: "#7fb8a4", color: "#fff", padding: "12px 18px", borderRadius: "12px", textDecoration: "none" }}>
              View Services
            </a>

            <a href="#contact" style={{ border: "1px solid #cfe3ed", background: "#fff", color: "#2f3e46", padding: "12px 18px", borderRadius: "12px", textDecoration: "none" }}>
              Contact Me
            </a>
          </div>

          <div style={{ marginTop: "25px", background: "#dff3ec", border: "2px solid #7fb8a4", padding: "18px", borderRadius: "16px", maxWidth: "500px", fontWeight: "700", color: "#23404a" }}>
            🎉 LIMITED TIME: First 5 clients get ONE MONTH of budgeting help FREE
          </div>

          <p style={{ marginTop: "18px", fontSize: "14px", color: "#6c7a86" }}>
            ✔ No judgment • ✔ Simple plans • ✔ Built for real life
          </p>

        </section>

        <section id="services" style={{ background: "#ffffff", borderTop: "1px solid #d6e6ef", borderBottom: "1px solid #d6e6ef", padding: "70px 0" }}>
          <div style={{ width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
            
            <h3 style={{ fontSize: "34px", color: "#23404a" }}>How I can help</h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginTop: "30px" }}>
              <Card title="Budget Setup" items={["Income breakdown", "Expense tracking", "Simple plan"]} />
              <Card title="Bill Organization" items={["Due dates", "Priority planning", "Clear structure"]} />
              <Card title="Ongoing Support" items={["Check-ins", "Goal tracking", "Accountability"]} />
            </div>

          </div>
        </section>

        <section style={{ width: "90%", maxWidth: "1100px", margin: "0 auto", padding: "70px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>

          <div style={{ background: "#ffffff", padding: "30px", borderRadius: "24px", border: "1px solid #d6e6ef" }}>
            <h3>Why Family First Budgeting?</h3>
            <p>
              Built from real-life experience helping families manage bills, stress, and everyday finances.
            </p>
          </div>

          <div id="contact" style={{ background: "#5f8fa3", color: "#fff", padding: "30px", borderRadius: "24px" }}>
            
            <h3>Ready to get started?</h3>

            <p style={{ fontWeight: "bold" }}>
              🎉 First 5 clients receive one full month of budgeting support FREE
            </p>

            <form action="https://formspree.io/f/myklprdd" method="POST" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
              
              <input type="text" name="name" placeholder="Your Name" required style={{ padding: "12px", borderRadius: "10px", border: "none" }} />
              
              <input type="email" name="email" placeholder="Your Email" required style={{ padding: "12px", borderRadius: "10px", border: "none" }} />

              <input type="text" name="biggest_struggle" placeholder="What is your biggest struggle with money right now?" required style={{ padding: "12px", borderRadius: "10px", border: "none" }} />

              <textarea name="message" placeholder="Tell me what you need help with" required rows="5" style={{ padding: "12px", borderRadius: "10px", border: "none" }} />

              <button type="submit" style={{ background: "#7fb8a4", color: "#fff", padding: "12px", borderRadius: "10px", border: "none", fontWeight: "bold" }}>
                Send Message
              </button>
            </form>

            <p style={{ marginTop: "20px" }}>
              <strong>Email:</strong> MSullivan.FamilyFirstBudgeting@outlook.com
            </p>

            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              Follow for tips and updates:
            </p>

            <a
              href="https://www.facebook.com/FamilyFirstBudgeting/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "10px",
                background: "#7fb8a4",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Follow on Facebook
            </a>

          </div>
        </section>

      </main>

      {/* DISCLAIMER FOOTER */}
      <footer style={{
        marginTop: "40px",
        padding: "20px",
        background: "#f4f9fb",
        textAlign: "center",
        fontSize: "12px",
        color: "#6c7a86",
        borderTop: "1px solid #d6e6ef"
      }}>
        <p>
          Disclaimer: Family First Budgeting provides budgeting support and general financial organization guidance only.
          This service does not constitute financial, legal, tax, or investment advice.
        </p>
      </footer>

    </div>
  );
}

function Card({ title, items }) {
  return (
    <div style={{ background: "#dff3ec", padding: "24px", borderRadius: "24px", border: "1px solid #cfe3ed" }}>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}