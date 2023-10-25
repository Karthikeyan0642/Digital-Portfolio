// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the download button element by its ID
    const downloadButton = document.getElementById("downloadButton");

    // Add a click event listener to the download button
    downloadButton.addEventListener("click", function () {
        // Replace 'your_cv_file.pdf' with the actual file path you want to download
        const fileUrl = './img/My Profile.png';

        // Create an anchor element for the download
        const downloadLink = document.createElement("a");
        downloadLink.href = fileUrl;
        downloadLink.download = "your_cv.png"; // The name of the downloaded file
        downloadLink.style.display = "none";

        // Append the download link to the body and trigger the click event
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Remove the download link from the DOM
        document.body.removeChild(downloadLink);
    });
});
