// api.js - dummy API for demo

export function fetchNextBus() {
  // Normally would call a server API
  // Here we return static data for demo purposes
  return Promise.resolve({
    route: "Campus Loop",
    minutes: 3
  });
}
