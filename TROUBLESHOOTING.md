# Fehlerbehebung - Website lädt nicht

## Schnelllösung

1. **Stelle sicher, dass alle Dependencies installiert sind:**
```bash
npm install
```

2. **Beende alle laufenden Vite-Prozesse:**
```bash
# Auf macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Oder manuell alle Node-Prozesse beenden:
pkill -f vite
```

3. **Starte den Server neu:**
```bash
npm run dev
```

4. **Öffne den Browser:**
   - Gehe zu: `http://localhost:5173`
   - Oder: `http://127.0.0.1:5173`

## Häufige Probleme

### Problem: "Port 5173 bereits belegt"
**Lösung:**
```bash
# Port 5173 belegen prüfen:
lsof -ti:5173

# Prozesse beenden:
kill -9 $(lsof -ti:5173)

# Oder anderen Port verwenden:
npm run dev -- --port 3000
```

### Problem: "Cannot find module"
**Lösung:**
```bash
# Node modules neu installieren:
rm -rf node_modules package-lock.json
npm install
```

### Problem: "Bilder werden nicht angezeigt"
**Lösung:**
- Bilder müssen im `public/Bilder/` Ordner sein
- Logo muss in `public/logo1.png` sein
- Pfade in Code: `/Bilder/...` und `/logo1.png`

### Problem: Browser zeigt Fehler
**Lösung:**
1. Öffne Browser-Entwicklertools (F12)
2. Gehe zu "Console" Tab
3. Prüfe Fehlermeldungen
4. Gehe zu "Network" Tab - prüfe, ob Dateien geladen werden

### Problem: "White Screen" oder leere Seite
**Lösung:**
1. Prüfe Browser-Konsole auf JavaScript-Fehler
2. Stelle sicher, dass `src/main.jsx` existiert
3. Prüfe, ob alle Komponenten importiert werden können

## Server-Status prüfen

Der Server sollte folgende Ausgabe zeigen:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Wenn diese Ausgabe nicht erscheint, gibt es ein Problem.

## Clean Build

Wenn nichts funktioniert, führe einen Clean Build durch:

```bash
# Alles löschen und neu installieren:
rm -rf node_modules dist .vite package-lock.json
npm install
npm run dev
```

## Support

Wenn die Website immer noch nicht lädt:
1. Kopiere die vollständige Fehlermeldung aus der Browser-Konsole
2. Prüfe die Terminal-Ausgabe beim Start von `npm run dev`
3. Stelle sicher, dass Node.js und npm installiert sind:
   ```bash
   node --version  # Sollte v16+ sein
   npm --version   # Sollte v8+ sein
   ```

