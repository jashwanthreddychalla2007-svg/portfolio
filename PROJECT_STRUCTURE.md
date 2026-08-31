# PROJECT STRUCTURE & ARCHITECTURE DOCUMENT

## Overview
**Website Title**: jashureddy - Creative Developer | Designer  
**Developer Profile**: Challa Jashwanth Reddy (B.Tech CSE AI & ML)  
**Tech Stack**: React 18, TypeScript, Vite, Three.js (@react-three/fiber, @react-three/drei), Rapier Physics (@react-three/rapier), GSAP (ScrollTrigger, ScrollSmoother, SplitText), HTML5, CSS3.

---

## Complete Directory Tree

```
Portfolio-Website/
├── CV_Challa_Jashwanth_Reddy.md      # Full CV of Challa Jashwanth Reddy
├── PROJECT_STRUCTURE.md               # Detailed directory tree & file information
├── index.html                         # Entry HTML file with custom browser tab title
├── package.json                       # Dependencies & build/dev scripts
├── vite.config.ts                     # Vite build configuration
├── tsconfig.json                      # Main TypeScript config
├── tsconfig.app.json                  # Application TS config
├── tsconfig.node.json                 # Node TS config
├── eslint.config.js                   # ESLint configuration
├── README.md                          # Project overview & guidelines
├── LICENSE                            # License document
│
├── public/                            # Static assets
│   ├── draco/                         # Draco 3D mesh compression decoders
│   ├── images/                        # Images & AI-generated project visuals
│   │   ├── traffic_monitoring.jpg     # AI Image for Traffic Monitoring AI Vision
│   │   ├── library_management.jpg     # AI Image for Library Management System
│   │   ├── smart_agriculture.jpg      # AI Image for Smart Agriculture Automation
│   │   ├── web_development.jpg        # AI Image for Front-End Web Projects
│   │   ├── react2.webp, node2.webp... # 3D Tech Stack textures
│   └── models/                        # 3D assets & GLTF models
│       ├── character.enc              # 3D Developer character model asset
│       └── char_enviorment.hdr        # HDRI lighting map for 3D scene
│
└── src/                               # Source code
    ├── App.tsx                        # Main App component wrapped in Suspense & Loading
    ├── App.css                        # App global layout styles
    ├── main.tsx                       # React DOM root render entrypoint
    ├── index.css                      # Global index CSS styling & TechStack layout
    │
    ├── components/                    # React UI & 3D components
    │   ├── Navbar.tsx                 # Header navigation bar & ScrollSmoother setup
    │   ├── Loading.tsx                # Initial loading screen & fast-marquee welcome
    │   ├── SocialIcons.tsx            # Floating social icons & contact trigger button
    │   ├── Landing.tsx                # Hero section with animated titles & subtitles
    │   ├── About.tsx                  # About Me section with CV bio
    │   ├── WhatIDo.tsx                # Specializations & skillset cards
    │   ├── Career.tsx                 # Education, Certifications & Schooling timeline
    │   ├── Work.tsx                   # Pinned horizontal scroll projects showcase
    │   ├── WorkImage.tsx              # Project image frame component
    │   ├── TechStack.tsx              # Standalone 3D Rapier physics bubble canvas
    │   ├── Contact.tsx                # Contact section, links & footer attribution
    │   ├── Cursor.tsx                 # Custom interactive cursor tracker
    │   ├── HoverLinks.tsx             # Animated link hover effect component
    │   ├── MainContainer.tsx          # Wrapper container for desktop/mobile views
    │   │
    │   ├── Character/                 # 3D Character model component & utilities
    │   │   ├── index.tsx              # Character component entry
    │   │   ├── Scene.tsx              # Three.js WebGL canvas scene setup
    │   │   └── utils/                 # 3D Utilities
    │   │       ├── character.ts       # GLTF loader & animation binders
    │   │       ├── lighting.ts        # Scene ambient, spot & point lights
    │   │       ├── mouseUtils.ts      # Interactive head tracking on mouse/touch
    │   │       ├── animationUtils.ts  # Character intro & idle animations
    │   │       ├── resizeUtils.ts     # Camera & canvas auto-resizer
    │   │       └── decrypt.ts         # AES-CBC decryption utility for 3D model
    │   │
    │   ├── styles/                    # Section-specific CSS stylesheets
    │   │   ├── Navbar.css             # Navigation & header styling
    │   │   ├── Loading.css            # Loader screen & game styles
    │   │   ├── SocialIcons.css        # Social icons positioning & hover
    │   │   ├── Landing.css            # Hero section & 3D character positioning
    │   │   ├── About.css              # About section text & spacing
    │   │   ├── WhatIDo.css            # Skillset cards & SVG border animations
    │   │   ├── Career.css             # Education timeline & line animation
    │   │   ├── Work.css               # Horizontal scroll cards & containment
    │   │   ├── Contact.css            # Contact box, socials & footer styling
    │   │   └── Cursor.css             # Custom cursor styles
    │   │
    │   └── utils/                     # GSAP Animation & text utilities
    │       ├── GsapScroll.ts          # GSAP ScrollTrigger timelines for sections
    │       ├── initialFX.ts           # Hero split text reveal & entrance FX
    │       └── splitText.ts           # SplitText initialization helper
    │
    └── context/                       # React Context
        └── LoadingProvider.tsx        # Global loading state provider
```

---

## How to Run & Build
1. **Install dependencies**: `npm install`
2. **Start Dev Server**: `npm run dev` (Access at `http://localhost:5173`)
3. **Production Build**: `npm run build` (`tsc -b && vite build`)
