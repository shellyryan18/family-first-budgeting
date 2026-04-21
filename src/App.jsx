import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

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
                color: "#23404a",
                background: "#dff3ec",
                padding: "8px 14px",
                borderRadius: "12px",
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

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setPage("home")}
              style={{
                background: page === "home" ? "#7fb8a4" : "#ffffff",
                color: page === "home" ? "#fff" : "#23404a",
                padding: "12px 18px",
                borderRadius: "12px",
                border: "1px solid #cfe3ed",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Home
            </button>

            <button
              onClick={() => setPage("budgetForm")}
              style={{
                background: page === "budgetForm" ? "#7fb8a4" : "#ffffff",
                color: page === "budgetForm" ? "#fff" : "#23404a",
                padding: "12px 18px",
                borderRadius: "12px",
                border: "1px solid #cfe3ed",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Budget Form
            </button>

            <a
              href="#contact"
              onClick={() => setPage("home")}
              style={{
                background: "#7fb8a4",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {page === "home" ? (
        <main>
          <section
            style={{
              width: "90%",
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "80px 0",
            }}
          >
            <h2
              style={{
                fontSize: "44px",
                maxWidth: "700px",
                marginTop: "10px",
                color: "#23404a",
              }}
            >
              Helping families feel less overwhelmed and more in control of their
              money.
            </h2>

            <p
              style={{
                maxWidth: "650px",
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#5f6b75",
              }}
            >
              I help you organize bills, build a realistic budget, and create a
              plan that actually works for your real life.
            </p>

            <p style={{ fontWeight: "bold", marginTop: "20px" }}>
              ✔ Feeling overwhelmed with bills? <br />
              ✔ Living paycheck to paycheck? <br />
              ✔ Not sure where your money is going? <br />
              <br />
              I help you create a simple plan that actually works.
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
                  background: "#7fb8a4",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                View Services
              </a>

              <button
                onClick={() => setPage("budgetForm")}
                style={{
                  border: "1px solid #cfe3ed",
                  background: "#fff",
                  color: "#2f3e46",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Fill Out Budget Form
              </button>

              <a
                href="#contact"
                style={{
                  border: "1px solid #cfe3ed",
                  background: "#fff",
                  color: "#2f3e46",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                Contact Me
              </a>
            </div>

            <div
              style={{
                marginTop: "25px",
                background: "#dff3ec",
                border: "2px solid #7fb8a4",
                padding: "18px",
                borderRadius: "16px",
                maxWidth: "500px",
                fontWeight: "700",
                color: "#23404a",
              }}
            >
              🎉 LIMITED TIME: First 5 clients get ONE MONTH of budgeting help
              FREE
            </div>

            <p style={{ marginTop: "18px", fontSize: "14px", color: "#6c7a86" }}>
              ✔ No judgment • ✔ Simple plans • ✔ Built for real life
            </p>
          </section>

          <section
            id="services"
            style={{
              background: "#ffffff",
              borderTop: "1px solid #d6e6ef",
              borderBottom: "1px solid #d6e6ef",
              padding: "70px 0",
            }}
          >
            <div
              style={{ width: "90%", maxWidth: "1100px", margin: "0 auto" }}
            >
              <h3 style={{ fontSize: "34px", color: "#23404a" }}>
                How I can help
              </h3>

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
                  items={["Income breakdown", "Expense tracking", "Simple plan"]}
                />
                <Card
                  title="Bill Organization"
                  items={["Due dates", "Priority planning", "Clear structure"]}
                />
                <Card
                  title="Ongoing Support"
                  items={["Check-ins", "Goal tracking", "Accountability"]}
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
                background: "#ffffff",
                padding: "30px",
                borderRadius: "24px",
                border: "1px solid #d6e6ef",
              }}
            >
              <h3>Why Family First Budgeting?</h3>
              <p>
                Built from real-life experience helping families manage bills,
                stress, and everyday finances.
              </p>

              <button
                onClick={() => setPage("budgetForm")}
                style={{
                  marginTop: "16px",
                  background: "#7fb8a4",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                Start Budget Intake Form
              </button>
            </div>

            <div
              id="contact"
              style={{
                background: "#5f8fa3",
                color: "#fff",
                padding: "30px",
                borderRadius: "24px",
              }}
            >
              <h3>Ready to get started?</h3>

              <p style={{ fontWeight: "bold" }}>
                🎉 First 5 clients receive one full month of budgeting support
                FREE
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
                  }}
                />

                <input
                  type="text"
                  name="biggest_struggle"
                  placeholder="What is your biggest struggle with money right now?"
                  required
                  style={{
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
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
                  }}
                />

                <button
                  type="submit"
                  style={{
                    background: "#7fb8a4",
                    color: "#fff",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Send Message
                </button>
              </form>

              <p style={{ marginTop: "20px" }}>
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
      ) : (
        <BudgetForm goHome={() => setPage("home")} />
      )}

      <footer
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#f4f9fb",
          textAlign: "center",
          fontSize: "12px",
          color: "#6c7a86",
          borderTop: "1px solid #d6e6ef",
        }}
      >
        <p>
          Disclaimer: Family First Budgeting provides budgeting support and
          general financial organization guidance only. This service does not
          constitute financial, legal, tax, or investment advice.
        </p>
      </footer>
    </div>
  );
}

function BudgetForm({ goHome }) {
  return (
    <main>
      <section
        style={{
          width: "90%",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "70px 0",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #d6e6ef",
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <div>
              <h2 style={{ fontSize: "36px", color: "#23404a", margin: 0 }}>
                Budget Intake Form
              </h2>
              <p
                style={{
                  color: "#5f6b75",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  marginTop: "10px",
                  maxWidth: "700px",
                }}
              >
                Fill out your monthly income, pay schedule, and required bills
                below. This form is designed to show what is left after must-pay
                bills are covered.
              </p>
            </div>

            <button
              onClick={goHome}
              style={{
                background: "#ffffff",
                color: "#23404a",
                padding: "12px 18px",
                borderRadius: "12px",
                border: "1px solid #cfe3ed",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Back to Home
            </button>
          </div>

          <form
            action="https://formspree.io/f/mnjlbdjn"
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <SectionTitle>Client Information</SectionTitle>

            <TwoCol>
              <Field label="Full Name">
                <input
                  style={inputStyle}
                  type="text"
                  name="client_name"
                  required
                />
              </Field>

              <Field label="Email">
                <input
                  style={inputStyle}
                  type="email"
                  name="client_email"
                  required
                />
              </Field>

              <Field label="Phone">
                <input style={inputStyle} type="text" name="client_phone" />
              </Field>

              <Field label="Session Date">
                <input style={inputStyle} type="date" name="session_date" />
              </Field>
            </TwoCol>

            <SectionTitle>Income</SectionTitle>

            <TwoCol>
              <Field label="Monthly Income">
                <input
                  style={inputStyle}
                  type="number"
                  step="0.01"
                  name="monthly_income"
                  required
                />
              </Field>
            </TwoCol>

            <div>
              <label
                style={{
                  fontWeight: "700",
                  color: "#23404a",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                Pay Frequency
              </label>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <Radio name="pay_frequency" value="Weekly" required />
                <Radio name="pay_frequency" value="Bi-Weekly" />
                <Radio name="pay_frequency" value="Semi-Monthly" />
                <Radio name="pay_frequency" value="Monthly" />
              </div>
            </div>

            <TwoCol>
              <Field label="Pay Date 1">
                <input style={inputStyle} type="date" name="pay_date_1" />
              </Field>

              <Field label="Pay Date 2">
                <input style={inputStyle} type="date" name="pay_date_2" />
              </Field>

              <Field label="Pay Date 3">
                <input style={inputStyle} type="date" name="pay_date_3" />
              </Field>

              <Field label="Pay Date 4">
                <input style={inputStyle} type="date" name="pay_date_4" />
              </Field>
            </TwoCol>

            <SectionTitle>Required Monthly Bills</SectionTitle>

            <BillRow label="Housing" nameKey="housing" />
            <BillRow label="Utilities" nameKey="utilities" />
            <BillRow label="Phone / Internet" nameKey="phoneInternet" />
            <BillRow label="Transportation" nameKey="transportation" />
            <BillRow label="Debt Payments" nameKey="debtPayments" />
            <BillRow label="Childcare" nameKey="childcare" />
            <BillRow label="Medical" nameKey="medical" />
            <BillRow label="Minimum Savings" nameKey="minimumSavings" />
            <BillRow label="Other Required Bills" nameKey="otherRequired" />

            <SectionTitle>Extra Details</SectionTitle>

            <Field label="Notes">
              <textarea style={textAreaStyle} name="notes" />
            </Field>

            <Field label="Goals">
              <textarea style={textAreaStyle} name="goals" />
            </Field>

            <input
              type="hidden"
              name="_subject"
              value="New Budget Intake Form Submission"
            />

            <button
              type="submit"
              style={{
                background: "#7fb8a4",
                color: "#fff",
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Submit Budget Form
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ children }) {
  return (
    <h3
      style={{
        fontSize: "26px",
        color: "#23404a",
        margin: "8px 0 0",
      }}
    >
      {children}
    </h3>
  );
}

function TwoCol({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "16px",
      }}
    >
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label
        style={{
          fontWeight: "700",
          color: "#23404a",
          display: "block",
          marginBottom: "8px",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Radio({ name, value, required = false }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "#2f3e46",
        fontWeight: "600",
      }}
    >
      <input type="radio" name={name} value={value} required={required} />
      {value}
    </label>
  );
}

function BillRow({ label, nameKey }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr 1fr",
        gap: "16px",
      }}
    >
      <Field label={label}>
        <input
          style={inputStyle}
          type="text"
          name={`${nameKey}_name`}
          defaultValue={label}
        />
      </Field>

      <Field label="Amount">
        <input
          style={inputStyle}
          type="number"
          step="0.01"
          name={`${nameKey}_amount`}
        />
      </Field>

      <Field label="Due Date">
        <input
          style={inputStyle}
          type="date"
          name={`${nameKey}_due_date`}
        />
      </Field>
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
      }}
    >
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cfe3ed",
  boxSizing: "border-box",
};

const textAreaStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cfe3ed",
  boxSizing: "border-box",
  minHeight: "120px",
  resize: "vertical",
};