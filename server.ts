import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Newsletter Subscription
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // Configure Nodemailer
      // Users must provide GMAIL_USER and GMAIL_APP_PASSWORD in their environment
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: "inotherwords@gmail.com", // Updated target email from user's recent App.tsx change
        subject: "New IOW Newsletter Subscription",
        text: `A new user has subscribed to the IOW newsletter: ${email}`,
        html: `
          <div style="font-family: serif; padding: 20px; background-color: #f9f5f1; color: #2d241e;">
            <h2 style="color: #a67c52;">New IOW Subscription</h2>
            <p>A new reader has joined the community:</p>
            <p style="font-size: 1.2em; font-weight: bold;">${email}</p>
            <hr style="border: 0; border-top: 1px solid #e5d3c0; margin: 20px 0;" />
            <p style="font-size: 0.8em; color: #7c6a5a;">In Other Words (IOW) Community</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ error: "Failed to send email. Please ensure GMAIL_USER and GMAIL_APP_PASSWORD are configured." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
