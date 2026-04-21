import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function safe(value) {
  return value ?? "";
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:8px;border:1px solid #d6e6ef;font-weight:bold;background:#f7fbfd;">${label}</td>
      <td style="padding:8px;border:1px solid #d6e6ef;">${safe(value)}</td>
    </tr>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body || {};

    if (!data.full_name || !data.email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const html = `
      <h2>New Client Commitment Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;">
        ${row("Full Name", data.full_name)}
        ${row("Email", data.email)}
        ${row("Phone", data.phone)}
        ${row("Current Checking Balance", data.current_checking_balance)}
        ${row("Current Savings Balance", data.current_savings_balance)}
        ${row("Paycheck 1 Amount", data.paycheck_1_amount)}
        ${row("Paycheck 1 Pay Date", data.paycheck_1_date)}
        ${row("Paycheck 2 Amount", data.paycheck_2_amount)}
        ${row("Paycheck 2 Pay Date", data.paycheck_2_date)}
        ${row("Other Income Amount", data.other_income_amount)}
        ${row("Other Income Pay Date", data.other_income_date)}
        ${row("Rent / Mortgage Amount", data.rent_mortgage_amount)}
        ${row("Rent / Mortgage Due", data.rent_mortgage_due)}
        ${row("Home Insurance Amount", data.home_insurance_amount)}
        ${row("Home Insurance Due", data.home_insurance_due)}
        ${row("Property Taxes Amount", data.property_taxes_amount)}
        ${row("Property Taxes Due", data.property_taxes_due)}
        ${row("Electric Amount", data.electric_amount)}
        ${row("Electric Due", data.electric_due)}
        ${row("Water Amount", data.water_amount)}
        ${row("Water Due", data.water_due)}
        ${row("Gas Amount", data.gas_amount)}
        ${row("Gas Due", data.gas_due)}
        ${row("Trash Amount", data.trash_amount)}
        ${row("Trash Due", data.trash_due)}
        ${row("Internet Amount", data.internet_amount)}
        ${row("Internet Due", data.internet_due)}
        ${row("Cell Phone Amount", data.cell_phone_amount)}
        ${row("Cell Phone Due", data.cell_phone_due)}
        ${row("Home Phone Amount", data.home_phone_amount)}
        ${row("Home Phone Due", data.home_phone_due)}
        ${row("Cable TV Amount", data.cable_tv_amount)}
        ${row("Cable TV Due", data.cable_tv_due)}
        ${row("Car Payment Amount", data.car_payment_amount)}
        ${row("Car Payment Due", data.car_payment_due)}
        ${row("Car Insurance Amount", data.car_insurance_amount)}
        ${row("Car Insurance Due", data.car_insurance_due)}
        ${row("Health Insurance Amount", data.health_insurance_amount)}
        ${row("Health Insurance Due", data.health_insurance_due)}
        ${row("Credit Card 1 Amount", data.credit_card_1_amount)}
        ${row("Credit Card 1 Due", data.credit_card_1_due)}
        ${row("Credit Card 2 Amount", data.credit_card_2_amount)}
        ${row("Credit Card 2 Due", data.credit_card_2_due)}
        ${row("Credit Card 3 Amount", data.credit_card_3_amount)}
        ${row("Credit Card 3 Due", data.credit_card_3_due)}
        ${row("Credit Card 4 Amount", data.credit_card_4_amount)}
        ${row("Credit Card 4 Due", data.credit_card_4_due)}
        ${row("Credit Card 5 Amount", data.credit_card_5_amount)}
        ${row("Credit Card 5 Due", data.credit_card_5_due)}
        ${row("Student Loans Amount", data.student_loans_amount)}
        ${row("Student Loans Due", data.student_loans_due)}
        ${row("Personal Loans Amount", data.personal_loans_amount)}
        ${row("Personal Loans Due", data.personal_loans_due)}
        ${row("Other Loans Amount", data.other_loans_amount)}
        ${row("Other Loans Due", data.other_loans_due)}
        ${row("Netflix Amount", data.netflix_amount)}
        ${row("Netflix Due", data.netflix_due)}
        ${row("Hulu Amount", data.hulu_amount)}
        ${row("Hulu Due", data.hulu_due)}
        ${row("Disney+ Amount", data.disney_amount)}
        ${row("Disney+ Due", data.disney_due)}
        ${row("Amazon Prime Amount", data.amazon_prime_amount)}
        ${row("Amazon Prime Due", data.amazon_prime_due)}
        ${row("HBO Max Amount", data.hbo_max_amount)}
        ${row("HBO Max Due", data.hbo_max_due)}
        ${row("Apple TV Amount", data.apple_tv_amount)}
        ${row("Apple TV Due", data.apple_tv_due)}
        ${row("Spotify Amount", data.spotify_amount)}
        ${row("Spotify Due", data.spotify_due)}
        ${row("YouTube Premium Amount", data.youtube_premium_amount)}
        ${row("YouTube Premium Due", data.youtube_premium_due)}
        ${row("Other Subscription Amount", data.other_subscription_amount)}
        ${row("Other Subscription Due", data.other_subscription_due)}
        ${row("Other Bill 1 Name", data.other_bill_1_name)}
        ${row("Other Bill 1 Amount", data.other_bill_1_amount)}
        ${row("Other Bill 1 Due", data.other_bill_1_due)}
        ${row("Other Bill 2 Name", data.other_bill_2_name)}
        ${row("Other Bill 2 Amount", data.other_bill_2_amount)}
        ${row("Other Bill 2 Due", data.other_bill_2_due)}
        ${row("Other Bill 3 Name", data.other_bill_3_name)}
        ${row("Other Bill 3 Amount", data.other_bill_3_amount)}
        ${row("Other Bill 3 Due", data.other_bill_3_due)}
        ${row("Other Bill 4 Name", data.other_bill_4_name)}
        ${row("Other Bill 4 Amount", data.other_bill_4_amount)}
        ${row("Other Bill 4 Due", data.other_bill_4_due)}
        ${row("Other Bill 5 Name", data.other_bill_5_name)}
        ${row("Other Bill 5 Amount", data.other_bill_5_amount)}
        ${row("Other Bill 5 Due", data.other_bill_5_due)}
        ${row("Behind on Bills", data.behind_on_bills)}
        ${row("Which Bills Behind", data.which_bills_behind)}
        ${row("Goals", data.goals)}
        ${row("Biggest Stress", data.biggest_stress)}
        ${row("Agreed to Services", data.agree_services ? "Yes" : "No")}
        ${row("Confirmed Accuracy", data.agree_accuracy ? "Yes" : "No")}
      </table>
    `;

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      reply_to: data.email,
      subject: "New Client Commitment Submission - Family First Budgeting",
      html,
    });

    return res.status(200).json({ ok: true, result });
  } catch (error) {
    console.error("Commitment form error:", error);
    return res.status(500).json({
      error: error?.message || "Failed to send submission",
    });
  }
}