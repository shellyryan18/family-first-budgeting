export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#eef6fb",
        color: "#2f3e46",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #d6e6ef",
          padding: "22px 0",
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
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
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
                fontWeight: "900",
                color: "#23404a",
                letterSpacing: "0.4px",
                background: "#dff3ec",
                padding: "8px 14px",
                borderRadius: "12px",
                display: "inline-block",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
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

          <a
            href="#contact"
            style={{
              background: "#7fb8a4",
              color: "#fff",
              padding: "12px 18px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "700",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
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
            padding: "80px 0 70px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#6c7a86",
              fontSize: "13px",
              fontWeight: "bold",
              marginBottom: "12px",
            }}
          >
            Simple budgeting support for real life
          </p>

          <h2
            style={{
              fontSize: "46px",
              maxWidth: "760px",
              marginTop: "10px",
              marginBottom: "18px",
              lineHeight: 1.15,
              color: "#23404a",
            }}
          >
            Helping families feel less overwhelmed and more in control of their money.
          </h2>

          <p
            style={{
              maxWidth: "690px",
              fontSize: "19px",
              lineHeight: 1.7,
              color: "#5f6b75",
              marginBottom: "24px",
            }}
          >
            Family First Budgeting helps individuals and families organize bills,
            build realistic monthly budgets, and create a plan that actually works
            in everyday life.
          </p>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #d6e6ef",
              borderRadius: "20px",
              padding: "24px",
              maxWidth: "700px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                margin: 0,
                color: "#2f3e46",
                lineHeight: 1.9,
                fontSize: "17px",
              }}
            >
              ✔ Feeling overwhelmed by bills?<br />
              ✔ Living paycheck to paycheck?<br />
              ✔ Not sure where your money is going?<br />
              ✔ Need a simple plan that feels realistic?
            </p>

            <p
              style={{
                marginTop: "16px",
                marginBottom: 0,
                color: "#5f6b75",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              I help you organize your finances in a way that feels clear, doable,
              and built for your real life.
            </p>
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#services"
              style={{
                background: "#7fb8a4",
                color: "#fff",
                padding: "13px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              View Services
            </a>

            <a
              href="#contact"
              style={{
                border: "1px solid #cfe3ed",
                background: "#ffffff",
                color: "#2f3e46",
                padding: "13px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Contact Me
            </a>
          </div>
        </section>

        <section
          id="services"
          style={{
            background: "#ffffff",
            borderTop: "1px solid #d6e6ef",
            borderBottom: "1px solid #d6e6ef",
            padding: "75px 0",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#6c7a86",
                fontSize: "13px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Services
            </p>

            <h3
              style={{
                fontSize: "36px",
                marginTop: 0,
                marginBottom: "12px",
                color: "#23404a",
              }}
            >
              How I can help
            </h3>

            <p
              style={{
                color: "#5f6b75",
                maxWidth: "680px",
                fontSize: "17px",
                lineHeight: 1.7,
              }}
            >
              Practical support for people who want to feel more organized, less
              stressed, and more confident about their finances.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                marginTop: "32px",
              }}
            >
              <Card
                title="Budget Setup"
                items={[
                  "Review monthly income",
                  "Break down expenses clearly",
                  "Build a realistic spending plan",
                ]}
              />
              <Card
                title="Bill Organization"
                items={[
                  "Sort due dates and priorities",
                  "Create a clearer payment plan",
                  "Reduce financial overwhelm",
                ]}
              />
              <Card
                title="Ongoing Support"
                items={[
                  "Budget check-ins",
                  "Goal tracking and encouragement",
                  "Simple accountability and support",
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
            padding: "75px 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              padding: "32px",
              borderRadius: "24px",
              border: "1px solid #d6e6ef",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#6c7a86",
                fontSize: "13px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              About
            </p>

            <h3
              style={{
                fontSize: "34px",
                marginTop: 0,
                marginBottom: "14px",
                color: "#23404a",
              }}
            >
              Why Family First Budgeting?
            </h3>

            <p style={{ color: "#5f6b75", lineHeight: 1.8, fontSize: "16px" }}>
              This business was built from real-life experience managing household
              finances, medical bills, and the everyday pressure families face when
              every dollar matters.
            </p>

            <p style={{ color: "#5f6b75", lineHeight: 1.8, fontSize: "16px" }}>
              With an Associate&apos;s degree in Business Management and hands-on
              budgeting experience, my goal is to help families create realistic
              financial plans that feel simple, clear, and manageable.
            </p>
          </div>

          <div
            id="contact"
            style={{
              background: "#5f8fa3",
              color: "#fff",
              padding: "32px",
              borderRadius: "24px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#d9edf5",
                fontSize: "13px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Contact
            </p>

            <h3
              style={{
                fontSize: "34px",
                marginTop: 0,
                marginBottom: "14px",
              }}
            >
              Ready to get started?
            </h3>

            <p
              style={{
                color: "#eaf6fb",
                lineHeight: 1.7,
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              Fill out the form below and I’ll get back to you as soon as I can.
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
                  padding: "13px",
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
                  padding: "13px",
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
                  padding: "13px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#7fb8a4",
                  color: "#fff",
                  padding: "13px",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                Send Message
              </button>
            </form>

            <p style={{ marginTop: "20px", fontSize: "15px" }}>
              <strong>Email:</strong> MSullivan.FamilyFirstBudgeting@outlook.com
            </p>

            <p
              style={{
                marginTop: "28px",
                fontSize: "14px",
                color: "#d9edf5",
                lineHeight: 1.6,
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
        background: "#dff3ec",
        padding: "24px",
        borderRadius: "24px",
        border: "1px solid #cfe3ed",
        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      }}
    >
      <h4
        style={{
          marginTop: 0,
          marginBottom: "14px",
          fontSize: "22px",
          color: "#23404a",
        }}
      >
        {title}
      </h4>

      <ul
        style={{
          paddingLeft: "20px",
          color: "#5f6b75",
          lineHeight: 1.9,
          marginBottom: 0,
          fontSize: "16px",
        }}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}