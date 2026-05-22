document.addEventListener('DOMContentLoaded', () => {
    // 1. Locate the dynamic download hooks
    const topNavDownload = document.querySelector('.nav-download-dynamic');
    const centerHeroDownload = document.querySelector('.hero-download-dynamic');

    // 2. Define the target release URLs for v2.0.5 binaries
    const macAssetUrl = "https://github.com/RahulChandra007/VoiceNavigator-App/releases/download/v2.0.5/VoiceNavigator_v2.0.5.dmg";
    const winAssetUrl = "https://github.com/RahulChandra007/VoiceNavigator-App/releases/download/v2.0.5/VoiceNavigator_v2.0.5.exe";

    // 3. Scan system signature parameters
    const platformStr = navigator.userAgent.toLowerCase();
    
    let compiledDownloadUrl = macAssetUrl; // Default platform fallback route
    let activeOSLabel = "macOS";

    // If string contains Windows traces, re-route target download matrix
    if (platformStr.includes('win')) {
        compiledDownloadUrl = winAssetUrl;
        activeOSLabel = "Windows";
    }

    // 4. Update the Top Menu Download Link
    if (topNavDownload) {
        topNavDownload.setAttribute('href', compiledDownloadUrl);
        topNavDownload.textContent = `Download for ${activeOSLabel}`;
    }

    // 5. Update the Center Hero Download Link
    if (centerHeroDownload) {
        centerHeroDownload.setAttribute('href', compiledDownloadUrl);
        centerHeroDownload.textContent = `Get VoiceNavigator for ${activeOSLabel}`;
    }
});
