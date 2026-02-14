// import { tanstackStart } from '@tanstack/react-start/plugin/vite'
// import { defineConfig } from 'vite'
// import tsConfigPaths from 'vite-tsconfig-paths'
// import viteReact from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   server: {
//     port: 3000,
//   },
//   plugins: [
//     tailwindcss(),
//     tsConfigPaths({
//       projects: ['./tsconfig.json'],
//     }),
//     tanstackStart(),
//     viteReact(),
//   ],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
