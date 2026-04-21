import React, { useState } from "react";

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    paycheck_1_amount: "",
    paycheck_1_date: "",
    paycheck_2_amount: "",
    paycheck_2_date: "",
    other_income_amount: "",
    other_income_date: "",
    rent_mortgage_amount: "",
    rent_mortgage_due: "",
    home_insurance_amount: "",
    home_insurance_due: "",
    property_taxes_amount: "",
    property_taxes_due: "",
    electric_amount: "",
    electric_due: "",
    water_amount: "",
    water_due: "",
    gas_amount: "",
    gas_due: "",
    trash_amount: "",
    trash_due: "",
    internet_amount: "",
    internet_due: "",
    cell_phone_amount: "",
    cell_phone_due: "",
    home_phone_amount: "",
    home_phone_due: "",
    cable_tv_amount: "",
    cable_tv_due: "",
    car_payment_amount: "",
    car_payment_due: "",
    car_insurance_amount: "",
    car_insurance_due: "",
    health_insurance_amount: "",
    health_insurance_due: "",
    credit_card_1_amount: "",
    credit_card_1_due: "",
    credit_card_2_amount: "",
    credit_card_2_due: "",
    credit_card_3_amount: "",
    credit_card_3_due: "",
    credit_card_4_amount: "",
    credit_card_4_due: "",
    credit_card_5_amount: "",
    credit_card_5_due: "",
    student_loans_amount: "",
    student_loans_due: "",
    personal_loans_amount: "",
    personal_loans_due: "",
    other_loans_amount: "",
    other_loans_due: "",
    netflix_amount: "",
    netflix_due: "",
    hulu_amount: "",
    hulu_due: "",
    disney_amount: "",
    disney_due: "",
    amazon_prime_amount: "",
    amazon_prime_due: "",
    hbo_max_amount: "",
    hbo_max_due: "",
    apple_tv_amount: "",
    apple_tv_due: "",
    spotify_amount: "",
    spotify_due: "",
    youtube_premium_amount: "",
    youtube_premium_due: "",
    other_subscription_amount: "",
    other_subscription_due: "",
    other_bill_1_name: "",
    other_bill_1_amount: "",
    other_bill_1_due: "",
    other_bill_2_name: "",
    other_bill_2_amount: "",
    other_bill_2_due: "",
    other_bill_3_name: "",
    other_bill_3_amount: "",
    other_bill_3_due: "",
    other_bill_4_name: "",
    other_bill_4_amount: "",
    other_bill_4_due: "",
    other_bill_5_name: "",
    other_bill_5_amount: "",
    other_bill_5_due: "",
    behind_on_bills: "",
    which_bills_behind: "",
    goals: "",
    biggest_stress: "",
    agree_services: false,
    agree_accuracy: false,
  });

  const [status, setStatus] = useState("");

  function updateField(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/commitment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("Submitted successfully. Redirecting to payment...");
      setTimeout(() => {
        window.location.href = "/#/payment";
      }, 1200);
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <div style={page}>
      <div style={container}>
        <h1 style={title}>Family First Budgeting</h1>
        <h2 style={subtitle}>Client Commitment Form</h2>

        <p style={topNote}>
          By completing this form, you are taking the first step to begin
          services. Payment details and next steps will be provided after
          submission.
        </p>

        <div style={infoBox}>
          <p style={infoText}>
            This form helps me get a clear picture of your monthly bills so I
            can create a plan that works for your day-to-day life.
          </p>
          <p style={infoText}>
            Please include regular monthly bills only — anything due each month.
            You do not need to include groceries, shopping, or one-time
            purchases, since those will be factored into what is left after your
            fixed expenses.
          </p>
          <p style={infoText}>
            For bills that vary month to month, like utilities, please use the
            average from your last 3 months. It does not have to be exact — just
            your best estimate.
          </p>
          <p style={infoText}>
            The more accurate and honest you are, the more helpful I can be.
            There is no judgment here, and everything you share is completely
            confidential.
          </p>
          <p style={{ ...infoText, marginBottom: 0 }}>
            If you have questions while filling this out, feel free to reach out
            by email or through our Facebook page.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <Section title="Basic Information">
            <input type="text" placeholder="Full Name" required value={formData.full_name} onChange={(e) => updateField("full_name", e.target.value)} style={inputStyle} />
            <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => updateField("email", e.target.value)} style={inputStyle} />
            <input type="text" placeholder="Phone Number (optional)" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} style={inputStyle} />
          </Section>

          <Section title="Income">
            <TwoCol a={{ name: "paycheck_1_amount", placeholder: "Paycheck 1 Amount" }} b={{ name: "paycheck_1_date", placeholder: "Paycheck 1 Pay Date" }} formData={formData} updateField={updateField} />
            <TwoCol a={{ name: "paycheck_2_amount", placeholder: "Paycheck 2 Amount" }} b={{ name: "paycheck_2_date", placeholder: "Paycheck 2 Pay Date" }} formData={formData} updateField={updateField} />
            <TwoCol a={{ name: "other_income_amount", placeholder: "Other Income Amount" }} b={{ name: "other_income_date", placeholder: "Other Income Pay Date" }} formData={formData} updateField={updateField} />
          </Section>

          <Section title="Housing">
            <BillRow label="Rent / Mortgage" amountName="rent_mortgage_amount" dueName="rent_mortgage_due" formData={formData} updateField={updateField} />
            <BillRow label="Home Insurance (if not included)" amountName="home_insurance_amount" dueName="home_insurance_due" formData={formData} updateField={updateField} />
            <BillRow label="Property Taxes (if not included)" amountName="property_taxes_amount" dueName="property_taxes_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Utilities">
            <BillRow label="Electric" amountName="electric_amount" dueName="electric_due" formData={formData} updateField={updateField} />
            <BillRow label="Water" amountName="water_amount" dueName="water_due" formData={formData} updateField={updateField} />
            <BillRow label="Gas" amountName="gas_amount" dueName="gas_due" formData={formData} updateField={updateField} />
            <BillRow label="Trash" amountName="trash_amount" dueName="trash_due" formData={formData} updateField={updateField} />
            <BillRow label="Internet" amountName="internet_amount" dueName="internet_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Communication">
            <BillRow label="Cell Phone" amountName="cell_phone_amount" dueName="cell_phone_due" formData={formData} updateField={updateField} />
            <BillRow label="Home Phone" amountName="home_phone_amount" dueName="home_phone_due" formData={formData} updateField={updateField} />
            <BillRow label="Cable TV" amountName="cable_tv_amount" dueName="cable_tv_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Transportation">
            <BillRow label="Car Payment" amountName="car_payment_amount" dueName="car_payment_due" formData={formData} updateField={updateField} />
            <BillRow label="Car Insurance" amountName="car_insurance_amount" dueName="car_insurance_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Health">
            <BillRow label="Health Insurance (if not included in employment benefits)" amountName="health_insurance_amount" dueName="health_insurance_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Credit Cards">
            <BillRow label="Credit Card 1" amountName="credit_card_1_amount" dueName="credit_card_1_due" formData={formData} updateField={updateField} />
            <BillRow label="Credit Card 2" amountName="credit_card_2_amount" dueName="credit_card_2_due" formData={formData} updateField={updateField} />
            <BillRow label="Credit Card 3" amountName="credit_card_3_amount" dueName="credit_card_3_due" formData={formData} updateField={updateField} />
            <BillRow label="Credit Card 4" amountName="credit_card_4_amount" dueName="credit_card_4_due" formData={formData} updateField={updateField} />
            <BillRow label="Credit Card 5" amountName="credit_card_5_amount" dueName="credit_card_5_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Loans">
            <BillRow label="Student Loans" amountName="student_loans_amount" dueName="student_loans_due" formData={formData} updateField={updateField} />
            <BillRow label="Personal Loans" amountName="personal_loans_amount" dueName="personal_loans_due" formData={formData} updateField={updateField} />
            <BillRow label="Other Loans" amountName="other_loans_amount" dueName="other_loans_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Subscriptions">
            <BillRow label="Netflix" amountName="netflix_amount" dueName="netflix_due" formData={formData} updateField={updateField} />
            <BillRow label="Hulu" amountName="hulu_amount" dueName="hulu_due" formData={formData} updateField={updateField} />
            <BillRow label="Disney+" amountName="disney_amount" dueName="disney_due" formData={formData} updateField={updateField} />
            <BillRow label="Amazon Prime" amountName="amazon_prime_amount" dueName="amazon_prime_due" formData={formData} updateField={updateField} />
            <BillRow label="HBO Max" amountName="hbo_max_amount" dueName="hbo_max_due" formData={formData} updateField={updateField} />
            <BillRow label="Apple TV" amountName="apple_tv_amount" dueName="apple_tv_due" formData={formData} updateField={updateField} />
            <BillRow label="Spotify" amountName="spotify_amount" dueName="spotify_due" formData={formData} updateField={updateField} />
            <BillRow label="YouTube Premium" amountName="youtube_premium_amount" dueName="youtube_premium_due" formData={formData} updateField={updateField} />
            <BillRow label="Other Subscription" amountName="other_subscription_amount" dueName="other_subscription_due" formData={formData} updateField={updateField} />
          </Section>

          <Section title="Other Bills">
            <CustomBillRow index={1} formData={formData} updateField={updateField} />
            <CustomBillRow index={2} formData={formData} updateField={updateField} />
            <CustomBillRow index={3} formData={formData} updateField={updateField} />
            <CustomBillRow index={4} formData={formData} updateField={updateField} />
            <CustomBillRow index={5} formData={formData} updateField={updateField} />
          </Section>

          <Section title="Status Check">
            <select required value={formData.behind_on_bills} onChange={(e) => updateField("behind_on_bills", e.target.value)} style={inputStyle}>
              <option value="">Are you currently behind on any bills?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <textarea placeholder="If yes, which ones?" rows="4" value={formData.which_bills_behind} onChange={(e) => updateField("which_bills_behind", e.target.value)} style={inputStyle} />

            <textarea placeholder="What are you hoping to improve?" required rows="4" value={formData.goals} onChange={(e) => updateField("goals", e.target.value)} style={inputStyle} />

            <textarea placeholder="What is your biggest financial stress right now?" required rows="4" value={formData.biggest_stress} onChange={(e) => updateField("biggest_stress", e.target.value)} style={inputStyle} />
          </Section>

          <div style={agreementBox}>
            <p style={agreementText}>
              By submitting this form, I confirm that I am ready to move forward
              with Family First Budgeting services. I understand that this form
              is the first step in working together and that the information I
              provide will be used to create my personalized budgeting plan.
            </p>

            <p style={agreementText}>
              I understand that Family First Budgeting provides budgeting
              support and coaching only, and does not provide financial, legal,
              tax, or investment advice.
            </p>

            <p style={agreementText}>
              I confirm that the information I have provided is accurate to the
              best of my knowledge.
            </p>

            <label style={checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.agree_services}
                onChange={(e) => updateField("agree_services", e.target.checked)}
                required
              />{" "}
              I understand and agree to move forward with budgeting services.
            </label>

            <label style={checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.agree_accuracy}
                onChange={(e) => updateField("agree_accuracy", e.target.checked)}
                required
              />{" "}
              I confirm my information is accurate to the best of my knowledge.
            </label>
          </div>

          <button type="submit" style={submitButton}>
            Move Forward With My Budget Plan
          </button>

          {status && <p style={statusText}>{status}</p>}
        </form>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={section}>
      <h3 style={sectionTitle}>{title}</h3>
      <div style={sectionContent}>{children}</div>
    </div>
  );
}

function TwoCol({ a, b, formData, updateField }) {
  return (
    <div style={rowStyle}>
      <input
        type="text"
        placeholder={a.placeholder}
        value={formData[a.name]}
        onChange={(e) => updateField(a.name, e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder={b.placeholder}
        value={formData[b.name]}
        onChange={(e) => updateField(b.name, e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}

function BillRow({ label, amountName, dueName, formData, updateField }) {
  return (
    <div>
      <label style={billLabel}>{label}</label>
      <div style={rowStyle}>
        <input
          type="text"
          placeholder="Amount"
          value={formData[amountName]}
          onChange={(e) => updateField(amountName, e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Due Date"
          value={formData[dueName]}
          onChange={(e) => updateField(dueName, e.target.value)}
          style={inputStyle}
        />
      </div>
    </div>
  );
}

function CustomBillRow({ index, formData, updateField }) {
  const nameField = `other_bill_${index}_name`;
  const amountField = `other_bill_${index}_amount`;
  const dueField = `other_bill_${index}_due`;

  return (
    <div>
      <label style={billLabel}>Other Bill {index}</label>
      <div style={threeColStyle}>
        <input
          type="text"
          placeholder="Bill Name"
          value={formData[nameField]}
          onChange={(e) => updateField(nameField, e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Amount"
          value={formData[amountField]}
          onChange={(e) => updateField(amountField, e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Due Date"
          value={formData[dueField]}
          onChange={(e) => updateField(dueField, e.target.value)}
          style={inputStyle}
        />
      </div>
    </div>
  );
}

const page = {
  fontFamily: "Arial, sans-serif",
  minHeight: "100vh",
  background: "#eef6fb",
  padding: "30px 16px",
};

const container = {
  maxWidth: "980px",
  margin: "0 auto",
  background: "#ffffff",
  padding: "28px",
  borderRadius: "20px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.07)",
  border: "1px solid #d6e6ef",
};

const title = {
  textAlign: "center",
  color: "#1f3c46",
  margin: 0,
  fontSize: "34px",
};

const subtitle = {
  textAlign: "center",
  color: "#5f6b75",
  fontSize: "24px",
  marginTop: "6px",
  marginBottom: "14px",
};

const topNote = {
  textAlign: "center",
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: 1.6,
  marginBottom: "18px",
};

const infoBox = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "18px",
  marginBottom: "22px",
};

const infoText = {
  color: "#5f6b75",
  lineHeight: 1.7,
  marginTop: 0,
  marginBottom: "12px",
  textAlign: "left",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const section = {
  background: "#f9fcfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "18px",
};

const sectionTitle = {
  marginTop: 0,
  marginBottom: "14px",
  color: "#1f3c46",
  fontSize: "26px",
  textAlign: "center",
};

const sectionContent = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
};

const threeColStyle = {
  display: "grid",
  gridTemplateColumns: "1.2fr 1fr 1fr",
  gap: "10px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #cfd8dc",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box",
  background: "#ffffff",
  color: "#1f3c46",
};

const billLabel = {
  display: "block",
  marginBottom: "6px",
  color: "#1f3c46",
  fontWeight: "600",
  fontSize: "14px",
};

const agreementBox = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "18px",
};

const agreementText = {
  fontSize: "14px",
  color: "#5f6b75",
  lineHeight: 1.6,
};

const checkboxLabel = {
  display: "block",
  marginTop: "10px",
  fontSize: "14px",
  color: "#1f3c46",
};

const submitButton = {
  background: "#7fb8a4",
  color: "#ffffff",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
};

const statusText = {
  textAlign: "center",
  color: "#5f6b75",
  marginTop: "6px",
};