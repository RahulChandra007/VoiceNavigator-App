// Simple dynamic asset handling for your app downloads
document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadBtn');

    downloadButton.addEventListener('click', (e) => {
        // When your app binary link is ready inside GitHub Releases, 
        // paste that direct .dmg/.pkg URL right inside the quotes below:
        const releaseUrl = "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/releases";
        
        if (releaseUrl.includes("YOUR_USERNAME")) {
            e.preventDefault();
            alert("Thank you for downloading VoiceNavigator! Don't forget to configure your app binary release download URL in your script.js file.");
        }
    });
});
