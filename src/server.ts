import app from "./app";
import { env } from "./config/env";



app.listen(env.PORT, ()=>{
      console.log(`Server is running on port ${env.PORT}`);
})

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Test Mail" <${process.env.EMAIL_USER}>`,
      to: "benjaminmulbah3@gmail.com",
      subject: "API Email Test",
      text: "Email sent from API endpoint",
    });

    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    res.status(500).json({ error });
  }
});


export default app;