// Contact Form Submit Handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    
    // Clear form fields
    document.getElementById("contact-form").reset();
  });
  
  // Function to open the lightbox and display the clicked image
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = imageSrc;
  lightbox.style.display = "flex";
}

// Function to close the lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}
