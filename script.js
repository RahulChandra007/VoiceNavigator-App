document.addEventListener('DOMContentLoaded', () => {
    const downloadMac = document.getElementById('downloadMac');
    const downloadWin = document.getElementById('downloadWin');

    // Hardcoded direct links to your specific v2.0.5 release assets
    if (downloadMac) {
        downloadMac.setAttribute('href', 'https://github.com/RahulChandra007/VoiceNavigator-App/releases/download/v2.0.5/VoiceNavigator_v2.0.5.dmg');
    }

    if (downloadWin) {
        downloadWin.setAttribute('href', 'https://github.com/RahulChandra007/VoiceNavigator-App/releases/download/v2.0.5/VoiceNavigator_v2.0.5.exe');
    }
});
