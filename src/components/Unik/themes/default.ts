import { css, DefaultTheme } from 'styled-components'

export const themeDefault: DefaultTheme = {
  base: {
    fontFamily: [
      'Calibri',
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
  toast: {
    toast: {
      shadow: 'md',
      margin: 16,
      padding: 16,
      radius: 4,
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
    container: {
      padding: undefined
    }
  },
  alert: {
    margin: undefined,
    padding: 12,
    radius: 4,
    shadow: 'xs',
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
  breakpoints: {
    small: 544,
    medium: 768,
    large: 1012,
    extraLarge: 1280
  },
  badge: {
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
    },
    default: {
      background: '#dfdfdf',
      color: '#999',
      border: undefined
    },
    shadow: 'sm',
    radius: 4,
    margin: { horizontal: 6 },
    padding: { horizontal: 6, vertical: 2 }
  },
  divider: {
    color: undefined,
    background: undefined
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
  textarea: {
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
  skeleton: {
    primaryColor: '#efefef',
    secondaryColor: '#dfdfdf'
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
  tree: {
    tree: {
      background: undefined,
      margin: undefined,
      padding: undefined,
      shadow: undefined,
      border: undefined
    },
    item: {
      hover: {
        shadow: undefined,
        border: undefined,
        background: '#cfcfcf'
      },
      radius: 4,
      transition: 'all 300ms ease-in-out',
      background: undefined,
      margin: undefined,
      padding: 4,
      border: undefined,
      shadow: undefined
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
      background: '#fff',
      margin: 0,
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
      border: '1px solid #d9d9d9',
      color: '#efefef',
      background: '#2972fa',
      margin: 0,
      padding: { horizontal: 6, vertical: 4 },
      radius: 4,
      shadow: 'xs',
      css: `
        letter-spacing: 1px;
        font-size: 12px;
        text-transform: uppercase;
      `,
      hover: {
        shadow: 'md'
      }
    },
    default: {
      border: '1px solid #d9d9d9',
      color: '#737373',
      background: '#efefef',
      margin: 0,
      padding: { horizontal: 6, vertical: 4 },
      radius: 4,
      shadow: 'md',
      hover: {
        border: '1px solid #737373'
      },
      css: `
        letter-spacing: 1px;
        font-size: 12px;
        text-transform: uppercase;
      `
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
  dropdown: {
    dropdown: {
      color: '#000',
      margin: 0,
      padding: { horizontal: 6, vertical: 4 },
      background: '#ffffff',
      shadow: 'xs',
      border: '1px solid #cfcfcf',
      radius: 4
    },
    item: {
      color: '#000000',
      margin: 0,
      padding: { horizontal: 6, vertical: 4 },
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
  },
  selection: {
    selection: {
      color: '#000',
      margin: 0,
      padding: { horizontal: 6, vertical: 4 },
      background: '#ffffff',
      shadow: 'xs',
      border: '1px solid #cfcfcf',
      radius: 4
    },
    item: {
      color: '#000000',
      margin: 0,
      padding: { horizontal: 6, vertical: 4 },
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
