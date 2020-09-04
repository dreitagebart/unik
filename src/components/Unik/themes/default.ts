import { DefaultTheme } from 'styled-components'

export const themeDefault: DefaultTheme = {
  base: {
    fontFamily: [
      'Roboto',
      'Segoe UI',
      'Tahoma',
      'Geneva',
      'Verdana',
      'sans-serif'
    ],
    fontSize: 14
  },
  shadows: {
    xxs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    focus: '0 0 3px 1px rgba(81, 124, 219, 0.8)',
    hover: '0 0 3px 1px rgba(81, 124, 219, 0.4)'
  },
  breakpoints: {
    small: 544,
    medium: 768,
    large: 1012,
    extraLarge: 1280
  },
  checkbox: {
    transition: 'all 0.3s ease-in',
    margin: { vertical: 8 },
    radius: 4,
    shadow: 'none',
    color: '#ffffff',
    active: {
      border: 'none',
      background: '#5A79C1'
    },
    inactive: {
      border: 'none',
      background: '#efefef'
    }
  },
  heading: {
    color: '#afafaf',
    margin: undefined,
    padding: undefined,
    border: undefined,
    background: undefined
  },
  radiobutton: {
    transition: 'all 0.3s ease-in',
    margin: { vertical: 8 },
    radius: '50%',
    shadow: 'none',
    color: '#ffffff',
    active: {
      border: 'none',
      background: '#5A79C1'
    },
    inactive: {
      border: 'none',
      background: '#efefef'
    }
  },
  textinput: {
    transition: {
      duration: 0.3,
      function: 'ease-in',
      property: 'all'
    },
    color: '#000',
    margin: 0,
    padding: { horizontal: 8, vertical: 4 },
    shadow: 'xs',
    border: { size: 1, style: 'solid', color: '#cfcfcf' },
    background: '#fff',
    radius: 4,
    hover: {
      shadow: 'hover'
    },
    focus: {
      shadow: 'focus'
    }
  },
  drawer: {
    drawer: {
      transition: 'all 0.5s ease-in-out',
      color: undefined,
      padding: { horizontal: 24 },
      background: '#fff',
      border: undefined,
      radius: undefined,
      shadow: 'md'
    },
    backdrop: {
      transition: 'all 0.3s ease-in',
      background: 'rgba(0, 0, 0, 0.2)'
    }
  },
  table: {
    transition: 'all 0.3s ease-in',
    hover: {
      background: '#efefef',
      color: undefined
    },
    table: {
      margin: undefined
    },
    head: {
      color: '#666',
      background: '#efefef'
    },
    body: {
      color: '#666',
      background: '#fff'
    },
    foot: {
      color: '#afafaf',
      background: '#dfdfdf'
    }
  },
  label: {
    color: '#cfcfcf',
    background: 'none',
    margin: { left: 6 },
    padding: 0
  },
  modal: {
    modal: {
      color: '#000000',
      background: '#efefef',
      margin: { vertical: 120 },
      padding: 24,
      shadow: 'xxs',
      border: '1px solid #cfcfcf',
      radius: 4,
      transition: {
        duration: 0.6,
        function: 'ease-in-out',
        property: 'all'
      }
    },
    backdrop: {
      background: 'rgba(0,0,0,0.2)',
      transition: { duration: 0.3, function: 'ease-in', property: 'all' }
    }
  },
  message: {
    border: '1px solid #cfcfcf',
    shadow: 'xs',
    color: undefined,
    margin: undefined,
    padding: 12,
    radius: 4,
    background: undefined,
    success: {
      background: '#fcfff5',
      color: '#2c662d',
      border: '1px solid #2c662d'
    },
    info: {
      background: '#f8ffff',
      color: '#0e566c',
      border: '1px solid #0e566c'
    },
    warning: {
      background: '#fffaf3',
      color: '#573a08',
      border: '1px solid #573a08'
    },
    error: {
      background: '#fff6f6',
      color: '#9f3a38',
      border: '1px solid #9f3a38'
    }
  },
  button: {
    transition: {
      property: 'all',
      duration: 0.3,
      function: 'ease'
    },
    primary: {
      border: '1px solid red',
      color: '#000000',
      background: '#efefef',
      margin: 12,
      padding: 12,
      radius: 4,
      shadow: 'md',
      hover: {
        shadow: 'xl'
      }
    },
    default: {
      border: '1px solid blue',
      color: '#000000',
      background: '#fff',
      margin: 12,
      padding: 12,
      radius: 4,
      shadow: 'md',
      hover: {
        border: '1px solid red'
      }
    }
  },
  breadcrumb: {
    margin: 0,
    padding: 0,
    background: 'none',
    border: 'none',
    color: '#6f6f6f',
    radius: 0,
    shadow: 'none'
  },
  avatar: {
    margin: 0,
    padding: 0,
    background: '#3a3a62',
    border: 'none',
    color: '#fff',
    radius: '100%',
    shadow: 'none'
  },
  card: {
    color: '#000000',
    background: '#efefef',
    margin: 0,
    padding: 12,
    shadow: 'xxs',
    border: '1px solid #cfcfcf',
    radius: 4,
    transition: {
      duration: 0.3,
      function: 'ease-in-out',
      property: 'all'
    },
    hover: {
      shadow: 'xs',
      border: '1px solid #afafaf'
    }
  },
  selection: {
    selection: {
      margin: 0,
      padding: 12,
      background: 'none',
      shadow: 'xs',
      border: '1px solid #cfcfcf',
      radius: 8
    },
    item: {
      margin: 0,
      padding: 12,
      background: 'none',
      shadow: 'none',
      border: 'none',
      radius: 0
    },
    resultList: {
      margin: { top: 8 },
      padding: 0,
      background: '#fff',
      shadow: 'md',
      border: 'none',
      radius: 0
    }
  }
}
