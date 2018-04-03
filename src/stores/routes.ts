/*
Routes are matched from top to bottom. Make sure they are sequenced in the order of priority.
It is generally best to sort them by pattern, prioritizing specific patterns over generic
patterns (patterns with one or more parameters). For example:
  /items
  /items/:id
*/
export const routes = [
  {
    name: 'home',
    pattern: '/',
  },
  {
    name: 'clock',
    pattern: '/clock',
  },
  {
    name: 'buttons',
    pattern: '/buttons',
  },
  {
    name: 'notFound',
    pattern: '/not-found',
  },
];
