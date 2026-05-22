# Contact Form Setup Guide - Formspree Integration

## Quick Setup (2 minutes)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email or GitHub
3. Confirm your email

### Step 2: Create a Form
1. Click "New Form" or "Get Started"
2. Enter the same email used in `siteConfig.contact.email` (`info@dksafetysolutions.com` by default)
3. Name it: "Contact Form - DK Safety Solutions"
4. Click "Create"

### Step 3: Get Your Form ID
After creating the form, you'll see:
```
https://formspree.io/f/xyzabc123
```
Copy the ID part: `xyzabc123`

### Step 4: Update ContactForm.tsx
Replace the Formspree endpoint in the code:

**Current:**
```tsx
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

**With your ID:**
```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### Step 5: Test It
1. Run: `npm run dev`
2. Go to localhost:3000
3. Fill and submit the contact form
4. Check your email inbox for the submission

## Features Implemented

✅ **Form Validation**
- Required fields: Name, Email, Phone
- Email format validation

✅ **User Feedback**
- Loading state while sending
- Success message on submission
- Error handling with helpful messages

✅ **Security**
- Spam protection built-in
- Reply-to email set to user's email
- Subject line customization

✅ **Static Deployment Ready**
- No backend required
- Works with static export
- Client-side submission to Formspree

## How It Works

1. User fills the form
2. Data is sent directly to Formspree servers
3. Formspree sends you an email
4. Email also forwarded to user's address (reply-to)

## Email Receives

You'll receive emails with:
```
From: contact@formspree.io
Subject: New Enquiry from [User Name]

Content:
Name: [User's Name]
Email: [User's Email]
Phone: [User's Phone]
Purpose: [User's Purpose]
Message: [User's Message]
```

## Alternative Solutions (if needed)

### If you prefer EmailJS:
- More control over email design
- Requires Gmail setup with app password
- Free tier: 200 emails/month

### If you prefer Web3Forms:
- Similar to Formspree
- Webhook support
- Free tier: unlimited

## Form Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | Text | Yes | Customer name |
| Purpose | Text | No | Service type (Invisible Grills, Nets, etc.) |
| Email | Email | Yes | For reply |
| Phone | Tel | Yes | Contact number |
| Message | Textarea | No | Additional details |

## Testing Checklist

- [ ] Form submits successfully
- [ ] Email received in inbox
- [ ] Form clears after submission
- [ ] Error message shows for invalid input
- [ ] Loading state shows while sending
- [ ] Works on mobile view
- [ ] Works on desktop view
- [ ] Reply-to email is correct

## Deployment

When deploying static export:
```bash
npm run build
# This creates /out folder with all static files
# Upload to: Vercel, Netlify, GitHub Pages, or any static host
```

Form will continue working because:
- All logic is client-side
- Formspree handles server/email delivery
- No Node.js backend required

## Support

If form doesn't work:
1. Check Formspree form ID is correct
2. Verify email in Formspree account
3. Check Formspree email delivery settings
4. Check spam folder

Formspree Free Plan:
- Unlimited forms
- 50 submissions/month
- Standard support

For more submissions, upgrade your plan on Formspree.
