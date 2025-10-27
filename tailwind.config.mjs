// import tailwindcssAnimate from 'tailwindcss-animate'
// import typography from '@tailwindcss/typography'
// import relumeTailwind from '@relume_io/relume-tailwind'

// /** @type {import('tailwindcss').Config} */
// const config = {
//   content: [
//     './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//   ],
//   darkMode: ['selector', '[data-theme="dark"]'],
//   plugins: [tailwindcssAnimate, typography],
//   prefix: '',
//   safelist: [
//     'lg:col-span-4',
//     'lg:col-span-6',
//     'lg:col-span-8',
//     'lg:col-span-12',
//     'border-border',
//     'bg-card',
//     'border-error',
//     'bg-error/30',
//     'border-success',
//     'bg-success/30',
//     'border-warning',
//     'bg-warning/30',
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         '2xl': '2rem',
//         DEFAULT: '1rem',
//         lg: '2rem',
//         md: '2rem',
//         sm: '1rem',
//         xl: '2rem',
//       },
//       screens: {
//         '2xl': '86rem',
//         lg: '64rem',
//         md: '48rem',
//         sm: '40rem',
//         xl: '80rem',
//       },
//     },
//     extend: {
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       colors: {
//         accent: {
//           DEFAULT: 'hsl(var(--accent))',
//           foreground: 'hsl(var(--accent-foreground))',
//         },
//         background: 'hsl(var(--background))',
//         border: 'hsla(var(--border))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         destructive: {
//           DEFAULT: 'hsl(var(--destructive))',
//           foreground: 'hsl(var(--destructive-foreground))',
//         },
//         foreground: 'hsl(var(--foreground))',
//         input: 'hsl(var(--input))',
//         muted: {
//           DEFAULT: 'hsl(var(--muted))',
//           foreground: 'hsl(var(--muted-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         primary: {
//           DEFAULT: 'hsl(var(--primary))',
//           foreground: 'hsl(var(--primary-foreground))',
//         },
//         ring: 'hsl(var(--ring))',
//         secondary: {
//           DEFAULT: 'hsl(var(--secondary))',
//           foreground: 'hsl(var(--secondary-foreground))',
//         },
//         success: 'hsl(var(--success))',
//         error: 'hsl(var(--error))',
//         warning: 'hsl(var(--warning))',
//       },
//       fontFamily: {
//         mono: ['var(--font-geist-mono)'],
//         sans: ['var(--font-geist-sans)'],
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//       },
//       typography: () => ({
//         DEFAULT: {
//           css: [
//             {
//               '--tw-prose-body': 'var(--text)',
//               '--tw-prose-headings': 'var(--text)',
//               h1: {
//                 fontWeight: 'normal',
//                 marginBottom: '0.25em',
//               },
//             },
//           ],
//         },
//         base: {
//           css: [
//             {
//               h1: {
//                 fontSize: '2.5rem',
//               },
//               h2: {
//                 fontSize: '1.25rem',
//                 fontWeight: 600,
//               },
//             },
//           ],
//         },
//         md: {
//           css: [
//             {
//               h1: {
//                 fontSize: '3.5rem',
//               },
//               h2: {
//                 fontSize: '1.5rem',
//               },
//             },
//           ],
//         },
//       }),
//     },
//   },
//   presets: [relumeTailwind],
// }

// export default config

// // From old source
// // tailwind.config.mjs
// import relumeTailwindPreset from '@relume_io/relume-tailwind'

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//     './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
//   ],
//   presets: [relumeTailwindPreset],
//   darkMode: ['selector', '[data-theme="dark"]'],
//   plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
//   prefix: '',
//   safelist: [
//     'lg:col-span-4',
//     'lg:col-span-6',
//     'lg:col-span-8',
//     'lg:col-span-12',
//     'border-border',
//     'bg-card',
//     'border-error',
//     'bg-error/30',
//     'border-success',
//     'bg-success/30',
//     'border-warning',
//     'bg-warning/30',
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         '2xl': '2rem',
//         DEFAULT: '1rem',
//         lg: '2rem',
//         md: '2rem',
//         sm: '1rem',
//         xl: '2rem',
//       },
//       screens: {
//         '2xl': '86rem',
//         lg: '64rem',
//         md: '48rem',
//         sm: '40rem',
//         xl: '80rem',
//       },
//     },
//     extend: {
//       colors: {
//         // Your brand colors from style guide
//         'brand-main': '#4F758D', // Smalt Blue (Main)
//         'brand-green': '#01B09A', // Persian Green
//         'brand-red': '#FF6B6B', // Bittersweet
//         'brand-cream': '#F3E9DF', // Merino
//         'brand-light-blue': '#A2D2E2', // Regent St Blue

//         // Map to semantic colors for easier use
//         primary: {
//           DEFAULT: '#4F758D', // Smalt Blue
//           foreground: '#FFFFFF',
//         },
//         secondary: {
//           DEFAULT: '#A2D2E2', // Regent St Blue
//           foreground: '#000000',
//         },
//         accent: {
//           DEFAULT: '#01B09A', // Persian Green
//           foreground: '#FFFFFF',
//         },
//         destructive: {
//           DEFAULT: '#FF6B6B', // Bittersweet
//           foreground: '#FFFFFF',
//         },
//         muted: {
//           DEFAULT: '#F3E9DF', // Merino
//           foreground: '#4F758D',
//         },

//         // Keep existing system colors
//         background: 'hsl(var(--background))',
//         foreground: 'hsl(var(--foreground))',
//         border: 'hsla(var(--border))',
//         input: 'hsl(var(--input))',
//         ring: 'hsl(var(--ring))',
//         card: {
//           DEFAULT: 'hsl(var(--card))',
//           foreground: 'hsl(var(--card-foreground))',
//         },
//         popover: {
//           DEFAULT: 'hsl(var(--popover))',
//           foreground: 'hsl(var(--popover-foreground))',
//         },
//         success: '#01B09A', // Using Persian Green for success
//         error: '#FF6B6B', // Using Bittersweet for error
//         warning: 'hsl(var(--warning))',
//       },
//       fontFamily: {
//         // Your brand fonts from style guide
//         sans: ['Nunito Sans', 'system-ui', 'sans-serif'], // Heading font
//         body: ['Quicksand', 'system-ui', 'sans-serif'], // Body font

//         // Keep existing mono font
//         mono: ['var(--font-geist-mono)', 'monospace'],
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },
//       borderRadius: {
//         lg: 'var(--radius)',
//         md: 'calc(var(--radius) - 2px)',
//         sm: 'calc(var(--radius) - 4px)',
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//       },
//       typography: ({ theme }) => ({
//         DEFAULT: {
//           css: {
//             '--tw-prose-body': 'var(--text)',
//             '--tw-prose-headings': 'var(--text)',
//             fontFamily: theme('fontFamily.body').join(', '),
//             h1: {
//               fontFamily: theme('fontFamily.sans').join(', '),
//               fontSize: '3.5rem',
//               fontWeight: '600', // Medium weight as specified
//               marginBottom: '0.25em',
//             },
//             h2: {
//               fontFamily: theme('fontFamily.sans').join(', '),
//               fontWeight: '600',
//             },
//             h3: {
//               fontFamily: theme('fontFamily.sans').join(', '),
//               fontWeight: '600',
//             },
//             h4: {
//               fontFamily: theme('fontFamily.sans').join(', '),
//               fontWeight: '600',
//             },
//             h5: {
//               fontFamily: theme('fontFamily.sans').join(', '),
//               fontWeight: '600',
//             },
//             h6: {
//               fontFamily: theme('fontFamily.sans').join(', '),
//               fontWeight: '600',
//             },
//             p: {
//               fontFamily: theme('fontFamily.body').join(', '),
//               fontWeight: '500', // Regular-medium as specified
//             },
//           },
//         },
//       }),
//     },
//   },
// }

// Generated By Claude

/** @type {import('tailwindcss').Config} */
import relumeTailwindPreset from '@relume_io/relume-tailwind'
import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [relumeTailwindPreset],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      colors: {
        // Brand Colors (from style guide)
        'brand-main': '#4F758D', // Smalt Blue (Main)
        'brand-green': '#01B09A', // Persian Green
        'brand-red': '#FF6B6B', // Bittersweet
        'brand-cream': '#F3E9DF', // Merino
        'brand-light-blue': '#A2D2E2', // Regent St Blue

        // Semantic Mapping (Override Relume defaults)
        primary: {
          DEFAULT: '#4F758D',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#A2D2E2',
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#01B09A',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#FF6B6B',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F3E9DF',
          foreground: '#4F758D',
        },
        success: '#01B09A',
        error: '#FF6B6B',
        warning: '#FFA500',

        // Map Relume's color variables to your brand
        // This ensures colorSchemes.ts works correctly
        background: {
          primary: '#FFFFFF',
          secondary: '#F3E9DF', // Using Merino cream
          DEFAULT: 'hsl(var(--background))',
        },
        text: {
          primary: '#1a1a1a', // Dark gray for text
          secondary: '#4F758D', // Brand main for secondary text
        },
        border: {
          primary: 'hsl(var(--border))',
          DEFAULT: 'hsl(var(--border))',
        },

        // Keep system colors for flexibility
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'], // Headings
        body: ['Quicksand', 'system-ui', 'sans-serif'], // Body text
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.2rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.text.primary'),
            '--tw-prose-headings': theme('colors.text.primary'),
            fontFamily: theme('fontFamily.body').join(', '),
            color: theme('colors.text.primary'),
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontSize: '3.5rem',
              fontWeight: '600',
              marginBottom: '0.25em',
              color: theme('colors.primary.DEFAULT'),
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              color: theme('colors.foreground'),
            },
            h3: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
            h4: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
            h5: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
            h6: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
            },
            p: {
              fontFamily: theme('fontFamily.body').join(', '),
              fontWeight: '500',
            },
            a: {
              color: theme('colors.accent.DEFAULT'),
              '&:hover': {
                color: theme('colors.brand-green'),
              },
            },
          },
        },
      }),
    },
  },
}

export default config
