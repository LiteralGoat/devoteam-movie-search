# devoteam-movie-search
A web-based user interface for searching a database of movie metadata.

## Getting started
```
npm i
```

```
npm run dev
```

## Description

1. I looked at the given API.

2. Then I wrote the scope:
  a. The application needed a search input that calls the movie query endpoint
  b. An autocomplete suggestions from the API (thus a debounce function as to not call the API too often)
  c. A movie card list

3. The tools chosen would be Next.js (as it seems React's docs has completely moved over to Next), Figma for mockup, Jest for unit testing and the API given by Devoteam.

4. After this I created a quick mockup on Figma. The general idea was to follow the style from the Devoteam website:
![MacBook Air - 1](https://github.com/LiteralGoat/devoteam-movie-search/assets/51841124/a6c5bf21-651c-4a07-90d8-5793fd788018)
![MacBook Air - 2](https://github.com/LiteralGoat/devoteam-movie-search/assets/51841124/b461a40b-9cac-4446-a8dc-14a44057978e)

6. Then I moved on to the coding. Some problems I quickly encountered were external circumstances. This gave me more time constraints than anticipated and thus made me leave the unit tests and some responsivity in the application to be implemented at a later point. Furthermore, not being too familiar with Next.js it seems I encountered a few issues setting up the unit tests with Jest.
