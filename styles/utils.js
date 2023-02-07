export const get_padding_sizes = (props) => {
  let p_t = '0'
  let p_b = '0'
  let p_l = '0'
  let p_r = '0'

  if (props.p) {
    p_t = props.p
    p_b = props.p
    p_l = props.p
    p_r = props.p
  }
  if (props.px) {
    p_l = props.px
    p_r = props.px
  }
  if (props.py) {
    p_t = props.py
    p_b = props.py
  }
  if (props.pt) p_t = props.pt
  if (props.pr) p_r = props.pr
  if (props.pb) p_b = props.pb
  if (props.pl) p_l = props.pl

  return `${p_t} ${p_r} ${p_b} ${p_l}`
}

export const hex_to_rgba = (hex, op) => {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ','
    )}, ${op})`
  }
  throw new Error('Bad Hex')
}
