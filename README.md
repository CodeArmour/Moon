# Moon Glow Travel Agency

A premium, responsive travel-agency website built with Next.js, React and Tailwind CSS. The experience presents Moon Glow's visa assistance, flights, stays, destination planning, pilgrimage support, medical travel and concierge services.

## Highlights

- Editorial luxury-travel visual system
- Responsive desktop and mobile layouts
- Animated photographic hero and destination experiences
- Egypt visa and security-clearance information
- Badr Airlines and Tarco Airlines ticket-offer section
- Destination-led journey presentation for Egypt, Saudi Arabia, Qatar and Dubai
- Accessible Quick Answers panel
- Labeled inquiry form with validation and confirmation state
- Reduced-motion accessibility support
- Privacy and service-terms pages

## Technology

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Manrope](https://fonts.google.com/specimen/Manrope)

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/CodeArmour/Moon.git
cd Moon
git switch dev
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

## Project structure

```text
public/
  images/                 Project photography and visual assets
src/
  app/                    Pages, global styles and route layouts
  components/             Shared interface components
  data/                   Contact, service and verified-proof data
```

Main routes:

- `/` — Home
- `/services` — Services
- `/visa-assistance` — Visa and Egypt entry support
- `/travel-packages` — Featured journeys and ticket options
- `/about` — About Moon Glow
- `/contact` — Contact and inquiry form
- `/privacy` — Privacy information
- `/terms` — Service terms

## Contact-form status

The inquiry form currently demonstrates validation and the confirmation experience in the browser. It does not yet send inquiries to an email service or backend. Connect an approved form endpoint before production launch.

## Trust content

Testimonials, credentials and partner logos must only be added after Moon Glow confirms the wording and publication rights. The verified-proof component remains hidden until approved entries are added in `src/data/proof.ts`.

## Branch workflow

Development changes should be made on `dev` and merged through a pull request:

```bash
git switch dev
git pull origin dev
git add .
git commit -m "Describe the change"
git push origin dev
```

On GitHub, open a pull request with:

- Base branch: `main`
- Compare branch: `dev`

Avoid pushing feature work directly to `main`.

## License

This project is private and intended for Moon Glow Travel Agency. No open-source license has been granted.
