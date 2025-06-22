import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext", // use modern JS output for better compression
    minify: "esbuild", // esbuild is faster and smaller than terser
    sourcemap: false, // remove source maps in prod
    cssCodeSplit: true, // split CSS for faster initial paint
    brotliSize: true, // helpful for checking real-world gzip/brotli size
    assetsInlineLimit: 4096, // inline small assets (icons, fonts <4kb)
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
