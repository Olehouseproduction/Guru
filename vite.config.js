import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      Fonts: path.resolve(__dirname, "src/fonts"),
      Images: path.resolve(__dirname, "img"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "./styles/mixin.scss";
            @import "./styles/variables.scss";
            @import "./styles/fonts.scss";
        `,
      },
    },
  },
});
