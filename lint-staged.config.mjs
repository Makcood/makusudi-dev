/** @type {import('lint-staged').Configuration} */
const config = {
  "*.{js,mjs,cjs,jsx,ts,tsx}": ["eslint --fix --cache", "prettier --write"],
  "*.{ts,tsx}": () => "tsc --noEmit",
  "*.css": ["stylelint --fix --cache", "prettier --write"],
  "*.{json,md,yml,yaml}": "prettier --write",
};

export default config;
