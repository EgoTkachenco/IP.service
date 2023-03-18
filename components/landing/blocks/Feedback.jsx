import styled from 'styled-components'
import Image from 'next/image'
import { H6, Caption } from '@/core'
import { Block, BlockInner } from './Block'

const Feedback = ({
  name,
  position,
  feedback,
  avatar = '/feedback-avatar.png',
}) => {
  return (
    <Block>
      <Content>
        <FeedbackAvatar>
          <Image src={avatar} layout="fill" objectFit="cover" alt={name} />
        </FeedbackAvatar>
        <FeedbackTop>
          <Caption color="dark" weight="700">
            {name}
          </Caption>
          <Caption>{position}</Caption>
        </FeedbackTop>
        <FeedbackText weight="500">{feedback}</FeedbackText>
      </Content>
    </Block>
  )
}

export default Feedback

const Content = styled(BlockInner)`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(52, 64, 84, 0.1);

  @media (max-width: 1140px) {
    width: auto;
    border-top: 1px solid rgba(52, 64, 84, 0.1);
    border-bottom: unset;
    margin: 0 24px;
    padding: 0;
    padding-top: 24px;
  }
`
const FeedbackAvatar = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  @media (max-width: 1140px) {
    width: 50px;
    height: 50px;
  }
`

const FeedbackTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0 40px;

  & :last-child {
    opacity: 0.5;
  }
  @media (max-width: 1140px) {
    margin: 16px 0 24px;
  }
`

const FeedbackText = styled(H6)`
  width: 75%;
  text-align: center;
  @media (max-width: 1140px) {
    width: 100%;
    font-weight: 500;
  }
`
