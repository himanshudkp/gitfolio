# Portfolio Website

A modern, responsive personal portfolio built with React and Tailwind CSS — featuring live GitHub contribution graphs, auto-fetched Medium blog posts, animated section transitions, and a working contact form.

![Portfolio preview](./![alt text](image.png))

**🔗 Live site:** [https://gitfolio-smoky.vercel.app/](#)

---

## ✨ Features

- **Scroll-spy navigation** — active nav link updates automatically as you scroll, with top/bottom edge handling for short first/last sections
- **Dark / light theme toggle** with persisted preference
- **Sticky sidebar profile** with avatar, bio, résumé download, and social links
- **Projects grid** with live/code links and tech stack chips
- **Skills** grouped by category
- **Experience timeline** with nested sub-projects per role
- **Education & certifications** section
  <!-- - **Activity feed** -->
    <!-- - Live GitHub contribution graph (no API key required) -->
      <!-- - Latest Medium posts, auto-fetched via RSS -->
      <!-- - Open source contributions list -->
- **Contact form** with real email delivery via [Web3Forms](https://web3forms.com) — no backend required
- Fully responsive, mobile-first layout
- Smooth reveal/entrance animations on scroll

## 🛠️ Tech Stack

| Category   | Tech                                                  |
| ---------- | ----------------------------------------------------- |
| Framework  | React                                                 |
| Styling    | Tailwind CSS                                          |
| Icons      | [Iconify](https://iconify.design/) (`@iconify/react`) |
| Build Tool | Vite                                                  |
| Contact    | [Web3Forms](https://web3forms.com)                    |
| Deployment | Vercel                                                |

## 📁 Project Structure

```
src/
├── components/       # Section components (About, Projects, Skills, etc.)
├── ui/               # Reusable primitives (Button, Card, Chip, SectionHeading, ...)
├── hooks/            # useTheme, useScrollSpy
├── data/             # Centralized content (data.js) — edit this to update your info
├── assets/           # Resume PDF, images
└── App.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/himanshudkp/portfolio-website.git
cd portfolio-website
pnpm install
```

### Development

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

## ⚙️ Configuration

Most content is driven from a single file — **`src/data/data.js`** — including:

- `PROFILE` — name, title, bio, location, email, social links, résumé path
- `PROJECTS`, `SKILLS`, `EXPERIENCE`, `EDUCATION`, `CERTIFICATIONS`
- `NAV_LINKS` / `TABS` — section navigation

### Contact form setup

1. Get a free access key at [web3forms.com](https://web3forms.com) (just enter the email you want submissions sent to).
2. Add it in `src/components/Contact.jsx`:
   ```js
   const WEB3FORMS_ACCESS_KEY = "your-access-key-here";
   ```
   > This key is safe to expose client-side — it's designed to be public and validated on Web3Forms' end.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋 Author

**Himanshu Pandey**

- GitHub: [@himanshudkp](#)
- LinkedIn: [linkedin.com/in/himanshudkp](#)
- Email: himanshudkp@gmail.com
