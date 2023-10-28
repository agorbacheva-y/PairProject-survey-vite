# Survey Project

Technigo Week 5 Pair Project
Daniel Read and Ayumi Gorbacheva-Yamamoto (Team Banana)

The assignment was to create a controlled form with a Typeform-like survey.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

We chose to create a Mad Libs type fortune telling game where a user enters or chooses words that will be used to fill in the blanks for a fortune to be read at the end. 

We started by creating a simple form with 3 questions, each with different input styles: text, radio button, dropdown. The questions are structured so it can be edited dynamically by using props. We used the hook useState to store question and input data as well as the state of buttons.


### View it live

<a href=https://technigo-wk5-survey-vite.netlify.app>Deployed site</a>

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
