export default function IntakeForm() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        background: "#eef6fb",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          border: "1px solid #d6e6ef",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1f3c46",
            marginTop: 0,
            marginBottom: "10px",
          }}
        >
          Family First Budgeting
        </h1>

        <h2
          style={{
            textAlign: "center",
            color: "#5f6b75",
            fontSize: "22px",
            marginTop: "10px",
          }}
        >
          Client Intake Form
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6c7a86",
            lineHeight: 1.6,
            marginBottom: "24px",
          }}
        >
          There’s no judgment here — I understand life happens.
          <br />
          Your information is 100% confidential and used only to help create
          your personalized plan.
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
            value="New Detailed Client Intake Form Submission"
          />

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number (optional)"
            style={inputStyle}
          />

          <h3 style={sectionHeading}>Income Information</h3>

          <textarea
            name="income_breakdown"
            placeholder={`List each paycheck source, amount, and pay date.

Example:
Job 1 - $1,250 - paid every other Friday
Child support - $400 - 1st of each month
Side income - about $200 monthly`}
            required
            rows="6"
            style={inputStyle}
          />

          <h3 style={sectionHeading}>Monthly Bills and Expenses</h3>

          <textarea
            name="expense_breakdown"
            placeholder={`List your monthly expenses with amount and due date.

Example:
Rent - $900 - due on the 1st
Electric - around $140 - due on the 12th
Car payment - $365 - due on the 18th
Phone - $110 - due on the 25th
Groceries - around $600 monthly`}
            required
            rows="10"
            style={inputStyle}
          />

          <h3 style={sectionHeading}>Debt</h3>

          <textarea
            name="debt_breakdown"
            placeholder={`List any debts you have, minimum payments, and due dates.

Example:
Capital One - balance $2,400 - minimum $75 - due on the 10th
Medical bill - balance $800 - payment $40 - due on the 22nd`}
            rows="8"
            style={inputStyle}
          />

          <select
            name="paycheck_to_paycheck"
            required
            defaultValue=""
            style={inputStyle}
          >
            <option value="" disabled>
              Do you feel like you're living paycheck to paycheck?
            </option>
            <option value="Yes">Yes</option>
            <option value="Sometimes">Sometimes</option>
            <option value="No">No</option>
          </select>

          <textarea
            name="goals"
            placeholder="What are you hoping to improve? (catch up on bills, save money, pay off debt, stop overdrafting, reduce stress, etc.)"
            required
            rows="4"
            style={inputStyle}
          />

          <textarea
            name="biggest_stress"
            placeholder="What is your biggest financial stress right now?"
            required
            rows="4"
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Start My Budget Plan
          </button>

          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#6c7a86",
              marginTop: "4px",
              marginBottom: 0,
              lineHeight: 1.6,
            }}
          >
            ✔ Takes just a few minutes
            <br />
            ✔ No commitment required
          </p>
        </form>
      </div>
    </div>
  );
}

const sectionHeading = {
  color: "#1f3c46",
  marginTop: "14px",
  marginBottom: "2px",
  fontSize: "18px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cfd8dc",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box",
};

const buttonStyle = {
  background: "#7fb8a4",
  color: "#ffffff",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
};