# Brainbox | Frontend

This is the frontend code of [https://github.com/genuinestalwart/brainbox-backend](https://github.com/genuinestalwart/brainbox-backend)

This is an LMS project. Meaning, you can create your own paid course here. You can also enroll into other people's courses and pay for that. Currently the course will be created empty. There is no functionality for adding contents to a course right now, but will be available in the future.

If you want to run this project locally, please follow these steps:

- git clone this project to download the code.
- create your own firebase project and store the secrets in an `.env` file. Remember the name of the variables are exact same, but it will start with `VITE_` prefix. For example, `VITE_apiKey`.
- also create a `.eslintrc.js` file at root level and copypaste this code:

```js
module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "no-unused-vars": "off",
        "react/prop-types": "off",
        "no-empty": "warn",
    },
};

```

- and finally, do `npm run dev` in the terminal to run the project.

Also, you can visit the live site: [https://gs-brainbox.web.app/](https://gs-brainbox.web.app/)
