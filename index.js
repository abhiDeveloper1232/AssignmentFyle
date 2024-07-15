var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  document.body.classList.add('no-scroll');
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll');

 
  }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const terms = document.getElementById('terms').checked;

        if (!firstName || !lastName || !email || !terms) {
            alert('Please fill in all fields and agree to the terms and conditions.');
            return;
        }

        // Create the data object to be sent to the backend
        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            terms: terms
        };

        fetch('https://getform.io/f/azylyxwb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify that the content is JSON
                'Accept': 'application/json' // Specify that we expect JSON in response
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Attempt to parse JSON response
        })
        .then(result => {
            console.log('Success:', result);
            
            alert('Form submitted successfully!');
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('terms').checked = false;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Array of triggers and corresponding images
  var hoverTriggers = [
      {trigger: document.getElementById('hoverTrigger1'), image: document.getElementById('hoverImage1')},
      {trigger: document.getElementById('hoverTrigger2'), image: document.getElementById('hoverImage2')},
      {trigger: document.getElementById('hoverTrigger3'), image: document.getElementById('hoverImage3')}
  ];

  // Function to show the image
  function showImageAndSetActive(index) {
      hoverTriggers.forEach((item, i) => {
          if (i === index) {
              item.image.style.display = 'block';
              item.trigger.classList.add('active');
          } else {
              item.image.style.display = 'none';
              item.trigger.classList.remove('active');
          }      
      });
  }

  // Function to reset to default image (first image)
  showImageAndSetActive(0);

  // Add event listeners
  hoverTriggers.forEach((item, index) => {
    item.trigger.addEventListener('click', function () {
        showImageAndSetActive(index);
    });
});

});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    
    var swiperSlides = document.querySelectorAll('.swiper-slide');

    swiperSlides.forEach(slide => {
        slide.addEventListener('click', function () {
            window.open('https://fylehq.com'); // Replace with your desired URL
        });
    });
});




