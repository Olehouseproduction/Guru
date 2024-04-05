import { defineConfig } from "vite";

export default defineConfig({
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
