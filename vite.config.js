import { defineConfig } from "vite";

export default defineConfig({
  base: "training-task1/",
  // Specify the entry point of your app (usually an HTML file)
  build: {
    rollupOptions: {
      input: "index.html", // You can change this to your HTML file path
    },
  },
  server: {
    port: 3000, // Change the development server port if needed
  },
});
