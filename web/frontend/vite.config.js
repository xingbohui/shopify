import { defineConfig } from "vite";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import https from "https";
import react from "@vitejs/plugin-react";

// if (
//   process.env.npm_lifecycle_event === "build" &&
//   !process.env.CI &&
//   !process.env.SHOPIFY_API_KEY
// ) {
//   console.warn(
//     "\nBuilding the frontend app without an API key. The frontend build will not run without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command.\n"
//   );
// }

// const proxyOptions = {
//   target: `http://127.0.0.1:${process.env.BACKEND_PORT}`,
//   changeOrigin: false,
//   secure: true,
//   ws: false,
// };

// const host = process.env.HOST
//   ? process.env.HOST.replace(/https?:\/\//, "")
//   : "localhost";

// let hmrConfig;
// if (host === "localhost") {
//   hmrConfig = {
//     protocol: "ws",
//     host: "localhost",
//     port: 64999,
//     clientPort: 64999,
//   };
// } else {
//   hmrConfig = {
//     protocol: "wss",
//     host: host,
//     port: process.env.FRONTEND_PORT,
//     clientPort: 443,
//   };
// }
console.log(22, process.env.SHOPIFY_API_KEY);

export default defineConfig({
  root: dirname(fileURLToPath(import.meta.url)),
  plugins: [react()],
  define: {
    "process.env.SHOPIFY_API_KEY": JSON.stringify(process.env.SHOPIFY_API_KEY),
  },
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "huijie",
    minify: "terser",
    // 是否清除之前的构建文件
    clean: true,
  },
  // base: "/huijie/",
  // server: {
  //   host: "localhost",
  //   port: process.env.FRONTEND_PORT,
  //   hmr: hmrConfig,
  //   proxy: {
  //     "^/(\\?.*)?$": proxyOptions,
  //     "^/api(/|(\\?.*)?$)": proxyOptions,
  //   },
  // },

  // 服务器配置
  server: {
    // 本地开发服务器的主机地址
    host: "0.0.0.0", // 默认是 'localhost'
    // 本地开发服务器的端口号
    port: 3000, // 默认值
    // 是否自动打开浏览器
    open: true,
    // 是否在服务启动时运行 ESLint
    strictPort: true,
  },
});
