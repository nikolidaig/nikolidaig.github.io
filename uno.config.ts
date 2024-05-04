import { defineConfig, presetWind, presetWebFonts } from 'unocss';
import presetTagify from '@unocss/preset-tagify';

export default defineConfig({
  presets: [
    presetWebFonts(
      {
        provider: "google",
        fonts: {
          sans: "IBM Plex Sans",
          serif: "IBM Plex Serif",
        }
      }
    ),
    presetTagify(),
    presetWind(),
  ],
});