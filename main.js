document.addEventListener("DOMContentLoaded", function () {
  // Carousel functionality
  const images = document.querySelectorAll('.carousel-img');
  let index = 0;

  if (images.length > 0) {
    images[index].classList.add('active');

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 4000);
  }

  // Language Selector (redirect on click)
  document.querySelectorAll('.lang-dropdown a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const langUrl = link.getAttribute('href');
      window.location.href = langUrl;
    });
  });

  // Hamburger Menu (for mobile view)
  const hamburger = document.querySelector('.hamburger');
  const sideNav = document.querySelector('.side-nav');
  const langSelector = document.querySelector('.lang-selector');  // To control language selector for mobile

  hamburger.addEventListener('click', function () {
    sideNav.classList.toggle('open'); // Toggle the side nav
    hamburger.classList.toggle('open'); // Toggle the hamburger to "close"
    document.body.classList.toggle('side-nav-open'); // Disable body scroll
  });


// Close side nav when a link inside it is clicked
document.querySelectorAll('.side-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.side-nav').classList.remove('open');
    document.querySelector('.hamburger').classList.remove('open');
    document.body.classList.remove('side-nav-open');
  });
});



  // Ensure language selector works well with the new top menu layout
  if (langSelector) {
    langSelector.addEventListener('click', function (e) {
      e.preventDefault();
      const dropdown = langSelector.querySelector('.lang-dropdown');
      dropdown.classList.toggle('show');  // Toggle dropdown visibility on mobile view
    });
  }
});

const closeBtn = document.querySelector('.close-btn');

// Close on "X" button
closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.classList.remove('side-nav-open');
});

// Optional: Close when clicking outside the side nav
document.addEventListener('click', (e) => {
  if (
    sideNav.classList.contains('open') &&
    !sideNav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sideNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.classList.remove('side-nav-open');
  }
});
