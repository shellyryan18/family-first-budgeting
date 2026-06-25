export default function PrivacyPolicy() {
  return (
    <div style={page}>
      <div style={card}>
        <div style={header}>
          <h1 style={title}>Privacy Policy</h1>
          <p style={effective}>
            <strong>Last Updated:</strong> June 25, 2026
          </p>
          <p style={intro}>
  Family First Budgeting, including Safe To Spend, budgeting services, and website design services,
  respects your privacy and is committed to protecting your information.
</p>
        </div>

        <div style={grid}>
          <Section title="Safe To Spend App">
            <p>
              Safe To Spend may collect limited personal information necessary
              for app functionality, including:
            </p>
            <ul style={listStyle}>
              <li>
  Email address used for account login
</li>
              <li>Budgeting information entered by the user</li>
              <li>Savings goals and spending information entered within the app</li>
              <li>Technical information required for app functionality and security</li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <p>Information collected through Safe To Spend is used only to:</p>
            <ul style={listStyle}>            
              <li>Provide and maintain app functionality</li>
              <li>Save and sync budgeting information</li>
              <li>Improve app performance and user experience</li>
              <li>Maintain account security and authentication</li>
              <li>Provide budgeting services and website design services</li>
<li>Communicate with clients about projects, forms, payments, approvals, and delivery</li>
<li>Create, revise, preview, and deliver requested website design work</li>
            </ul>
          </Section>

          <Section title="Website Information Collection">
            <p>
              Family First Budgeting may collect limited information submitted
              through website contact forms, intake forms, or payment-related pages.
            </p>
            <ul style={listStyle}>                
              <li>Name</li>
              <li>Email address</li>
              <li>Budgeting and financial information voluntarily submitted</li>
              <li>Information necessary to provide budgeting services</li>
            </ul>
          </Section>

          <Section title="Website Design Services Information">
  <p>
    Family First Budgeting may collect information voluntarily submitted by clients
    for website design services, including:
  </p>

  <ul style={listStyle}>
    <li>Client name and business name</li>
    <li>Email address and phone number</li>
    <li>Business description, services, hours, and contact information</li>
    <li>Branding preferences, colors, logos, images, and social media links</li>
    <li>Domain, hosting, Vercel, or website-related information provided by the client</li>
    <li>Agreement acknowledgements, intake responses, approval forms, and delivery confirmations</li>
  </ul>

  <p>
    This information is used only to communicate with the client, prepare website materials,
    create the requested website, manage the project process, and provide agreed services.
  </p>
</Section>

          <Section title="Data Storage">
            <p>
              Safe To Spend uses secure third-party services including Google
              Firebase for authentication and cloud data storage.

              Website design project materials, intake submissions, acknowledgements,
              approvals, and communications may also be stored through trusted service
              providers used to operate Family First Budgeting.
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
              Payments for budgeting services and website design services may be
              processed through trusted third-party providers including PayPal.
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
            <ul style={listStyle}>               
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
            <ul style={listStyle}>                
              <li>Google Firebase Authentication</li>
              <li>Google Firebase Firestore</li>
              <li>Google Play Services</li>
              <li>Vercel</li>
<li>PayPal</li>
<li>Resend or email notification services</li>
<li>Domain registrars or hosting providers, if applicable</li>
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
  <h2 style={bottomTitle}>Website Design Services Disclaimer</h2>
  <p>
    <p>

Family First Budgeting may use information provided by website design
clients to create, preview, revise, approve, and deliver requested
website projects.

Clients are responsible for ensuring that all logos, images, written
content, business information, social media links, domain information,
and third-party account details submitted are accurate, authorized for
use, and do not infringe upon the rights of others.

Family First Budgeting is not responsible for verifying ownership of
materials supplied by clients.

</p>
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
            Email: MSullivan.FamilyFirstBudgeting@outlook.com
            <br />
            Website: https://familyfirstbudgeting.com
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
  padding: "24px 14px",
  color: "#1f3c46",
};

const card = {
  maxWidth: "720px",
  margin: "0 auto",
  background: "#fcfdfd",
  borderRadius: "16px",
  padding: "22px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  border: "1px solid #d6e6ef",
};

const header = {
  textAlign: "center",
  marginBottom: "18px",
};

const title = {
  color: "#1f3c46",
  fontSize: "30px",
  marginBottom: "6px",
  fontWeight: "700",
};

const effective = {
  color: "#2e6f5e",
  fontSize: "14px",
  marginBottom: "10px",
};

const intro = {
  color: "#5f6b75",
  fontSize: "13px",
  lineHeight: "1.5",
  maxWidth: "580px",
  margin: "0 auto",
};

const grid = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const section = {
  borderBottom: "1px solid #e6edf1",
  padding: "10px 0",
};

const sectionTitle = {
  color: "#1f3c46",
  fontSize: "17px",
  marginTop: 0,
  marginBottom: "6px",
  fontWeight: "700",
};

const sectionText = {
  color: "#5f6b75",
  fontSize: "13.5px",
  lineHeight: "1.55",
};

const listStyle = {
  paddingLeft: "18px",
  marginTop: "6px",
  lineHeight: "1.7",
};

const bottomSection = {
  background: "#fafcfc",
  border: "1px solid #d6e6ef",
  borderRadius: "10px",
  padding: "12px 14px",
  marginTop: "12px",
  color: "#5f6b75",
  lineHeight: "1.6",
  fontSize: "14px",
};

const bottomTitle = {
  color: "#1f3c46",
  fontSize: "17px",
  marginTop: 0,
  marginBottom: "6px",
};

const backLinkBox = {
  textAlign: "center",
  marginTop: "18px",
};

const backLink = {
  color: "#7fb8a4",
  fontWeight: "600",
  textDecoration: "none",
  fontSize: "14px",
  cursor: "pointer",
  transition: "0.2s ease",
};
