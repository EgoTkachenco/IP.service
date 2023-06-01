import { Plus_Jakarta_Sans, Roboto_Mono } from '@next/font/google'

const primaryFont = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'latin-ext', 'cyrillic-ext', 'vietnamese'],
  display: 'swap',
})

const monoFont = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

module.exports = {
  fonts: {
    primary: primaryFont.style.fontFamily,
    secondary: primaryFont.style.fontFamily,
    monospace: monoFont.style.fontFamily,
  },
  typographic: {
    h1: { size: '42px', height: '140%', weight: '700' },
    h2: { size: '36px', height: '160%', weight: '700' },
    h3: { size: '32px', height: '140%', weight: '700' },
    h4: { size: '24px', height: '160%', weight: '700' },
    h5: { size: '20px', height: '160%', weight: '700' },
    h6: { size: '18px', height: '160%', weight: '700' },
    text: { size: '16px', height: '160%', weight: '500' },
    link: { size: '16px', height: '160%', weight: '600' },
    caption: { size: '14px', height: '160%', weight: '500' },
  },
  colors: {
    primary: '#0E5DF6',
    secondary: '#29B5E8',
    dark: '#071625',
    text: '#505C75',
    success: '#22B882',
    white: '#FFFFFF',
    grey: '#667080',
    silvery: '#F9FAFC',
    'light-grey': 'rgba(102, 112, 128, 0.5)',
    'light-card-grey': 'rgba(80, 92, 117, 0.05)',
    // danger: '#EE2354',
    danger: '#E44332',
    pink: '#C268ED',
  },
  buttons: {
    sizes: {
      'small-text': {
        height: '38px',
        fontSize: '12px',
        padding: '15px 25px',
      },
      small: {
        height: '38px',
        fontSize: '14px',
        padding: '15px 25px',
      },
      medium: {
        height: '44px',
        fontSize: '16px',
        padding: '0',
      },
      large: {
        height: '50px',
        fontSize: '16px',
        padding: '0',
      },
      'extra-large': {
        height: '50px',
        fontSize: '16px',
        padding: '0',
      },
    },
  },

  forms: {
    radio: {
      sizes: {
        small: '16px',
        medium: '20px',
        large: '24px',
      },
    },
    checkbox: {
      sizes: {
        small: '16px',
        medium: '20px',
        large: '24px',
      },
    },
  },
  card: {
    default_padding: '30px',
    default_radius: '20px',
    default_shadow: '10px 10.88px 30.07px rgba(7, 22, 37, 0.1)',
  },
}
