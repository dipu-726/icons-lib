import { babel } from "@rollup/plugin-babel";
import { visualizer } from "rollup-plugin-visualizer";

const config = {
  input: "src/index.js",
  output: {
    dir: "dist/index.esm.js",
    format: "esm",
    preserveModules: true
  },
  external: [/@babel\/runtime/, "react"],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"]
    }),
    visualizer()
  ]
}

export default config;