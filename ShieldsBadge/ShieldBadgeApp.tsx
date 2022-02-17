
// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Image } from '@fluentui/react'

import { IInputs } from './generated/ManifestTypes'

// eslint-disable-next-line no-undef
const ShieldBadgeApp = (context:ComponentFramework.Context<IInputs>): JSX.Element => {
  const style = context.parameters.style.raw ?? 'plastic'
  const label = context.parameters.label.raw
  const message = context.parameters.message.raw
  const labelcolor = context.parameters.labelcolor.raw
  const color = context.parameters.color.raw
  const logo = context.parameters.logo.raw
  const logocolor = context.parameters.logocolor.raw

  const url = `https://img.shields.io/badge/${label}-${message}-${color}?style=${style}&labelColor=${labelcolor}&logo=${logo}&logoColor=${logocolor}`
  return (
            <Image src={url} />
  )
}

export default ShieldBadgeApp
