function swapImagesForMobile() {
    const images = document.querySelectorAll('.photos img');
  
    images.forEach(img => {
      const mobileSrc = img.getAttribute('data-mobile');
      const originalSrc = img.getAttribute('data-original');
  
      if (window.innerWidth <= 768) {
        // If it's mobile, change to the mobile version of the image
        if (mobileSrc) {
          img.src = mobileSrc;
        }
      } else {
        // For desktop, revert to the original version
        if (originalSrc) {
          img.src = originalSrc;
        }
      }
    });
  }
  
  // Run on page load and when resizing the window
  window.onload = swapImagesForMobile;
  window.onresize = swapImagesForMobile;
  