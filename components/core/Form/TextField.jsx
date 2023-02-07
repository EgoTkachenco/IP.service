import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s;
  /* background: ${({ theme }) => theme.colors.white}; */
`

const DarkWrapper = styled(Wrapper)`
  border-radius: 6px;
  background: #142230;
  ${({ isTextarea }) =>
    isTextarea
      ? `
		padding: 16px;
		height: auto;
		`
      : `
		padding: 0 14px;
		height: 47px;
	`}
  border: 1px solid
    ${({ focused, theme }) => (focused ? theme.colors.primary : '#142230')};

  input,
  textarea {
    color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
const LightWrapper = styled(Wrapper)`
  border-radius: 6px;
  ${({ isTextarea }) =>
    isTextarea
      ? `
		padding: 16px;
		height: auto;
		`
      : `
		padding: 0 16px;
		height: 46px;
	`}

  background: #f9fafc;
  border: 1px solid
    ${({ focused, theme }) => (focused ? theme.colors.primary : '#f9fafc')};
  input,
  textarea {
    font-weight: 700;
    /* color: ${({ theme }) => theme.colors.white}; */

    &::placeholder {
      /* color: ${({ theme }) => theme.colors.text}; */
    }
  }
`
const DefaultWrapper = styled(Wrapper)`
  height: 50px;
  border-radius: 6px;
  padding: 0 14px;
  border: 1px solid
    ${({ focused, theme }) =>
      focused ? theme.colors.primary : 'rgba(102, 112, 128, 0.2)'};
`

const TextField = ({
  variant,
  leftSlot,
  rightSlot,
  children,
  focused = false,
  onClick = () => {},
  textarea = false,
}) => {
  let textFieldVariant
  switch (variant) {
    case 'dark':
      textFieldVariant = DarkWrapper
      break
    case 'light':
      textFieldVariant = LightWrapper
      break
    default:
      textFieldVariant = DefaultWrapper
      break
  }
  return (
    <Wrapper
      as={textFieldVariant}
      focused={focused}
      onClick={onClick}
      isTextarea={textarea}
    >
      {leftSlot && <InputFieldLeftSlot>{leftSlot}</InputFieldLeftSlot>}
      {children}
      {rightSlot && <InputFieldRightSlot>{rightSlot}</InputFieldRightSlot>}
    </Wrapper>
  )
}

export default TextField

const InputFieldLeftSlot = styled.div``

const InputFieldRightSlot = styled.div``
