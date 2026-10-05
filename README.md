# StudyMate Ghana

StudyMate Ghana is an offline-first Progressive Web App for Mathematics and English practice.

## Files

- `index.html` — app structure and learning content shell
- `styles.css` — responsive mobile-first styling
- `app.js` — lessons, quizzes, progress, search and voice search
- `sw.js` — service worker and offline cache
- `manifest.json` — PWA installation metadata
- `icon.svg` — app icon
- `README.md` — deployment notes

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files to the repository root.
3. Enable GitHub Pages from the repository settings and choose the main branch/root folder.
4. Open the published HTTPS address once while online.
5. Use the browser's install option or the app's install button when available.
6. After the first successful cache, the app shell and included lessons/quizzes remain available offline.

## Important voice-search note

The lesson search itself is fully local and works offline. The Web Speech API is used for microphone input, but speech recognition support and offline recognition vary by browser/device. Some Android browsers may require an internet connection for speech recognition even though the rest of StudyMate works offline.

## Updating content

When you change app files, update `CACHE_NAME` in `sw.js`, for example from `studymate-ghana-v1` to `studymate-ghana-v2`, so returning users receive the new cached version.
