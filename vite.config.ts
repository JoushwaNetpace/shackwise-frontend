import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
  };
});
