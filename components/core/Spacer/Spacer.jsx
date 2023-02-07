import styled from 'styled-components'

export default styled.div`
  ${(props) => getOptions(props, null, props.hasOwnProperty('vertical'))}

  @media (max-width: 1200px) {
    ${(props) => getOptions(props, 'lg', props.hasOwnProperty('vertical'))}
  }
  @media (max-width: 1024px) {
    ${(props) => getOptions(props, 'md', props.hasOwnProperty('vertical'))}
  }
  @media (max-width: 768px) {
    ${(props) => getOptions(props, 'sm', props.hasOwnProperty('vertical'))}
  }
  @media (max-width: 375px) {
    ${(props) => getOptions(props, 'xs', props.hasOwnProperty('vertical'))}
  }
`

const getOptions = (props, media, isVertical) => {
  const value = (media ? props['size-' + media] : props.size) || props.size
  if (!isVertical && value === 'auto') return 'margin-left: auto;'
  if (isVertical) return `max-height: ${value};min-height: ${value};`

  return `max-width: ${value};min-width: ${value};`
}
