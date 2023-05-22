# ch-wf_image-inversion-on-load-and-click
This script is designed to handle the inversion of images based on the selected tab in an HTML structure.


Tab Image Inversion Script
This JavaScript script allows you to handle the inversion of images based on the selected tab in your HTML structure. It provides an easy way to dynamically invert images when a tab is clicked.

How it works
The script waits for the DOM content to be fully loaded before executing, ensuring that the required elements are available.

It selects the tabs container element using its ID (capture-features_category-tabs-nav). This container holds the tab links and the associated images.

It retrieves all the tab links within the tabs container using the class category-tab-link.

The invertImage function is defined, which is responsible for inverting the images based on the selected tab.

Within the invertImage function:

It selects all the images within the tabs container using the class category-tabs-nav_image.
It initially applies the invert(1) filter to all the images, making them inverted.
When a tab is clicked:

The invertImage function is called.
It identifies the clicked tab and retrieves the associated image.
It resets the filter for the clicked image to none, effectively reverting it back to its original state.
On page load, the script invokes the invertImage function and passes the first tab link as a parameter. This ensures that the initial inversion is applied, using the first tab as the default selected tab.

The script attaches click event listeners to all the tab links. Whenever a tab is clicked, the invertImage function is called again, ensuring the correct image inversion for the selected tab.

Make sure the necessary HTML elements, such as the tabs container with the ID "capture-features_category-tabs-nav" and the tab links with the class "category-tab-link", are present in your HTML code.

Usage
Include the provided JavaScript script in your HTML file, preferably just before the closing </body> tag.

Ensure that your HTML structure contains the necessary elements:

A container element with the ID capture-features_category-tabs-nav, which holds the tab links and associated images.
Tab links with the class category-tab-link within the tabs container.
Customize the image inversion behavior by adjusting the script as needed.

Run your HTML file in a web browser. The script will automatically handle image inversion when a tab is clicked.

License
This script is licensed under the MIT License.
