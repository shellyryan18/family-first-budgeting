import { Resend } from "resend";
import {PDFDocument, StandardFonts, rgb } from "pdf-lib";

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

AGREEMENT
Client Name: ${agreementData.clientName}
Email: ${agreementData.email}
Typed Signature: ${agreementData.typedSignature}
Signed Date/Time: ${agreementData.signedAt || "Not captured"}

MATERIALS ACKNOWLEDGEMENT
Client Name: ${materialsData.clientName}
Business Name: ${materialsData.businessName}
Typed Signature: ${materialsData.typedSignature}
Signed Date/Time: ${materialsData.signedAt || "Not captured"}

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

const pdfDoc = await PDFDocument.create();
let page = pdfDoc.addPage([612, 792]);

const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

let y = 740;

function write(text, size = 11, bold = false) {
  page.drawText(String(text || ""), {
    x: 50,
    y,
    size,
    font: bold ? boldFont : font,
    color: rgb(0.12, 0.24, 0.28),
  });
  y -= size + 8;

  if (y < 60) {
    page = pdfDoc.addPage([612, 792]);
    y = 740;
  }
}

write("Family First Budgeting", 18, true);
write("Website Client Packet", 16, true);
write("");

write("PAYMENT", 13, true);
write(`Project Total: $${projectTotal}`);
write(`Deposit Paid: $${depositAmount}`);
write(`Remaining Balance: $${remainingBalance}`);
write("");

write("AGREEMENT", 13, true);
write(`Client Name: ${agreementData.clientName}`);
write(`Email: ${agreementData.email}`);
write(`Typed Signature: ${agreementData.typedSignature}`);
write(`Signed Date/Time: ${agreementData.signedAt || "Not captured"}`);
write("");

write("INTAKE", 13, true);
write(`Client Name: ${intakeData.clientName}`);
write(`Business Name: ${intakeData.businessName}`);
write(`Email: ${intakeData.email}`);
write(`Phone: ${intakeData.phone}`);
write("");
write("Business Description:", 11, true);
write(intakeData.businessDescription);
write("");
write("Services:", 11, true);
write(intakeData.services);
write("");
write(`Business Hours: ${intakeData.businessHours}`);
write("");

write("MATERIALS ACKNOWLEDGEMENT", 13, true);
write(`Client Name: ${materialsData.clientName}`);
write(`Business Name: ${materialsData.businessName}`);
write(`Typed Signature: ${materialsData.typedSignature}`);
write(`Signed Date/Time: ${materialsData.signedAt || "Not captured"}`);
write("");
write(`Materials Provided: ${materialsData.materialsProvided}`);
write(`Ownership Rights: ${materialsData.ownershipRights}`);
write(`Delays Acknowledged: ${materialsData.delayAcknowledged}`);
write(`Preview Acknowledged: ${materialsData.previewAcknowledged}`);
write(`Revision Acknowledged: ${materialsData.revisionAcknowledged}`);
write(`Approval Acknowledged: ${materialsData.approvalAcknowledged}`);
write(`Delivery Acknowledged: ${materialsData.deliveryAcknowledged}`);
write(`Records Acknowledged: ${materialsData.recordsAcknowledged}`);

const pdfBytes = await pdfDoc.save();
const pdfBase64 = Buffer.from(pdfBytes).toString("base64");

    const { data, error } = await resend.emails.send({
  from: process.env.FROM_EMAIL,
  to: process.env.TO_EMAIL,
  subject: `New Website Client - ${
    intakeData.businessName || intakeData.clientName || "New Client"
  }`,
  text: emailBody,
  attachments: [
  {
    filename: "Website-Client-Packet.pdf",
    content: pdfBase64,
  },
],
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