import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Must have this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Must have this
  ],
});
