# Adam's Mathe - Professionelle Mathenachhilfe Website

Eine moderne, mehrsprachige React-Website für Adam's Mathe-Nachhilfe-Service.

**Author:** Adam Mechouate  
**E-Mail:** adam.mechouate7@gmail.com  
**Erstellt:** 17. Dezember 2024

## Features

- 🌍 **4 Sprachen**: Deutsch, Englisch, Französisch, Arabisch
- 🌓 **Light/Dark Mode**: Umschaltbarer Theme-Modus
- 📱 **Responsive Design**: Optimiert für alle Geräte
- 🎨 **Modern UI**: Gold-Orange Farbschema mit Gradienten
- 🖼️ **Galerie**: Lightbox für Bilder
- 📚 **Vollständige Präsentation**: Über mich, Services, Galerie, Kontakt

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Die Website läuft dann auf `http://localhost:5173`

## Build für Produktion

```bash
npm run build
```

## Projektstruktur

```
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation mit Sprach- und Theme-Switcher
│   │   ├── Hero.jsx         # Hero-Sektion mit Slogan
│   │   ├── About.jsx        # Über mich Sektion
│   │   ├── Services.jsx     # Angebote (Schule, Uni, International)
│   │   ├── Gallery.jsx      # Bildergalerie
│   │   ├── Contact.jsx      # Kontaktinformationen
│   │   └── Footer.jsx       # Footer
│   ├── translations.js      # Alle Übersetzungen
│   ├── App.jsx              # Hauptkomponente
│   └── main.jsx             # Entry Point
├── Bilder/                  # Bilder für die Galerie
├── logo1.png               # Logo
└── package.json
```

## Technologien

- React 18
- Vite
- React Icons
- CSS3 mit CSS Variables für Theming

## Sprachen

Die Website unterstützt 4 Sprachen mit vollständigen Übersetzungen:
- Deutsch (Standard)
- Englisch
- Französisch
- Arabisch (mit RTL-Unterstützung)

## Theme

Das Theme kann zwischen Light und Dark Mode umgeschaltet werden. Die Einstellung wird im LocalStorage gespeichert.

