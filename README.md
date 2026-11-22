# Bludiště s překvapením

Nahraješ fotku, vytiskneš bludiště, a kdo ho vyřeší a obtáhne cestu, uvidí obrázek.

## Webová stránka (GitHub Pages)
1. Nahraj všechny soubory do repozitáře (větev `main`).
2. Settings → Pages → Source: **Deploy from a branch**, větev `main`, složka `/ (root)` → Save.
3. Za minutu běží na `https://<uživatel>.github.io/<repozitář>/`.

Na telefonu ji přes menu prohlížeče přidáš na plochu („Přidat na plochu“ / „Instalovat aplikaci“). Pak funguje i bez internetu.

## Android aplikace (APK)
Workflow `.github/workflows/android.yml` sestaví APK při každém pushi do `main`.
1. Záložka **Actions** → běh „Android APK“ → počkej na zelenou fajfku (cca 5 min).
2. Dole v sekci **Artifacts** stáhni `bludiste-apk` (zip s `app-debug.apk`).
3. APK pošli do telefonu a nainstaluj (povol instalaci z neznámých zdrojů).

PDF se v aplikaci otevře přes nabídku Sdílet, odkud jde vytisknout nebo uložit.

## iPhone
Vlastní iOS aplikace potřebuje Mac a placený Apple Developer účet. Jednodušší je otevřít stránku v Safari → Sdílet → Přidat na plochu.
