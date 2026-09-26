import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: { extend: { fontFamily: { display: ["Instrument Serif", "serif"], sans: ["Figtree", "sans-serif"] } } },
  plugins: [typography],
};
