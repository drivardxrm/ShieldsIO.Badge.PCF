
// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Image } from '@fluentui/react'

import { IInputs } from './generated/ManifestTypes'

// eslint-disable-next-line no-undef
const ShieldBadgeApp = (context:ComponentFramework.Context<IInputs>): JSX.Element => {
  const style = context.parameters.style.raw ?? 'plastic'
  // const label = context.parameters.customlabel.raw // todo switch depending on type
  const message = context.parameters.message.raw // todo switch depending on type
  const labelcolor = context.parameters.labelcolor.raw
  const color = context.parameters.color.raw
  const logo = context.parameters.logo.raw
  const logocolor = context.parameters.logocolor.raw

  const getlabel = ():string => {
    let label = ''
    if (context.parameters.showLabel.raw === 'true') {
      if (context.parameters.customlabel.raw !== '') {
        // todo switch depending on type
        switch (context.parameters.customlabel.type) {
          case 'Lookup.Simple':
          case 'OptionSet':
          case 'TwoOptions':
          default:
            label = context.parameters.customlabel.raw
            break
        }
      } else {
        // return field display name
        label = context.parameters.message.attributes?.DisplayName ?? ''
      }
    }
    return label
  }

  const url = `https://img.shields.io/badge/${getlabel()}-${message}-${color}?style=${style}&labelColor=${labelcolor}&logo=${logo}&logoColor=${logocolor}`
  return (
            <Image src={url} />
  )
}

export default ShieldBadgeApp
