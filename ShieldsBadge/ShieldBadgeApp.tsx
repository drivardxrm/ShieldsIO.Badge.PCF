
// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { IInputs } from './generated/ManifestTypes'

// eslint-disable-next-line no-undef
const ShieldBadgeApp = (context:ComponentFramework.Context<IInputs>): JSX.Element => {
  const style = context.parameters.style.raw ?? 'plastic'

  const labelcolor = context.parameters.labelcolor.raw && context.parameters.labelcolor.raw.length > 0 ? context.parameters.labelcolor.raw : 'null'
  const color = context.parameters.color.raw && context.parameters.color.raw.length > 0 ? context.parameters.color.raw : 'success'
  const logo = context.parameters.logo.raw && context.parameters.logo.raw.length > 0 ? context.parameters.logo.raw : 'null'
  const logocolor = context.parameters.logocolor.raw && context.parameters.logocolor.raw.length > 0 ? context.parameters.logocolor.raw : 'null'
  const redirecturl = context.parameters.url.raw

  const getlabel = ():string => {
    let label = ''
    if (context.parameters.showLabel.raw === 'true') {
      if (context.parameters.customlabel.raw !== null) {
        label = context.parameters.customlabel.formatted ?? context.parameters.customlabel.raw
      } else {
        // return field display name
        label = context.parameters.message.attributes?.DisplayName ?? ''
      }
    }
    return (label ?? '').replaceAll('-', '--').replaceAll('_', '__').replaceAll(' ', '_')
  }

  const getMessage = ():string => {
    let message = ''

    message = context.parameters.message.formatted ?? context.parameters.message.raw

    return (message ?? '').replaceAll('-', '--').replaceAll('_', '__').replaceAll(' ', '_')
  }

  const badgeurl = `https://img.shields.io/badge/${getlabel()}-${getMessage()}-${color}?style=${style}&labelColor=${labelcolor}&logo=${logo}&logoColor=${logocolor}`
  return (

    <>
    { redirecturl && redirecturl !== '' &&
      <a href={redirecturl} target="_blank" rel="noopener noreferrer">
        <img src={badgeurl} />
      </a>
    }
    { (!redirecturl || redirecturl === '') &&
      <img src={badgeurl} />
    }

    </>
  )
}

export default ShieldBadgeApp
