import styled from 'styled-components'
import { Flex, Icon, Text } from '@/core'
import { useState, Fragment } from 'react'

const JSONPreview = ({
  data = {},
  icon = true,
  color = 'text',
  errorColor = 'text',
}) => {
  const renderDataField = (field, value, key) => {
    const type = getDataType(value, field)
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
      case 'error':
        return (
          <ErrorJSON
            key={key}
            name={field}
            value={value}
            isIcon={icon}
            textColor={color}
            errorColor={errorColor}
          />
        )
      case 'array':
        const content = Array.isArray(value) ? value : JSON.parse(value)
        const isContent = content && content.length > 0
        const isDropdown = isContent && content.length > 10
        return isDropdown ? (
          <DropdownData
            key={key}
            dropdownContent={
              <OffsetContent direction="column" gap="8px">
                {content.map((key, j) => renderDataField('', key, j))}
              </OffsetContent>
            }
          >
            <ArrayJSON
              name={field}
              isIcon={icon}
              textColor={color}
              value={`[${content.length}]`}
            />
          </DropdownData>
        ) : (
          <Fragment key={key}>
            <ArrayJSON
              name={field}
              isIcon={icon}
              textColor={color}
              value={`[${content.length}]`}
            />
            <OffsetContent direction="column" gap="8px">
              {isContent
                ? content.map((key, j) => renderDataField('', key, j))
                : ''}
            </OffsetContent>
          </Fragment>
        )

      case 'object':
        return (
          <Fragment key={key}>
            <ObjectJSON name={field} isIcon={icon} textColor={color} />
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

const getDataType = (data, field) => {
  if (field === 'error') return 'error'
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
    valueColor="success"
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
    valueColor="success"
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

export const ErrorJSON = ({ name, value, textColor, isIcon, errorColor }) => (
  <DataJSON
    icon="json-error"
    valueColor={errorColor}
    name={'Error'}
    value={value}
    textColor="danger"
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
  <Flex gap="10px">
    {isIcon ? (
      <Icon icon={icon} size="18px" style={{ transform: `translateY(5px)` }} />
    ) : null}
    <Text weight="400" font="monospace" color={textColor} inline>
      {name}
      {name && value !== null ? ': ' : ''}
      {value && value !== null && isString ? '"' : ''}
      <Text
        color={valueColor}
        weight="400"
        font="monospace"
        inline
        style={{ lineBreak: 'anywhere' }}
      >
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
