import React from 'react'

import { _Container, _Slider } from './Styled'
import { RootComponent } from '../../types'

export interface SliderProps extends RootComponent {
  step?: number
  min?: number
  max?: number
  value: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Slider: React.FC<SliderProps> = ({
  id,
  style,
  className,
  step = 1,
  min = 1,
  max = 100,
  onChange,
  value
}) => {
  return (
    <_Container>
      <_Slider
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        id={id}
        style={style}
        className={className}
      ></_Slider>
    </_Container>
  )
}
