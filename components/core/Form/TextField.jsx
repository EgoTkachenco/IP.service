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
		padding: 8px 16px;
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

  @media (max-width: 1140px) {
    padding: 10px;
  }
`
const LightWrapper = styled(Wrapper)`
  border-radius: 6px;
  ${({ isTextarea }) =>
    isTextarea
      ? `
		padding: 8px 16px;
		height: auto;
		`
      : `
		padding: 0 16px;
		height: 46px;
	`}

  background: #f9fafc;
  border: 1px solid
    ${({ error, focused, theme }) => {
      if (focused) return theme.colors.primary
      if (error) return theme.colors.danger
      return '#f9fafc'
    }};
  input,
  textarea {
    font-weight: 700;
    /* color: ${({ theme }) => theme.colors.white}; */

    &::placeholder {
      /* color: ${({ theme }) => theme.colors.text}; */
    }
  }
  @media (max-width: 1140px) {
    padding: 10px;
  }
`
const FlatWrapper = styled(Wrapper)`
  background: transparent;
  padding: 0 8px;
  height: auto;
`
const DefaultWrapper = styled(Wrapper)`
  ${({ isTextarea }) =>
    isTextarea
      ? `
		padding: 7px 14px;
		height: auto;
		`
      : `
		padding: 0 14px;
		height: 50px;
	`}
  border-radius: 6px;
  /* background: ${({ theme }) => theme.colors.white}; */
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
  error = false,
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
    case 'flat':
      textFieldVariant = FlatWrapper
      break
    default:
      textFieldVariant = DefaultWrapper
      break
  }
  return (
    <Wrapper
      as={textFieldVariant}
      focused={focused}
      error={error}
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
