import styled from 'styled-components'
import { Caption, Flex } from '@/core'

const Switch = ({ labelOff, labelOn, onChange, value = false }) => {
  return (
    <Flex align="center" gap="10px">
      <Label weight="700" color={!value ? 'text' : 'light-grey'}>
        {labelOff}
      </Label>
      <SwitchContainer isActive={value} onClick={() => onChange(!value)}>
        <SwitchValue />
      </SwitchContainer>
      <Label weight="700" color={value ? 'text' : 'light-grey'}>
        {labelOn}
      </Label>
    </Flex>
  )
}

export default Switch

const Label = styled(Caption)`
  transition: color 0.3s;
`
const SwitchValue = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  transition: all 0.3s;
`

const SwitchContainer = styled.div`
  border-radius: 12px;
  width: 36px;
  padding: 2px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.success : theme.colors['light-grey']};
  display: flex;
  cursor: pointer;

  ${SwitchValue} {
    margin-left: ${({ isActive }) => (isActive ? '16px' : '0')};
  }
`
