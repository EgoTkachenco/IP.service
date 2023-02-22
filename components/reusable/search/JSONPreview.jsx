import styled from 'styled-components'
import { Flex, H6, Button, Icon, Text } from '@/core'
import CopyButton from '../CopyButton'

const JSONPreview = ({ title, data = {}, bottomSlot = '' }) => {
  const renderDataField = (field, value, key) => {
    if (typeof value === 'number')
      return <NumberJSON key={key} name={field} value={value} />

    // if (typeof value === 'array')
    //   return (
    //     <Flex direction="column" gap="8px">
    //       <ArrayJSON key={i} name={field} value={value} />
    //       <OffsetContent direction="column" gap="8px">
    //         <Text font="monospace" weight="400">
    //           Array
    //         </Text>
    //         {field.children.map((item, j) => (
    //           <ObjectJSON key={j} value={item} />
    //         ))}
    //       </OffsetContent>
    //     </Flex>
    //   )

    return <ObjectJSON key={key} name={field} value={value} />
  }
  return (
    <Flex direction="column" width="100%">
      <TitleContainer justify="space-between" align="center" width="100%">
        <H6>{title}</H6>
        <CopyButton
          outline
          color="dark"
          size="small-text"
          width="auto"
          data={data}
        >
          Copy JSON
        </CopyButton>
      </TitleContainer>

      <Flex direction="column" gap="8px">
        {Object.keys(data).map((key, i) => renderDataField(key, data[key], i))}
      </Flex>

      {bottomSlot}
    </Flex>
  )
}

export default JSONPreview

export const ObjectJSON = ({ name, value, textColor }) => (
  <DataJSON
    icon="json-object"
    valueColor="primary"
    name={name}
    value={value}
    textColor={textColor}
  />
)

export const NumberJSON = ({ name, value, textColor }) => (
  <DataJSON
    icon="json-number"
    valueColor="success"
    name={name}
    value={value}
    textColor={textColor}
  />
)

export const ArrayJSON = ({ name, value, textColor }) => (
  <DataJSON
    icon="json-array"
    valueColor="secondary"
    name={name}
    value={value}
    textColor={textColor}
  />
)

const DataJSON = ({ icon, valueColor, name, value, textColor = 'text' }) => (
  <Flex gap="10px" align="center">
    <Icon icon={icon} size="18px" />
    <Text weight="400" font="monospace" color={textColor} inline>
      {name ? name + ':' : ''}"
      <Text color={valueColor} weight="400" font="monospace" inline>
        {value}
      </Text>
      "
    </Text>
  </Flex>
)

const TitleContainer = styled(Flex)`
  margin-bottom: 10px;
`

const OffsetContent = styled(Flex)`
  padding-left: 40px;
  padding-top: 20px;

  @media (max-width: 1140px) {
    padding-left: 24px;
    padding-top: 16px;
  }
`
