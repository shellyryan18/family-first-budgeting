import { Resend } from "resend";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

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

Client: ${intakeData.clientName || agreementData.clientName}
Business: ${intakeData.businessName || materialsData.businessName}
Email: ${intakeData.email || agreementData.email}

Attached is the completed Website Client Packet PDF.
`;

    const pdfDoc = await PDFDocument.create();

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    let logoImage = null;

    try {
      const logoPath = path.join(process.cwd(), "public", "logo.png");
      const logoBytes = fs.readFileSync(logoPath);
      logoImage = await pdfDoc.embedPng(logoBytes);
    } catch (err) {
      console.log("Logo not found or could not be embedded:", err);
    }

    let page = pdfDoc.addPage([612, 792]);
    let y = 735;

    function addHeader() {
      if (logoImage) {
        page.drawImage(logoImage, {
          x: 186,
          y: 680,
          width: 240,
          height: 75,
        });
        y = 655;
      }

      page.drawText("Website Client Packet", {
        x: 205,
        y,
        size: 18,
        font: boldFont,
        color: rgb(0.12, 0.24, 0.28),
      });

      y -= 22;

      page.drawText("Family First Budgeting", {
        x: 230,
        y,
        size: 11,
        font,
        color: rgb(0.36, 0.62, 0.53),
      });

      y -= 25;

      page.drawLine({
        start: { x: 50, y },
        end: { x: 562, y },
        thickness: 1,
        color: rgb(0.84, 0.9, 0.93),
      });

      y -= 25;
    }

    function newPage() {
      page = pdfDoc.addPage([612, 792]);
      y = 735;
      addHeader();
    }

    function write(text, size = 11, bold = false) {
      const safeText = String(text || "");

      page.drawText(safeText.substring(0, 95), {
        x: 50,
        y,
        size,
        font: bold ? boldFont : font,
        color: rgb(0.12, 0.24, 0.28),
      });

      y -= size + 8;

      if (y < 60) {
        newPage();
      }
    }

    function sectionTitle(title) {
      y -= 5;

      page.drawRectangle({
        x: 45,
        y: y - 8,
        width: 522,
        height: 26,
        color: rgb(0.93, 0.97, 0.95),
        borderColor: rgb(0.5, 0.72, 0.64),
        borderWidth: 1,
      });

      page.drawText(title, {
        x: 55,
        y,
        size: 13,
        font: boldFont,
        color: rgb(0.18, 0.44, 0.37),
      });

      y -= 28;
    }

    addHeader();

    sectionTitle("Payment Summary");
    write(`Project Total: $${projectTotal}`);
    write(`Deposit Paid: $${depositAmount}`);
    write(`Remaining Balance: $${remainingBalance}`);
    write("");

    sectionTitle("Agreement");
    write(`Client Name: ${agreementData.clientName}`);
    write(`Business Name: ${agreementData.businessName || ""}`);
    write(`Email: ${agreementData.email}`);
    write(`Phone: ${agreementData.phone || ""}`);
    write(`Typed Signature: ${agreementData.typedSignature}`);
    write(`Signed Date/Time: ${agreementData.signedAt || "Not captured"}`);
    write("");

    sectionTitle("Website Intake");
    write(`Client Name: ${intakeData.clientName}`);
    write(`Business Name: ${intakeData.businessName}`);
    write(`Email: ${intakeData.email}`);
    write(`Phone: ${intakeData.phone || ""}`);
    write("");

    write("Business Description:", 11, true);
    write(intakeData.businessDescription);
    write("");

    write("Services:", 11, true);
    write(intakeData.services);
    write("");

    write("Business Hours:", 11, true);
    write(intakeData.businessHours);
    write("");

    write("Branding:", 11, true);
    write(`Primary Color: ${intakeData.primaryColor || ""}`);
    write(`Secondary Color: ${intakeData.secondaryColor || ""}`);
    write(`Logo Plan: ${intakeData.logoPlan || ""}`);
    write(`Image Plan: ${intakeData.imagePlan || ""}`);
    write("");

    write("Website Contact Information:", 11, true);
    write(`Display Email: ${intakeData.contactEmail || ""}`);
    write(`Display Phone: ${intakeData.contactPhone || ""}`);
    write(`Address / Service Area: ${intakeData.address || ""}`);
    write("");

    write("Social Links:", 11, true);
    write(`Facebook: ${intakeData.facebook || ""}`);
    write(`Instagram: ${intakeData.instagram || ""}`);
    write(`TikTok: ${intakeData.tiktok || ""}`);
    write(`LinkedIn: ${intakeData.linkedin || ""}`);
    write("");

    write("Domain / Hosting:", 11, true);
    write(`Owns Domain: ${intakeData.ownsDomain || ""}`);
    write(`Domain Name: ${intakeData.domainName || ""}`);
    write(`Has Hosting: ${intakeData.hasHosting || ""}`);
    write(`Hosting Provider: ${intakeData.hostingProvider || ""}`);
    write("");

    write("Requested Features:", 11, true);
    write(`Contact Form: ${intakeData.contactForm}`);
    write(`Social Links: ${intakeData.socialLinks}`);
    write(`Basic SEO: ${intakeData.basicSeo}`);
    write("");

    write("Additional Notes:", 11, true);
    write(intakeData.notes || "");
    write("");

    sectionTitle("Materials Acknowledgement");
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