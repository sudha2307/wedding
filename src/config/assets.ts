import groomCharacter from "@/assets/groom-character.png";
import brideCharacter from "@/assets/bride-character.png";
import coupleIllustration from "@/assets/couple-illustration.png";

export interface GalleryPhoto {
  src: string;
  alt: string;
  altTa: string;
  aspect?: "portrait" | "landscape" | "square";
}

/**
 * Centralized registry of all media assets used in the application.
 */
export const assets = {
  coupleIllustration,
  groomCharacter: "/gallery/groom-character.png",
  brideCharacter: "/gallery/bride-character.png",
  groomPortrait: "/gallery/groomcouplepage.png",
  bridePortrait: "/gallery/bridecouplepage.png",
  gallery: [
    {
      src: "/gallery/photo-02.jpeg",
      alt: "Praveen and Malini in traditional South Indian wedding attire with floral backdrop",
      altTa: "பாரம்பரிய பட்டு உடையில் மலர் அலங்காரப் பின்னணியில் பிரவீன் மற்றும் மாலினி",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-07.jpeg",
      alt: "Praveen and Malini hand in hand in ceremonial attire",
      altTa: "பாரம்பரிய உடையில் கை கோர்த்து நிற்கும் மணமக்கள்",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-10.jpeg",
      alt: "Engagement celebration: Malini in emerald silk saree and Praveen in wine silk",
      altTa: "நிச்சயதார்த்த வைபவத்தில் பிரவீன் & மாலினி",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-04.jpeg",
      alt: "Romantic outdoor moments in lush emerald fields",
      altTa: "இயற்கை எழில் கொஞ்சும் வயல்வெளியில் காதல் தருணங்கள்",
      aspect: "landscape",
    },
    {
      src: "/gallery/photo-08.jpeg",
      alt: "Joyful celebratory dance and garland moment on stage",
      altTa: "மேடையில் மாலை அணிந்து மகிழ்ச்சியான நடனம்",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-05.jpeg",
      alt: "Festive celebration and wedding ceremony memories",
      altTa: "திருமண திருவிழா நினைவுகள்",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-06.jpeg",
      alt: "Heartfelt smiles and blessings",
      altTa: "இதயம் நிறைந்த புன்னகையும் ஆசிகளும்",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-09.jpeg",
      alt: "Cherished moments together",
      altTa: "மகிழ்ச்சியான இணைந்த தருணங்கள்",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-03.jpeg",
      alt: "Tender close-up portrait of the couple",
      altTa: "மணமக்களின் அன்பான உருவப்படம்",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-01.jpeg",
      alt: "Candid reflection and sweet memories",
      altTa: "அழகிய நினைவுகளின் பிரதிபலிப்பு",
      aspect: "portrait",
    },
    {
      src: "/gallery/photo-11.jpeg",
      alt: "Pre-wedding celebration portrait",
      altTa: "திருமணத்திற்கு முந்தைய கொண்டாட்டம்",
      aspect: "portrait",
    },
  ] as GalleryPhoto[],
};
