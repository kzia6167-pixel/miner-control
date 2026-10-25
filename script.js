
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinkhome = document.getElementById('scroll-linkhome');
    
    scrollLinkhome.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Add a class to trigger the animation
      scrollLinkhome.classList.add('clicked');
      
      // Wait for 1 second
      setTimeout(function() {
        // Scroll to the target section smoothly
        const targetSection = document.querySelector(scrollLinkhome.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500); // 1000 milliseconds = 1 second
    });
  })
  
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinkhome = document.getElementById('scroll-link');
    
    scrollLinkhome.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Add a class to trigger the animation
      scrollLinkhome.classList.add('clicked');
      
      // Wait for 1 second
      setTimeout(function() {
        // Scroll to the target section smoothly
        const targetSection = document.querySelector(scrollLinkhome.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500); // 1000 milliseconds = 1 second
    });
  })
  
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinkhome = document.getElementById('scroll-home');
    
    scrollLinkhome.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Add a class to trigger the animation
      scrollLinkhome.classList.add('clicked');
      
      // Wait for 1 second
      setTimeout(function() {
        // Scroll to the target section smoothly
        const targetSection = document.querySelector(scrollLinkhome.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500); // 1000 milliseconds = 1 second
    });
  })
  $(document).ready(function (){
    let offset = {offset: "80%"}
    $(".table_of_content_title").waypoint(function(){
        $(".table_of_content_title").addClass(
            "animate__animated animate__backInUp"
        );
    }, offset );
});