1. Overall design direction
Project: Praveen & Malini — Wedding Invitation
Framework: React + Vite + TypeScript
Design style: Modern romantic, elegant South Indian wedding, cinematic motion
Background: White and warm ivory
Primary colour: Romantic rose pink
Secondary colours: Blush pink, champagne gold, deep wine and soft rose
Experience: Animated preloader → Open Invitation → Cinematic wedding story → Couple animation → Wedding details → Photo gallery → Closing blessing
Suggested colour palette
Colour	Hex code	Purpose
Pure White	#FFFFFF	Main background
Warm Ivory	#FFF9F7	Alternating section backgrounds
Rose Pink	#E85D8E	Primary colour and buttons
Blush Pink	#F8D7E3	Decorative shapes and soft gradients
Deep Wine	#762B48	Headings and emphasis
Champagne Gold	#C9A46A	Elegant borders and ornaments
Charcoal	#352B30	Body text


Avoid making every section look like a rectangular card. Use generous whitespace, flowing shapes, soft gradients, decorative floral outlines, elegant typography and irregular image compositions.

The website should feel premium on desktop while remaining exceptionally smooth and easy to use on mobile.
2. Complete website structure and animation plan
Here is the experience I recommend implementing.
Section 1 — Cinematic preloader
This is the first screen visitors see when they open the website.

Visual design:
- Full-screen white-to-blush gradient background.
- Tiny floating heart particles, rose petals and champagne-gold sparkles.
- A large circular frame in the centre with an AI-generated miniature illustration of the couple.
- A delicate ornamental ring rotates slowly around the couple's image.
- Groom and bride names appear underneath using elegant typography.
- A loading percentage and animated progress bar sit below the names.
- Small decorative floral elements gently float in the background.
Animation sequence:
1. The background fades in with floating heart particles.
2. A circular frame draws itself around the couple's image.
3. The couple illustration fades in with a subtle zoom.
4. PRAVEEN P. and MALINI K. appear with staggered text animations.
5. The progress bar fills with a smooth animation.
6. Once loading is complete, an animated Open Invitation button appears.
The preloader should wait for essential assets and fonts to load. Avoid keeping visitors waiting unnecessarily just to complete an animation.
Open Invitation interaction
When the guest clicks the button:
- The button expands into a soft pink circular transition.
- The circular couple illustration scales up.
- Heart particles burst outward.
- The preloader dissolves into the main website.
- Romantic background music begins playing.
- A floating music control appears on the website.
Important: Browsers commonly block autoplay audio until a user interacts with the page. Starting the music from the Open Invitation button provides a reliable way to initiate playback. The music must also have a mute/pause control.

For now, use a replaceable, properly licensed romantic instrumental track. Do not depend on a random music URL that may disappear or block playback.
Section 2 — Wedding hero
This is the first main screen after the invitation opens.

Layout:

The desktop layout should feel like a beautiful wedding editorial, with the couple's names taking centre stage.

At the top:
- Small traditional wedding blessing.
- Delicate ornamental divider.
- An elegant subtitle: Together with our families, we invite you to celebrate our wedding.
In the centre:

PRAVEEN P.

Weds

MALINI K.

Below the names:
- Wedding date: 01 November 2026
- Auspicious time: 7:30 AM – 9:00 AM, subject to confirmation against the original invitation.
- A short invitation message.
- A live wedding countdown.
- An animated scroll-down indicator.
Visual effects:
- Names reveal letter by letter.
- Gold particles drift slowly across the background.
- Soft pink petals float down at different speeds.
- The background decorations respond subtly to scrolling.
- A floral outline draws itself around the hero content.
- The date enters with a gentle upward reveal.
- The countdown digits animate when their values change.
Use the couple's names as the main visual focus. Avoid filling the hero with too much text.
Section 3 — Blessings and invitation message
Create a full-width, elegant section with a white background and subtle pink ornamental decorations.

The invitation message should be short and meaningful.

Suggested English copy:

With the blessings of our elders and the love of our families, we joyfully invite you to witness the beginning of our beautiful journey together.

Display a small traditional floral or kolam-inspired motif between the heading and the message.

The animation should reveal the heading first, followed by the message line by line.

The complete list of family members and other invitation details does not need to be reproduced. This is a digital invitation, not a copy of the printed card.
Section 4 — Meet the couple
Create an attractive section introducing the groom and bride.

Desktop composition:
- Groom's portrait on the left.
- Bride's portrait on the right.
- A decorative ampersand or heart motif between them.
- Their names and short captions underneath.
Mobile composition:
- Stack the portraits vertically or use a carefully designed overlapping composition.
- Keep both names and photographs readable.
- Prevent decorative elements from covering the faces.
Use replaceable image assets from a public image source initially. Keep all image paths in one configuration file so the client's real photographs can be added later.

Add subtle hover effects, image reveals, floating petals and staggered text animations.

Do not invent biographies or personal stories about the couple.
Section 5 — The signature scroll animation
This is the main attraction of the entire website.

Create a dedicated, scroll-driven scene in which a tiny illustrated groom enters from the left edge and a tiny illustrated bride enters from the right edge.

The characters should be attractive, AI-generated miniature South Indian wedding characters—not generic emoji or simple CSS stick figures.
How it should work
Stage 1: Characters enter

As the visitor scrolls into the section:
- The groom starts outside the left edge.
- The bride starts outside the right edge.
- Both gradually move towards the centre.
- Their movement is tied directly to scroll progress.
Stage 2: The couple approaches

As scrolling continues:
- The characters move closer together.
- The groom's outfit and bride's bridal attire should look appropriate for a South Indian wedding.
- Small hearts and gold sparkles appear around them.
- The background changes gradually from white to a very soft pink.
Stage 3: The couple meets

When the characters reach the centre:
- They pause next to each other.
- A delicate heart or ornamental frame forms around them.
- The couple illustration grows slightly.
- A bright pink and gold particle burst begins.
- The background becomes a soft romantic gradient.
Stage 4: Invitation popup

Once the characters meet, display an elegant invitation popup.

The popup should contain:
- A wedding blessing.
- Praveen P. Weds Malini K.
- Wedding date.
- Auspicious time.
- Wedding venue.
- A button to view the complete wedding details.
The popup should emerge with a smooth scale-and-fade animation, while tiny hearts and gold sparkles animate around it.

Stage 5: Return to normal scrolling

After the reveal completes, allow the visitor to continue naturally to the next section.
Technical implementation
Use GSAP with ScrollTrigger for this scene.

Pin the animation section for a controlled portion of the scroll journey. Animate the characters using scroll progress rather than independent timers, so scrolling backwards reverses the animation naturally.

Important requirements:
- Use responsive character positions.
- Do not permanently lock scrolling.
- Do not force an automatic scroll to the popup.
- Keep the animation shorter on mobile.
- Provide a reduced-motion alternative.
- Prevent the scene from creating horizontal page overflow.
This should feel like a short interactive wedding film embedded inside a webpage.
Section 6 — Wedding ceremony details
Create an elegant section titled:

The Day We Begin Forever

Display the wedding details in a visually distinctive layout, rather than a collection of ordinary rectangular cards.

Use decorative dividers, subtle gold borders, soft pink gradients and small animated line icons.
Wedding information
Detail	Content
Groom	Praveen P.
Bride	Malini K.
Date	1 November 2026
Auspicious time	7:30 AM–9:00 AM, confirm before publishing
Venue	Use the exact venue name and address from the invitation
Directions	Add a Google Maps link when the venue location is confirmed


Animate each detail into view as the user scrolls.

Include a Get Directions button that opens the confirmed venue location in Google Maps.

Do not invent a venue address or an unverified map location.
Section 7 — Photo gallery
Give the gallery a memorable title:

Little Moments, One Beautiful Forever

Use a modern editorial gallery with a mixture of portrait and landscape photographs.

Design ideas:
- One large featured photograph.
- Smaller photographs arranged asymmetrically.
- Rounded organic corners rather than identical rectangular tiles.
- Soft pink and champagne-gold accents.
- Gentle image zoom on hover.
- Scroll-triggered image reveals.
- A full-screen lightbox when a photograph is clicked.
- Previous and next controls.
- Swipe navigation on mobile.
Use temporary, replaceable photographs until the client supplies the actual images.

Add subtle decorative captions only where appropriate. Do not invent relationship milestones or personal events.
Section 8 — A final invitation
Create a warm closing section with a soft blush background and an elegant decorative frame.

Display:

Two Hearts. One Beautiful Beginning.

Your presence and blessings will make our special day even more meaningful.

Then show:

Praveen P. ♥ Malini K.

01 November 2026

Add a button to revisit the wedding details and another to share the invitation.

The share button should use the Web Share API where supported, with a copy-link fallback.

Finish with a gentle shower of hearts and gold sparkles.
3. Translation control
Place a small, elegant language-accessibility button in the top-right corner.

The button should appear as a floating pill or a compact control attached to the right edge of the screen.

Initially, the website must display English content.

When the guest selects Tamil:
- All website text changes to Tamil.
- Section headings and captions update.
- Wedding details, buttons, labels and popup content update.
- The language button changes to offer English.
- Text changes use a short fade transition.
- Layouts adjust automatically for Tamil text lengths.
The language change must not reset the visitor's scroll position, stop the wedding music or restart the entire animation sequence.

Implement translations using a central language dictionary, such as en and ta, rather than duplicating the entire website.

Use a suitable Tamil font, such as Noto Sans Tamil, with an elegant serif font for English headings.

Accessibility: The language control should have a clear accessible label, keyboard support and adequate contrast.

5. Additional ideas to make it even more attractive
These are the enhancements I would prioritize after the core website is working.
A. Animated invitation envelope
Instead of transitioning directly from the preloader to the hero, the invitation could briefly reveal a digital envelope with the couple's initials.

The envelope opens when the guest presses Open Invitation, revealing the wedding invitation behind it.

This gives the website a more personal and ceremonial opening.
B. A scroll progress indicator
Add a thin rose-pink line along the top of the screen that fills as the visitor scrolls.

It provides subtle feedback and makes the long, animated invitation feel more polished.
C. Floating decorative elements
Use a combination of:
- Tiny heart particles.
- Rose petals.
- Gold sparkles.
- Delicate floral outlines.
- Traditional ornamental dividers.
Keep these effects subtle so the website does not feel cluttered.
D. Interactive wedding countdown
The countdown should display days, hours, minutes and seconds.

Each value can animate when it changes, with a graceful number transition rather than a flashy digital-clock effect.
E. WhatsApp sharing
A wedding invitation is intended to be shared, so include a share button that works on mobile and desktop.

Use the browser's native sharing interface where available and provide a copy-link fallback.
6. Recommended implementation order
To avoid the AI coding tool generating an attractive but unreliable website, build it in stages.
Phase	What to implement	Priority
1	React setup, theme, fonts and responsive layout	Essential
2	Preloader, couple portrait and Open Invitation button	Essential
3	Background music and global particle effects	Essential
4	Hero, wedding countdown and blessing	Essential
5	Couple introduction and photo placeholders	Essential
6	GSAP scroll-driven groom-and-bride animation	Highest visual priority
7	Invitation popup and wedding details	Essential
8	Gallery and lightbox	Essential
9	English–Tamil translation	Essential
10	Closing section and sharing	Essential
11	Accessibility, mobile optimization and testing	Essential


# PROJECT: PRAVEEN P. WEDS MALINI K. — PREMIUM ANIMATED WEDDING INVITATION

Act as a senior React developer, creative director, motion designer and UI/UX engineer specializing in premium wedding invitation websites.

Build a complete, production-quality, single-page wedding invitation website for:

**Groom:** Praveen P.  
**Bride:** Malini K.  
**Wedding date:** 1 November 2026  
**Auspicious time:** 7:30 AM–9:00 AM, subject to confirmation against the original invitation  
**Wedding venue:** Extract the exact name and address from the supplied invitation image where legible. If uncertain, use a clearly editable placeholder and do not invent the location.

The supplied invitation image is the reference for the couple's names, date and traditional wedding context. The website must be much more visually engaging than a static printed invitation.

## 1. TECHNOLOGY STACK

Use:

- React
- Vite
- TypeScript
- Tailwind CSS or a well-organized CSS architecture
- Framer Motion for component and text animations
- GSAP with ScrollTrigger for complex scroll-driven animations
- Lucide React for interface icons
- React Icons only where necessary
- HTML5 Audio API for background music
- Canvas or a lightweight particle library for decorative particle effects
- IntersectionObserver for lightweight scroll-triggered reveals

Use compatible, stable package versions.

Do not introduce unnecessary backend services. This project is a frontend-only wedding invitation website unless a real integration requires a backend.

Deliver actual working components and code, not just a design description or static mockup.

## 2. CREATIVE DIRECTION

Create a sophisticated, modern South Indian wedding invitation with a romantic editorial aesthetic.

The website must look premium, warm, elegant and memorable.

Use a predominantly white background with subtle blush-pink gradients, champagne-gold ornaments and deep-wine typography.

Colour tokens:

- White: #FFFFFF
- Ivory: #FFF9F7
- Primary rose: #E85D8E
- Blush: #F8D7E3
- Deep wine: #762B48
- Champagne gold: #C9A46A
- Charcoal: #352B30
- Soft pink border: #F0C5D4

Avoid excessive saturated pink, heavy shadows, generic dashboards, repetitive rectangular cards, cartoonish UI, cluttered decorations and oversized gradients.

Use flowing decorative shapes, delicate floral outlines, ornamental dividers, elegant negative space, premium typography and carefully composed photographs.

Use a script font sparingly for decorative words. Use a refined serif font for couple names and headings and a highly readable sans-serif font for interface text.

Use a suitable Tamil font when the visitor switches languages.

The result must feel like a custom-designed wedding invitation rather than a generic website template.

## 3. CINEMATIC PRELOADER

Create a full-screen animated preloader that appears before the main invitation.

Background:
- White-to-blush gradient.
- Floating hearts.
- Small champagne-gold particles.
- Slowly falling rose petals.
- Subtle depth and parallax effects.
- Fine ornamental outlines.

Central composition:
- Large circular couple portrait frame.
- AI-generated miniature illustration of a South Indian groom and bride.
- Animated circular border.
- Delicate decorative flourishes.
- Couple names below the portrait.
- An animated loading percentage.
- A smooth, animated progress bar.
- An Open Invitation button that appears when essential assets are ready.

Animation sequence:
1. Background fades in.
2. Particles begin moving.
3. Circular frame draws itself.
4. Couple illustration fades and scales into position.
5. Groom and bride names reveal with staggered text animation.
6. Progress indicator animates smoothly.
7. Open Invitation button appears with a gentle glow.

The progress indicator must represent actual asset readiness or a controlled loading state, not a misleading random percentage.

Do not delay the user with an unnecessarily long loading animation.

Ensure that the application can recover gracefully if an optional photograph or external resource fails to load.

### Open Invitation interaction

When the visitor clicks Open Invitation:
- Start the background music.
- Play a soft heart-particle burst.
- Animate the circular frame outward.
- Transition into the hero section.
- Fade in the main content.
- Reveal a floating music-control button.

Respect browser audio restrictions. Do not assume audio can autoplay before user interaction.

If the audio cannot play, show a small, unobtrusive message or let the visitor use the music control to retry.

## 4. BACKGROUND MUSIC

Implement a persistent music controller using the HTML5 Audio API.

Requirements:
- Play/pause toggle.
- Mute/unmute.
- Persistent music playback across section changes.
- Loop playback.
- Volume control or a sensible default volume.
- Accessible button labels.
- Correct cleanup on component unmount.
- Handle playback rejection and missing audio files.

Initially configure a temporary, properly licensed romantic instrumental track.

Prefer a local asset such as `/audio/wedding-bgm.mp3` so the final track can be replaced easily.

If a temporary remote track is used, verify that it is publicly accessible, legally usable and supports direct audio playback. Do not use an arbitrary music-video page as an audio source.

Centralize the audio path in the site configuration.

Do not restart the music when switching languages or opening and closing popups.

## 5. HERO SECTION

Create a full-screen or near-full-screen hero section.

Top:
- Small traditional wedding blessing.
- Delicate ornamental divider.
- Short invitation sentence.

Main content:

PRAVEEN P.

Weds

MALINI K.

Display the names prominently with elegant typography.

Show:
- Wedding date: 1 November 2026.
- Auspicious time: 7:30 AM–9:00 AM, pending confirmation.
- A short invitation message.
- Live wedding countdown.
- Scroll-down indicator.

Visual treatment:
- Large, expressive typography.
- Subtle floral outlines.
- Floating hearts and rose petals.
- Gold sparkles.
- Animated text reveals.
- Gentle parallax.
- Responsive decorative elements.
- An elegant date badge or ornamental date treatment.

Use Framer Motion for entrance effects and GSAP only where scroll control is required.

The countdown must use a configurable wedding datetime and update every second. Clearly handle the state after the event has passed.

Do not guess the exact timezone or event timestamp beyond the confirmed event details. Configure the intended local timezone explicitly.

## 6. INVITATION BLESSING SECTION

Create a refined, minimal section with a traditional South Indian wedding atmosphere.

Suggested English copy:

"With the blessings of our elders and the love of our families, we joyfully invite you to witness the beginning of our beautiful journey together."

Use:
- A delicate ornamental motif.
- A refined heading.
- Readable paragraph typography.
- A subtle pink background accent.
- Line-by-line text reveals.
- A decorative section divider.

Keep the section concise. Do not reproduce the entire printed invitation or invent family names.

## 7. MEET THE COUPLE SECTION

Create a premium couple introduction.

Desktop:
- Groom photograph on the left.
- Bride photograph on the right.
- Decorative ampersand or heart between the portraits.
- Names below each photograph.
- Subtle floral framing.
- Asymmetric editorial composition.

Mobile:
- Stack the portraits or use a balanced overlapping layout.
- Ensure the names and faces remain fully visible.
- Prevent horizontal overflow.
- Keep text readable.

Use replaceable placeholder images.

Keep every photograph path in a central configuration file.

Add scroll-triggered image reveals, gentle image scaling, staggered name animations and subtle decorative particle movement.

Do not invent personal biographies, occupations or relationship stories.

## 8. SIGNATURE SCROLL-DRIVEN COUPLE ANIMATION

This is the most important animation in the website.

Create a dedicated cinematic section with two AI-generated miniature South Indian wedding characters:

- A groom in elegant traditional wedding attire.
- A bride in an attractive traditional bridal outfit.
- Consistent illustration style.
- Transparent-background assets where possible.
- Visually clear silhouettes.
- High-quality, appealing proportions.
- Replaceable image paths.

The characters must be separate assets so their positions can be animated independently.

Do not use emoji, generic human icons, static CSS stick figures or unrelated stock illustrations.

### Stage A: Entry

As the visitor scrolls into the section:
- The groom begins outside the left edge.
- The bride begins outside the right edge.
- Both characters move toward the centre.
- Movement is controlled by scroll progress.
- Tiny hearts and sparkles appear around them.

### Stage B: Approach

During continued scrolling:
- The characters move progressively closer.
- The background transitions from white to blush pink.
- Decorative floral outlines appear.
- The characters have subtle floating or idle movement.
- A faint glow develops around the central meeting point.

### Stage C: Meeting

When the characters reach the centre:
- They stop next to each other.
- A heart or ornamental frame appears.
- The couple illustration scales up slightly.
- Champagne-gold particles burst outward.
- A soft pink radial glow expands.

### Stage D: Wedding invitation popup

Reveal an elegant modal containing:

- A traditional wedding blessing.
- Praveen P. Weds Malini K.
- Wedding date.
- Auspicious time.
- Confirmed wedding venue.
- A View Wedding Details button.
- A close button.

Animate the modal using a smooth scale-and-fade transition.

Use restrained particles around the modal rather than covering its content.

The modal must be keyboard accessible, closable with Escape, correctly labelled for screen readers and usable on mobile.

### Stage E: Continue scrolling

After the reveal:
- Allow natural scrolling to continue.
- Do not permanently lock the page.
- Do not force an automatic jump to another section.
- Support reverse scrolling.
- Restore normal document scrolling without visible jumps.

### Animation implementation

Use GSAP ScrollTrigger for the pinned scene and the two characters' scroll-linked movement.

Create a carefully tuned scrubbed timeline.

Ensure the animation reverses naturally when the visitor scrolls upward.

Use responsive breakpoints to calculate the starting and ending positions.

On mobile, reduce the pinned duration and simplify decorative effects.

Support `prefers-reduced-motion` by presenting the couple and invitation with a short, non-pinned reveal.

Clean up GSAP timelines, ScrollTriggers and event listeners correctly.

Do not use a permanently fixed animation that blocks the visitor from reading the website.

## 9. WEDDING DETAILS SECTION

Heading:

"The Day We Begin Forever"

Present the wedding information in an elegant editorial layout.

Include:
- Groom name.
- Bride name.
- Wedding date.
- Confirmed auspicious time.
- Confirmed venue name.
- Venue address.
- Get Directions button.

Use soft gradients, refined typography, decorative lines and small icons.

Avoid repetitive dashboard-style cards.

Animate the section heading, date and venue information as they enter the viewport.

The Get Directions button must open the correct Google Maps destination once the venue is verified.

Do not invent venue details or create a map link for an unverified location.

Keep event information in one configuration object so it can be edited without modifying individual components.

## 10. PHOTO GALLERY

Heading:

"Little Moments, One Beautiful Forever"

Create an editorial photo gallery with:
- One large featured image.
- Smaller portrait and landscape images.
- An asymmetric but balanced composition.
- Softly rounded organic corners.
- Gentle image zoom on hover.
- Scroll-triggered image reveals.
- A full-screen lightbox.
- Previous and next controls.
- Escape-to-close support.
- Keyboard navigation.
- Swipe navigation on mobile.

Use temporary, replaceable image assets.

Prefer images with stable URLs and suitable usage permissions, or local placeholders that can be replaced later.

Provide graceful image-loading states.

Avoid excessive borders, identical repetitive tiles and unnecessary text.

Do not invent personal stories or event captions.

## 11. CLOSING SECTION

Create a beautiful final invitation section.

Suggested heading:

"Two Hearts. One Beautiful Beginning."

Supporting message:

"Your presence and blessings will make our special day even more meaningful."

Display:

PRAVEEN P. ♥ MALINI K.

1 NOVEMBER 2026

Add:
- A decorative ornamental divider.
- Soft floating hearts.
- Gentle gold particles.
- A View Wedding Details button.
- A Share Invitation button.

Use the Web Share API where supported and a clipboard fallback where it is not.

Finish with a restrained, elegant particle animation.

## 12. ENGLISH–TAMIL TRANSLATION

Add a compact floating language-accessibility control attached to the top-right edge of the viewport.

Initial language: English.

Available languages:
- English
- Tamil

The control should have a clean pill-style appearance with a small language icon and a clearly visible current language.

When Tamil is selected:
- Translate every user-facing heading.
- Translate every paragraph.
- Translate navigation labels, buttons, countdown labels, popup content, gallery labels and event details.
- Translate accessibility labels where appropriate.
- Use a suitable Tamil font.
- Allow components to expand vertically for longer text.
- Preserve the current scroll position.
- Preserve music playback state.
- Preserve open/closed modal state when practical.
- Do not reload the application.

When English is selected again, restore the English content.

Store translations in centralized TypeScript dictionaries, such as `en.ts` and `ta.ts`.

Never hard-code visible text separately inside multiple components.

Use Unicode Tamil text, not transliterated Tamil.

Do not automatically translate names into a different spelling without review.

Use a smooth, short opacity transition when changing language.

Ensure the language control works with a keyboard and has a meaningful accessible name.

## 13. GLOBAL MOTION SYSTEM

Build a consistent animation system across the entire website.

Include:
- Scroll-triggered section reveals.
- Staggered text entrances.
- Letter-by-letter couple name reveals.
- Subtle parallax layers.
- Floating heart particles.
- Falling rose petals.
- Champagne-gold sparkles.
- Animated ornamental dividers.
- Image reveals.
- Button hover and press effects.
- Modal transitions.
- Scroll progress indicator.
- Smooth transitions between section backgrounds.

Animation principles:
- Elegant rather than distracting.
- Fast, responsive interaction feedback.
- No excessive bouncing.
- No uncontrolled infinite animations.
- No text movement that interferes with reading.
- No layout shifts caused by animations.
- No scroll hijacking outside the dedicated couple scene.

Use a lightweight Canvas particle system or another efficient implementation.

Do not create hundreds of DOM elements for particles.

Use a limited particle count, scale effects according to viewport size and device capability, pause decorative animations when the page is hidden, and respect reduced-motion preferences.

Use transforms and opacity wherever possible.

## 14. FLOATING CONTROLS

Provide:
- Language toggle at the top-right.
- Music toggle in an accessible floating position.
- Scroll-to-top control when useful.
- Optional share button.

Controls must not overlap each other or obscure important content on small screens.

On mobile, use compact controls with sufficient touch targets.

## 15. RESPONSIVE DESIGN

The website must work properly on:
- Desktop monitors.
- Laptops.
- Tablets.
- Android phones.
- iPhones.

Requirements:
- Mobile-first layouts.
- Responsive typography.
- Responsive character positions.
- Responsive image crops.
- Proper viewport sizing.
- No horizontal overflow.
- No fixed-width sections that break on mobile.
- Touch-friendly buttons.
- Readable Tamil typography.
- Mobile-safe modal dimensions.
- Optimized particle count.
- Shorter scroll animations on small screens.

Test at widths of approximately 360px, 390px, 768px, 1024px and 1440px.

Ensure the hero looks intentional on both tall mobile screens and wide desktop screens.

## 16. ACCESSIBILITY

Implement:
- Semantic HTML.
- Accessible button labels.
- Keyboard navigation.
- Visible focus states.
- Modal focus management.
- Escape-to-close support.
- Sufficient colour contrast.
- Useful image alt text.
- Reduced-motion support.
- Music controls.
- Screen-reader-friendly countdown labels.

Never rely on colour alone to communicate important information.

The invitation must remain usable if decorative animations fail or are disabled.

## 17. PERFORMANCE

Optimize the website for real-world mobile devices.

Requirements:
- Lazy-load below-the-fold photographs.
- Preload only essential assets.
- Avoid unnecessary JavaScript.
- Avoid duplicate animation loops.
- Clean up observers, event listeners and animation timelines.
- Prevent image layout shifts.
- Use responsive image dimensions.
- Avoid loading all gallery images eagerly.
- Pause nonessential animations when the page is hidden.
- Avoid expensive full-screen blur filters on low-powered devices.
- Keep the site responsive during scrolling.

The website should still display the invitation if the music or particle system fails.

## 18. PROJECT STRUCTURE

Organize the project cleanly.

Suggested structure:

src/
  app/
    App.tsx
    main.tsx

  components/
    Preloader/
      WeddingPreloader.tsx
      wedding-preloader.css

    Hero/
      HeroSection.tsx
      hero.css

    Blessing/
      BlessingSection.tsx

    Couple/
      CoupleSection.tsx

    ScrollStory/
      CoupleScrollScene.tsx
      InvitationModal.tsx

    WeddingDetails/
      WeddingDetails.tsx

    Gallery/
      PhotoGallery.tsx
      PhotoLightbox.tsx

    Closing/
      ClosingSection.tsx

    Controls/
      LanguageToggle.tsx
      MusicToggle.tsx
      ScrollProgress.tsx

    Effects/
      ParticleBackground.tsx
      FallingPetals.tsx
      OrnamentalDivider.tsx

  hooks/
    useCountdown.ts
    useLanguage.ts
    useBackgroundMusic.ts
    useReducedMotion.ts

  config/
    wedding.ts
    assets.ts

  i18n/
    en.ts
    ta.ts

  styles/
    global.css
    theme.css
    animations.css

public/
  images/
    couple/
      couple-placeholder.webp
      groom-character.png
      bride-character.png

    gallery/
      gallery-01.webp
      gallery-02.webp
      gallery-03.webp
      gallery-04.webp
      gallery-05.webp
      gallery-06.webp

  audio/
    wedding-bgm.mp3

Use meaningful filenames and maintainable component boundaries. The exact structure can be adjusted where necessary.

## 19. CENTRALIZED CONFIGURATION

Create a single wedding configuration file containing:

- Groom's name.
- Bride's name.
- Wedding date.
- Confirmed timezone.
- Auspicious time.
- Venue name.
- Venue address.
- Google Maps destination.
- Couple photograph paths.
- Groom illustration path.
- Bride illustration path.
- Gallery photographs.
- Background music path.
- Invitation sharing URL.

Use placeholders for any unconfirmed details.

Changing the couple's photographs, character illustrations, wedding venue or music must not require editing multiple components.

## 20. ASSET REQUIREMENTS

Initially use:
- Attractive temporary couple photographs.
- Separate AI-generated miniature groom and bride illustrations.
- Temporary gallery photographs.
- A replaceable background music asset.
- Lightweight ornamental SVGs.

Create the character assets specifically for this website's visual style.

The groom and bride illustrations must be visually consistent and suitable for transparent-background animation.

Use real photograph assets for the gallery and portrait sections, not illustrations unless explicitly intended.

Do not treat an arbitrary external image URL as a guaranteed permanent asset.

Document every placeholder that must be replaced before publishing.

## 21. FINAL QUALITY REQUIREMENTS

Deliver:
1. A complete working React + Vite + TypeScript application.
2. All required components.
3. Complete responsive styling.
4. Functional preloader and Open Invitation interaction.
5. Working background music controls.
6. Working English–Tamil translation.
7. Functional wedding countdown.
8. Scroll-triggered section animations.
9. The groom-and-bride scroll-driven meeting scene.
10. The animated wedding-details popup.
11. A responsive gallery with lightbox.
12. Working share and directions controls once details are configured.
13. Proper reduced-motion behaviour.
14. Clean browser console without application errors.
15. A README with setup, asset replacement and deployment instructions.

Use real React state and event handling. Do not create nonfunctional decorative buttons.

Do not leave the main animation as a TODO, replace it with a static image, or simulate the entire website in one oversized component.

Run the project, check for TypeScript errors and test the responsive layout.

The final experience should feel like a premium, cinematic South Indian wedding invitation with beautiful motion, elegant typography, meaningful interactions and a memorable groom-and-bride reveal.

Prioritize the quality of the preloader, hero, scroll-driven couple animation, Tamil translation and mobile experience.