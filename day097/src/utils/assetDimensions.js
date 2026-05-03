const iconSize = { width: 320, height: 320 };

const dimensions = {
  "/assets/remote-assistant-hero.png": { width: 1536, height: 1024 },
  "/assets/desk-workflow-hero.png": { width: 1536, height: 1024 },
  "/assets/assistant-illustration-transparent.png": { width: 917, height: 1056 },
  "/assets/icons/booking.png": iconSize,
  "/assets/icons/calculator.png": iconSize,
  "/assets/icons/calendar.png": iconSize,
  "/assets/icons/chat.png": iconSize,
  "/assets/icons/checklist.png": iconSize,
  "/assets/icons/clock.png": iconSize,
  "/assets/icons/folder.png": iconSize,
  "/assets/icons/headset.png": iconSize,
  "/assets/icons/lock.png": iconSize,
  "/assets/icons/mail.png": iconSize,
  "/assets/icons/search.png": iconSize,
  "/assets/icons/yen.png": iconSize,
};

export function getImageDimensions(src) {
  return dimensions[src] ?? {};
}
