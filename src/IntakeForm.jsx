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
          maxWidth: "700px",
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
          }}
        >
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
            value="New Client Intake Form Submission"
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

          <input
            type="text"
            name="monthly_income"
            placeholder="Approximate Monthly Income"
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="monthly_bills"
            placeholder="Approximate Monthly Bills/Expenses"
            required
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

          <select
            name="has_debt"
            required
            defaultValue=""
            style={inputStyle}
          >
            <option value="" disabled>
              Do you currently have debt?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <input
            type="text"
            name="debt_type"
            placeholder="If yes, what type of debt?"
            style={inputStyle}
          />

          <textarea
            name="goals"
            placeholder="What are you hoping to improve?"
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
            Submit Intake Form
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cfd8dc",
  fontSize: "14px",
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