import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import lessPluginAutoprefix from "less-plugin-autoprefix";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    css: {
        modules: {
            generateScopedName: `[name]__[local]__[hash:base64:5]`,
            hashPrefix: "prefix",
        },
        preprocessorOptions: {
            less: {
                javascriptEnable: true,
            },
        },
        postcss: {
            plugins: [postcssImport, autoprefixer, lessPluginAutoprefix],
        },
    },
    build: {},
});
