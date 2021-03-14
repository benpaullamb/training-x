# Training X

![status: dropped](https://img.shields.io/badge/status-dropped-inactive)

## About this Project

Web app for recording my training routine progress

![Screenshot of the app](./static/screenshot.png)

I wanted a simple way to track my training progress that I could use on my phone but without having to create a native mobile app. So I created a mobile-first web app and used Nuxt to create the config required to turn it into a PWA.

### Built with

- Nuxt.js

## Getting Started

### Prerequisites

- Node

### Installation

1. Install the dependencies.

```
npm i
```

2. Run the app locally with hot reloading.

```
npm run dev
```

Go to http://localhost:3000

## Deployment

This project is hosted on GitHub pages.

1. Build the static pages.

```
npm run generate
```

2. Commit to the GitHub repo that has GitHub pages setup for the `/docs` directory.

```
git push
```

See usage

## Usage

This project is designed for mobile only although it does function on other devices.

https://benpaullamb.github.io/training-x/

## Roadmap

- [ ] Redesign UI - standardise spacing, fonts, and colours (add Sass)
- [ ] Replace inputs with selectable reps/weight and one main increment/decrement
- [ ] Add/delete exercises
- [ ] Add/delete workouts
- [ ] Edit notes

## Release History

- v0.1.3
  - Instructions page
- v0.1.2
  - Import from clipboard
- v0.1.1
  - Copy to clipboard
- v0.1.0
  - Initial design
