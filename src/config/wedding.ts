import { assets } from "./assets";

// Re-exported so components can import both from the single wedding config.
export { assets };

/**
 * Single source of truth for the wedding. Edit here — never in components.
 */
export const wedding = {
  groom: {
    name: "Praveen P.",
    nameTa: "பிரவீன் ப.",
    roleTa: "மணமகன்",
  },
  bride: {
    name: "Malini K.",
    nameTa: "மாலினி க.",
    roleTa: "மணமகள்",
  },

  /** Wedding muhurtham start — used by the live countdown. */
  datetimeIso: "2026-11-01T07:30:00+05:30",
  timeZone: "Asia/Kolkata",
  dateLabel: "01 November 2026",
  dateLabelTa: "01 நவம்பர் 2026",
  muhurtham: "7:30 AM – 9:00 AM",
  muhurthamTa: "காலை 7:30 – 9:00 மணி",

  venue: {
    name: "Sri Gopikrishna Marriage Hall",
    nameTa: "ஸ்ரீ கோபிகிருஷ்ணா திருமண மண்டபம்",
    address: "Arakkonam – Sholinghur Road, Kumbinipet, Tamil Nadu.",
    addressTa: "அரக்கோணம் – சோளிங்கர் சாலை, கும்பினிபேட்டை, தமிழ்நாடு.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Gopikrishna+Marriage+Hall+Arakkonam+Sholinghur+Road+Kumbinipet",
  },

  music: {
    src: "/audio/wedding-bgm.mp3",
    volume: 0.35,
  },

  share: {
    title: "Praveen P. Weds Malini K.",
    text: "You are warmly invited to the wedding of Praveen P. & Malini K. — 01 November 2026 at Sri Gopikrishna Marriage Hall, Arakkonam",
  },

  assets,
};

export type WeddingConfig = typeof wedding;
