import { position } from 'polished'
import { css, useTheme } from 'styled-components'

import {
  Value,
  JustifyProp,
  AlignProp,
  BorderProp,
  MarginProp,
  WidthProp,
  BackgroundProp,
  HeightProp,
  PaddingProp,
  ShadowProp,
  DirectionProp,
  AlignContentProp,
  SelfProp,
  BasisProp,
  GrowProp,
  ShrinkProp,
  OverflowProp,
  RadiusProp,
  WrapProp,
  ColorProp,
  TransitionProp,
  FontFamilyProp,
  FontSizeProp,
  PositionProp,
  ZIndexProp
} from './types'

const FlexMap: { [key: string]: string } = {
  start: 'flex-start',
  end: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
  initial: 'initial',
  inherit: 'inherit',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  auto: 'auto'
}

export const renderWrap = (wrap: WrapProp) => {
  if (typeof wrap === 'undefined') return

  if (wrap)
    return css`
      flex-wrap: wrap;
    `

  return css`
    flex-wrap: nowrap;
  `
}

export const renderOverflow = (overflow: OverflowProp) => {
  if (typeof overflow === 'undefined') return

  if (typeof overflow === 'string') {
    return css`
      overflow: ${overflow};
    `
  }

  if (typeof overflow === 'object') {
    return Object.keys(overflow).map((key, index) => {
      const value = Object.values(overflow)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'x': {
          return css`
            overflow-x: ${value};
          `
        }
        case 'y': {
          return css`
            overflow-y: ${value};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderRadius = (radius: RadiusProp) => {
  if (typeof radius === 'undefined') return

  if (typeof radius === 'string' || typeof radius === 'number') {
    return css`
      border-radius: ${renderValue(radius)};
    `
  }

  if (typeof radius === 'object') {
    return Object.keys(radius).map((key, index) => {
      const value = Object.values(radius)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'top': {
          return css`
            border-top-left-radius: ${renderValue(value)};
            border-top-right-radius: ${renderValue(value)};
          `
        }
        case 'right': {
          return css`
            border-top-right-radius: ${renderValue(value)};
            border-bottom-right-radius: ${renderValue(value)};
          `
        }
        case 'bottom': {
          return css`
            border-bottom-right-radius: ${renderValue(value)};
            border-bottom-left-radius: ${renderValue(value)};
          `
        }
        case 'left': {
          return css`
            border-top-left-radius: ${renderValue(value)};
            border-bottom-left-radius: ${renderValue(value)};
          `
        }
        case 'topLeft': {
          return css`
            border-top-left-radius: ${renderValue(value)};
          `
        }
        case 'topRight': {
          return css`
            border-top-right-radius: ${renderValue(value)};
          `
        }
        case 'bottomLeft': {
          return css`
            border-bottom-left-radius: ${renderValue(value)};
          `
        }
        case 'bottomRight': {
          return css`
            border-bottom-right-radius: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderGrow = (grow: GrowProp) => {
  if (typeof grow === 'undefined') return

  return css`
    flex-grow: ${grow};
  `
}

export const renderShrink = (shrink: ShrinkProp) => {
  if (typeof shrink === 'undefined') return

  return css`
    flex-shrink: ${shrink};
  `
}

export const renderBasis = (basis: BasisProp) => {
  if (typeof basis === 'undefined') return

  return css`
    flex-basis: ${renderValue(basis)};
  `
}

export const renderAlign = (align: AlignProp) => {
  if (typeof align === 'undefined') return

  return css`
    align-items: ${FlexMap[align]};
  `
}

export const renderAlignContent = (alignContent: AlignContentProp) => {
  if (typeof alignContent === 'undefined') return

  return css`
    align-content: ${FlexMap[alignContent]};
  `
}

export const renderJustify = (justify: JustifyProp) => {
  if (typeof justify === 'undefined') return

  return css`
    justify-content: ${FlexMap[justify]};
  `
}

export const renderSelf = (self: SelfProp) => {
  if (typeof self === undefined) return

  return css`
    align-self: ${FlexMap[self as any]};
  `
}

export const renderValue = (value: Value): string => {
  if (typeof value === 'number') {
    return `${value}px`
  }

  return value
}

export const renderDirection = (direction: DirectionProp) => {
  if (typeof direction === 'undefined') return

  return css`
    flex-direction: ${direction};
  `
}

export const renderCSS = (styles?: string) => {
  if (!styles) return

  return css`
    ${styles}
  `
}

export const renderTransition = (transition: TransitionProp) => {
  if (typeof transition === 'undefined') return

  if (typeof transition === 'string') {
    return css`
      transition: ${transition};
    `
  }

  if (typeof transition === 'object') {
    return Object.keys(transition).map((key, index) => {
      const value = Object.values(transition)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'duration': {
          return css`
            transition-duration: ${value}s;
          `
        }
        case 'function': {
          return css`
            transition-timing-function: ${value};
          `
        }
        case 'delay': {
          return css`
            transition-delay: ${value}s;
          `
        }
        case 'property': {
          return css`
            transition-property: ${value};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderShadow = (shadow: ShadowProp) => {
  if (typeof shadow === 'undefined') return

  if (typeof shadow === 'string') {
    const { shadows } = useTheme()

    if (shadows.hasOwnProperty(shadow)) {
      let template = 'box-shadow: #hOffset# #vOffset# #blur# #spread# #color#'
      const themeShadow = shadows[shadow]

      if (!themeShadow) return

      if (typeof themeShadow === 'string') {
        template = `box-shadow: ${themeShadow};`
      }

      if (typeof themeShadow === 'object') {
        Object.keys(themeShadow).map((key, index) => {
          const value = Object.values(themeShadow)[index]

          if (typeof value === 'undefined') return css``

          template = template.replace(`#${key}#`, renderValue(value as any))

          if (key === 'inset') {
            if (typeof value === 'boolean') {
              if (value) {
                template = `${template} inset`
              }
            }
          }
        })
      }

      if (template.includes('#')) {
        if (template.includes('#blur#')) {
          template = template.replace('#blur#', '')
        }
        if (template.includes('#color#')) {
          template = template.replace('#color#', '')
        }
        if (template.includes('#spread#')) {
          template = template.replace('#spread#', '')
        }
      }

      return css`
        ${template}
      `
    }
  }

  // switch (shadow) {
  //   case 'xxs': {
  //     return css`
  //       box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  //     `
  //   }
  //   case 'xs': {
  //     return css`
  //       box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  //     `
  //   }
  //   case 'sm': {
  //     return css`
  //       box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
  //         0 1px 2px 0 rgba(0, 0, 0, 0.06);
  //     `
  //   }
  //   case 'md': {
  //     return css`
  //       box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  //         0 2px 4px -1px rgba(0, 0, 0, 0.06);
  //     `
  //   }
  //   case 'lg': {
  //     return css`
  //       box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
  //         0 4px 6px -2px rgba(0, 0, 0, 0.05);
  //     `
  //   }
  //   case 'xl': {
  //     return css`
  //       box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  //         0 10px 10px -5px rgba(0, 0, 0, 0.04);
  //     `
  //   }
  //   case 'xxl': {
  //     return css`
  //       box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  //     `
  //   }
  //   default: {
  //     return css`
  //       box-shadow: ${shadow};
  //     `
  //   }
  // }
}

const renderSubBorder = (prop: string, border: BorderProp) => {
  let borderCSS: string

  if (typeof border === 'string') {
    borderCSS = `border-${prop}: ${border};`

    return css`
      ${borderCSS}
    `
  }

  if (typeof border === 'object') {
    return Object.keys(border).map((key, index) => {
      const value = Object.values(border)[index]

      if (typeof value === 'undefined') return css``

      borderCSS = `border-${prop}-${key}: ${renderValue(value)};`

      switch (key) {
        case 'size': {
          return css`
            ${borderCSS}
          `
        }
        case 'color': {
          return css`
            ${borderCSS}
          `
        }
        case 'style': {
          return css`
            ${borderCSS}
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderOrientation = (
  size: Value | undefined,
  orientation: 'left' | 'bottom' | 'right' | 'top'
) => {
  if (typeof size === 'undefined') return

  const o = `${orientation}: ${renderValue(size)};`

  return css`
    ${o}
  `
}

export const renderZIndex = (zIndex: ZIndexProp) => {
  if (typeof zIndex === 'undefined') return

  return css`
    z-index: ${zIndex};
  `
}

export const renderPosition = (position: PositionProp) => {
  if (typeof position === 'undefined') return

  return css`
    position: ${position};
  `
}

export const renderBorder = (border: BorderProp) => {
  if (typeof border === 'undefined') return

  if (typeof border === 'string') {
    return css`
      border: ${border};
    `
  }

  if (typeof border === 'object') {
    return Object.keys(border).map((key, index) => {
      const value = Object.values(border)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'size': {
          return css`
            border-width: ${renderValue(value)};
          `
        }
        case 'color': {
          return css`
            border-color: ${value};
          `
        }
        case 'style': {
          return css`
            border-style: ${value};
          `
        }
        case 'top': {
          return renderSubBorder('top', value)
        }
        case 'right': {
          return renderSubBorder('right', value)
        }
        case 'bottom': {
          return renderSubBorder('bottom', value)
        }
        case 'left': {
          return renderSubBorder('left', value)
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderMargin = (margin: MarginProp) => {
  if (typeof margin === 'undefined') return

  if (typeof margin === 'string' || typeof margin === 'number') {
    return css`
      margin: ${renderValue(margin)};
    `
  }

  if (typeof margin === 'object') {
    return Object.keys(margin).map((key, index) => {
      const value = Object.values(margin)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'top': {
          return css`
            margin-top: ${renderValue(value)};
          `
        }
        case 'right': {
          return css`
            margin-right: ${renderValue(value)};
          `
        }
        case 'bottom': {
          return css`
            margin-bottom: ${renderValue(value)};
          `
        }
        case 'left': {
          return css`
            margin-left: ${renderValue(value)};
          `
        }
        case 'vertical': {
          return css`
            margin-top: ${renderValue(value)};
            margin-bottom: ${renderValue(value)};
          `
        }
        case 'horizontal': {
          return css`
            margin-right: ${renderValue(value)};
            margin-left: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderColor = (color: ColorProp) => {
  if (typeof color === 'undefined') return

  return css`
    color: ${color};
  `
}

export const renderFontSize = (size: FontSizeProp) => {
  if (typeof size === 'undefined') return

  return css`
    font-size: ${renderValue(size)};
  `
}

export const renderFontFamily = (font: FontFamilyProp) => {
  if (typeof font === 'undefined') return

  return css`
    font-family: ${font
      .map((f) => (f.includes(' ') ? `'${f}'` : f))
      .toString()};
  `
}

export const renderPadding = (padding: PaddingProp) => {
  if (typeof padding === 'undefined') return

  if (typeof padding === 'string' || typeof padding === 'number') {
    return css`
      padding: ${renderValue(padding)};
    `
  }

  if (typeof padding === 'object') {
    return Object.keys(padding).map((key, index) => {
      const value = Object.values(padding)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'top': {
          return css`
            padding-top: ${renderValue(value)};
          `
        }
        case 'right': {
          return css`
            padding-right: ${renderValue(value)};
          `
        }
        case 'bottom': {
          return css`
            padding-bottom: ${renderValue(value)};
          `
        }
        case 'left': {
          return css`
            padding-left: ${renderValue(value)};
          `
        }
        case 'vertical': {
          return css`
            padding-top: ${renderValue(value)};
            padding-bottom: ${renderValue(value)};
          `
        }
        case 'horizontal': {
          return css`
            padding-right: ${renderValue(value)};
            padding-left: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderBackground = (background: BackgroundProp) => {
  if (typeof background === 'undefined') return

  return css`
    background: ${background};
  `
}

export const renderTranslateX = (size: WidthProp) => {
  if (typeof size === 'undefined') return

  if (typeof size === 'string' || typeof size === 'number') {
    return css`
      transform: translateX(${renderValue(size)});
    `
  }
}

export const renderTranslateY = (size: WidthProp) => {
  if (typeof size === 'undefined') return

  if (typeof size === 'string' || typeof size === 'number') {
    return css`
      transform: translateY(${renderValue(size)});
    `
  }
}

export const renderWidth = (width: WidthProp) => {
  if (typeof width === 'undefined') return

  if (typeof width === 'string' || typeof width === 'number') {
    return css`
      width: ${renderValue(width)};
    `
  }

  if (typeof width === 'object') {
    return Object.keys(width).map((key, index) => {
      const value = Object.values(width)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'min': {
          return css`
            min-width: ${renderValue(value)};
          `
        }
        case 'max': {
          return css`
            max-width: ${renderValue(value)};
          `
        }
        case 'width': {
          return css`
            width: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const renderHeight = (height: HeightProp) => {
  if (typeof height === 'undefined') return

  if (typeof height === 'string' || typeof height === 'number') {
    return css`
      height: ${renderValue(height)};
    `
  }

  if (typeof height === 'object') {
    return Object.keys(height).map((key, index) => {
      const value = Object.values(height)[index]

      if (typeof value === 'undefined') return css``

      switch (key) {
        case 'min': {
          return css`
            min-height: ${renderValue(value)};
          `
        }
        case 'max': {
          return css`
            max-height: ${renderValue(value)};
          `
        }
        case 'height': {
          return css`
            height: ${renderValue(value)};
          `
        }
        default: {
          return css``
        }
      }
    })
  }
}

export const compareValues = (key: string, order: 'asc' | 'desc') => {
  return function innerSort(a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0

    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }

    return order === 'desc' ? comparison * -1 : comparison
  }
}
