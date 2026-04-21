{/* ================= AGREEMENT SECTION ================= */}
<div style={agreementBox}>
  <p style={agreementText}>
    By submitting this form, I confirm that I am ready to move forward with
    Family First Budgeting services. This form is the first step in us working
    together, and the information I provide will be used to create my
    personalized budgeting plan.
  </p>

  <p style={agreementText}>
    I understand that Family First Budgeting provides budgeting support and
    coaching only, and does not provide financial, legal, tax, or investment
    advice.
  </p>

  <p style={agreementText}>
    I confirm that the information I have provided is accurate to the best of
    my knowledge.
  </p>

  <label style={checkboxRow}>
    <input
      type="checkbox"
      name="agree_services"
      checked={formData.agree_services || false}
      onChange={(e) =>
        setFormData({
          ...formData,
          agree_services: e.target.checked,
        })
      }
      required
      style={checkboxInput}
    />
    <span>
      I understand and agree to move forward with budgeting services.
    </span>
  </label>

  <label style={checkboxRow}>
    <input
      type="checkbox"
      name="agree_accuracy"
      checked={formData.agree_accuracy || false}
      onChange={(e) =>
        setFormData({
          ...formData,
          agree_accuracy: e.target.checked,
        })
      }
      required
      style={checkboxInput}
    />
    <span>
      I confirm my information is accurate to the best of my knowledge.
    </span>
  </label>
</div>

const agreementBox = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "20px",
  textAlign: "left",
};

const agreementText = {
  fontSize: "14px",
  color: "#5f6b75",
  lineHeight: 1.7,
  marginBottom: "12px",
};

const checkboxRow = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  marginTop: "12px",
  fontSize: "14px",
  color: "#1f3c46",
  lineHeight: 1.5,
  cursor: "pointer",
};

const checkboxInput = {
  width: "18px",
  height: "18px",
  marginTop: "3px",
  flexShrink: 0,
};