
// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Image } from '@fluentui/react'

import { IInputs } from './generated/ManifestTypes'

// eslint-disable-next-line no-undef
const ShieldBadgeApp = (context:ComponentFramework.Context<IInputs>): JSX.Element => {
  const style = context.parameters.style.raw ?? 'plastic'
  // const label = context.parameters.customlabel.raw // todo switch depending on type
  // const message = context.parameters.message.raw // todo switch depending on type
  const labelcolor = context.parameters.labelcolor.raw
  const color = context.parameters.color.raw
  const logo = context.parameters.logo.raw
  const logocolor = context.parameters.logocolor.raw

  const getlabel = ():string => {
    let label = ''
    if (context.parameters.showLabel.raw === 'true') {
      if (context.parameters.customlabel.raw !== null) {
        // todo switch depending on type
        switch (context.parameters.customlabel.type) {
          case 'Lookup.Simple':
          case 'OptionSet':
          case 'TwoOptions':
            label = context.parameters.customlabel.formatted ?? ''
            break
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

  const getMessage = ():string => {
    let message = ''

    // todo switch depending on type
    switch (context.parameters.message.type) {
      case 'Lookup.Simple':
      case 'TwoOptions':
      case 'OptionSet':
        // const options:ComponentFramework.PropertyHelper.OptionMetadata[] = context.parameters.message.attributes.Options;
        // message = context.parameters.message.attributes?.Options.find(o => o.Value === context.parameters.message.raw)?.Label ?? ''
        message = context.parameters.message.formatted ?? ''
        break
      default:
        message = context.parameters.message.raw
        break
    }

    return message
  }

  const url = `https://img.shields.io/badge/${getlabel()}-${getMessage()}-${color}?style=${style}&labelColor=${labelcolor}&logo=${logo}&logoColor=${logocolor}`
  return (
            <Image src={url} />
  )
}

export default ShieldBadgeApp
