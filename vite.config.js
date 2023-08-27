import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// eslint-disable-next-line no-unused-vars
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";

  // Vite Proxy configuration
  const detailProxyOptions = {
    "/api": {
      target: "https://tr-yös.com",
      port: 5173,
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ""),
    },
  };

  ///Vercel İçin////

  const detailProxyOptions1 = {
    "/api": {
      target: "https://tr-yos-4-azure.vercel.app",
      port: 5173,
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ""),
    },
  };

  //////Vercel İçin////////////

  // Different configuration for production and development mode
  return {
    plugins: [react()],
    server: {
      proxy: isProduction
        ? {...detailProxyOptions1}
        : { ...detailProxyOptions},
    },
  };
});








// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
// });
