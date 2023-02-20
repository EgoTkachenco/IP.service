import styled from 'styled-components'
// import Card from '../Card'

const Chip = ({ type, children, onClick }) => {
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
    case 'grey-outline':
      ChipComponent = GreyOutlineRoundChip
      break
    case 'primary-transparent':
      ChipComponent = PrimaryTransparentChip
      break
    case 'dark':
      ChipComponent = DarkChip
      break
    default:
      ChipComponent = GreyChip
  }
  return (
    <ChipComponent onClick={() => onClick && onClick()} clickable={!!onClick}>
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

const DarkChip = styled(DefaultChip)`
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

export default Chip
