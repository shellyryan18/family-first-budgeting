export default function IntakeForm() {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "40px 20px",
      maxWidth: "600px",
      margin: "0 auto"
    }}>

      <h2 style={{ textAlign: "center" }}>
        Client Intake Form
      </h2>

      <p style={{
        textAlign: "center",
        color: "#6c7a86",
        fontSize: "14px"
      }}>
        Your information is 100% confidential and used only to create your personalized plan.
      </p>

      <form
        action="https://formspree.io/f/myklprdd"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px"
        }}
      >

        <input name="name" placeholder="Full Name" required style={inputStyle} />
        <input name="email" type="email" placeholder="Email" required style={inputStyle} />

        <input name="income" placeholder="Approximate Monthly Income" required style={inputStyle} />
        <input name="expenses" placeholder="Approximate Monthly Bills/Expenses" required style={inputStyle} />

        <select name="paycheck" required style={inputStyle} defaultValue="">
          <option value="" disabled>Do you feel like you're living paycheck to paycheck?</option>
          <option>Yes</option>
          <option>Sometimes</option>
          <option>No</option>
        </select>

        <select name="debt" required style={inputStyle} defaultValue="">
          <option value="" disabled>Do you currently have debt?</option>
          <option>Yes</option>
          <option>No</option>
        </select>

        <input name="debt_type" placeholder="If yes, what type of debt?" style={inputStyle} />

        <textarea name="goals" placeholder="What are you hoping to improve?" required rows="4" style={inputStyle} />

        <textarea name="struggle" placeholder="What is your biggest financial stress right now?" required rows="4" style={inputStyle} />

        <button type="submit" style={buttonStyle}>
          Submit
        </button>

      </form>

    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px"
};

const buttonStyle = {
  background: "#7fb8a4",
  color: "#fff",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  cursor: "pointer"
};