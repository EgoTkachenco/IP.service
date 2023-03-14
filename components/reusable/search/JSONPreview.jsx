import styled from 'styled-components'
import { Flex, Icon, Text } from '@/core'
import { useState, Fragment } from 'react'

const JSONPreview = ({ data = {}, icon = true, color = 'text' }) => {
  const renderDataField = (field, value, key) => {
    const type = getDataType(value)
    switch (type) {
      case 'string':
        return (
          <StringJSON
            key={key}
            name={field}
            value={String(value)}
            isIcon={icon}
            textColor={color}
          />
        )
      case 'boolean':
        return (
          <BooleanJSON
            key={key}
            name={field}
            value={String(value)}
            isIcon={icon}
            textColor={color}
          />
        )
      case 'number':
        return (
          <NumberJSON
            key={key}
            name={field}
            value={value}
            isIcon={icon}
            textColor={color}
          />
        )
      case 'array':
        const content = Array.isArray(value) ? value : JSON.parse(value)
        return (
          <DropdownData
            key={key}
            dropdownContent={
              <OffsetContent direction="column" gap="8px">
                <Text font="monospace" weight="400">
                  Array {content && content.length > 0 ? '' : '[]'}
                </Text>
                {content && content.length > 0
                  ? content.map((key, j) => renderDataField('', key, j))
                  : ''}
              </OffsetContent>
            }
          >
            <ArrayJSON name={field} isIcon={icon} textColor={color} />
          </DropdownData>
        )

      case 'object':
        return (
          <DropdownData
            key={key}
            dropdownContent={
              <OffsetContent direction="column" gap="8px">
                {Object.keys(value).map((key, j) =>
                  renderDataField(key, value[key], j)
                )}
              </OffsetContent>
            }
          >
            <ObjectJSON name={field} isIcon={icon} textColor={color} />
          </DropdownData>
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
  if (typeof data === 'boolean' || data === 'false' || data === 'true')
    return 'boolean'

  try {
    if (Array.isArray(data) || Array.isArray(JSON.parse(data))) return 'array'
  } catch (error) {}
  if (!isNaN(Number(data))) return 'number'
  if (typeof data === 'object') return 'object'

  return 'string'
}

export const StringJSON = ({ name, value, textColor, isIcon }) => (
  <DataJSON
    icon="json-string"
    valueColor="primary"
    name={name}
    value={value}
    textColor={textColor}
    isString
    isIcon={isIcon}
  />
)

export const ObjectJSON = ({ name, value, textColor, isIcon }) => (
  <DataJSON
    icon="json-object"
    valueColor="primary"
    name={name}
    value={value}
    textColor={textColor}
    isString
    isIcon={isIcon}
  />
)

export const NumberJSON = ({ name, value, textColor, isIcon }) => (
  <DataJSON
    icon="json-number"
    valueColor="success"
    name={name}
    value={value}
    textColor={textColor}
    isIcon={isIcon}
  />
)

export const BooleanJSON = ({ name, value, textColor, isIcon }) => (
  <DataJSON
    icon="json-number"
    valueColor="primary"
    name={name}
    value={value}
    textColor={textColor}
    isIcon={isIcon}
  />
)

export const ArrayJSON = ({ name, value, textColor, isIcon }) => (
  <DataJSON
    icon="json-array"
    valueColor="secondary"
    name={name}
    value={value}
    textColor={textColor}
    isIcon={isIcon}
  />
)

const DataJSON = ({
  icon,
  valueColor,
  name,
  value,
  textColor = 'text',
  isString,
  isIcon,
}) => (
  <Flex gap="10px" align="center">
    {isIcon ? <Icon icon={icon} size="18px" /> : null}
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

const DropdownData = ({ dropdownContent, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Flex
        align="center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer' }}
      >
        {children}{' '}
        <Icon
          icon="chevron"
          size="24px"
          color="text"
          style={{ transform: `rotate(${isOpen ? '180deg' : '0'})` }}
        />
      </Flex>
      {isOpen ? dropdownContent : ''}
    </>
  )
}

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
