import styled from 'styled-components'
import Image from 'next/image'
import { H6, Caption } from '@/core'
import { Block, BlockInner } from './Block'

const Feedback = () => {
  return (
    <Block>
      <Content>
        <Image
          src="/feedback-avatar.png"
          width={100}
          height={100}
          alt="Andriyy Johnson"
        />
        <FeedbackTop>
          <Caption color="dark" weight="700">
            Andriyy Johnson
          </Caption>
          <Caption>Digital Product Owner</Caption>
        </FeedbackTop>
        <FeedbackText weight="500">
          Before IP.Service, we didn't personalize the site. If people landed on
          it, they would have to identify which country they were coming from,
          or the country wouldn't even be displayed. The visitor often ended up
          navigating through the site or going back to Google to find what they
          were looking for. This resulted in an unsatisfactory experience for
          our users.
        </FeedbackText>
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
`
const FeedbackTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 40px;

  & :last-child {
    opacity: 0.5;
  }
`

const FeedbackText = styled(H6)`
  width: 75%;
  text-align: center;
`
