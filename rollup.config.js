import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel';

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [{
      file: pkg.main,
      format: "cjs",
      exports: "named",
    }
  ],
  external: Object.keys(pkg.peerDependencies),
  plugins: [
    resolve(),
    postcss({
      extensions: ['.css'],
      getExportNamed: false,
      // extract: 'build/styles.css',
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ]
};