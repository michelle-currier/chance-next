// // app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";


const siteName = process.env.SITE_NAME;
//mail.setApiKey(process.env.SENDGRID_API_KEY as string);
sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
  console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY as string);
  try {
  
    // Parse the request body
    const body = await req.json();
    const { fullname, email, phone, message } = body;

    // Create the email options
    const emailData = {
      to: "mushel@gmail.com", // Your email where you want to receive messages
      from: `${email}`, // Sender's email
      subject: `hey from ${fullname} at your site contact form`,
      text: message,
      html: `
        <p><strong>You have a new message from your website contact form at ${siteName}.</strong></p>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await sendgrid.send(emailData);

    // Return a successful response
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return an error response
    return NextResponse.json({ message: "Bummer we failed to send an email." }, { status: 500 });
  }
}




// import { NextResponse } from "next/server";
// import mail from "@sendgrid/mail";

// mail.setApiKey(process.env.SENDGRID_API_KEY as string);

// export async function POST(req: Request) {
//   try {
//     const { fullname, email, phone, message } = await req.json();

//     if (!fullname || !email || !phone || !message) {
//       return NextResponse.json(
//         { status: "ERROR", message: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     const msg = {
//       to: "your-email@example.com", // Replace with your email
//       from: "noreply@example.com", // Replace with a verified sender email
//       subject: "New Contact Form Submission",
//       html: `
//         <h1>Contact Form Submission</h1>
//         <p><strong>Name:</strong> ${fullname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await mail.send(msg);
//     return NextResponse.json({ status: "SUCCESS", message: "Email sent successfully." });
//   } catch (error: any) {
//     console.error("SendGrid Error:", error.response?.body || error.message);
//     return NextResponse.json(
//       {
//         status: "ERROR",
//         message: error.message || "Failed to send email.",
//         details: error.response?.body, // Provide detailed error info for debugging
//       },
//       { status: 500 }
//     );
//   }
// }
