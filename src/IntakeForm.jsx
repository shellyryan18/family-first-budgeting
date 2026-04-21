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
          maxWidth: "900px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "32px",
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
            fontSize: "24px",
            marginTop: "10px",
            marginBottom: "16px",
          }}
        >
          Client Intake Form
        </h2>

        <div
          style={{
            background: "#f7fbfd",
            border: "1px solid #d6e6ef",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "24px",
            lineHeight: 1.7,
            color: "#5f6b75",
          }}
        >
          <p style={{ marginTop: 0 }}>
            This form helps me get a clear picture of your monthly bills so I
            can create a plan that actually works for your day-to-day life.
          </p>

          <p>
            Please include your regular monthly bills — anything that is due
            each month. You don’t need to include things like groceries,
            shopping, or one-time purchases, as those will be factored into
            what’s left after your fixed expenses.
          </p>

          <p>
            For bills that vary month to month (like utilities), please look at
            your last 3 months and provide an average. It doesn’t have to be
            exact — just your best estimate.
          </p>

          <p>
            The more accurate and honest you are, the more helpful I can be.
            There is no judgment here — just support, and everything you share
            is completely confidential.
          </p>

          <p style={{ marginBottom: 0 }}>
            If you have any questions while filling this out, feel free to reach
            out by email or through our Facebook page.
          </p>
        </div>

        <form
          action="https://formspree.io/f/myklprdd"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <input
            type="hidden"
            name="_subject"
            value="New Detailed Client Intake Form Submission"
          />

          <Section title="Basic Information">
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
          </Section>

          <Section title="Income">
            <div style={rowStyle}>
              <input
                type="text"
                name="paycheck_1_amount"
                placeholder="Paycheck 1 Amount"
                style={inputStyle}
              />
              <input
                type="text"
                name="paycheck_1_date"
                placeholder="Paycheck 1 Pay Date"
                style={inputStyle}
              />
            </div>

            <div style={rowStyle}>
              <input
                type="text"
                name="paycheck_2_amount"
                placeholder="Paycheck 2 Amount"
                style={inputStyle}
              />
              <input
                type="text"
                name="paycheck_2_date"
                placeholder="Paycheck 2 Pay Date"
                style={inputStyle}
              />
            </div>

            <div style={rowStyle}>
              <input
                type="text"
                name="other_income_amount"
                placeholder="Other Income Amount"
                style={inputStyle}
              />
              <input
                type="text"
                name="other_income_date"
                placeholder="Other Income Pay Date"
                style={inputStyle}
              />
            </div>
          </Section>

          <Section title="Housing">
            <BillRow
              label="Rent / Mortgage"
              amountName="rent_mortgage_amount"
              dueName="rent_mortgage_due"
            />
            <BillRow
              label="Home Insurance (if not included)"
              amountName="home_insurance_amount"
              dueName="home_insurance_due"
            />
            <BillRow
              label="Property Taxes (if not included)"
              amountName="property_taxes_amount"
              dueName="property_taxes_due"
            />
          </Section>

          <Section title="Utilities">
            <BillRow
              label="Electric"
              amountName="electric_amount"
              dueName="electric_due"
            />
            <BillRow
              label="Water"
              amountName="water_amount"
              dueName="water_due"
            />
            <BillRow
              label="Gas"
              amountName="gas_amount"
              dueName="gas_due"
            />
            <BillRow
              label="Trash"
              amountName="trash_amount"
              dueName="trash_due"
            />
            <BillRow
              label="Internet"
              amountName="internet_amount"
              dueName="internet_due"
            />
          </Section>

          <Section title="Communication">
            <BillRow
              label="Cell Phone"
              amountName="cell_phone_amount"
              dueName="cell_phone_due"
            />
            <BillRow
              label="Home Phone"
              amountName="home_phone_amount"
              dueName="home_phone_due"
            />
            <BillRow
              label="Cable TV"
              amountName="cable_tv_amount"
              dueName="cable_tv_due"
            />
          </Section>

          <Section title="Transportation">
            <BillRow
              label="Car Payment"
              amountName="car_payment_amount"
              dueName="car_payment_due"
            />
            <BillRow
              label="Car Insurance"
              amountName="car_insurance_amount"
              dueName="car_insurance_due"
            />
          </Section>

          <Section title="Health">
            <BillRow
              label="Health Insurance (if not included in employment benefits)"
              amountName="health_insurance_amount"
              dueName="health_insurance_due"
            />
          </Section>

          <Section title="Credit Cards">
            <BillRow
              label="Credit Card 1"
              amountName="credit_card_1_amount"
              dueName="credit_card_1_due"
            />
            <BillRow
              label="Credit Card 2"
              amountName="credit_card_2_amount"
              dueName="credit_card_2_due"
            />
            <BillRow
              label="Credit Card 3"
              amountName="credit_card_3_amount"
              dueName="credit_card_3_due"
            />
            <BillRow
              label="Credit Card 4"
              amountName="credit_card_4_amount"
              dueName="credit_card_4_due"
            />
            <BillRow
              label="Credit Card 5"
              amountName="credit_card_5_amount"
              dueName="credit_card_5_due"
            />
          </Section>

          <Section title="Loans">
            <BillRow
              label="Student Loans"
              amountName="student_loans_amount"
              dueName="student_loans_due"
            />
            <BillRow
              label="Personal Loans"
              amountName="personal_loans_amount"
              dueName="personal_loans_due"
            />
            <BillRow
              label="Other Loans"
              amountName="other_loans_amount"
              dueName="other_loans_due"
            />
          </Section>

          <Section title="Subscriptions">
            <BillRow
              label="Netflix"
              amountName="netflix_amount"
              dueName="netflix_due"
            />
            <BillRow
              label="Hulu"
              amountName="hulu_amount"
              dueName="hulu_due"
            />
            <BillRow
              label="Disney+"
              amountName="disney_amount"
              dueName="disney_due"
            />
            <BillRow
              label="Amazon Prime"
              amountName="amazon_prime_amount"
              dueName="amazon_prime_due"
            />
            <BillRow
              label="HBO Max"
              amountName="hbo_max_amount"
              dueName="hbo_max_due"
            />
            <BillRow
              label="Apple TV"
              amountName="apple_tv_amount"
              dueName="apple_tv_due"
            />
            <BillRow
              label="Spotify"
              amountName="spotify_amount"
              dueName="spotify_due"
            />
            <BillRow
              label="YouTube Premium"
              amountName="youtube_premium_amount"
              dueName="youtube_premium_due"
            />
            <BillRow
              label="Other Subscription"
              amountName="other_subscription_amount"
              dueName="other_subscription_due"
            />
          </Section>

          <Section title="Other Bills">
            <CustomBillRow
              nameLabel="Other Bill 1 Name"
              nameName="other_bill_1_name"
              amountName="other_bill_1_amount"
              dueName="other_bill_1_due"
            />
            <CustomBillRow
              nameLabel="Other Bill 2 Name"
              nameName="other_bill_2_name"
              amountName="other_bill_2_amount"
              dueName="other_bill_2_due"
            />
            <CustomBillRow
              nameLabel="Other Bill 3 Name"
              nameName="other_bill_3_name"
              amountName="other_bill_3_amount"
              dueName="other_bill_3_due"
            />
            <CustomBillRow
              nameLabel="Other Bill 4 Name"
              nameName="other_bill_4_name"
              amountName="other_bill_4_amount"
              dueName="other_bill_4_due"
            />
            <CustomBillRow
              nameLabel="Other Bill 5 Name"
              nameName="other_bill_5_name"
              amountName="other_bill_5_amount"
              dueName="other_bill_5_due"
            />
          </Section>

          <Section title="Status Check">
            <select
              name="behind_on_bills"
              required
              defaultValue=""
              style={inputStyle}
            >
              <option value="" disabled>
                Are you currently behind on any bills?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <textarea
              name="which_bills_behind"
              placeholder="If yes, which ones?"
              rows="4"
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
          </Section>

          <button type="submit" style={buttonStyle}>
            Start My Budget Plan
          </button>

          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#6c7a86",
              marginTop: "0",
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

function Section({ title, children }) {
  return (
    <div
      style={{
        background: "#f9fcfd",
        border: "1px solid #d6e6ef",
        borderRadius: "16px",
        padding: "18px",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          color: "#1f3c46",
          fontSize: "20px",
          marginBottom: "14px",
        }}
      >
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {children}
      </div>
    </div>
  );
}

function BillRow({ label, amountName, dueName }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          color: "#1f3c46",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        {label}
      </label>
      <div style={rowStyle}>
        <input
          type="text"
          name={amountName}
          placeholder="Amount"
          style={inputStyle}
        />
        <input
          type="text"
          name={dueName}
          placeholder="Due Date"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

function CustomBillRow({ nameLabel, nameName, amountName, dueName }) {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          color: "#1f3c46",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        {nameLabel}
      </label>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: "10px",
        }}
      >
        <input
          type="text"
          name={nameName}
          placeholder="Bill Name"
          style={inputStyle}
        />
        <input
          type="text"
          name={amountName}
          placeholder="Amount"
          style={inputStyle}
        />
        <input
          type="text"
          name={dueName}
          placeholder="Due Date"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

const rowStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
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
};

const buttonStyle = {
  background: "#7fb8a4",
  color: "#ffffff",
  padding: "14px",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
};