module.exports = {
    theme: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxlmin: '1351px',
        xxlmax: { max: '1350px' }
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px'
      },
      extend: {
        colors: {
          cyan: '#9cdbff',
        },
        spacing: {
          '96': '24rem',
          '128': '32rem'
        },
        height: {
          '84': '22rem'
        },
        width: {
          '3/2': '150%',
          '4/2': '200%',
          '1/2-screen': '50vw'
        },
        margin: {
          '-fullh': '-100vh'
        }
      },
      inset: {
        '0': 0,
        '16': '16px',
        '32': '32px',
        '64': '64px',
        '2rem': '2rem',
        '3rem': '3rem'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      }
    },
    variants: {},
    plugins: []
  }
