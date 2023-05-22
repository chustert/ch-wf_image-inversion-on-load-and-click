// Execute the code when the DOM content is loaded
window.addEventListener('DOMContentLoaded', function() {
  // Get the tabs container element by its ID
  var tabsContainer = document.getElementById('capture-features_category-tabs-nav');
  // Get all tab links within the tabs container
  var tabLinks = tabsContainer.getElementsByClassName('capture-features_category-tab-link');

  // Function to invert the images
  function captureFeatures_invertImage() {
    // Get all the images within the tabs container
    var allImages = tabsContainer.querySelectorAll('.capture-features_category-tabs-nav_image');
    // Invert all the images initially
    allImages.forEach(function(image) {
      image.style.filter = 'invert(1)';
    });

    // Get the clicked tab element
    var clickedTab = this;
    // Get the image associated with the clicked tab
    var clickedImage = clickedTab.querySelector('.capture-features_category-tabs-nav_image');
    // Reset the filter for the clicked image
    clickedImage.style.filter = 'none';
  }

  // Run the initial inversion on page load, using the first tab as the default selected tab
  captureFeatures_invertImage.call(tabLinks[0]);

  // Add click event listeners to the tab links
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', captureFeatures_invertImage);
  }
});
