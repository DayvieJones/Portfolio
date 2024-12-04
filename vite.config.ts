import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio",
  plugins: [react()],
  server: {
    host: true, // Zugriff von externen Geräten erlauben (z.B. über LAN)
    port: 3000, // Standard-Port (kann bei Bedarf geändert werden)
    watch: {
      usePolling: true, // Nutzt Dateisystem-Polling, falls Hot-Reload-Probleme bestehen
    },
  },
});
