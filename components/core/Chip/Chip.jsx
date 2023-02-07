import styled from 'styled-components'
// import Card from '../Card'

const Chip = ({ type, children }) => {
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
    default:
      ChipComponent = GreyChip
  }
  return <ChipComponent>{children}</ChipComponent>
}

const DefaultChip = styled.div`
  padding: 6px 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.01em;
  border-radius: 6px;
  color: #fff;
`

const RoundedChip = styled.div`
  padding: 8px 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  border-radius: 22px;
  color: #fff;
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

const GreyChip = styled(DefaultChip)`
  background: #f9fafc;
  color: ${({ theme }) => theme.colors.text};
`

export default Chip
