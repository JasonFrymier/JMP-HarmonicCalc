# JMP Harmonic Calculator iPhone Web App / PWA

This version is designed so you can build and use it from a Windows computer.

Because Apple iPhone native apps require Xcode on a Mac for normal development, the easiest Windows-friendly starting point is a Progressive Web App (PWA). It looks and feels like an app on iPhone after you add it to the Home Screen.

## Files

- index.html
- manifest.json
- service-worker.js
- jmp-logo.png
- icon-192.png
- icon-512.png

## Best way to put it on your iPhone from Windows

Use GitHub Pages:

1. Create a free GitHub account if you do not already have one.
2. Create a new repository named something like:
   JMP-Harmonic-Calculator
3. Upload all files from this folder into the repository.
4. Go to repository Settings.
5. Click Pages.
6. Under Build and deployment, choose:
   Source: Deploy from a branch
   Branch: main
   Folder: /root
7. Save.
8. GitHub will give you a website link.
9. Open that link in Safari on your iPhone.
10. Tap the Share button.
11. Tap Add to Home Screen.
12. Name it JMP Harmonics.
13. Tap Add.

The app will now appear on your iPhone like a normal app icon.

## Printing

Open a saved barrel profile and tap Print Profile.
iPhone will open the print/share screen. From there you can print to an AirPrint printer or save/share as PDF depending on your iPhone options.

## Notes

- Data is stored locally on the iPhone browser using localStorage.
- If you clear Safari website data, the saved barrel profiles can be deleted.
- Later, this can be converted to a native iPhone app when you have access to a Mac or a cloud Mac service.
