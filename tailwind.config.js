module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'monza': {
            50: 'hsl(var(--monza-50) / <alpha-value>)',
            100: 'hsl(var(--monza-100) / <alpha-value>)',
            200: 'hsl(var(--monza-200) / <alpha-value>)',
            300: 'hsl(var(--monza-300) / <alpha-value>)',
            400: 'hsl(var(--monza-400) / <alpha-value>)',
            500: 'hsl(var(--monza-500) / <alpha-value>)',
            600: 'hsl(var(--monza-600) / <alpha-value>)',
            700: 'hsl(var(--monza-700) / <alpha-value>)',
            800: 'hsl(var(--monza-800) / <alpha-value>)',
            900: 'hsl(var(--monza-900) / <alpha-value>)',
            950: 'hsl(var(--monza-950) / <alpha-value>)',
          },
          'tree-poppy': {
            50: 'hsl(var(--tree-poppy-50) / <alpha-value>)',
            100: 'hsl(var(--tree-poppy-100) / <alpha-value>)',
            200: 'hsl(var(--tree-poppy-200) / <alpha-value>)',
            300: 'hsl(var(--tree-poppy-300) / <alpha-value>)',
            400: 'hsl(var(--tree-poppy-400) / <alpha-value>)',
            500: 'hsl(var(--tree-poppy-500) / <alpha-value>)',
            600: 'hsl(var(--tree-poppy-600) / <alpha-value>)',
            700: 'hsl(var(--tree-poppy-700) / <alpha-value>)',
            800: 'hsl(var(--tree-poppy-800) / <alpha-value>)',
            900: 'hsl(var(--tree-poppy-900) / <alpha-value>)',
            950: 'hsl(var(--tree-poppy-950) / <alpha-value>)',
          },
          'pickled-bluewood': {
            50: 'hsl(var(--pickled-bluewood-50) / <alpha-value>)',
            100: 'hsl(var(--pickled-bluewood-100) / <alpha-value>)',
            200: 'hsl(var(--pickled-bluewood-200) / <alpha-value>)',
            300: 'hsl(var(--pickled-bluewood-300) / <alpha-value>)',
            400: 'hsl(var(--pickled-bluewood-400) / <alpha-value>)',
            500: 'hsl(var(--pickled-bluewood-500) / <alpha-value>)',
            600: 'hsl(var(--pickled-bluewood-600) / <alpha-value>)',
            700: 'hsl(var(--pickled-bluewood-700) / <alpha-value>)',
            800: 'hsl(var(--pickled-bluewood-800) / <alpha-value>)',
            900: 'hsl(var(--pickled-bluewood-900) / <alpha-value>)',
            950: 'hsl(var(--pickled-bluewood-950) / <alpha-value>)',
          },
          'cello': {
            50: 'hsl(var(--cello-50) / <alpha-value>)',
            100: 'hsl(var(--cello-100) / <alpha-value>)',
            200: 'hsl(var(--cello-200) / <alpha-value>)',
            300: 'hsl(var(--cello-300) / <alpha-value>)',
            400: 'hsl(var(--cello-400) / <alpha-value>)',
            500: 'hsl(var(--cello-500) / <alpha-value>)',
            600: 'hsl(var(--cello-600) / <alpha-value>)',
            700: 'hsl(var(--cello-700) / <alpha-value>)',
            800: 'hsl(var(--cello-800) / <alpha-value>)',
            900: 'hsl(var(--cello-900) / <alpha-value>)',
            950: 'hsl(var(--cello-950) / <alpha-value>)',
          }
        }
      }
    },
    plugins: [],
  };