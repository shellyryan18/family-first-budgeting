import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      agreementData,
      intakeData,
      materialsData,
      depositAmount,
      projectTotal,
      remainingBalance,
    } = req.body;

    const emailBody = `
NEW WEBSITE CLIENT PACKET

PAYMENT
Project Total: $${projectTotal}
Deposit Paid: $${depositAmount}
Remaining Balance: $${remainingBalance}

AGREEMENT
Client Name: ${agreementData.clientName}
Email: ${agreementData.email}
Typed Signature: ${agreementData.typedSignature}

INTAKE
Client Name: ${intakeData.clientName}
Business Name: ${intakeData.businessName}
Email: ${intakeData.email}
Phone: ${intakeData.phone}

Business Description:
${intakeData.businessDescription}

Services:
${intakeData.services}

Business Hours:
${intakeData.businessHours}

Website Style:
${intakeData.websiteStyle || ""}

Colors:
Primary: ${intakeData.primaryColor || ""}
Secondary: ${intakeData.secondaryColor || ""}

Social Links:
Facebook: ${intakeData.facebook || ""}
Instagram: ${intakeData.instagram || ""}
TikTok: ${intakeData.tiktok || ""}
Other: ${intakeData.otherSocial || ""}

Domain / Hosting:
${intakeData.domainHosting || ""}

Additional Notes:
${intakeData.notes || ""}

MATERIALS ACKNOWLEDGEMENT
Client Name: ${materialsData.clientName}
Business Name: ${materialsData.businessName}
Typed Signature: ${materialsData.typedSignature}

Materials Provided: ${materialsData.materialsProvided}
Ownership Rights: ${materialsData.ownershipRights}
Delays Acknowledged: ${materialsData.delayAcknowledged}
Preview Acknowledged: ${materialsData.previewAcknowledged}
Revision Acknowledged: ${materialsData.revisionAcknowledged}
Approval Acknowledged: ${materialsData.approvalAcknowledged}
Delivery Acknowledged: ${materialsData.deliveryAcknowledged}
Records Acknowledged: ${materialsData.recordsAcknowledged}
`;

    const { data, error } = await resend.emails.send({
  from: process.env.FROM_EMAIL,
  to: process.env.TO_EMAIL,
  subject: `New Website Client - ${
    intakeData.businessName || intakeData.clientName || "New Client"
  }`,
  text: emailBody,
});

if (error) {
  console.error("Resend error:", error);
  return res.status(500).json({ error });
}

return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Website client packet error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}