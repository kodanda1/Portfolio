# EmailJS Setup Guide

To enable email functionality in the contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" or "Outlook" (recommended: Gmail)
4. Connect your email account (kodandapuramvaruntej@gmail.com)
5. Note down the Service ID (e.g., "service_xxxxxxx")

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down the Template ID (e.g., "template_xxxxxxx")

## 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your Public Key

## 5. Update Code
Replace the placeholder values in `src/components/Contact.tsx`:

```typescript
// Replace these values:
emailjs.init("YOUR_PUBLIC_KEY"); // Your EmailJS public key
'YOUR_SERVICE_ID', // Your EmailJS service ID
'YOUR_TEMPLATE_ID', // Your EmailJS template ID
```

## 6. Test
1. Start the development server: `npm start`
2. Go to the contact form
3. Fill out and submit the form
4. Check your email (kodandapuramvaruntej@gmail.com) for the message

## Notes
- Free EmailJS plan allows 200 emails per month
- Emails will be sent to kodandapuramvaruntej@gmail.com
- The form includes validation and error handling
- Success/error messages will be displayed to users 