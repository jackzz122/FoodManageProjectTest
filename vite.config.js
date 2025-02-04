import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import buildTimePlugin from "vite-plugin-build-time";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    buildTimePlugin(),
    visualizer({
      filename: "./stats.html",
      json: true,
      open: true,
    }),
  ],
});
