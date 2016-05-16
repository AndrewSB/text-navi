import { device, styles, color } from '../constants'
import { copy } from '../content'

view Home.Description {
  <h2>{copy.description.header}</h2>
  <h3>{copy.description.description}</h3>

  $ = [styles.flexAndCenter ,{
    flexDirection: 'column',
    padding: [88, 22],
    textAlign: 'center',
  }]

  $h2 = {
    color: '#1D282F',
    [device.small]: {
      fontSize: '2em',
    }
  }

  $h3 = {
    color: '#8e969c',
    padding: [0, 200],
    fontWeight: 'inherit',

    [device.small]: {
      padding: 'inherit'
    },
  }
}
