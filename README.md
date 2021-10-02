
# 🚀 Getting Started
Let's create a project with Vite ⚡ using NPM (to open the example, press the `.`).
Remember that Vite requires: [Node.js version >=12.0.0](https://nodejs.org/en/).

1. Installation: 
```
npm init vite@latest
```
2. Select the following settings:
<img src="https://user-images.githubusercontent.com/62877300/135727566-ce11b001-7f0b-4739-8f69-a29983bdf721.png" width="400" />

3. Access the project folder:
```
cd my-first-project
```

4. Install all dependencies:
```
npm install
```
# 📁 Directory structure
The default directory structure:

<img src="https://user-images.githubusercontent.com/62877300/135727811-38d780a9-6e6e-40df-a360-a7f2d616d062.png" width="200" />

1. Create an `src` folder.
2. In the `src` folder -> create a folder for the CSS and JS.
3. Move the `main.js` file to the JS folder and `style.css` to CSS folder.
4. Create a `public` folder. There will be your images, fonts (optionally you can create a folder)...
5. If you want, you can create outside of src the `README.md` file.
6. Create a `vite.config.js` file outside src folder.

### 🔧 Vite config:
```
const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";

module.exports = {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};
```

✔️ The result is:

```
├── node_modules
├── public
    ├── fonts
    ├── images
└── src
    ├── css
    │   └── style.css
    ├── js
    │   └── main.js
    └── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
```
# 📑 Install <img src="https://stylelint.io/img/dark.svg" width="128" /> Stylelint
[Stylelint](https://stylelint.io/) is a mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.

1. Install as a development dependency:
```
npm install --save-dev stylelint stylelint-config-standard
```
> `"devDependencies": {
    "stylelint": "^13.13.1",
    "stylelint-config-standard": "^22.0.0",
  }`

2. Create `.stylelintrc` file outside src.
3. Write:
```
{
  "extends": "stylelint-config-standard",
  "rules": {
    "declaration-colon-newline-after": "always-multi-line",
    "selector-type-no-unknown": null,
    "property-no-unknown": [true, {
        "ignoreProperties": ["content-visibility"]
    }]
  }
}
```
4. To run the dependency, type the following in the terminal:
```
npm run stylelint
```
5. [Install the extension on your Visual Studio Code.](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

# 📑 Install <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="64" /> eslint
[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
1. Install as a development dependency:
```
npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise
```
> `"devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-standard": "^16.0.3",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
  }` <
  
2. Create `.eslintrc.js` file outside src.
3. Write:
```
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "standard"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "space-before-function-paren": ["error", "never"]
  }
};
```
# 📑 Deployment - <img src="https://igmoweb.files.wordpress.com/2020/11/octocat.png" width="64" /> Github Pages
You can use [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) to host a website about yourself, your organization, or your project directly from a GitHub repository.

