import styled from 'styled-components'
import Layout from './layout/Layout'
import { Flex, Button, Text, Icon, Card, Input, Chip, H1, H6 } from '@/core'
import { BlockInner } from './blocks/Block'
import APIAccess from './blocks/APIAccess'
import DataDownload from './blocks/DataDownload'
import Switch from '@/components/reusable/Switch'
import { useState } from 'react'

const Pricing = () => {
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

        <ButtonsContainer gap="20px">
          <Button
            color={activeBlock === 'api' ? 'primary' : 'dark'}
            outline={activeBlock !== 'api'}
            width="438px"
            onClick={() => setActiveBlock('api')}
          >
            API access
          </Button>
          <Button
            color={activeBlock === 'data' ? 'primary' : 'dark'}
            outline={activeBlock !== 'data'}
            width="438px"
            onClick={() => setActiveBlock('data')}
          >
            Data Download
          </Button>

          {activeBlock === 'api' && (
            <Switch
              labelOff="Yearly"
              labelOn="Monthly"
              value={period === 'monthly'}
              onChange={(value) => setPeriod(value ? 'monthly' : 'yearly')}
            />
          )}
        </ButtonsContainer>
      </BlockInner>
    </Layout>
  )
}

export default Pricing

const Title = styled(H1)`
  margin: 100px 0 40px;
`

const ButtonsContainer = styled(Flex)`
  margin: 60px 0;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;

  & > :nth-child(2) {
    margin-right: auto;
  }
`
