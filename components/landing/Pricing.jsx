import styled from 'styled-components'
import Layout from './layout/Layout'
import { Flex, Button, H1, H6 } from '@/core'
import { BlockInner } from './blocks/Block'
import APIAccess from './blocks/APIAccess'
import DataDownload from './blocks/DataDownload'
import Switch from '@/components/reusable/Switch'
import { useState } from 'react'
import Animation from '@/components/reusable/Animation'
import { AnimatePresence } from 'framer-motion'

const Pricing = ({ plans }) => {
  const [activeBlock, setActiveBlock] = useState('api')
  const [period, setPeriod] = useState('monthly')

  return (
    <Layout>
      <BlockInner direction="column">
        <Title color="dark">
          Flexible pricing for the most accurate IP data
        </Title>
        <H6>
          {
            'Whether you’re starting off your newest side project or your \n enterprise needs the most accurate IP data, we’ve got you covered.'
          }
        </H6>

        <BottomContainer>
          <ButtonsContainer>
            <Button
              color={activeBlock === 'api' ? 'primary' : 'dark'}
              outline={activeBlock !== 'api'}
              onClick={() => setActiveBlock('api')}
            >
              API access
            </Button>
            <Button
              color={activeBlock === 'data' ? 'primary' : 'dark'}
              outline={activeBlock !== 'data'}
              onClick={() => setActiveBlock('data')}
            >
              Data Download
            </Button>
          </ButtonsContainer>

          {activeBlock === 'api' && (
            <Switch
              labelOff="Yearly"
              labelOn="Monthly"
              value={period === 'monthly'}
              onChange={(value) => setPeriod(value ? 'monthly' : 'yearly')}
            />
          )}
        </BottomContainer>

        {activeBlock === 'api' && <APIAccess period={period} plans={plans} />}
        {activeBlock === 'data' && <DataDownload />}
      </BlockInner>
    </Layout>
  )
}

export default Pricing

const Title = styled(H1)`
  margin: 100px 0 40px;

  @media (max-width: 1140px) {
    margin: 48px 0 16px;
  }
`

const ButtonsContainer = styled(Flex)`
  gap: 20px;
  button {
    width: 438px;
  }
  @media (max-width: 1140px) {
    width: 100%;
    button {
      width: 100%;
    }
  }
`

const BottomContainer = styled(Flex)`
  margin: 60px 0;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;

  & > :nth-child(2) {
    margin-left: auto;
  }

  @media (max-width: 1140px) {
    margin: 32px 0 50px;
    flex-direction: column;
    align-items: flex-start;
  }
`
