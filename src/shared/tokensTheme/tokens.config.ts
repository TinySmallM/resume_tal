import StyleDictionary from 'style-dictionary';
import { spacing, radius, duration, zIndex } from './tokens';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import type { ThemeTokens } from './types';

const themes: Array<{ name: string; tokens: ThemeTokens }> = [
  { name: 'light', tokens: lightTheme },
  { name: 'dark', tokens: darkTheme },
];

async function generateTokens() {
  for (const { name, tokens } of themes) {
    const sd = new StyleDictionary({
      tokens: {
        color: tokens.color,
        shadow: tokens.shadow,
        space: spacing,
        radius: radius,
        duration: duration,
        zIndex: zIndex,
      },
      platforms: {
        css: {
          transformGroup: 'css',
          buildPath: 'src/app/generated/tokens/css/',
          files: [{
            destination: `${name}.css`,
            format: 'css/variables',
            options: {
              outputReferences: false,
              selector: `.theme-${name}`,
            },
          }],
        },
        //Пока не требуется генерация ts свойств.
        // ts: {
        //   transformGroup: 'js',
        //   buildPath: `app/generated/tokens/ts/${name}/`,
        //   files: [{
        //     destination: 'tokens.ts',
        //     format: 'javascript/es6',
        //   }],
        // },
      },
    });

    await sd.buildAllPlatforms();
  }

  console.log('✓ themes generated');
}

generateTokens().catch(console.error);