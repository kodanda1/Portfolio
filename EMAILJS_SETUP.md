# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality on your portfolio website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Code

Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

const result = await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  templateParams
);
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email to confirm the message was received

## Troubleshooting

- Make sure all IDs are correct and match your EmailJS dashboard
- Check the browser console for any error messages
- Verify your email service is properly connected
- Ensure your template variables match the ones used in the code

## Security Notes

- The public key is safe to expose in client-side code
- Never expose your private keys or service credentials
- EmailJS handles the email sending securely on their servers 