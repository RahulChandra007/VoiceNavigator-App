document.addEventListener('DOMContentLoaded', () => {
    const macBtn = document.getElementById('macHeroBtn');
    const winBtn = document.getElementById('winHeroBtn');

    // GitHub's public API endpoint for your specific repository's latest release
    const apiQueryUrl = "https://api.github.com/repos/RahulChandra007/VoiceNavigator-App/releases/latest";

    // Fetch the live release data straight from GitHub's servers
    fetch(apiQueryUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            // Check all files attached to your latest release
            const assets = data.assets;

            assets.forEach(asset => {
                const fileName = asset.name.toLowerCase();
                const downloadUrl = asset.browser_download_url;

                // 1. Automatically find the Mac asset matching your naming style (_Setup.dmg)
                if (fileName.includes('.dmg') && macBtn) {
                    macBtn.setAttribute('href', downloadUrl);
                }

                // 2. Automatically find the Windows asset matching your naming style (.zip)
                if (fileName.includes('win') && fileName.includes('.zip') && winBtn) {
                    winBtn.setAttribute('href', downloadUrl);
                }
            });
        })
        .catch(error => {
            console.error("GitHub API Fetch Error: ", error);
            // Fallback: If the API fails or hits a rate limit, the buttons safely 
            // point to your general /releases/latest page we set in the HTML.
        });
