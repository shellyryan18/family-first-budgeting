import React, { useState } from "react";
import { track } from "@vercel/analytics";

export default function App() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState("");

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
  
  return (
    <div style={page}>
      <div style={container}>

        <img
  src="/logo.png"
  alt="Family First Budgeting Logo"
  style={logoStyle}
/>
   

<p style={description}>
  Personalized budget plans built around your real income, bills, and paydays —
  so you know what gets paid, what’s left, and what’s coming next.
</p>

<p style={promo}>
  🎉 First 5 clients receive their first month FREE
</p>

<div
  style={{
    height: "1px",
    background: "#dfe8ed",
    margin: "6px auto 24px auto",
    width: "92%",
  }}
/>

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
        <div style={contactSection}>
          <h2 style={contactHeading}>Reach Out Anytime</h2>
          <p style={contactIntro}>
            Not ready to fully commit yet? Send me a message here and I’ll be
            happy to answer your questions.
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
              placeholder="Tell me a little about your situation"
              required
              rows="5"
              value={contactData.message}
              onChange={(e) =>
                setContactData({ ...contactData, message: e.target.value })
              }
              style={inputStyle}
            />

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
    Family First Budgeting provides budgeting guidance and support only. We do
    not provide financial, legal, tax, or investment advice.
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
  padding: "8px 12px",
  borderRadius: "10px",
  color: "#2e6f5e",
  fontWeight: "700",
  fontSize: "13px",
  marginBottom: "20px",
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
  paddingTop: "18px",
  borderTop: "1px solid #e0e7ec",
};

const contactHeading = {
  textAlign: "center",
  color: "#1f3c46",
  fontSize: "22px",
  marginBottom: "8px",
};

const contactIntro = {
  textAlign: "center",
  color: "#5f6b75",
  fontSize: "14px",
  marginBottom: "16px",
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
};

const statusText = {
  textAlign: "center",
  color: "#5f6b75",
  fontSize: "13px",
  marginTop: "8px",
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
  color: "#7fb8a4",
  textDecoration: "none",
  fontSize: "13px",
  fontWeight: "600",
  transition: "0.2s ease",
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