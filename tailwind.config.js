module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: 'var(--ion-color-primary)',
          shade: 'var(--ion-color-primary-shade)',
          tint: 'var(--ion-color-primary-tint)',
          contrast: 'var(--ion-color-primary-contrast)',
        },
        secondary: {
          default: 'var(--ion-color-secondary)',
          shade: 'var(--ion-color-secondary-shade)',
          tint: 'var(--ion-color-secondary-tint)',
          contrast: 'var(--ion-color-secondary-contrast)',
        },
        tertiary: {
          default: 'var(--ion-color-tertiary)',
          shade: 'var(--ion-color-tertiary-shade)',
          tint: 'var(--ion-color-tertiary-tint)',
          contrast: 'var(--ion-color-tertiary-contrast)',
        },
        light: {
          default: 'var(--ion-color-light)',
          shade: 'var(--ion-color-light-shade)',
          tint: 'var(--ion-color-light-tint)',
          contrast: 'var(--ion-color-light-contrast)',
        },
        medium: {
          default: 'var(--ion-color-medium)',
          shade: 'var(--ion-color-medium-shade)',
          tint: 'var(--ion-color-medium-tint)',
          contrast: 'var(--ion-color-medium-contrast)',
        },
        dark: {
          default: 'var(--ion-color-dark)',
          shade: 'var(--ion-color-dark-shade)',
          tint: 'var(--ion-color-dark-tint)',
          contrast: 'var(--ion-color-dark-contrast)',
        },
        success: {
          default: 'var(--ion-color-success)',
          shade: 'var(--ion-color-success-shade)',
          tint: 'var(--ion-color-success-tint)',
          contrast: 'var(--ion-color-success-contrast)',
        },
        warning: {
          default: 'var(--ion-color-warning)',
          shade: 'var(--ion-color-warning-shade)',
          tint: 'var(--ion-color-warning-tint)',
          contrast: 'var(--ion-color-warning-contrast)',
        },
        danger: {
          default: 'var(--ion-color-danger)',
          shade: 'var(--ion-color-danger-shade)',
          tint: 'var(--ion-color-danger-tint)',
          contrast: 'var(--ion-color-danger-contrast)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
