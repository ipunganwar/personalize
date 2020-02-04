import Mode from "frontmatter-markdown-loader/mode";
import fs from "fs";
import MarkdownIt from "markdown-it";
import prism from "markdown-it-prism";
const path = require("path");

function getPaths(type) {
  return fs
    .readdirSync(path.resolve(__dirname, "contents", `${type}`))
    .filter(filename => path.extname(filename) === ".md")
    .map(filename => `${type}/${path.parse(filename).name}`);
}

const md = new MarkdownIt({
  html: true,
  typographer: true
});
md.use(prism);

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css", "@/assets/css/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/globalComponents", "~/plugins/lazyload"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["@/assets/css/utilities/_variables.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "contents"),
        loader: "frontmatter-markdown-loader",
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
          markdown(body) {
            return md.render(body);
          }
        }
      });

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.devtool = "#source-map";
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },

  generate: {
    routes: getPaths("blogs")
  }
};
