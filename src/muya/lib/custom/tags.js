import voiceOverIcon from '../custom/icons/pngicon/vO40.png'
import customIcon from './icons/pngicon/c40.png'
import { isOsx } from '../config'

const COMMAND_KEY = isOsx ? '⌘' : 'Ctrl'
const OPTION_KEY = isOsx ? '⌥' : 'Alt'
// const SHIFT_KEY = isOsx ? '⇧' : 'Shift'

export const customTags = [{
  tag: 'vcO',
  title: 'Voice Over',
  subTitle: 'for a voice to go over',
  label: 'voice over',
  type: 'vO',
  wrapper: '†',
  shortcut: `${COMMAND_KEY}+Space`,
  icon: voiceOverIcon
}, {
  tag: 'cus',
  title: 'Custom',
  subTitle: 'as custom as they cum',
  label: 'custom',
  type: 'cm',
  wrapper: 'ç',
  shortCut: `${COMMAND_KEY}+${OPTION_KEY}+Space`,
  icon: customIcon
}]
