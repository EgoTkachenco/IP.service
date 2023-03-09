import styled from 'styled-components'
import { Flex, Icon, Text } from '@/core'
import { Fragment } from 'react'

const JSONPreview = ({ data = {} }) => {
  const renderDataField = (field, value, key) => {
    const type = getDataType(value)
    switch (type) {
      case 'string':
        return <StringJSON key={key} name={field} value={String(value)} />
      case 'number':
        return <NumberJSON key={key} name={field} value={value} />
      case 'array':
        return (
          <Fragment key={key}>
            <ArrayJSON name={field} />
            <OffsetContent direction="column" gap="8px">
              <Text font="monospace" weight="400">
                Array
              </Text>
              {JSON.parse(value).map((item, j) => (
                <ObjectJSON key={j} value={item} />
              ))}
            </OffsetContent>
          </Fragment>
        )

      case 'object':
        return (
          <Fragment key={key}>
            <ObjectJSON name={field} />
            <OffsetContent direction="column" gap="8px">
              {Object.keys(value).map((key, j) =>
                renderDataField(key, value[key], j)
              )}
            </OffsetContent>
          </Fragment>
        )
      default:
        return <StringJSON key={key} name={field} value={value} />
    }
  }

  const isData = Object.keys(data).length > 0

  if (!isData)
    return (
      <NoDataText font="monospace" color="text">
        No data available
      </NoDataText>
    )

  return (
    <Flex direction="column" gap="8px">
      {Object.keys(data).map((key, i) => renderDataField(key, data[key], i))}
    </Flex>
  )
}

export default JSONPreview

const getDataType = (data) => {
  if (data === null) return 'string'
  if (!isNaN(Number(data))) return 'number'
  if (typeof data === 'boolean' || data === 'false' || data === 'true')
    return 'boolean'

  try {
    if (Array.isArray(JSON.parse(data))) return 'array'
  } catch (error) {}
  if (typeof data === 'object') return 'object'

  return 'string'
}

export const StringJSON = ({ name, value, textColor }) => (
  <DataJSON
    icon="json-string"
    valueColor="primary"
    name={name}
    value={value}
    textColor={textColor}
    isString
  />
)

export const ObjectJSON = ({ name, value, textColor }) => (
  <DataJSON
    icon="json-object"
    valueColor="primary"
    name={name}
    value={value}
    textColor={textColor}
    isString
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

const DataJSON = ({
  icon,
  valueColor,
  name,
  value,
  textColor = 'text',
  isString,
}) => (
  <Flex gap="10px" align="center">
    <Icon icon={icon} size="18px" />
    <Text weight="400" font="monospace" color={textColor} inline>
      {name}
      {name && value !== null ? ': ' : ''}
      {value && value !== null && isString ? '"' : ''}
      <Text color={valueColor} weight="400" font="monospace" inline>
        {value}
      </Text>
      {value && value !== null && isString ? '"' : ''}
    </Text>
  </Flex>
)

const NoDataText = styled(Text)`
  text-align: center;
  width: 100%;
`

const OffsetContent = styled(Flex)`
  padding-left: 32px;

  @media (max-width: 1140px) {
    padding-left: 24px;
  }
`
