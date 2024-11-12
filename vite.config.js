import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_API_KEY: JSON.stringify(env.VITE_API_KEY),
  },
});
