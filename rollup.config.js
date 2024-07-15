import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input: "locales/index.ts",
    output: [
      {
        dir: "lib",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "locales",
      },
    ],
    plugins: [resolve(), typescript({ tsconfig: "./tsconfig.json" }), terser()],
  },
];

export default config;
