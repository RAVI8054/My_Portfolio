// contact me ..

import nodemailer from 'nodemailer';
import { GMAIL_PASS, GMAIL_USER } from '../config/serverConfig.js';


export async function contactMe(req, res) {
    const { name, email, message } = req.body;

    const emailTemplate = `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #4CAF50;">New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50;">
            ${message}
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #888;">This message was sent from your portfolio website</p>
        </div>
    `;
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: GMAIL_USER,
            subject: `New message from ${name}`,
            // text:`Name: ${name}\nEmail : ${email}\nmessage : ${message}`
            html: emailTemplate,
        });

        res.status(200).json({
            success: true,
            message: 'Email sent successfully'
        });
    } catch (error) {
        console.error('Failed to send email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
}