export type Dictionary = {
  langLabel: string;
  otherLangLabel: string;
  switchLanguage: string;

  preloader: {
    loading: string;
    openInvitation: string;
    entering: string;
  };

  hero: {
    blessing: string;
    subtitle: string;
    weds: string;
    dateLabel: string;
    timeLabel: string;
    timeNote: string;
    inviteMessage: string;
    countdownPrefix: string;
    countdownAfter: string;
    countdownAfterSub: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    scrollDown: string;
  };

  blessing: {
    kicker: string;
    heading: string;
    message: string;
  };

  couple: {
    kicker: string;
    heading: string;
    groomCaption: string;
    brideCaption: string;
    altGroom: string;
    altBride: string;
  };

  story: {
    kicker: string;
    heading: string;
    subheading: string;
    popupBlessing: string;
    viewDetails: string;
    close: string;
    altGroom: string;
    altBride: string;
  };

  details: {
    kicker: string;
    heading: string;
    groom: string;
    bride: string;
    date: string;
    time: string;
    timeNote: string;
    venue: string;
    venueName: string;
    venueAddress: string;
    getDirections: string;
    directionsUnavailable: string;
  };

  gallery: {
    kicker: string;
    heading: string;
    lightboxLabel: string;
    prev: string;
    next: string;
    close: string;
  };

  closing: {
    heading: string;
    message: string;
    viewDetails: string;
    share: string;
    shareLabel: string;
    copied: string;
    nameSeparator: string;
  };

  controls: {
    playMusic: string;
    pauseMusic: string;
    musicUnavailable: string;
    scrollTop: string;
  };
};

export const en: Dictionary = {
  langLabel: "English",
  otherLangLabel: "தமிழ்",
  switchLanguage: "Switch language to Tamil",

  preloader: {
    loading: "Loading your invitation…",
    openInvitation: "Open Invitation",
    entering: "Opening your invitation…",
  },

  hero: {
    blessing: "Om Shree Ganeshaaya Namaha",
    subtitle: "Together with our families, we invite you to celebrate our wedding",
    weds: "Weds",
    dateLabel: "01 November 2026",
    timeLabel: "Auspicious time · 7:30 AM – 9:00 AM",
    timeNote: "Subject to confirmation against the original invitation",
    inviteMessage:
      "Your presence and blessings would make our celebration truly complete.",
    countdownPrefix: "Counting down to forever",
    countdownAfter: "Forever has begun",
    countdownAfterSub: "Thank you for being part of our journey",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    scrollDown: "Scroll down",
  },

  blessing: {
    kicker: "A Heartfelt Invitation",
    heading: "With the Blessings of Our Elders",
    message:
      "With the blessings of our elders and the love of our families, we joyfully invite you to witness the beginning of our beautiful journey together.",
  },

  couple: {
    kicker: "Two Stories, One Journey",
    heading: "Meet the Couple",
    groomCaption: "The Groom",
    brideCaption: "The Bride",
    altGroom: "Portrait of the groom, Praveen P.",
    altBride: "Portrait of the bride, Malini K.",
  },

  story: {
    kicker: "Our Story",
    heading: "A Journey of Two Hearts",
    subheading: "Keep scrolling to watch their story unfold",
    popupBlessing: "With the blessings of the Almighty and our elders",
    viewDetails: "View Wedding Details",
    close: "Close invitation",
    altGroom: "Illustrated South Indian groom",
    altBride: "Illustrated South Indian bride",
  },

  details: {
    kicker: "Save the Date",
    heading: "The Day We Begin Forever",
    groom: "Groom",
    bride: "Bride",
    date: "Date",
    time: "Auspicious Time",
    timeNote: "Subject to confirmation against the original invitation",
    venue: "Venue",
    venueName: "Sri Gopikrishna Marriage Hall",
    venueAddress: "Arakkonam – Sholinghur Road, Kumbinipet, Tamil Nadu.",
    getDirections: "Get Directions",
    directionsUnavailable: "Directions will open in Google Maps.",
  },

  gallery: {
    kicker: "Captured Memories",
    heading: "Little Moments, One Beautiful Forever",
    lightboxLabel: "Photo viewer",
    prev: "Previous photo",
    next: "Next photo",
    close: "Close photo viewer",
  },

  closing: {
    heading: "Two Hearts. One Beautiful Beginning.",
    message:
      "Your presence and blessings will make our special day even more meaningful.",
    viewDetails: "View Wedding Details",
    share: "Share Invitation",
    shareLabel: "Share this invitation",
    copied: "Invitation link copied!",
    nameSeparator: "weds",
  },

  controls: {
    playMusic: "Play background music",
    pauseMusic: "Pause background music",
    musicUnavailable: "Music is unavailable right now",
    scrollTop: "Scroll back to top",
  },
};
