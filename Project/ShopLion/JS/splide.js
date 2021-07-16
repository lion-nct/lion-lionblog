// new Splide(".splide", {
//   type: "loop",
//   perPage: 5,
//   perMove: 1,
//   pagination: false,
//   arrowPath: "",
//   breakpoints: {
//     1260: {
//       perPage: 4,
//     },
//     750: {
//       perPage: 3,
//     },
//     600: {
//       perPage: 2,
//     },
//   },
//   classes: {
//     // Add classes for arrows.
//     arrows: "splide__arrows project-arrow_container",
//     arrow: "splide__arrow project-arrow_container",
//     prev: "splide__arrow--prev project-arrow-prev",
//     next: "splide__arrow--next project-arrow-next",
//   },
// }).mount();

new Splide( '.splide', {
	type        : 'loop',
	perPage     : 3,
	autoplay    : true,
	pauseOnHover: false,
} ).mount();
