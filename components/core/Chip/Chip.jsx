import styled from 'styled-components'
// import Card from '../Card'

const Chip = ({ type, children, onClick, inline = false, style }) => {
  let ChipComponent
  switch (type) {
    case 'primary':
      ChipComponent = PrimaryChip
      break
    case 'secondary':
      ChipComponent = SecondaryChip
      break
    case 'success':
      ChipComponent = SuccessChip
      break
    case 'grey':
      ChipComponent = GreyRoundChip
      break
    case 'pink':
      ChipComponent = PinkChip
      break
    case 'red':
      ChipComponent = RedChip
      break
    case 'grey-outline':
      ChipComponent = GreyOutlineRoundChip
      break
    case 'primary-transparent':
      ChipComponent = PrimaryTransparentChip
      break
    case 'primary-flat':
      ChipComponent = PrimaryFlatChip
      break
    case 'dark':
      ChipComponent = DarkChip
      break
    default:
      ChipComponent = GreyChip
  }
  return (
    <ChipComponent
      onClick={() => onClick && onClick()}
      clickable={!!onClick}
      style={style}
    >
      {children}
    </ChipComponent>
  )
}

const DefaultChip = styled.div`
  padding: 6px 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.01em;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  @media (max-width: 1140px) {
    font-size: 11px;
    line-height: 14px;
  }
`

const RoundedChip = styled.div`
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  border-radius: 22px;
  color: #fff;
  border: 1px solid transparent;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  @media (max-width: 1140px) {
    font-size: 11px;
    line-height: 14px;
    padding: 6px 12px;
  }
`

const PrimaryChip = styled(RoundedChip)`
  background: ${({ theme }) => theme.colors.primary};
`

const SecondaryChip = styled(RoundedChip)`
  background: ${({ theme }) => theme.colors.secondary};
`

const SuccessChip = styled(RoundedChip)`
  background: ${({ theme }) => theme.colors.success};
`

const PinkChip = styled(RoundedChip)`
  background: ${({ theme }) => theme.colors.pink};
`

const RedChip = styled(RoundedChip)`
  color: ${({ theme }) => theme.colors.danger};
  background: rgba(255, 61, 61, 0.1);
`

const GreyRoundChip = styled(RoundedChip)`
  background: ${({ theme }) => theme.colors.text};
`
const GreyOutlineRoundChip = styled(RoundedChip)`
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.text};
`

const PrimaryTransparentChip = styled(RoundedChip)`
  background: rgba(14, 93, 246, 0.1);
  color: ${({ theme }) => theme.colors.primary};
`

const GreyChip = styled(DefaultChip)`
  background: #f9fafc;
  color: ${({ theme }) => theme.colors.text};
`

const PrimaryFlatChip = styled(DefaultChip)`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid transparent;
`

const DarkChip = styled(DefaultChip)`
  background: ${({ theme }) => theme.colors.dark};
  border: 1px solid rgba(7, 22, 37, 0.1);
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

export default Chip
