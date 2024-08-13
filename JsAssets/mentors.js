// JavaScript to add smooth transition effect

const activeLinks = document.querySelectorAll('#categories a');
const toggleKnob = document.querySelectorAll('.advance__search-toggle');
const navToggle = document.getElementById('hamburger-icon');
const menteeLink = document.querySelectorAll('.content__link a');
const content = document.querySelectorAll('.content');
const starContainer = document.querySelectorAll('#star__container');
const numberOfStars = 3;


// FUNCTION FOR NAV TOGGLE============================
function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
  }

// =====ADDING BORDER BOTTOM FOR ALL ACTIVE MENTORS==========
activeLinks.forEach(catergoryLink => {
    catergoryLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        
        // Remove 'active' class from all links
        activeLinks.forEach(catergoryLink => 
            catergoryLink.classList.remove('active'));
        
        // Add 'active' class to the clicked link
        catergoryLink.classList.add('active');

        // Optional: add a smooth fade-out effect
        document.body.classList.add('fade-out');

        // Redirect after fade-out
        setTimeout(() => {
            this.location.href = catergoryLink.getAttribute('href');
        }, 500); // Delay in milliseconds for fade-out effect
    });
});

toggleKnob.forEach(toggle =>{
  const knob = toggle.querySelector('.toggle-knob');
  knob.addEventListener('click', (event) => {
    event.preventDefault();
    toggle.classList.toggle('active');
    window.open(knob.href, '_self');
  });
});

// Add event listener to each link to display it block on the same screen
menteeLink.forEach((link, index) => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      
      // Hide all content sections and remove active class from all links
      content.forEach(content => content.classList.add('hidden'));
      menteeLink.forEach(link => link.classList.remove('active'));

      // Show the clicked link's content and set the link as active
      document.getElementById(`content${index + 1}`).classList.remove('hidden');
      document.getElementById(`content${index + 1}`).classList.add('visible');
      link.classList.add('active');
  });
});

// ====FOR LOOP TO INCREASE THE NUMBER OF STARS ICON TO 4
starContainer.forEach(container => {
  for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('i');
      star.classList.add('fa', 'fa-star'); // Add FontAwesome star class
      container.appendChild(star);
  }
});


navToggle.addEventListener('click', function(){
    toggleMobileMenu(navToggle);
  })



