# EmailJS Setup Anleitung

Diese Anleitung erklärt, wie du EmailJS einrichtest, damit die Kontaktformulare auf der Website E-Mails an deine Adresse senden können.

## Schritt 1: EmailJS Account erstellen

1. Gehe zu https://www.emailjs.com
2. Klicke auf "Sign Up" und erstelle einen kostenlosen Account
3. Bestätige deine E-Mail-Adresse

## Schritt 2: E-Mail Service einrichten

1. Nach dem Login, gehe zu "Email Services" im Dashboard
2. Klicke auf "Add New Service"
3. Wähle deinen E-Mail-Provider (z.B. Gmail)
4. Folge den Anweisungen, um dein E-Mail-Konto zu verbinden
5. Notiere dir die **Service ID** (z.B. `service_xxxxx`)

## Schritt 3: E-Mail Templates erstellen

### Template 1: Kontaktformular

1. Gehe zu "Email Templates" im Dashboard
2. Klicke auf "Create New Template"
3. Verwende diese Einstellungen:

**Template Name:** Contact Form

**Subject:** Neue Kontaktanfrage von {{from_name}}

**Content:**
```
Von: {{from_name}}
E-Mail: {{from_email}}
Typ: {{type}}

Nachricht:
{{message}}

---
Diese Nachricht wurde über das Kontaktformular auf adams-mathe.com gesendet.
```

4. Notiere dir die **Template ID** (z.B. `template_xxxxx`)

### Template 2: Bewertungsformular

1. Erstelle ein weiteres Template
2. Verwende diese Einstellungen:

**Template Name:** Review Form

**Subject:** Neue Bewertung von {{from_name}} - {{subject_field}}

**Content:**
```
Von: {{from_name}}
Rolle: {{role}}
Fach: {{subject_field}}
Bewertung: {{rating}} Sterne

Bewertungstext:
{{quote}}

Tags: {{tags}}

---
Diese Bewertung wurde über das Bewertungsformular auf adams-mathe.com gesendet.
```

3. Notiere dir die **Template ID** für dieses Template

## Schritt 4: Public Key finden

1. Gehe zu "Account" → "General"
2. Finde deinen **Public Key** (z.B. `xxxxxxxxxxxxx`)

## Schritt 5: Konfiguration in der Website

1. Öffne die Datei `src/config/emailjs.js`
2. Ersetze die Platzhalter mit deinen Werten:

```javascript
export const emailjsConfig = {
  publicKey: 'DEIN_PUBLIC_KEY', // Dein Public Key von EmailJS
  serviceId: 'DEIN_SERVICE_ID', // Deine Service ID
  contactTemplateId: 'DEINE_CONTACT_TEMPLATE_ID', // Template ID für Kontaktformular
  reviewTemplateId: 'DEINE_REVIEW_TEMPLATE_ID' // Template ID für Bewertungsformular
}
```

## Schritt 6: Testen

1. Starte die Website mit `npm run dev`
2. Fülle das Kontaktformular aus und sende es ab
3. Prüfe dein E-Mail-Postfach (adam.mechouate7@gmail.com)
4. Du solltest die E-Mail erhalten

## Wichtige Hinweise

- Der kostenlose Plan von EmailJS erlaubt 200 E-Mails pro Monat
- Für mehr E-Mails gibt es kostenpflichtige Pläne
- Die E-Mails werden direkt von EmailJS gesendet, kein Backend nötig
- Alle E-Mails werden an adam.mechouate7@gmail.com gesendet

## Troubleshooting

- **E-Mails kommen nicht an:** Prüfe die Browser-Konsole auf Fehler
- **Service ID nicht gefunden:** Gehe zu Email Services im Dashboard
- **Template ID nicht gefunden:** Gehe zu Email Templates im Dashboard
- **Public Key fehlt:** Gehe zu Account → General

