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


## Version note

This version fixes saving standalone tuner/tube calculations. After calculating, the user can choose an existing barrel profile or create a new barrel profile to save the calculation.


## Version note v3

- Removed Calculate Tube from the main screen.
- Tube calculation is now available only from an opened barrel profile.
- Tube results now calculate Tube Length as Tube Tuner Length minus the calculated tuner length saved/derived for the profile.


## Version note v4

- Added tuner measurement info image.
- Added tube measurement info image.
- Added info button on calculator screen.
- Added Tuner w/ Tube Setting field to barrel profiles.
- Tuner Setting and Tuner w/ Tube Setting are validated from 0 to 500 in .5 increments.
- Updated terminology to use Tuner & Tube Length for tube calculations.


## Version note v5

- Replaced the full mockup help images with clean measurement-only images.
- The X close button and Got It button are real app controls now.
- Tuner help text:
  The tuner length is measured from the end of the barrel muzzle to the end of the tuner body.
- Tube help text:
  The tube length is measured from the front end of the tube to the back end of the tube.
  Do NOT measure the threads.


## Version note v6

- Fixed large blank space on the Save Calculation screen so profile choices appear immediately near the top.


## Version note v7

- Added barrel length conflict handling when saving a calculation to an existing profile.
- If the calculation barrel length does not match the saved profile barrel length, the user is prompted to:
  - Continue and replace the barrel length
  - Save to a new profile
  - Cancel
- Each barrel profile now stores only one barrel length, one tuner calculation set, and one tube calculation set.
- Saving a new tuner or tube calculation replaces the previous calculation of that same type for the selected profile.


## Version note v8

- Fixed Save Calculation screen opening with a large blank area at the top by forcing the page to reset scroll position when switching screens.


## Version note v9

- Changed Save Calculation profile selection from a separate screen to a popup modal over the results.
- This removes the large blank-space/scroll-position issue when saving calculations.
