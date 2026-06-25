import React, { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
} from "@paypal/react-paypal-js";

export default function App() {
 const paypalClientId = "AVsV_Pn6gpqWfhhSngg_WtAWlvihc9x7adDKtaNmYpLV1e-zvqreUo2Ssha7AZM6uDWUapsnLP6_eqyp";
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("");
  const [agreementData, setAgreementData] = useState({
    clientName: "",
    businessName: "",
    email: "",
    phone: "",
    readAgreement: false,
    bindingAgreement: false,
    depositAcknowledged: false,
    retainedCopy: false,
    agreementViewed: false,
    typedSignature: "",
    signedAt: "",
  });
  const [agreementStatus, setAgreementStatus] = useState("");
  const [intakeData, setIntakeData] = useState({
    clientName: "",
    businessName: "",
    email: "",
    phone: "",
    businessDescription: "",
    services: "",
    businessHours: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    linkedin: "",
    primaryColor: "",
    secondaryColor: "",
    ownsDomain: "",
    domainName: "",
    hasHosting: "",
    hostingProvider: "",
    logoPlan: "",
    imagePlan: "",
    contactForm: false,
    socialLinks: false,
    basicSeo: false,
    notes: "",
    contentAcknowledged:false,
  });
  const [intakeStatus, setIntakeStatus] = useState("");
  const [materialsData, setMaterialsData] = useState({
  materialsProvided: false,
  ownershipRights: false,
  delayAcknowledged: false,
  previewAcknowledged: false,
  revisionAcknowledged: false,
  approvalAcknowledged: false,
  deliveryAcknowledged: false,
  recordsAcknowledged: false,
  clientName: "",
  businessName: "",
  typedSignature: "",
  signedAt: "",
});
  const [depositPaid, setDepositPaid] = useState(false);


const [materialsStatus, setMaterialsStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(window.location.hash || "#/");
  const [materialsPrinted, setMaterialsPrinted] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  async function handleContactSubmit(e) {
    e.preventDefault();
    setContactStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setContactStatus("Message sent successfully.");
      setContactData({ name: "", email: "", message: "" });
    } catch (error) {
      setContactStatus("Something went wrong. Please try again.");
    }
  }

  async function sendWebsiteClientPacket() {
  try {

    const res = await fetch("/api/sendWebsiteClientPacket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agreementData,
        intakeData,
        materialsData,
        depositAmount: "125.00",
        projectTotal: "250.00",
        remainingBalance: "125.00",
      }),
    });

    const result = await res.json();

    console.log(result);

  } catch (err) {
    console.log(err);
  }
}

  async function handleAgreementSubmit(e) {
    e.preventDefault();

    if (
  !agreementData.agreementViewed ||
  !agreementData.readAgreement ||
  !agreementData.bindingAgreement ||
  !agreementData.depositAcknowledged ||
  !agreementData.retainedCopy
) {
      setAgreementStatus("Please open or download the agreement and complete all agreement acknowledgement boxes before continuing.");
      return;
    }
    
const signedAt = new Date().toLocaleString("en-US", {
  dateStyle: "full",
  timeStyle: "short",
});

const updatedAgreement = {
  ...agreementData,
  signedAt,
};

setAgreementData(updatedAgreement);

setAgreementStatus(
  "Agreement accepted successfully. Please continue to Intake Form."
);

  function downloadAgreementText() {
    const blob = new Blob([FULL_WEBSITE_AGREEMENT], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Family-First-Budgeting-Website-Design-Agreement.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }


  function updateIntake(field, value) {
    setIntakeData({ ...intakeData, [field]: value });
  }

  function handleIntakeSubmit(e) {
    e.preventDefault();

    if (!intakeData.contentAcknowledged) {

  alert(
    "Please acknowledge that the information provided will be used to create your website."
  );

  return;

}

    if (!intakeData.clientName || !intakeData.businessName || !intakeData.email) {
      setIntakeStatus("Please complete client name, business name, and email.");
      return;
    }

    setIntakeStatus("Intake form completed successfully. Please continue to Materials Acknowledgement.");
  }

  function handleMaterialsSubmit(e) {
  e.preventDefault();

  if (
    !materialsData.materialsProvided ||
    !materialsData.ownershipRights ||
    !materialsData.delayAcknowledged ||
    !materialsData.previewAcknowledged ||
    !materialsData.revisionAcknowledged ||
    !materialsData.approvalAcknowledged ||
    !materialsData.deliveryAcknowledged ||
    !materialsData.recordsAcknowledged
  ) {

    
    setMaterialsStatus("Please complete all acknowledgement boxes before continuing.");
    return;
  }

  if (
    !materialsData.clientName ||
    !materialsData.businessName ||
    !materialsData.typedSignature
  ) {
    setMaterialsStatus("Please complete all required signature fields.");
    return;
  }

const signedAt = new Date().toLocaleString("en-US", {
  dateStyle: "full",
  timeStyle: "short",
});

setMaterialsData({
  ...materialsData,
  signedAt,
});

setMaterialsStatus("success");

}

if (currentPage === "#/materials") {
  return (
    <div style={page}>
      <div style={container}>

  <div
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <a href="#/" style={homeLink}>
      Return to Home
    </a>
  </div>

  <img src="/logo.png" alt="Family First Budgetting Logo" style={logoStyle} />

        <h1 style={headline}>
          Materials Acknowledgement
        </h1>

        <p style={description}>
          Before work begins, please review and acknowledge the following
          information regarding website materials, revisions, previews,
          approvals, and delivery.
        </p>

        <form onSubmit={handleMaterialsSubmit}>    

          <div style={sectionBox}>

<h2 style={sectionTitle}>
  Review and Accept Materials Terms
</h2>

<p style={helperText}>
  Please review each statement and check all boxes before signing.
</p>  
                   
<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.materialsProvided}
    onChange={(e) =>
      setMaterialsData({ ...materialsData, materialsProvided: e.target.checked })
    }
  />
  <span>I understand I am responsible for providing all written content, logos, images, social media links, and business information needed for my website.</span>
</label>

<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.ownershipRights}
    onChange={(e) =>
      setMaterialsData({ ...materialsData, ownershipRights: e.target.checked })
    }
  />
  <span>I understand I must have permission or ownership rights to all materials I submit.</span>
</label>

<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.delayAcknowledged}
    onChange={(e) =>
      setMaterialsData({ ...materialsData, delayAcknowledged: e.target.checked })
    }
  />
  <span>I understand delays in providing materials may delay project completion.</span>
</label>

<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.previewAcknowledged}
    onChange={(e) =>
      setMaterialsData({ ...materialsData, previewAcknowledged: e.target.checked })
    }
  />
  <span>I understand preview websites are hosted temporarily for review purposes only.</span>
</label>

<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.revisionAcknowledged}
    onChange={(e) =>
      setMaterialsData({ ...materialsData, revisionAcknowledged: e.target.checked })
    }
  />
  <span>I understand minor revisions may be requested during the preview stage. Additional work outside the agreed scope may require a separate fee.</span>
</label>

<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.approvalAcknowledged}
    onChange={(e) =>
      setMaterialsData({ ...materialsData, approvalAcknowledged: e.target.checked })
    }
  />
  <span>I understand that once I approve my website, additional changes may require a separate update request.</span>
</label>

<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.deliveryAcknowledged}
    onChange={(e) =>
      setMaterialsData({
        ...materialsData,
        deliveryAcknowledged: e.target.checked,
      })
    }
  />
  <span>
    I understand final website files and related project materials will be delivered after final approval and payment have been completed.
  </span>
</label>

<label style={checkboxRow}>
  <input
    type="checkbox"
    checked={materialsData.recordsAcknowledged}
    onChange={(e) =>
      setMaterialsData({
        ...materialsData,
        recordsAcknowledged: e.target.checked,
      })
    }
  />
  <span>
    I have downloaded, printed, or otherwise retained copies of the Agreement,
    Intake Form, and Materials Acknowledgement for my records.
  </span>
</label>

</div>

<div style={sectionBox}>

<h2 style={sectionTitle}>
  Acknowledgement Signature
</h2>

<p style={helperText}>
  Please enter your information below to acknowledge and sign this form.
</p>

<input
  type="text"
  placeholder="Client Name *"
  required
  value={materialsData.clientName}
  onChange={(e) =>
    setMaterialsData({
      ...materialsData,
      clientName: e.target.value,
    })
  }
  style={inputStyle}
/>

<input
  type="text"
  placeholder="Business Name *"
  required
  value={materialsData.businessName}
  onChange={(e) =>
    setMaterialsData({
      ...materialsData,
      businessName: e.target.value,
    })
  }
  style={inputStyle}
/>

<input
  type="text"
  placeholder="Typed Signature *"
  required
  value={materialsData.typedSignature}
  onChange={(e) =>
    setMaterialsData({
      ...materialsData,
      typedSignature: e.target.value,
    })
  }
  style={inputStyle}
/>

</div>

<div
  style={{
    borderTop: "1px solid #d6e6ef",
    margin: "20px 0",
  }}
/>

{materialsStatus !== "success" && (
  <button type="submit" style={button}>
    Submit Materials Acknowledgement
  </button>
)}

{materialsStatus === "success" && (
  <p
    style={{
      ...statusText,
      marginTop: "12px",
      marginBottom: "28px",
    }}
  >
    {!materialsPrinted
      ? "Materials acknowledged successfully. Please print or save a copy of this acknowledgement for your records."
      : "Materials acknowledgement saved. Please continue to Deposit & Payment."}
  </p>
)}

{materialsStatus === "success" && !materialsPrinted && (
  <button
    type="button"
    style={button}
    onClick={() => {
      window.print();
      setMaterialsPrinted(true);
    }}
  >
    Print or Save Materials Acknowledgement
  </button>
)}

{materialsStatus === "success" && materialsPrinted && (
  <a href="#/website-deposit" style={button}>
    Continue to Deposit & Payment
  </a>
)}

<a href="#/website-intake" style={footerLink}>
  ← Back to Intake Form
</a>

        </form>

      </div>
    </div>
  );
}

if (currentPage === "#/website-deposit") {
  return (

    <PayPalScriptProvider
  options={{
    clientId: paypalClientId,
    currency: "USD",
    disableFunding: "paylater",
  }}
>

      <div style={page}>
        <div style={container}>

  <div
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <a href="#/" style={homeLink}>
      Return to Home
    </a>
  </div>

  <img src="/logo.png" alt="Family First Budgetting Logo" style={logoStyle} />

        <h1 style={headline}>Deposit & Payment</h1>

        <p style={description}>
          A deposit is required before website design work begins.
        </p>

        <div style={invoiceRow}>
  <span>Starter Website Package</span>
  <strong>$250.00</strong>
</div>

<div style={invoiceRow}>
  <span>Deposit Due Today</span>
  <strong
  style={{
    color:"#2e6f5e",
    fontWeight:"700"
  }}
>
  $125.00
</strong>
</div>

<div style={invoiceRow}>
  <span>Remaining Balance</span>
  <strong>$125.00</strong>
</div>

<hr style={invoiceDivider} />

<p>
 </p>

        <div style={policyList}>
  <p>✔ Deposit reserves your project slot.</p>

  <p>✔ Remaining balance due after final approval.</p>

  <p>✔ Website files delivered after final payment.</p>

  <p>✔ Preview website provided before approval.</p>
</div>

     {depositPaid ? (
<>
<p style={paymentStatus}>
🟢 Deposit Received
</p>

<p style={helperText}>
Thank you for choosing Family First Budgeting.

Your project has been reserved.

A confirmation email will be sent shortly.
</p>
</>
) : (
<>
<p style={paymentStatus}>
🟡 Awaiting Deposit
</p>

<p style={helperText}>
Complete your secure PayPal payment below to reserve your project slot.
</p>
</>
)}   

        <div style={actionStack}>
  {!depositPaid && (
  
<div
  style={{
    maxWidth: "350px",
    margin:"10px auto"
  }}
>

<PayPalButtons
  style={{
    layout: "vertical",
    shape: "rect",
    color: "gold",
    label: "paypal",
  }}

  createOrder={(data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "125.00",
          },
        },
      ],
    });
  }}

  onApprove={(data, actions) => {
  return actions.order.capture().then(async () => {

    setDepositPaid(true);

    await sendWebsiteClientPacket();

  });
}}
/>

</div>

)}

  {depositPaid && (
    <p style={statusText}>
      Deposit received. A confirmation email will be sent once payment is verified.
    </p>
  )}

    <a href="#/materials" style={footerLink}>
    ← Back to Materials Acknowledgement
  </a>
</div>

        </div>
      </div>
    </PayPalScriptProvider>
  );
}
if (currentPage === "#/budgeting-services") {
  return (
    <div style={page}>
      <div style={container}>

  <div
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <a href="#/" style={homeLink}>
      Return to Home
    </a>
  </div>
        <img src="/logo.png" alt="Family First Budgeting Logo" style={logoStyle} />

        <h1 style={headline}>Budgeting Services</h1>

        <p style={description}>
          Personalized paycheck-by-paycheck budget plans built around your real income,
          bills, due dates, and paydays.
        </p>

        <div style={storyBox}>
  <h2 style={storyTitle}>Built for Real Families</h2>

  <p style={storyText}>
    Family First Budgeting was built by a working parent who understands
    real-life financial stress.
  </p>

  <p style={storyText}>
    Rising costs, bills stacking up, paycheck-to-paycheck living, planning
    around kids, unexpected expenses, and trying to stay ahead while life keeps
    moving — this system was created from living through those moments firsthand.
  </p>

  <p style={storyText}>
    This is not a giant corporation or a bank-backed budgeting app.
  </p>

  <p style={storyText}>
    It is a real system built from real experience to help families understand
    where their money is going, reduce stress, and create a plan that actually
    works in everyday life.
  </p>

  <p style={storyClosing}>
    No judgment. No financial shaming. Just real budgeting for real life.
  </p>
</div>

<div style={aboutWrapper}>
  <h2 style={aboutTitle}>About Family First Budgeting</h2>

  <p style={aboutText}>
    My mission is simple — to help everyday families feel in control of their
    money again.
  </p>

  <p style={aboutText}>
    Too often, budgeting feels overwhelming. Bills come in, paychecks go out,
    and it can feel like you’re just hoping there’s enough left over to make it
    to the next cycle.
  </p>

  <p style={aboutText}>
    At Family First Budgeting, I take your real income and your actual bills
    and build a personalized plan that shows exactly how everything works
    together — paycheck by paycheck.
  </p>

  <div style={aboutList}>
    <p>✔ Know what gets paid and when</p>
    <p>✔ See what your account will look like after each paycheck</p>
    <p>✔ Understand what you actually have left over</p>
    <p>✔ Clearly see how much you can save vs use for everyday life</p>
  </div>

  <p style={aboutText}>
    This is something I personally do with every paycheck I receive — I even
    have my own finances mapped out for a full year ahead.
  </p>

  <p style={aboutClosing}>
    No judgment. No pressure. Just a simple, realistic plan that works for your
    life.
  </p>

  <p style={aboutBold}>
    Stop stressing. Stop guessing. Start living.
  </p>
</div>

 <div style={stepsWrapper}>
  <h2 style={stepsTitle}>What Happens Next?</h2>

  <div style={stepItem}>
    <div style={stepNumber}>1</div>

    <div>
      <h3 style={stepHeading}>Complete the Intake Form</h3>

      <p style={stepText}>
        Fill out your monthly bills, income, and pay schedule. Most people
        finish in just a few minutes.
      </p>
    </div>
  </div>

  <div style={stepItem}>
    <div style={stepNumber}>2</div>

    <div>
      <h3 style={stepHeading}>I Review Your Information</h3>

      <p style={stepText}>
        I personally go through your numbers and organize everything based on
        your actual paychecks and due dates.
      </p>
    </div>
  </div>

  <div style={stepItem}>
    <div style={stepNumber}>3</div>

    <div>
      <h3 style={stepHeading}>You Receive Your Budget Plan</h3>

      <p style={stepText}>
        You receive a personalized paycheck-by-paycheck breakdown showing what
        gets paid, what is left, and how your money flows throughout the month.
      </p>
    </div>
  </div>
</div>

<div style={faqWrapper}>
  <h2 style={faqTitle}>Common Questions</h2>

  <div style={faqItem}>
    <h3 style={faqQuestion}>Do I need to connect my bank account?</h3>
    <p style={faqAnswer}>
      No. Family First Budgeting does not require bank syncing or access to
      your accounts.
    </p>
  </div>

  <div style={faqItem}>
    <h3 style={faqQuestion}>How long does the intake form take?</h3>
    <p style={faqAnswer}>
      Most people complete it in just a few minutes.
    </p>
  </div>

  <div style={faqItem}>
    <h3 style={faqQuestion}>What do I receive?</h3>
    <p style={faqAnswer}>
      You receive a personalized paycheck-by-paycheck budgeting breakdown built
      around your real bills, income, and due dates.
    </p>
  </div>

  <div style={faqItem}>
    <h3 style={faqQuestion}>Is this financial or investment advice?</h3>
    <p style={faqAnswer}>
      No. Family First Budgeting provides budgeting organization and coaching
      support only.
    </p>
  </div>

  <div style={faqItem}>
    <h3 style={faqQuestion}>Will I be judged for my finances?</h3>
    <p style={faqAnswer}>
      Absolutely not. Life happens. This is about creating a plan forward —
      not shame or guilt.
    </p>
  </div>
</div>

<div style={compareBox}>
  <h2 style={compareTitle}>
    How Family First Budgeting Is Different
  </h2>

  <p style={compareText}>
    Apps like Rocket Money are great for tracking transactions and subscriptions.
    But many families still feel overwhelmed because they can see their spending
    without truly understanding how their money flows paycheck to paycheck.
  </p>

  <p style={compareText}>
    Family First Budgeting focuses on real-life planning:
  </p>

  <div style={compareList}>
    <p>✔ Built around your actual paydays</p>
    <p>✔ Shows what bills come out and when</p>
    <p>✔ Helps reduce paycheck-to-paycheck stress</p>
    <p>✔ Personalized for your real household situation</p>
    <p>✔ No bank syncing required</p>
  </div>

  <p style={compareText}>
    This is not about tracking every penny.
    It’s about creating peace of mind and helping families feel in control again.
  </p>
</div>

<div style={stressBox}>
  <h2 style={stressTitle}>What Financial Stress Can Feel Like</h2>

  <div style={stressGrid}>
    <div style={stressCard}>
      <h3 style={stressHeading}>Before</h3>

      <p style={stressText}>
        ❌ Constantly checking your bank account
      </p>

      <p style={stressText}>
        ❌ Unsure if bills will clear
      </p>

      <p style={stressText}>
        ❌ Stress affecting relationships and daily life
      </p>

      <p style={stressText}>
        ❌ Feeling embarrassed or overwhelmed
      </p>
    </div>

    <div style={stressCard}>
      <h3 style={stressHeading}>After</h3>

      <p style={stressText}>
        ✔ Knowing exactly what gets paid and when
      </p>

      <p style={stressText}>
        ✔ Understanding what is truly safe to spend
      </p>

      <p style={stressText}>
        ✔ Feeling more confident with your finances
      </p>

      <p style={stressText}>
        ✔ Less stress and more peace of mind
      </p>
    </div>
  </div>
</div>

<div style={mistakesBox}>
  <h2 style={mistakesTitle}>Common Budgeting Mistakes</h2>

  <div style={mistakesList}>
    <p>❌ Only budgeting month-to-month instead of paycheck-to-paycheck</p>

    <p>❌ Forgetting irregular bills and subscriptions</p>

    <p>❌ Spending money before upcoming bills are accounted for</p>

    <p>❌ Not planning around actual due dates</p>

    <p>❌ Feeling like budgeting has to be perfect to work</p>
  </div>

  <p style={mistakesClosing}>
    Budgeting does not have to be perfect.
    It just needs to help you stay organized and reduce stress.
  </p>
</div>

<div style={reassuranceBox}>
  <p style={reassuranceText}>
    No judgment. No financial shaming. No confusing financial jargon.
  </p>

  <p style={reassuranceText}>
    Just a real plan built around your actual life, bills, and paychecks.
  </p>
</div>

        <a href="#/" style={footerLink}>← Back to Home</a>
      </div>
    </div>
  );
}

if (currentPage === "#/safe-to-spend") {
  return (
    <div style={page}>
      <div style={container}>

  <div
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <a href="#/" style={homeLink}>
      Return to Home
    </a>
  </div>
        <img
          src="/logo.png"
          alt="Family First Budgeting Logo"
          style={logoStyle}
        />

        <h1 style={headline}>
          Safe To Spend
        </h1>

        <p style={description}>
          A beginner-friendly budgeting app designed for teens,
          first-time budgeters, and anyone learning how to manage money with confidence.
        </p>

        <div style={appBox}>
  <h2 style={appTitle}>Safe To Spend</h2>

  <p style={appText}>
    Safe To Spend is a beginner-friendly budgeting app designed for teens,
    first-time budgeters, and anyone learning how to manage money with confidence.
  </p>

  <div style={appList}>
    <p>✔ Teen tested and teen approved</p>
    <p>✔ No bank account connection required</p>
    <p>✔ No debit or credit card required</p>
    <p>✔ Simple and easy to understand</p>
    <p>✔ Built for real-life spending awareness</p>
  </div>

  <p style={appText}>
    Instead of confusing financial jargon, Safe To Spend helps users understand
    what is actually safe to spend after bills, savings, and responsibilities.
  </p>

  <p style={appClosing}>
    Built to make budgeting feel less stressful and more approachable.
  </p>
</div>

        <a href="#/" style={footerLink}>
          ← Back to Home
        </a>

      </div>
    </div>
  );
}

  if (currentPage === "#/website-design") {
    return (
      <div style={page}>
        <div style={container}>

  <div
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <a href="#/" style={homeLink}>
      Return to Home
    </a>
  </div>
          <img src="/logo.png" alt="Family First Budgeting Logo" style={logoStyle} />

          <h1 style={headline}>Website Design Services</h1>

          <p style={description}>
            Simple, affordable websites for small businesses that need a clean online presence without ongoing maintenance.
          </p>

          <div style={webDesignBox}>
            <h2 style={webDesignTitle}>Starter Website Package</h2>

            <div style={aboutList}>
              <p>✔ One Home Page</p>
              <p>✔ One Privacy Policy Page</p>
              <p>✔ Mobile-friendly design</p>
              <p>✔ Contact form, if requested</p>
              <p>✔ Social media links, if provided</p>
              <p>✔ Basic SEO setup</p>
              <p>✔ Up to two brand colors</p>
              <p>✔ Temporary Vercel preview before final payment</p>
            </div>

            <p style={webDesignText}>
              Websites are built in my Vercel account for preview only. Final files are delivered after signed approval and full payment.
            </p>

            <a href="#/website-agreement" style={button}>
              Start My Website Project
            </a>
          </div>

          <a href="#/" style={footerLink}>← Back to Home</a>
        </div>
      </div>
    );
  }

  if (currentPage === "#/website-agreement") {
    return (
      <div style={page}>
        <div style={container}>

  <div
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <a href="#/" style={homeLink}>
      Return to Home
    </a>
  </div>
          <img src="/logo.png" alt="Family First Budgeting Logo" style={logoStyle} />

          <h1 style={headline}>Website Design Agreement</h1>

          <p style={description}>
            Please review the full agreement below. You may download or print a copy before continuing. 
            Please review the information below and retain a copy of the complete Website Design Agreement for your records before signing electronically.          
          </p>
                
          <div style={agreementBox}>

    <h2 style={agreementTitle}>
        Website Design Agreement
    </h2>

    <p style={agreementText}>
        Please review the complete Website Design Agreement before submitting this form.
    </p>

    <p style={agreementText}>
        The Agreement contains important information regarding:
    </p>


    <ul style={agreementList}>

        <li>Scope of Services</li>

        <li>Payment Terms</li>

        <li>Deposits</li>

        <li>Revision Policies</li>

        <li>Ownership Rights</li>

        <li>Final Approval Procedures</li>

        <li>Hosting Responsibilities</li>

        <li>Maintenance Limitations</li>

        <li>Cancellation Policies</li>

        <li>Portfolio Rights</li>

        <li>Liability Limitations</li>

        <li>Governing Law</li>

    </ul>


    <p style={agreementText}>
        You may download, print, or otherwise retain a copy of the Agreement for your records prior to signing electronically.
    </p>


    <div style={downloadButtons}>

    <a
  href="/FFB_Website_Design_Agreement_250_Branded.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={button}
  onClick={() =>
    setAgreementData({ ...agreementData, agreementViewed: true })
  }
>
  🖨 Print Agreement
</a>


</div>
     
  
</div>

          <form onSubmit={handleAgreementSubmit} style={formStyle}>
            <input
              type="text"
              placeholder="Client Name *"
              required
              value={agreementData.clientName}
              onChange={(e) =>
                setAgreementData({ ...agreementData, clientName: e.target.value })
              }
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Business Name *"
              required
              value={agreementData.businessName}
              onChange={(e) =>
                setAgreementData({ ...agreementData, businessName: e.target.value })
              }
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Client Email *"
              required
              value={agreementData.email}
              onChange={(e) =>
                setAgreementData({ ...agreementData, email: e.target.value })
              }
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Client Phone"
              value={agreementData.phone}
              onChange={(e) =>
                setAgreementData({ ...agreementData, phone: e.target.value })
              }
              style={inputStyle}
            />

            <label style={checkboxRow}>
              <input
                type="checkbox"
                checked={agreementData.readAgreement}
                onChange={(e) =>
                  setAgreementData({ ...agreementData, readAgreement: e.target.checked })
                }
              />
              <span>I have read the entire Website Design Agreement.</span>
            </label>

            <label style={checkboxRow}>
              <input
                type="checkbox"
                checked={agreementData.bindingAgreement}
                onChange={(e) =>
                  setAgreementData({ ...agreementData, bindingAgreement: e.target.checked })
                }
              />
              <span>I understand that submitting this form creates an agreement based on the terms shown above.</span>
            </label>

            <label style={checkboxRow}>
              <input
                type="checkbox"
                checked={agreementData.depositAcknowledged}
                onChange={(e) =>
                  setAgreementData({ ...agreementData, depositAcknowledged: e.target.checked })
                }
              />
              <span>I understand that payments are earned as work is performed and are non-refundable except as required by law.</span>
            </label>

            <label style={checkboxRow}>
              <input
                type="checkbox"
                checked={agreementData.retainedCopy}
                onChange={(e) =>
                  setAgreementData({ ...agreementData, retainedCopy: e.target.checked })
                }
              />
              <span>I downloaded, printed, or otherwise retained a copy of this Agreement for my records.</span>
            </label>

            <input
              type="text"
              placeholder="Typed Signature *"
              required
              value={agreementData.typedSignature}
              onChange={(e) =>
                setAgreementData({ ...agreementData, typedSignature: e.target.value })
              }
              style={inputStyle}
            />

         {!agreementStatus.includes("accepted") && (
  <button type="submit" style={button}>
    Accept Agreement
  </button>
)}

{agreementStatus && (
  <p style={statusText}>
    {agreementStatus}
  </p>
)}

{agreementStatus.includes("accepted") && (
  <a href="#/website-intake" style={button}>
    Continue to Intake Form
  </a>
)}
          </form>

          <a href="#/website-design" style={footerLink}>← Back to Website Design Services</a>
        </div>
      </div>
    );
  }

  if (currentPage === "#/website-intake") {
    return (
      <div style={page}>
        <div style={container}>

  <div
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "20px",
    }}
  >
    <a href="#/" style={homeLink}>
      Return to Home
    </a>
  </div>
          <img src="/logo.png" alt="Family First Budgeting Logo" style={logoStyle} />

          <h1 style={headline}>Website Client Intake Form</h1>

          <p style={description}>            
            Please complete this form with the information you want included in your website. Information submitted after the Materials Acknowledgement may require additional fees or delay the project.
          </p>

          <form onSubmit={handleIntakeSubmit} style={formStyle}>
            <div style={formSection}>
              <h2 style={formSectionTitle}>Client Information</h2>

              <input
                type="text"
                placeholder="Client Name *"
                required
                value={intakeData.clientName}
                onChange={(e) => updateIntake("clientName", e.target.value)}
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Business Name *"
                required
                value={intakeData.businessName}
                onChange={(e) => updateIntake("businessName", e.target.value)}
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Client Email *"
                required
                value={intakeData.email}
                onChange={(e) => updateIntake("email", e.target.value)}
                style={inputStyle}
              />

              <input
                type="tel"
                placeholder="Client Phone (Optional)"
                value={intakeData.phone}
                onChange={(e) => updateIntake("phone", e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={formSection}>
              <h2 style={formSectionTitle}>Branding</h2>

              <input
                type="text"
                placeholder="Primary Brand Color"
                value={intakeData.primaryColor}
                onChange={(e) => updateIntake("primaryColor", e.target.value)}
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Secondary Brand Color"
                value={intakeData.secondaryColor}
                onChange={(e) => updateIntake("secondaryColor", e.target.value)}
                style={inputStyle}
              />

              <select
                value={intakeData.logoPlan}
                onChange={(e) => updateIntake("logoPlan", e.target.value)}
                style={inputStyle}
              >
                <option value="">Logo Plan</option>
                <option value="Client will email logo">Client will email logo</option>
                <option value="Client does not have a logo">Client does not have a logo</option>
                <option value="Use business name as text logo">Use business name as text logo</option>
              </select>

              <select
                value={intakeData.imagePlan}
                onChange={(e) => updateIntake("imagePlan", e.target.value)}
                style={inputStyle}
              >
                <option value="">Image Plan</option>
                <option value="Client will email images">Client will email images</option>
                <option value="Use simple stock-style placeholders">Use simple stock-style placeholders</option>
                <option value="No images requested">No images requested</option>
              </select>
            </div>

            <div style={formSection}>
  <h2 style={formSectionTitle}>Website Content</h2>

  <p
    style={{
      marginTop: "15px",
      marginBottom: "18px",
      lineHeight: "1.8",
      color: "#5f6b75",
      fontSize: "15px",
      textAlign: "center",
      maxWidth: "700px",
      marginLeft: "auto",
      marginRight: "auto",

    }}
  >
    Please provide your business description, services offered, and business hours exactly as you would like them displayed on your website. The Designer will use the information provided to create your website.
  </p>

             <textarea
  placeholder="Business Description"
  rows="5"
  value={intakeData.businessDescription}
  onChange={(e) => updateIntake("businessDescription", e.target.value)}
  style={inputStyle}
/>

<p style={helperText}>
  Tell visitors who you are, what you do, who you help, and why customers should choose your business.
</p>


<textarea
  placeholder="Services Offered"
  rows="5"
  value={intakeData.services}
  onChange={(e) => updateIntake("services", e.target.value)}
  style={inputStyle}
/>

<p style={helperText}>
  List your services exactly as you would like them displayed on your website.
</p>


<textarea
  placeholder="Business Hours"
  rows="3"
  value={intakeData.businessHours}
  onChange={(e) => updateIntake("businessHours", e.target.value)}
  style={inputStyle}
/>

<p style={helperText}>
  Example: Monday-Friday 8:00 AM - 5:00 PM • Saturday By Appointment • Sunday Closed
</p>
            </div>

            <div style={formSection}>
              <h2 style={formSectionTitle}>Website Contact Information</h2>

              <input
                type="email"
                placeholder="Contact Email to Display on Website"
                value={intakeData.contactEmail}
                onChange={(e) => updateIntake("contactEmail", e.target.value)}
                style={inputStyle}
              />

              <input
                type="tel"
                placeholder="Contact Phone to Display on Website"
                value={intakeData.contactPhone}
                onChange={(e) => updateIntake("contactPhone", e.target.value)}
                style={inputStyle}
              />

              <textarea
                placeholder="Business Address, Service Area, or Location Details"
                rows="3"
                value={intakeData.address}
                onChange={(e) => updateIntake("address", e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={formSection}>
              <h2 style={formSectionTitle}>Social Media Links</h2>

              <input
                type="url"
                placeholder="Facebook Link"
                value={intakeData.facebook}
                onChange={(e) => updateIntake("facebook", e.target.value)}
                style={inputStyle}
              />

              <input
                type="url"
                placeholder="Instagram Link"
                value={intakeData.instagram}
                onChange={(e) => updateIntake("instagram", e.target.value)}
                style={inputStyle}
              />

              <input
                type="url"
                placeholder="TikTok Link"
                value={intakeData.tiktok}
                onChange={(e) => updateIntake("tiktok", e.target.value)}
                style={inputStyle}
              />

              <input
                type="url"
                placeholder="LinkedIn Link"
                value={intakeData.linkedin}
                onChange={(e) => updateIntake("linkedin", e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={formSection}>
              <h2 style={formSectionTitle}>Domain and Hosting</h2>

              <select
                value={intakeData.ownsDomain}
                onChange={(e) => updateIntake("ownsDomain", e.target.value)}
                style={inputStyle}
              >
                <option value="">Do you own a domain?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure">Not Sure</option>
              </select>

              <input
                type="text"
                placeholder="Domain Name, if owned"
                value={intakeData.domainName}
                onChange={(e) => updateIntake("domainName", e.target.value)}
                style={inputStyle}
              />

              <select
                value={intakeData.hasHosting}
                onChange={(e) => updateIntake("hasHosting", e.target.value)}
                style={inputStyle}
              >
                <option value="">Do you have hosting or Vercel?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure">Not Sure</option>
              </select>

              <input
                type="text"
                placeholder="Hosting Provider or Vercel Info, if known"
                value={intakeData.hostingProvider}
                onChange={(e) => updateIntake("hostingProvider", e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={formSection}>
              <h2 style={formSectionTitle}>Requested Features</h2>

              <label style={checkboxRow}>
                <input
                  type="checkbox"
                  checked={intakeData.contactForm}
                  onChange={(e) => updateIntake("contactForm", e.target.checked)}
                />
                Contact Form
              </label>

              <label style={checkboxRow}>
                <input
                  type="checkbox"
                  checked={intakeData.socialLinks}
                  onChange={(e) => updateIntake("socialLinks", e.target.checked)}
                />
                Social Media Links
              </label>

              <label style={checkboxRow}>
                <input
                  type="checkbox"
                  checked={intakeData.basicSeo}
                  onChange={(e) => updateIntake("basicSeo", e.target.checked)}
                />
                Basic SEO Setup
              </label>

              <textarea
                placeholder="Additional Notes or Requests"
                rows="4"
                value={intakeData.notes}
                onChange={(e) => updateIntake("notes", e.target.value)}
                style={inputStyle}
              />
            </div>

<label style={checkboxRow}>

  <input
    type="checkbox"
    checked={intakeData.contentAcknowledged}
    onChange={(e) =>
      setIntakeData({
        ...intakeData,
        contentAcknowledged: e.target.checked,
      })
    }
  />

  <span>
    I understand that the information provided in this intake form will be used to create my website.
  </span>

</label>

            {!intakeStatus.includes("completed") && (
  <button type="submit" style={button}>
    Submit Intake Form
  </button>
)}

            {intakeStatus && (
  <p
    style={{
      ...statusText,
      marginTop: "15px",
      marginBottom: "25px",
    }}
  >
    {intakeStatus}
  </p>
)}

            {intakeStatus.includes("completed") && (
  <a href="#/materials" style={button}>
    Continue to Materials Acknowledgement
  </a>
)}
          </form>

          <a href="#/website-agreement" style={footerLink}>← Back to Agreement</a>
        </div>
      </div>
    );
  }



  return (
    <div style={page}>
      <div style={container}>

          <img
  src="/logo.png"
  alt="Family First Budgeting Logo"
  style={logoStyle}
/>
   
<h1 style={homeTitle}>
  About Family First Budgeting
</h1>

<p style={mainSubtitle}>
  Family First Budgeting was created to help families and small businesses feel more organized, prepared, and confident. Whether you need help understanding your household budget or you need a simple website for your business, the goal is to provide practical support without judgment or confusion.
</p>

<div style={serviceMenuBox}>
  <h2 style={serviceMenuTitle}>Services & Tools</h2>

  <p style={servicesDescription}>
Select a service below to learn more about how Family First Budgeting can help you.
</p>

  <div style={serviceCards}>
  <div style={serviceCard}>
    <h3 style={serviceTitle}>💰 Budgeting Services</h3>

    <p style={serviceText}>
      Personalized paycheck-by-paycheck budget plans built around your real income, bills, due dates, and paydays.
    </p>

   <div style={cardActionStack}>
  <p style={{ ...promo, display: "block", marginBottom: "0" }}>
    🎉 First 5 clients receive Month 1 FREE
  </p>

  <a href="#/budgeting-services" style={homeButton}>
    Learn More About Budgeting
  </a>
</div>

<div style={safeMiniCard}>

  <h3 style={serviceTitle}>
    📱 Safe To Spend
  </h3>

  <p style={serviceText}>
    A beginner-friendly budgeting app for teens, first-time budgeters,
    and anyone learning how to manage money.
  </p>

  <div style={miniList}>
    <p>✔ Android only</p>
    <p>✔ Available on Google Play</p>
    <p>✔ No bank connection required</p>
    <p>✔ Teen tested and approved</p>
  </div>

  <div style={{ marginTop: "15px" }}>
  <a href="#/safe-to-spend" style={homeButton}>
    Learn More About Safe To Spend
  </a>
</div>

</div>

</div>   {/* closes Budgeting Services card */}

<div style={serviceCard}>
      <h3 style={serviceTitle}>💻 Website Design Services</h3>

      <p style={serviceText}>
        Simple, affordable one-page business websites with a Privacy Policy page, mobile-friendly design, and basic SEO setup.
      </p>

      <div style={miniList}>
        <p>✔ One Home Page</p>
        <p>✔ One Privacy Policy Page</p>
        <p>✔ Contact form, if requested</p>
        <p>✔ Built in a preview site before final delivery</p>
      </div>
            
      <div style={{ marginTop:"20px" }}>
         <a href="#/website-design" style={button}>
          Learn More About Website Design
        </a>
      </div>      

      <div style={safeCardContainer}>

</div>
    
    </div>
  </div>
</div>   

        <div style={contactSection}>
          <h2 style={contactHeading}>Questions?</h2>
          <p style={contactIntro}>
            Have questions about budgeting, website design, or future services? 
            I'd be happy to answer them before you decide to get started.
          </p>

          <form onSubmit={handleContactSubmit} style={formStyle}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={contactData.name}
              onChange={(e) =>
                setContactData({ ...contactData, name: e.target.value })
              }
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={contactData.email}
              onChange={(e) =>
                setContactData({ ...contactData, email: e.target.value })
              }
              style={inputStyle}
            />

            <textarea
              placeholder="Tell me a little about what you're looking for."
              required
              rows="5"
              value={contactData.message}
              onChange={(e) =>
                setContactData({ ...contactData, message: e.target.value })
              }
              style={inputStyle}
            />

            <button
  type="button"
  onClick={sendWebsiteClientPacket}
  style={button}
>
  Test Client Packet Email
</button>

            <button type="submit" style={button}>
              Send Message             
            </button>

            {contactStatus && <p style={statusText}>{contactStatus}</p>}
          </form>
        </div>

          <footer style={footer}>
  <p style={footerBrand}>Family First Budgeting</p>

  <p style={footerSlogan}>
    Fighting the economy, one family at a time.
  </p>

  <p style={footerEmail}>
    📧 MSullivan.FamilyFirstBudgeting@outlook.com
  </p>

  <div style={footerLinks}>
    <a
      href="https://www.facebook.com/FamilyFirstBudgeting/"
      target="_blank"
      rel="noopener noreferrer"
      style={footerLink}
    >
      Facebook
    </a>

    <span style={footerDivider}>•</span>

    <a href="/#/privacy-policy" style={footerLink}>
      Privacy Policy
    </a>
  </div>

  <p style={disclaimer}>
    Family First Budgeting provides budgeting organization, educational support, website design services, and the Safe To Spend budgeting app. We do not provide financial, investment, tax, legal, credit repair, or professional financial planning advice.

  </p>

  <p style={footerCopy}>© 2026 Family First Budgeting</p>
</footer>
      </div>
    </div>
  );
}

const page = {
  fontFamily: "Arial, sans-serif",
  background: "linear-gradient(180deg, #eef6fb 0%, #f4faf7 100%)",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "28px 14px",
};

const container = {
  background: "#fcfdfd",
  padding: "24px",
  borderRadius: "18px",
  maxWidth: "760px",
  width: "100%",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(31,60,70,0.08)",
  border: "1px solid #d6e6ef",
};

const title = {
  color: "#1f3c46",
  fontSize: "28px",
  fontWeight: "800",
  marginBottom: "5px",
  letterSpacing: "-0.5px",
};

const headline = {
  color: "#1f3c46",
  fontSize: "22px",
  fontWeight: "800",
  lineHeight: "1.25",
  marginBottom: "10px",
};

const description = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.55",
  maxWidth: "540px",
  margin: "0 auto 18px auto",
  maxWidth: "620px",
};

const slogan = {
  color: "#7fb8a4",
  fontSize: "14px",
  fontWeight: "700",
  marginBottom: "16px",
};

const promo = {
  background: "linear-gradient(135deg, #dff4ec 0%, #edf9f5 100%)",
  padding: "8px 16px",
  borderRadius: "10px",
  color: "#2e6f5e",
  fontWeight: "700",
  fontSize: "13px",
  marginBottom: "15px",
  margintop:"10px",
  display: "inline-block",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(127,184,164,0.10)",
};

const button = {
  background: "linear-gradient(135deg, #78b59f 0%, #5d9f89 100%)",
  color: "#fff",
  padding: "13px 20px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "14px",
  boxShadow: "0 8px 20px rgba(127,184,164,0.22)",
  display: "inline-block",
  marginBottom: "10px",
  border: "none",
  cursor: "pointer",
  transition: "0.2s ease",
  transform: "translateY(0)",
  opacity: 1,
};

const aboutWrapper = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "12px",
  marginBottom: "18px",
  textAlign: "left",
  borderLeft: "4px solid #7fb8a4",
};

const aboutTitle = {
  textAlign: "center",
  color: "#234852",
  fontSize: "22px",
  marginBottom: "12px",
  letterSpacing: "-0.3px",
};

const aboutText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.65",
  marginBottom: "8px",
  maxWidth: "620px",
};

const aboutList = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "12px",
  padding: "12px 16px",
  margin: "14px 0",
  color: "#1f3c46",
  fontSize: "14px",
  lineHeight: "1.65",
};

const aboutClosing = {
  color: "#1f3c46",
  fontSize: "14px",
  fontWeight: "500",
  marginBottom: "8px",
};

const aboutBold = {
  color: "#1f3c46",
  fontWeight: "700",
  fontSize: "15px",
  marginBottom: 0,
};

const contactSection = {
  textAlign: "left",
  marginTop: "8px",
  paddingTop: "10px",
  borderTop: "1px solid #e0e7ec",
};

const contactHeading = {
  textAlign: "center",
  color: "#1f3c46",
  fontSize: "22px",
  marginBottom: "8px",
};

const contactIntro = {
  maxWidth:"600px",
  margin:"0 auto 25px auto",
  lineHeight:"1.7",
  fontSize:"14px",
  color:"#5f6b75",
  textAlign:"center"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "11px 12px",
  borderRadius: "9px",
  border: "1px solid #cfd8dc",
  fontSize: "14px",
  width: "100%",
  boxSizing: "border-box",
  background: "#ffffff",
  color: "#1f3c46",
  outline: "none",
  transition: "0.2s ease",
  marginBottom: "0px",
};

const helperText = {
  fontSize:"14px",
  color:"#5f6b75",
  fontStyle:"italic",
  textAlign:"center",
  marginTop:"10px",
  marginBottom:"12px",
  lineHeight:"1.5",
};

const statusText = {
  textAlign: "center",
  color: "#5f6b75",
  fontSize: "13px",
  marginTop: "20px",
  marginBottom: "20px",
};

const contactBox = {
  borderTop: "1px solid #e0e7ec",
  paddingTop: "14px",
  marginTop: "26px",
};

const contactText = {
  color: "#1f3c46",
  fontSize: "14px",
  marginBottom: "8px",
};

const fbLink = {
  color: "#7fb8a4",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
};
const storyBox = {
  background: "linear-gradient(180deg, #f7fbfd 0%, #eef8f4 100%)",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "14px",
  marginBottom: "14px",
  textAlign: "left",
  borderLeft: "4px solid #7fb8a4",
};

const storyTitle = {
  color: "#234852",
  fontSize: "22px",
  fontWeight: "700",
  marginTop: 0,
  marginBottom: "12px",
  textAlign: "center",
  letterSpacing: "-0.3px",
};

const storyText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.65",
  marginBottom: "8px",
  maxWidth: "620px",
};
const faqWrapper = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "22px",
  marginTop: "14px",
  marginBottom: "14px",
  textAlign: "left",
  borderLeft: "4px solid #7fb8a4",
};

const faqTitle = {
  textAlign: "center",
  color: "#234852",
  fontSize: "22px",
  marginTop: 0,
  marginBottom: "18px",
  letterSpacing: "-0.3px",
};

const faqItem = {
  marginBottom: "16px",
};

const faqQuestion = {
  color: "#2e6f5e",
  fontSize: "15px",
  fontWeight: "700",
  marginBottom: "4px",
};

const faqAnswer = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: 0,
  maxWidth: "620px",
};
const storyClosing = {
  color: "#1f3c46",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: 0,
};
const stepsWrapper = {
  padding: "10px 0 18px 0",
  textAlign: "left",
};

const stepsTitle = {
  textAlign: "center",
  color: "#234852",
  fontSize: "22px",
  marginTop: 0,
  marginBottom: "20px",
  letterSpacing: "-0.3px",
};

const stepItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "14px",
  marginBottom: "18px",
};

const stepNumber = {
  width: "32px",
  height: "32px",
  minWidth: "32px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #7fb8a4 0%, #5f9d88 100%)",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  fontSize: "14px",
};

const stepHeading = {
  color: "#1f3c46",
  fontSize: "15px",
  fontWeight: "700",
  marginTop: 0,
  marginBottom: "4px",
};

const stepText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: 0,
};

const reassuranceBox = {
  padding: "4px 0 16px 0",
  marginBottom: "8px",
  textAlign: "center",
};

const reassuranceText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "4px 0",
};
const footer = {
  marginTop: "30px",
  paddingTop: "20px",
  borderTop: "1px solid #d6e6ef",
  textAlign: "center",
};

const footerBrand = {
  color: "#1f3c46",
  fontSize: "16px",
  fontWeight: "700",
  marginBottom: "4px",
};

const footerSlogan = {
  color: "#5f6b75",
  fontSize: "13px",
  marginBottom: "12px",
};

const footerLinks = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginBottom: "12px",  
};

const footerLink = {
  display:"block",
  textAlign:"center",
  marginTop:"10px",
  color:"#7fb8a4",
  textDecoration:"none",
  fontWeight:"600"
};

const footerDivider = {
  color: "#b0bcc5",
};

const footerCopy = {
  color: "#8a97a3",
  fontSize: "11px",
  margin: 0,
};
const footerEmail = {
  color: "#1f3c46",
  fontSize: "13px",
  marginBottom: "10px",
};
const logoStyle = {
  width: "380px",
  maxWidth: "95%",
  marginBottom: "18px",
};
const compareBox = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderLeft: "4px solid #7fb8a4",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "14px",
  marginBottom: "14px",
  textAlign: "left",
};

const compareTitle = {
  textAlign: "center",
  color: "#234852",
  fontSize: "22px",
  marginBottom: "14px",
};

const compareText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.65",
  marginBottom: "10px",
};

const compareList = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "12px",
  padding: "12px 16px",
  margin: "14px 0",
  color: "#1f3c46",
  fontSize: "14px",
  lineHeight: "1.7",
};

const stressBox = {
  marginTop: "18px",
  marginBottom: "18px",
};

const stressTitle = {
  textAlign: "center",
  color: "#234852",
  fontSize: "22px",
  marginBottom: "18px",
};

const stressGrid = {
  display: "flex",  
  gap: "14px",
  flexWrap: "wrap",
};

const stressCard = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "16px",
  padding: "18px",
  textAlign: "left",
  flex: "1 1 300px",
};

const stressHeading = {
  color: "#2e6f5e",
  fontSize: "18px",
  marginTop: 0,
  marginBottom: "12px",
};

const stressText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.6",
  marginBottom: "8px",
};

const mistakesBox = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderLeft: "4px solid #7fb8a4",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "14px",
  marginBottom: "14px",
  textAlign: "left",
};

const mistakesTitle = {
  textAlign: "center",
  color: "#234852",
  fontSize: "22px",
  marginBottom: "14px",
};

const mistakesList = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.7",
};

const mistakesClosing = {
  color: "#1f3c46",
  fontWeight: "600",
  marginTop: "14px",
};
const appBox = {
  background: "linear-gradient(180deg, #eef8f4 0%, #f7fbfd 100%)",
  border: "1px solid #d6e6ef",
  borderLeft: "4px solid #7fb8a4",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "14px",
  marginBottom: "18px",
  textAlign: "left",
};

const appTitle = {
  textAlign: "center",
  color: "#234852",
  fontSize: "22px",
  marginBottom: "14px",
};

const appText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.65",
  marginBottom: "10px",
};

const appList = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "12px",
  padding: "12px 16px",
  margin: "14px 0",
  color: "#1f3c46",
  fontSize: "14px",
  lineHeight: "1.7",
};

const appClosing = {
  color: "#1f3c46",
  fontWeight: "600",
  marginTop: "10px",
};
const disclaimer = {
  marginTop: "22px",
  fontSize: "11.5px",
  color: "#8a97a3",
  lineHeight: "1.5",
};



const formSection = {
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "14px",
  padding: "16px",
  marginBottom: "12px",
  textAlign: "left",
};

const formSectionTitle = {
  color: "#234852",
  fontSize: "18px",
  marginTop: 0,
  marginBottom: "12px",
  textAlign: "center",
};

const downloadRow = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "14px",
};

const smallButton = {
  background: "#ffffff",
  color: "#2e6f5e",
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px solid #7fb8a4",
  fontWeight: "700",
  fontSize: "13px",
  cursor: "pointer",
};

const agreementPre = {
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  color: "#1f3c46",
  fontFamily: "Arial, sans-serif",
  fontSize: "12.5px",
  lineHeight: "1.55",
  margin: 0,
};

const agreementBox = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "14px",
  padding: "18px",
  marginTop: "16px",
  marginBottom: "18px",
  textAlign: "left",
   
};

const agreementList = {

    textAlign: "left",

    color:"#5f6b75",

    lineHeight:"1.8",

    marginBottom:"20px",

    paddingLeft:"25px"

};

const downloadButtons = {

    display:"flex",

    gap:"15px",

    justifyContent:"center",

    flexWrap:"wrap",

    marginTop:"25px"

};

const agreementTitle = {
  color: "#234852",
  fontSize: "20px",
  marginTop: 0,
  marginBottom: "12px",
  textAlign: "center",
};

const agreementSectionTitle = {
  color: "#2e6f5e",
  fontSize: "15px",
  marginTop: "16px",
  marginBottom: "6px",
};

const agreementText = {
  color: "#5f6b75",
  fontSize: "13px",
  lineHeight: "1.6",
  marginBottom: "8px",
};

const checkboxRow = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  color: "#1f3c46",
  fontSize: "14px",
  lineHeight: "1.5",
  background: "#f7fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "10px",
  padding: "12px",
  textAlign: "left",
};

const webDesignBox = {
  background: "linear-gradient(180deg, #f7fbfd 0%, #eef8f4 100%)",
  border: "1px solid #d6e6ef",
  borderLeft: "4px solid #7fb8a4",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "14px",
  marginBottom: "18px",
  textAlign: "center",
};

const webDesignTitle = {
  color: "#234852",
  fontSize: "22px",
  marginTop: 0,
  marginBottom: "10px",
  letterSpacing: "-0.3px",
};

const webDesignText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.65",
  marginBottom: "14px",
};

const webDesignList = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "12px",
  padding: "12px 16px",
  margin: "14px auto 18px auto",
  color: "#1f3c46",
  fontSize: "14px",
  lineHeight: "1.7",
  textAlign: "left",
  maxWidth: "520px",
};

const mainSubtitle = {
  color: "#5f6b75",
  fontSize: "15px",
  lineHeight: "1.9",
  maxWidth: "850px",
  margin: "0 auto 35px auto",
  textAlign: "center",
};

const serviceMenuBox = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 4px 20px rgba(0,0,0,.03)",
  marginTop: "22px",
  marginBottom: "30px",
};

const serviceMenuTitle = {
  color: "#234852",
  fontSize: "22px",
  marginTop: 0,
  marginBottom: "18px",
};

const serviceCards = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const serviceCard = {
  background: "#ffffff",
  border: "1px solid #d6e6ef",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 4px 15px rgba(0,0,0,.04)",
  marginBottom: "10px",
  overflow: "hidden",
  textAlign: "center",
};

const serviceTitle = {
  color: "#234852",
  fontSize: "18px",
  marginTop: 0,
  marginBottom: "10px",
};

const serviceText = {
  color: "#5f6b75",
  fontSize: "14px",
  lineHeight: "1.6",
  marginBottom: "14px",
};

const miniList = {
  background: "#f8fbfd",
  border: "1px solid #d6e6ef",
  borderRadius: "12px",
  padding: "12px",
  margin: "12px auto",
  maxWidth: "225px",
  width: "80%",
  textAlign: "left",
  fontSize: "13px",
  lineHeight: "1.6",
};

const homeTitle = {
  color: "#1f3c46",
  fontSize: "24px",
  fontWeight: "700",
  textAlign: "center",
  marginTop: "10px",
  marginBottom: "12px",
};

const servicesDescription = {
fontSize:"14px",
color:"#5f6b75",
textAlign:"center",
marginBottom:"20px"
};

const cardActionStack = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  marginTop: "14px",
  width: "100%",
};

const questionDescription={
maxWidth:"550px",
margin:"0 auto 25px auto",
lineHeight:"1.7",
fontSize:"14px",
color:"#5f6b75",
textAlign:"center"
}

const questionBox = {
  maxWidth:"600px",
  margin:"0 auto",
};

const homeButton = {
background:"#78b49d",
color:"#fff",
padding:"12px 24px",
fontSize:"14px",
fontWeight:"600",
borderRadius:"10px",
textDecoration:"none",
display:"inline-block",
boxShadow:"0 3px 8px rgba(0,0,0,.08)"
};

const safeCardContainer = {
display:"flex",
justifyContent:"center",
marginTop:"25px"
};

const safeMiniCard={
marginTop:"25px",
padding:"25px",
background:"#f7fbfd",
border:"1px solid #d6e6ef",
borderRadius:"14px",
maxWidth:"550px",
marginLeft:"auto",
marginRight:"auto"
}

const sectionBox = {
  background:"#fcfdfd",
  border:"1px solid #d6e6ef",
  borderRadius:"14px",
  padding:"18px",
  marginBottom:"15px",
};

const sectionTitle = {
  fontSize:"20px",
  fontWeight:"700",
  color:"#1f3c46",
  marginBottom:"8px",
};

const actionStack = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  gap:"15px",
  marginTop:"25px"
};
const invoiceRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
  fontSize: "17px",
};

const invoiceDivider = {
  border: "none",
  borderTop: "1px solid #d6e6ef",
  margin: "15px 0",
};

const policyList = {
  textAlign: "left",
  lineHeight: "1.9",
  color: "#4e5c67",
};

const paymentStatus = {
  fontSize:"18px",
  fontWeight:"600",
  color:"#8a6800",
  textAlign:"center",
  marginTop:"18px"
};

const homeLink = {
  display: "inline-block",
  color: "#7fb8a4",
  textDecoration: "none",
  fontWeight: "600",
  marginBottom: "25px",
  fontSize: "14px",
};