document.querySelectorAll('.image').forEach(image => {
    // Handle hover effect
    image.addEventListener('mouseover', () => {
        image.src = image.dataset.hover;
    });

    image.addEventListener('mouseout', () => {
        // Revert to original image source
        image.src = image.src.replace(image.dataset.hover, image.dataset.hover.replace('1.', '.'));
    });

    // Handle click effect
    image.addEventListener('click', () => {
        // Check if the clicked image is the first one
        if (image.src.includes('prd.jpg')) {
            window.location.href = 'produit.html'; // Redirect to produit.html
        } else {
            image.src = image.dataset.click; // Change to clicked image
        }
    });

    // Optionally, revert to original on second click
    image.addEventListener('dblclick', () => {
        if (!image.src.includes('prd.jpg')) {
            image.src = image.src.replace(image.dataset.click, image.src.replace('1.', '.'));
        }
    });
});
function swapImagesForMobile() {
    const images = document.querySelectorAll('.image-slider .image');
  
    images.forEach(img => {
      const mobileSrc = img.getAttribute('data-mobile');
      const originalSrc = img.getAttribute('data-original');
  
      if (window.innerWidth <= 768) {
        // For mobile, set the mobile image
        if (mobileSrc) {
          img.src = mobileSrc;
        }
      } else {
        // For desktop, revert to the original image
        if (originalSrc) {
          img.src = originalSrc;
        }
      }
    });
  }
  
  // Call the function on page load and window resize
  window.onload = swapImagesForMobile;
  window.onresize = swapImagesForMobile;
  