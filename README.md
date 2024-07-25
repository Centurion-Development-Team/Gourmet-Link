# Gourmet Link Project

Welcome to the Gourmet Link project! This README will guide you through the setup and development process, step-by-step. Follow these instructions to get started and contribute effectively.

## Table of Contents
- [Getting Started](#getting-started)
- [Recommended Extensions](#recommended-extensions)
- [Installing Vue.js](#installing-vuejs)
- [Installing Node.js](#installing-nodejs)
- [Installing TailwindCSS](#installing-tailwindcss)
- [Integrating Firebase](#integrating-firebase)
- [Setting Up Git](#setting-up-git)
- [Working with Git](#working-with-git)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Creating Pull Requests](#creating-pull-requests)
- [Additional Resources](#additional-resources)

## Getting Started

### Prerequisites
Make sure you have the following tools installed on your system:
- Visual Studio Code
- Node.js (including npm)


### Cloning the Repository
First, clone the repository to your local machine:
```sh
$ git clone https://github.com/Centurion-Development-Team/Gourmet-Link.git <directory>
$ cd Gourmet-Link
```
Note: Replace <directory> with where you want the clone to go. (e.g, C:\Users\gwapo\Desktop)


### Creating Separate Folders for Each Branch
To work on multiple branches, it's recommended to clone each branch into a separate folder. Follow these steps:

1. Create a folder for the branch you want to work on:
```sh
$ mkdir <branch-folder>
```
Replace `<branch-folder>` with the name of the branch you are working on. For example, `feature-new-feature`.

2. Navigate to the newly created folder:
```sh
$ cd <branch-folder>
```

3. Clone the repository into this folder and checkout the desired branch:
```sh
$ git clone -b <branch-name> https://github.com/Centurion-Development-Team/Gourmet-Link.git .
```
Replace `<branch-name>` with the name of the branch you want to work on. For example, `feature/new-feature`.

Repeat these steps for each branch you want to work on, using a separate folder for each branch.

### Vite Error after Cloning
If you encounter this error after sending the `npm run dev` command in git bash:

```
$ npm run dev

> gourmet-link@0.0.0 dev
> vite

'vite' is not recognized as an internal or external command,
operable program or batch file.
```
Then send this command:

`npm install`

After that, try the `npm run dev` command one more time.



## Recommended Extensions
To enhance your development experience, we recommend installing the following Visual Studio Code extensions:
- Vetur: Vue tooling for VS Code.
- ESLint: Integrates ESLint into VS Code.
- Prettier - Code formatter: Code formatter that supports various languages.
- Tailwind CSS IntelliSense: Intelligent Tailwind CSS tooling for VS Code.
- Firebase: Firebase management for VS Code.
- GitLens: Supercharges the built-in Git capabilities.



## Installing Vue.js
Vue.js is already set up using Vite. Ensure you are in the project directory and then install the necessary dependencies:
```sh
$ npm install vue
```



## Installing Node.js
Ensure you have Node.js installed. You can verify this by running:
```sh
$ node -v
$ npm -v
```
If Node.js is not installed, download and install it from the [Node.js official site](https://nodejs.org/).



## Installing TailwindCSS
To install TailwindCSS, follow these steps:

1. Install TailwindCSS via npm:
```sh
$ npm install -D tailwindcss
$ npx tailwindcss init
```

2. Configure your `tailwind.config.js` file:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Add the following to your `style.css` file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```



## Integrating Firebase
1. Install Firebase:
```sh
$ npm install firebase
```

2. Create a `firebase.js` file in your `src` directory and add the following code, replacing the placeholders with your Firebase configuration values:
```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkNGUhaDKDl3eyL_h11hUM9Gk3zAyXk6o",
  authDomain: "crowdsourced-recipe-proj.firebaseapp.com",
  projectId: "crowdsourced-recipe-proj",
  storageBucket: "crowdsourced-recipe-proj.appspot.com",
  messagingSenderId: "305023238230",
  appId: "1:305023238230:web:938c08f2f55ed1bea93bf7",
  measurementId: "G-XF19X03NFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```



## Setting Up Git


### Initializing Git
If you haven't already initialized a Git repository, do so by running:
```sh
$ git init
```


### Pulling from the Main Branch
Before you start working on a new feature, ensure your local repository is up to date:
```sh
$ git pull origin main
```



## Working with Git


### Creating a New Branch
To create a new branch for your feature, use the following command:
```sh
$ git checkout -b feature/your-feature-name
```


### Checking Your Current Branch
To check which branch you are currently on, use:
```sh
$ git branch
```
The current branch will be highlighted with an asterisk (*).


### Switching Branches
To switch to a different branch, use:
```sh
$ git checkout <branch-name>
```
For example, to switch to the main branch:
```sh
$ git checkout main
```


### Pushing Changes
After committing your changes, you can push them to the respective branch. To push to the branch you are currently working on, use:
```sh
$ git push origin <branch-name>
```
For example, to push to a feature branch:
```sh
$ git push origin feature/your-feature-name
```


### Pushing to the Main Branch
If you need to push directly to the main branch, ensure you have the latest updates from the main branch first:
```sh
$ git checkout main
$ git pull origin main
```
Then push your changes:
```sh
$ git push origin main
```


### Branch Naming Conventions
Use the following naming conventions for branches:
- `feature/<feature-name>`: For new features
- `bugfix/<issue-name>`: For bug fixes
- `hotfix/<issue-name>`: For urgent fixes
- `refactor/<refactor-name>`: For code refactoring


### Committing Changes
To commit changes, follow these steps:

1. Stage your changes:
```sh
$ git add .
```

2. Commit your changes with a descriptive message:
```sh
$ git commit -m "Add detailed description of the changes"
```


### Pushing to Respective Branches
Push your changes to the respective branch:
```sh
$ git push origin feature/your-feature-name
```



## Creating Pull Requests
A pull request (PR) is a way to propose your changes to the codebase. It allows other team members to review your code before it is merged into the main branch. This helps ensure code quality and allows for collaborative development.

1. Go to the repository on GitHub.
2. Click on the "Pull Requests" tab.
3. Click on the "New Pull Request" button.
4. Select the branch you want to merge into the main branch.
5. Add a title and description for your pull request.
6. Click "Create Pull Request".



## Additional Resources
- [Vue.js Documentation](https://vuejs.org/v2/guide/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

Thank you for contributing to the Gourmet Link project. If you have any questions or need further assistance, feel free to reach out to the project maintainers.

Happy coding!
