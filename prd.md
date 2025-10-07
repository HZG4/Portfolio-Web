# 🧾n Product Requirements Document (PRD)

### Project: Personal Portfolio Website

**Tech Stack:** Next.js (React, TypeScript, Tailwind CSS, Supabase)

---

## 🧬 1. Project Overview

This project is a **personal portfolio website** built using **Next.js** and **Supabase**.
It will serve as a professional platform to showcase:

* Projects
* Skills
* Educational background
* Blog posts (dynamic content)
* Contact details and communication form

The website will also feature a secure **admin panel** (accessible only by the owner) to manage blog posts using Supabase authentication and database services.

---

## 🌟 2. Goals & Objectives

* ✅ Build a fast, scalable, and SEO-friendly portfolio website.
* ✅ Enable dynamic blog content management through Supabase.
* ✅ Allow secure authentication for admin dashboard access.
* ✅ Provide an elegant and responsive user interface.
* ✅ Ensure smooth deployment and maintainability.

---

## 🥉 3. Core Features

### 🏠 Home Page

* Introduction / Hero section with name, title, and profile image.
* About section with a short bio, education, and skills.
* Projects section showcasing portfolio items with descriptions and links.
* Blog preview (latest 3–4 blog posts with links).
* Contact call-to-action at the bottom.

---

### 📰 Blog Page

* Dynamic blog feed fetched from Supabase.
* Pagination and tag/category filters.
* Individual blog post pages (`/blogs/[slug]`) rendered from Markdown or rich text.
* SEO meta tags for each post.
* Related posts and reading time display.

---

### 📨 Contact Page

* Simple form (name, email, message).
* Data stored in Supabase or emailed via API.
* Social media links and email display.
* Optional: Google Map or embedded location.

---

### 🔐 Admin Panel

* Authentication via Supabase Auth (email/password).
* Secure route protection (middleware).
* Blog management dashboard with:

  * Create, Edit, Delete posts.
  * Upload cover images via Supabase Storage.
  * View message submissions.
* Minimal, functional UI for backend operations.

---

## ⚙️ 4. Tech Stack

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| **Frontend**   | Next.js (App Router) + React + TypeScript    |
| **Styling**    | Tailwind CSS + shadcn/ui components          |
| **Database**   | Supabase PostgreSQL                          |
| **Auth**       | Supabase Auth (email/password)               |
| **Storage**    | Supabase Storage (for images)                |
| **Validation** | Zod + React Hook Form                        |
| **Animations** | Framer Motion                                |
| **Deployment** | Vercel (Frontend) + Supabase Cloud (Backend) |

---

## 🗄️ 5. Database Schema (Supabase)

### `blogs` Table

| Column      | Type                       | Description                     |
| ----------- | -------------------------- | ------------------------------- |
| id          | uuid                       | Primary key                     |
| title       | text                       | Blog post title                 |
| slug        | text                       | URL slug                        |
| content     | text                       | Blog content (Markdown)         |
| cover_image | text                       | Image URL from Supabase storage |
| created_at  | timestamp                  | Auto timestamp                  |
| updated_at  | timestamp                  | Auto timestamp                  |
| author_id   | uuid                       | Foreign key to `users.id`       |
| tags        | text[]                     | Tags for filtering              |
| status      | enum('draft', 'published') | Blog visibility                 |

---

### `users` Table

| Column | Type | Description                   |
| ------ | ---- | ----------------------------- |
| id     | uuid | Primary key                   |
| name   | text | Author name                   |
| email  | text | Email address (Supabase Auth) |
| role   | text | ‘admin’ or ‘user’             |

---

### `messages` Table

| Column     | Type      | Description     |
| ---------- | --------- | --------------- |
| id         | uuid      | Primary key     |
| name       | text      | Sender name     |
| email      | text      | Sender email    |
| message    | text      | Message content |
| created_at | timestamp | Auto timestamp  |

---

## 🧱️ 6. Information Architecture

```
/ (Home)
├── /projects
├── /blogs
│   ├── /[slug]
├── /contact
└── /admin
    ├── /login
    ├── /dashboard
        ├── /new
        ├── /edit/[id]
```

---

## 🧏 7. Step-by-Step Implementation Plan

### **Phase 1: Project Setup (Scaffolding)**

1. Create Next.js app:

   ```bash
   npx create-next-app@latest my-portfolio --typescript --tailwind
   ```
2. Set up folder structure:

   ```
   app/
     ├─ (home)/
     ├─ blogs/
     ├─ contact/
     ├─ admin/
   lib/
     └─ supabaseClient.ts
   components/
   ```
3. Install dependencies:

   ```bash
   npm install @supabase/supabase-js react-hook-form zod framer-motion
   ```

---

### **Phase 2: Supabase Setup**

1. Create a new Supabase project.
2. Set up tables: `blogs`, `users`, `messages`.
3. Enable RLS (Row-Level Security).
4. Add policies for admin-only actions.
5. Configure environment variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=
   ```

---

### **Phase 3: Frontend Development**

* **Home Page:** Build hero, about, skills, and projects sections.
* **Blog Page:** Fetch posts from Supabase and render dynamically.
* **Blog Detail:** Create `[slug]/page.tsx` to render a full post.
* **Contact Page:** Add form with Supabase insert on submit.
* **Global Components:** Navbar, Footer, Button, and Card components.

---

### **Phase 4: Admin Dashboard**

* Protect `/admin` routes using middleware and Supabase Auth.
* Build a simple dashboard:

  * Create new blog (form + image upload).
  * Edit existing blog (update form).
  * Delete blog (confirm modal).
  * Manage contact messages.

---

### **Phase 5: UI/UX Enhancements**

* Apply **shadcn/ui** components for consistency.
* Add animations using **Framer Motion**.
* Add **dark/light mode toggle**.
* Optimize with `next/image` and `next/font`.

---

### **Phase 6: Deployment**

* Deploy frontend to **Vercel**.
* Link backend to **Supabase Cloud**.
* Test all routes, blogs, and authentication flows.

---

## 🎨 8. Design Guidelines

* Modern, minimal aesthetic with soft gradients.
* Fonts: **Inter**, **Poppins**, or similar.
* Accessible color palette (AA contrast).
* Consistent padding, spacing, and typography hierarchy.

---

## 🔒 9. Security

* RLS policies for admin operations.
* Only authenticated admin can create/edit/delete blogs.
* Input validation (Zod).
* Avoid direct public writes to database.
* All API keys stored in `.env.local`.

---

## ⚡ 10. Performance Goals

* Lighthouse score ≥ 90 (Performance, Accessibility, SEO).
* Load time < 2s for main pages.
* Static generation for blogs with ISR (Incremental Static Regeneration).
* Lazy-load blog images.

---

## 📊 11. Success Metrics

* Portfolio fully responsive and SEO optimized.
* Blogs CRUD operations function correctly.
* Contact form stores/submits messages successfully.
* Authentication system works securely and reliably.

---

## 🚀 12. Future Enhancements

* Comment system for blogs.
* Newsletter subscription.
* Blog analytics (views, engagement).
* Resume download or live view section.
* Multiple language support (i18n).

---

## 📘 13. References

* [Next.js Documentation](https://nextjs.org/docs)
* [Supabase Docs](https://supabase.com/docs)
* [Tailwind CSS](https://tailwindcss.com/docs)
* [shadcn/ui](https://ui.shadcn.com/)

---

**Author:** [Your Name]
**Last Updated:** October 2025
