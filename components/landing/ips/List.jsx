import styled from 'styled-components'
import { BlockInner } from '../blocks/Block'
import IPsList from './IPsList'
import RangesList from './RangesList'

const List = ({ data = [] }) => {
  if (data.length === 0) return

  const type = data[0].address ? 'addresses' : 'range'
  let content = ''
  if (type == 'addresses') content = <IPsList data={data} />

  if (type == 'range') content = <RangesList data={data} />

  return <Block>{content}</Block>
}

export default List

const Block = styled(BlockInner)`
  padding: 64px 0;

  @media (max-width: 1140px) {
    padding: 32px 24px;
  }
`
