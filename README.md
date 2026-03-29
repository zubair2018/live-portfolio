# Portfolio Site

## Setup

1. Install dependencies:
   npm install
2. Copy environment example:
   cp .env.example .env
3. Add your real EmailJS values to `.env`.
4. Start development server:
   npm run dev

## What to customize

- Replace all placeholder social links in `src/components/Contact.jsx`
- Replace project links in `src/components/Projects.jsx`
- Update `public/resume.txt`
- Add your own name, email, and branding details where needed

## EmailJS

This project uses `@emailjs/browser` with Vite environment variables:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`