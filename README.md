# Project Name: Postgraduate Students' Association (PGSA) Website

## Overview:
Welcome to the Postgraduate Students' Association (PGSA) Website project! This project aims to create a dynamic and informative website for the PGSA at Obafemi Awolowo University, Ile-Ife. The website will serve as a central hub for PGSA members, providing essential information about the association, its aims, objectives, and activities.

## Who We Are:
Our community comprises dedicated scholars committed to advancing academic excellence, fostering quality research endeavors, and promoting access to scholarships and grants. We leverage the educational and cultural resources of Obafemi Awolowo University to cultivate a socially responsible community.

## Statement of Purpose:
The PGSA is firmly organized into a united and purposeful body with the following objectives:
- Promoting academic excellence and welfare among members
- Utilizing educational and cultural resources for community development
- Contributing to national and international committees of Postgraduate Students' Associations
- Establishing justice and fostering unity
- Upholding the spirit of oneness, progress, unity, and dignity

## Aims and Objectives:
Our project aims to achieve the following objectives:
- Develop a user-friendly and informative website for PGSA members
- Provide essential information about the association, its aims, and objectives
- Foster community engagement and participation through the website
- Showcase the achievements and activities of PGSA members
- Serve as a platform for communication and collaboration among members

## Contributing to the Project: Guidelines
We welcome contributions from all members who are passionate about improving the PGSA website. Here are some guidelines for contributing:

1. ### Familiarize Yourself:
Take some time to familiarize yourself with the project objectives, guidelines, and existing codebase.

2. ### Identify Areas for Improvement:
Look for areas where you can contribute, such as design enhancements, content updates, or functionality improvements.

3. ### Discuss Ideas:
Feel free to discuss your ideas and proposed changes with other contributors or project maintainers to ensure alignment with project goals.

4. ### Follow Coding Standards:
Adhere to coding standards and conventions to maintain consistency and readability in the codebase.

5. ### Submit Pull Requests:
When you're ready, submit a pull request with your changes. Be sure to provide a clear description of the changes and their purpose.

6. ### Review and Feedback:
Participate in code reviews and provide constructive feedback to other contributors to help improve the quality of contributions.

7. ### Stay Engaged:
Stay engaged with the project by joining discussions, attending meetings, and contributing regularly to support ongoing development efforts.

By following these guidelines, you can make valuable contributions to the PGSA Website project and help create a valuable resource for PGSA members. Thank you for your interest and participation!

## To run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:5173) with your browser to see the result.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
