export default function PrivacyPolicy() {
  return (
    <div style={page}>
      <div style={card}>
        <div style={header}>
          <h1 style={title}>Privacy Policy</h1>
          <p style={effective}>
            <strong>Effective Date:</strong> May 14, 2026
          </p>
          <p style={intro}>
            Safe To Spend, created by Family First Budgeting, respects your
            privacy and is committed to protecting your information.
          </p>
        </div>

        <div style={grid}>
          <Section title="Safe To Spend App">
            <p>
              Safe To Spend may collect limited personal information necessary
              for app functionality, including:
            </p>
            <ul>
              <li>Email address used for account login</li>
              <li>Budgeting information entered by the user</li>
              <li>Savings goals and spending information entered within the app</li>
              <li>Technical information required for app functionality and security</li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <p>Information collected through Safe To Spend is used only to:</p>
            <ul>
              <li>Provide and maintain app functionality</li>
              <li>Save and sync budgeting information</li>
              <li>Improve app performance and user experience</li>
              <li>Maintain account security and authentication</li>
            </ul>
          </Section>

          <Section title="Website Information Collection">
            <p>
              Family First Budgeting may collect limited information submitted
              through website contact forms, intake forms, or payment-related pages.
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Budgeting and financial information voluntarily submitted</li>
              <li>Information necessary to provide budgeting services</li>
            </ul>
          </Section>

          <Section title="Data Storage">
            <p>
              Safe To Spend uses secure third-party services including Google
              Firebase for authentication and cloud data storage.
            </p>
          </Section>

          <Section title="Website Analytics">
            <p>
              Family First Budgeting may use analytics tools including Vercel
              Analytics to improve website functionality and user experience.
            </p>
          </Section>

          <Section title="Payment Processing">
            <p>
              Payments may be processed through trusted third-party providers
              including PayPal.
            </p>
            <p>
              Family First Budgeting does not directly store debit card, credit
              card, or banking information entered through payment processors.
            </p>
          </Section>

          <Section title="Data Sharing">
            <p>
              We do not sell, rent, or trade personal information or budgeting
              data to third parties.
            </p>
            <ul>
              <li>Information may be shared when required by law</li>
              <li>To protect app security and prevent abuse</li>
              <li>Through trusted service providers needed to operate the app</li>
            </ul>
          </Section>

          <Section title="Children’s Privacy">
            <p>
              Safe To Spend is designed for general audiences, including teens
              learning budgeting and money management skills.
            </p>
            <p>
              We do not knowingly collect unnecessary personal information from children.
            </p>
          </Section>

          <Section title="Security">
            <p>
              Reasonable measures are taken to protect user information and
              secure stored data. However, no method of electronic storage or
              internet transmission is completely secure.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <ul>
              <li>Google Firebase Authentication</li>
              <li>Google Firebase Firestore</li>
              <li>Google Play Services</li>
            </ul>
          </Section>

          <Section title="Account and Data Deletion Requests">
            <p>
              Users may request deletion of their Safe To Spend account and
              associated stored data through the contact form available on the
              Family First Budgeting website.
            </p>
            <p>
              The only information required is the email address associated with
              the Safe To Spend account.
            </p>
            <p>
              No additional personal information, banking information, or
              identification documents are required.
            </p>
          </Section>
        </div>

        <div style={bottomSection}>
          <h2 style={bottomTitle}>Budgeting Services Disclaimer</h2>
          <p>
            Family First Budgeting provides budgeting organization and
            educational support services only. We do not provide financial,
            investment, tax, legal, credit repair, or professional financial
            planning advice.
          </p>
        </div>

        <div style={bottomSection}>
          <h2 style={bottomTitle}>Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated periodically. Continued use of
            the app or website after updates constitutes acceptance of the
            revised policy.
          </p>
        </div>

        <div style={bottomSection}>
          <h2 style={bottomTitle}>Contact Us</h2>
          <p>
            Family First Budgeting
            <br />
            Website: https://familyfirstbudgeting.com
            <br />
            Email: MSullivan.FamilyFirstBudgeting@outlook.com
          </p>
        </div>

        <div style={backLinkBox}>
          <a href="/#/" style={backLink}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section style={section}>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={sectionText}>{children}</div>
    </section>
  );
}

const page = {
  fontFamily: "Arial, sans-serif",
  background: "#eef6fb",
  minHeight: "100vh",
  padding: "35px 16px",
  color: "#1f3c46",
};

const card = {
  maxWidth: "820px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "22px",
  padding: "42px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  border: "1px solid #d6e6ef",
};

const header = {
  textAlign: "center",
  maxWidth: "720px",
  margin: "0 auto 30px auto",
};

const title = {
  color: "#1f3c46",
  fontSize: "46px",
  marginBottom: "10px",
};

const effective = {
  color: "#2e6f5e",
  fontSize: "15px",
  marginBottom: "14px",
};

const intro = {
  color: "#5f6b75",
  fontSize: "16px",
  lineHeight: "1.6",
};

const grid = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const section = {
  background: "#ffffff",
  borderLeft: "5px solid #7fb8a4",
  padding: "18px 22px",
  borderRadius: "12px",
  boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
};

const sectionTitle = {
  color: "#1f3c46",
  fontSize: "22px",
  marginTop: 0,
  marginBottom: "8px",
};

const sectionText = {
  color: "#5f6b75",
  fontSize: "15px",
  lineHeight: "1.7",
};

const bottomSection = {
  background: "#e8f6f1",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "18px 22px",
  marginTop: "22px",
  color: "#1f3c46",
  lineHeight: "1.7",
};

const bottomTitle = {
  color: "#2e6f5e",
  fontSize: "20px",
  marginTop: 0,
  marginBottom: "8px",
};

const backLinkBox = {
  textAlign: "center",
  marginTop: "26px",
};

const backLink = {
  color: "#7fb8a4",
  fontWeight: "700",
  textDecoration: "none",
};