# Contact Form - Quick Start (3 Steps)

## What's Been Done ✅

Your contact form is **ready to use**! It now:
- ✅ Collects: Name, Email, Phone, Purpose, Message
- ✅ Validates required fields
- ✅ Shows success/error messages
- ✅ Clears after submission
- ✅ Works completely static (no backend needed!)
- ✅ Sends emails to the central site email: **info@dksafetysolutions.com**

## 3-Step Setup

### 1️⃣ Sign Up on Formspree (2 minutes)
```
Go to: https://formspree.io
- Click Sign Up
- Enter email or use GitHub login
- Confirm your email
```

### 2️⃣ Create a Form
```
- Click "New Form" 
- Enter the central site email: info@dksafetysolutions.com
- Name: "DK Safety Solutions Contact"
- Click Create
```

### 3️⃣ Get Your Form ID
After creating, you'll see this URL:
```
https://formspree.io/f/xyzabc123
                        ^^^^^^^^^^^
                        Copy this ID
```

### 4️⃣ Update the Config
Edit: `config/form.config.ts`

Change this line:
```ts
export const FORMSPREE_URL = 'https://formspree.io/f/xyzabc123'
```

To (paste your ID):
```ts
export const FORMSPREE_URL = 'https://formspree.io/f/YOUR_ID_HERE'
```

## Test It

```bash
npm run dev
# Visit: http://localhost:3000
# Scroll down to "Contact Us"
# Fill the form and submit
# Check your inbox!
```

## What You'll Receive

Email arrives like this:
```
From: contact@formspree.io
To: info@dksafetysolutions.com
Subject: DK Safety Solutions - Contact Form - New Enquiry from [Name]

---
Name: Shankar
Email: shankar@example.com
Phone: +91 9876543210
Purpose: Invisible Grills
Message: Interested in balcony grills for my apartment.
```

## Deploy & It Works Everywhere

```bash
npm run build
# Uploads the "out" folder to:
# - Vercel
# - Netlify  
# - GitHub Pages
# - Any static host

# Form keeps working! ✅
```

## Features

| Feature | Status |
|---------|--------|
| Email notifications | ✅ Yes |
| Backend required | ❌ No |
| Works static export | ✅ Yes |
| Mobile responsive | ✅ Yes |
| Form validation | ✅ Yes |
| Loading state | ✅ Yes |
| Success message | ✅ Yes |
| Error handling | ✅ Yes |

## Files Modified

1. **components/ContactForm.tsx** - Main form with submission logic
2. **config/form.config.ts** - Configuration (update with your ID)

## Support

If form doesn't work:
1. ✅ Check form ID is correct
2. ✅ Verify Formspree account has your email
3. ✅ Check spam folder
4. ✅ Try with a test email first

## One More Thing

Free Formspree plan gets:
- **50 submissions/month**
- Unlimited forms
- Email delivery

Need more? Upgrade plan on formspree.io ($25/month for unlimited).

---

**Ready to test?**
```bash
npm run dev
```

**Ready to deploy?**
```bash
npm run build
```
