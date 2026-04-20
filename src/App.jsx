export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f7f4ef",
        color: "#2f2a24",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #ddd",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 style={{ margin: 0 }}>Family First Budgeting</h1>
            <p
              style={{
                margin: "6px 0 0",
                fontStyle: "italic",
                color: "#6b6258",
              }}
            >
              Fighting the economy, one family at a time
            </p>
          </div>

          <a
            href="#contact"
            style={{
              background: "#2f2a24",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: "12px",
              textDecoration: "none",
            }}
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section
          style={{
            width: "90%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "70px 0",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#7a7066",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            Simple. Realistic. Judgment-free.
          </p>

          <h2
            style={{
              fontSize: "44px",
              maxWidth: "700px",
              marginTop: "10px",
            }}
          >
            Budget help for real families living in a changing economy.
          </h2>

          <p
            style={{
              maxWidth: "650px",
              fontSize: "18px",
              lineHeight: 1.6,
              color: "#5f564d",
            }}
          >
            Family First Budgeting helps individuals and families organize
            bills, build realistic monthly budgets, and create a plan that
            actually fits real life.
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#services"
              style={{
                background: "#2f2a24",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              View Services
            </a>

            <a
              href="#contact"
              style={{
                border: "1px solid #bbb",
                background: "#fff",
                color: "#2f2a24",
                padding: "12px 18px",
                borderRadius: "12px",
                textDecoration: "none",
              }}
            >
              Contact Me
            </a>
          </div>
        </section>

        <section
          id="services"
          style={{
            background: "#fff",
            borderTop: "1px solid #ddd",
            borderBottom: "1px solid #ddd",
            padding: "70px 0",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <h3 style={{ fontSize: "34px" }}>What I help with</h3>

            <p
              style={{
                color: "#5f564d",
                maxWidth: "650px",
              }}
            >
              Practical help for people who want to feel more organized and
              less overwhelmed.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginTop: "30px",
              }}
            >
              <Card
                title="Budget Setup"
                items={[
                  "Monthly income review",
                  "Expense breakdown",
                  "Simple spending plan",
                ]}
              />

              <Card
                title="Bill Planning"
                items={[
                  "Due date organization",
                  "Priority planning",
                  "Basic payment strategy",
                ]}
              />

              <Card
                title="Ongoing Support"
                items={[
                  "Budget check-ins",
                  "Goal tracking",
                  "Encouragement and accountability",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          style={{
            width: "90%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "70px 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "24px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ fontSize: "32px", marginTop: 0 }}>
              Why Family First Budgeting?
            </h3>

            <p style={{ color: "#5f564d", lineHeight: 1.7 }}>
              Built from real-life experience managing household finances,
              medical bills, and the day-to-day pressure families face when
              every dollar matters.
            </p>

            <p style={{ color: "#5f564d", lineHeight: 1.7 }}>
              With an Associate&apos;s degree in Business Management and
              hands-on budgeting experience, this service is designed to help
              families create realistic plans that work in everyday life.
            </p>
          </div>

          <div
            id="contact"
            style={{
              background: "#2f2a24",
              color: "#fff",
              padding: "30px",
              borderRadius: "24px",
            }}
          >
            <h3 style={{ fontSize: "32px", marginTop: 0 }}>
              Ready to get started?
            </h3>

            <p style={{ color: "#e6ddd2", lineHeight: 1.7 }}>
              Fill out the form below and I’ll get back to you.
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
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                }}
              />

              <textarea
                name="message"
                placeholder="Tell me what you need help with"
                required
                rows="5"
                style={{
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#fff",
                  color: "#2f2a24",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>

            <p style={{ marginTop: "20px" }}>
              <strong>Email:</strong> MSullivan.FamilyFirstBudgeting@outlook.com
            </p>

            <p
              style={{
                marginTop: "28px",
                fontSize: "14px",
                color: "#d0c5b8",
              }}
            >
              Budget coaching only. Not financial, tax, legal, or investment
              advice.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div
      style={{
        background: "#f7f4ef",
        padding: "24px",
        borderRadius: "24px",
        border: "1px solid #ddd",
      }}
    >
      <h4 style={{ marginTop: 0 }}>{title}</h4>
      <ul
        style={{
          paddingLeft: "20px",
          color: "#5f564d",
          lineHeight: 1.8,
        }}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}