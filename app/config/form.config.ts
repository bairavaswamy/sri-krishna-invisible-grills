// ============================================
// FORMSPREE CONFIGURATION
// ============================================
// 
// To enable the contact form email feature:
// 1. Sign up at https://formspree.io
// 2. Create a form with the same email used in siteConfig.contact.email
// 3. Copy your form ID from the dashboard (looks like: f/xyzabc123)
// 4. Replace the Formspree URL below with your actual form ID
//
// Example:
// OLD: https://formspree.io/f/xyzabc123
// NEW: https://formspree.io/f/YOUR_ACTUAL_ID
//

import { siteConfig } from "./site.config";

export const FORMSPREE_URL = "https://formspree.io/f/xnjbvpvy";

// Recipient email (where you receive the submissions)
export const FORM_RECIPIENT_EMAIL = siteConfig.contact.email;

// Form name for email subject
export const FORM_NAME = "SRI KRISHNA INVISIBLE GRILLS - Contact Form";
