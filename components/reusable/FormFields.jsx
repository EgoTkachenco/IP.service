import { Flex, Label, Input, Textarea } from '@/core'

export const TextField = ({
  label,
  labelColor = 'light-grey',
  name,
  ...props
}) => {
  return (
    <Flex direction="column" gap="3px" width="100%">
      <Label htmlFor={name} color={labelColor} caption>
        {label}
      </Label>
      <Input id={name} {...props} />
    </Flex>
  )
}
export const TextareaField = ({
  label,
  labelColor = 'light-grey',
  name,
  ...props
}) => {
  return (
    <Flex direction="column" gap="3px" width="100%">
      <Label htmlFor={name} color={labelColor} caption>
        {label}
      </Label>
      <Textarea id={name} {...props} />
    </Flex>
  )
}
