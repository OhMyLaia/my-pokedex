# My Pokedex

A **Next.js Pokémon app** built with TypeScript, TailwindCSS, and server-side rendering.  
Explore Pokémon, filter them by name, and manage favorites.

---

## **Table of Contents**

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)

---

## **Demo**

Add link to your deployed app (Vercel):  
[https://your-pokedex.vercel.app](https://your-pokedex.vercel.app)

---

## **Features**

- List Pokémon with images and details  
- Filter Pokémon by name  
- Add/remove Pokémon to favorites  
- Server-side rendering (SSR) for faster load and SEO  
- Responsive design for mobile and desktop  
- Uses modern Next.js App Router and React components  

---

## **Tech Stack**

- [Next.js 13](https://nextjs.org/) (App Router + SSR)  
- [React](https://reactjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- Context API for managing favorites  
- Fetching data from [PokéAPI](https://pokeapi.co/)  
- Vercel for deployment  

---

## **Project Structure**

my-pokedex/
├─ app/
│  ├─ layout.tsx            # Root layout
│  ├─ page.tsx              # Home page
│  ├─ context/              # Contexts (favorites)
│  └─ components/           # UI components (Navbar, Footer, LoadPokemon)
├─ public/
│  └─ favicon.ico / pokeball-icon.png
├─ types/
│  └─ Types.ts              # TypeScript types (Poke, PokemonData, PokeType)
├─ lib/                     # Helper functions / API calls
├─ package.json
├─ tsconfig.json
├─ next.config.mjs
└─ README.md

---

## **Installation**

Clone the repo:

```bash
git clone https://github.com/your-username/my-pokedex.git
cd my-pokedex

npm install
# or
yarn install

npm run dev
# or
yarn dev

npm run build
npm start

Deployment

The project is ready to deploy to Vercel.
	1.	Push your repo to GitHub
	2.	Connect GitHub repo in Vercel
	3.	Set environment variables (if any, e.g., API_URL)
	4.	Deploy — Vercel handles Next.js build automatically

⸻

Contributing
	1.	Fork the repository
	2.	Create a new branch: git checkout -b feature/my-feature
	3.	Make your changes
	4.	Commit your changes: git commit -m 'Add new feature'
	5.	Push to branch: git push origin feature/my-feature
	6.	Open a Pull Request

⸻

License

This project is open source and available under the MIT License.