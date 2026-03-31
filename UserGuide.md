# 📘 VoiceNavigator: Complete User Guide

Welcome to **VoiceNavigator**, the privacy-first, offline voice automation tool. This guide covers setup, operation, and troubleshooting for both macOS and Windows.

---

## 🛠️ 1. Platform-Specific Setup

### **macOS (Privacy & Permissions)**
macOS requires explicit permission for background processes to "listen" to global hotkeys.
1. **Accessibility:** Go to `System Settings > Privacy & Security > Accessibility`. Add and enable your **Terminal** (e.g., iTerm or Terminal.app).
2. **Input Monitoring:** Go to `Privacy & Security > Input Monitoring`. Add and enable your **Terminal**.
3. **Microphone:** Ensure the Terminal has permission to access the Microphone when prompted.
> **Pro Tip:** If hotkeys (F9/F10) stop responding after an app update, remove the Terminal from the Accessibility list and re-add it to "refresh" the system hook.

### **Windows (Security & Drivers)**
1. **SmartScreen:** Since the EXE is self-signed, Windows may show a "Protected your PC" box. Click **More Info** -> **Run Anyway**.
2. **Audio Backend:** Ensure your default recording device is set to **44100Hz** or **48000Hz** in Sound Settings for optimal Vosk performance.
3. **Antivirus:** Some antivirus software may flag the global keyboard hook. You may need to add an exclusion for the `VoiceNavigator.exe` binary.

---

## ⌨️ 2. Essential Controls

The application uses a **Dual-State** logic. The current state is indicated by a colored border on your screen.

| Feature | Key (Mac) | Key (Windows) | Result |
| :--- | :--- | :--- | :--- |
| **Pause/Resume** | `Fn + F10` | `F10` | Toggle Listening (Green) / Mute (Red) |
| **Settings** | `Fn + F9` | `F9` | Open Configuration Overlay |
| **Emergency Stop** | `Ctrl + C` | `Ctrl + C` | Force Quit the application in Terminal |

---

## 🗣️ 3. Voice Command Reference

VoiceNavigator processes commands **locally and offline**. Speak clearly at a moderate pace.

* **"Next" / "Forward"**: Move to the next slide or page.
* **"Back" / "Previous"**: Return to the last slide or page.
* **"Home"**: Jump to the start of the document/presentation.
* **"End"**: Jump to the final slide.

---

## ❓ 4. Troubleshooting FAQ

### **Q: The terminal shows "Next" was detected, but my slide didn't move.**
* **Focus Check:** VoiceNavigator sends keyboard commands to the **Active Window**. 
* **The Fix:** After starting the App, click on your PowerPoint, PDF, or Browser window to ensure it has the system "focus." If the focus is still on your window/screen, the command will be ignored by the presentation software.

### **Q: I press F10 but the border doesn't change color.**
* **Mac:** Ensure you are holding the **`Fn`** key. If that doesn't work, check the Accessibility permissions mentioned in Section 1.
* **Windows:** Ensure the terminal window or app has focus during the initial startup.

### **Q: The app isn't reacting to my voice.**
* **Check the Border:** If the border is **Red**, the app is paused. Press `F10` to turn it **Green**.
* **Check the Logs:** Look at the terminal output. If you don't see text appearing when you speak, verify your default system microphone is active.

### **Q: The border stays Red even when I'm not speaking.**
* The system may be processing background noise. Use the `F10` key to hard-toggle the pause state and clear the audio buffer.

---

## 🔒 Privacy Commitment
**VoiceNavigator** does not record, store, or transmit your voice data. 
* **No Internet Required:** All Speech-to-Text happens on your local CPU.
* **Zero Cloud:** No data is sent to external servers or third-party APIs.
* **Security:** Your voice remains on your device, ensuring total data sovereignty.
