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
// Marketplace Token Extraction & Deep Linking Logic
function handleMarketplaceToken() {
    const tokenBox = document.getElementById("tokenBox");
    const launchLink = document.getElementById("appLaunchLink");

    if (!tokenBox || !launchLink) return; // Only execute if on the activation page

    // Parse the query parameters out of the URL bar
    const urlParams = new URLSearchParams(window.location.search);
    const marketplaceToken = urlParams.get('x-ms-marketplace-token');

    if (marketplaceToken) {
        // 1. Display the token inside the container UI
        tokenBox.innerText = marketplaceToken;
        tokenBox.style.color = "#333";

        // 2. Format the custom URI scheme link to hand the token to the local app
        // When clicked, Windows/macOS will send this parameter directly to the desktop execution environment.
        launchLink.href = `voicenavigator://activate?token=${encodeURIComponent(marketplaceToken)}`;
    } else {
        // Fallback display if someone accesses the page without coming directly from an active Microsoft checkout
        document.getElementById("tokenDisplaySection").style.display = "none";
        tokenBox.innerText = "No token found.";
        
        const card = document.querySelector(".activation-card");
        if (card) {
            card.innerHTML = `
                <h3 style="color: #d83b01;">Activation Token Missing</h3>
                <p>We couldn't detect a valid deployment token. Please launch this configuration window directly from your Microsoft Marketplace Subscriptions dashboard.</p>
                <br>
                <a href="index.html" style="color: #0078d4; text-decoration: none;">Return to Home</a>
            `;
        }
    }
}
