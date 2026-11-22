# Bludiště s překvapením

## Jednorázové nastavení (jen poprvé)
1. Otevři `.github/workflows/android.yml` → tužka (Upravit) → smaž obsah a vlož obsah stejnojmenného souboru z tohoto zipu → Commit.
2. Settings → Pages → Source: **Deploy from a branch**, větev `main`, složka `/ (root)`.

## Každá další aktualizace
Add file → Upload files → nahraj celý zip → Commit. Hotovo.
GitHub zip sám rozbalí, aktualizuje web a sestaví APK (záložka Actions → poslední běh → Artifacts → bludiste-apk).

## Zvýraznění postavy
Model MediaPipe Selfie Segmentation (složka `mediapipe/`, licence Apache 2.0) běží v telefonu, fotka se nikam neposílá.
