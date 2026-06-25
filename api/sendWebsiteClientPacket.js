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
      agreementData = {},
      intakeData = {},
      materialsData = {},
      depositAmount = "125.00",
      projectTotal = "250.00",
      remainingBalance = "125.00",
    } = req.body;

    const emailBody = `
NEW WEBSITE CLIENT PACKET

Client: ${intakeData.clientName || agreementData.clientName || ""}
Business: ${intakeData.businessName || materialsData.businessName || ""}
Email: ${intakeData.email || agreementData.email || ""}

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
    let pageNumber = 1;

    function addFooter() {
      page.drawLine({
        start: { x: 50, y: 40 },
        end: { x: 562, y: 40 },
        thickness: 1,
        color: rgb(0.84, 0.9, 0.93),
      });

      page.drawText(
        "Family First Budgeting • Fighting the economy, one family at a time.",
        {
          x: 115,
          y: 25,
          size: 8,
          font,
          color: rgb(0.45, 0.5, 0.55),
        }
      );

      page.drawText(`Page ${pageNumber}`, {
        x: 510,
        y: 25,
        size: 8,
        font,
        color: rgb(0.45, 0.5, 0.55),
      });
    }

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

      y -= 18;

      page.drawText(`Generated: ${new Date().toLocaleString("en-US")}`, {
        x: 222,
        y,
        size: 9,
        font,
        color: rgb(0.45, 0.5, 0.55),
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
      addFooter();
      page = pdfDoc.addPage([612, 792]);
      pageNumber += 1;
      y = 735;
      addHeader();
    }

    function write(text, size = 11, bold = false) {
      const safeText = String(text || "");
      const maxChars = 85;

      const lines = safeText
        .split("\n")
        .flatMap((line) => {
          if (line.length <= maxChars) return [line];

          const chunks = [];
          let current = line;

          while (current.length > maxChars) {
            let breakPoint = current.lastIndexOf(" ", maxChars);
            if (breakPoint === -1) breakPoint = maxChars;

            chunks.push(current.slice(0, breakPoint));
            current = current.slice(breakPoint).trim();
          }

          if (current.length) chunks.push(current);
          return chunks;
        });

      for (const line of lines) {
        if (y < 70) {
          newPage();
        }

        page.drawText(line || " ", {
          x: 50,
          y,
          size,
          font: bold ? boldFont : font,
          color: rgb(0.12, 0.24, 0.28),
        });

        y -= size + 6;
      }

      y -= 4;
    }

    function sectionTitle(title) {
      if (y < 90) {
        newPage();
      }

      y -= 5;

      page.drawRectangle({
        x: 45,
        y: y - 8,
        width: 522,
        height: 28,
        color: rgb(0.93, 0.97, 0.95),
        borderColor: rgb(0.5, 0.72, 0.64),
        borderWidth: 1,
      });

      page.drawText(title, {
        x: 55,
        y,
        size: 15,
        font: boldFont,
        color: rgb(0.18, 0.44, 0.37),
      });

      y -= 32;
    }

    function yesNo(value) {
      return value ? "Yes" : "No";
    }

    function checkLine(label, value) {
  write(`${value ? "[YES]" : "[NO]"} ${label}`);
}

    addHeader();

    sectionTitle("Payment Summary");
    write(`Project Total: $${projectTotal}`);
    write(`Deposit Paid: $${depositAmount}`);
    write(`Remaining Balance: $${remainingBalance}`);
    write("");

    sectionTitle("Agreement");
    write(`Client Name: ${agreementData.clientName || ""}`);
    write(`Business Name: ${agreementData.businessName || ""}`);
    write(`Email: ${agreementData.email || ""}`);
    write(`Phone: ${agreementData.phone || ""}`);
    write(`Typed Signature: ${agreementData.typedSignature || ""}`);
    write(`Signed Date/Time: ${agreementData.signedAt || "Not captured"}`);
    write("");

    sectionTitle("Website Intake");
    write(`Client Name: ${intakeData.clientName || ""}`);
    write(`Business Name: ${intakeData.businessName || ""}`);
    write(`Email: ${intakeData.email || ""}`);
    write(`Phone: ${intakeData.phone || ""}`);
    write("");

    write("Business Description:", 11, true);
    write(intakeData.businessDescription || "");
    write("");

    write("Services:", 11, true);
    write(intakeData.services || "");
    write("");

    write("Business Hours:", 11, true);
    write(intakeData.businessHours || "");
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
    checkLine("Contact Form", intakeData.contactForm);
    checkLine("Social Media Links", intakeData.socialLinks);
    checkLine("Basic SEO Setup", intakeData.basicSeo);
    write("");

    write("Additional Notes:", 11, true);
    write(intakeData.notes || "");
    write("");

    sectionTitle("Materials Acknowledgement");
    write(`Client Name: ${materialsData.clientName || ""}`);
    write(`Business Name: ${materialsData.businessName || ""}`);
    write(`Typed Signature: ${materialsData.typedSignature || ""}`);
    write(`Signed Date/Time: ${materialsData.signedAt || "Not captured"}`);
    write("");

    checkLine("Materials Provided", materialsData.materialsProvided);
    checkLine("Ownership Rights Confirmed", materialsData.ownershipRights);
    checkLine("Delays Acknowledged", materialsData.delayAcknowledged);
    checkLine("Preview Acknowledged", materialsData.previewAcknowledged);
    checkLine("Revision Policy Accepted", materialsData.revisionAcknowledged);
    checkLine("Final Approval Accepted", materialsData.approvalAcknowledged);
    checkLine("Delivery Terms Accepted", materialsData.deliveryAcknowledged);
    checkLine("Records Retained", materialsData.recordsAcknowledged);

    addFooter();

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