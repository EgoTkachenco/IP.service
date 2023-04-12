import styled from 'styled-components'
import { Flex, H1, H6, Button } from '@/core'
import { BlockInner } from './blocks/Block'
import APIAccess from './blocks/APIAccess'
import CustomPlan from './blocks/CustomPlan'
import Switch from '@/components/reusable/Switch'
import { useState, useContext } from 'react'
import ModalContext from '@/utils/modalContext'
import AuthContext from '@/utils/authContext'

const Pricing = ({
  currentPlan,
  customPlan = [],
  plans,
  onPlanChange,
  setCustomPlan,
}) => {
  const [period, setPeriod] = useState('month')
  const [tab, setTab] = useState('api')
  const { openModal } = useContext(ModalContext)
  const { isLogged } = useContext(AuthContext)
  const handleSubscription = (params, callback) => {
    if (isLogged) return callback(params, period)
    else {
      openModal('sign-up')
      return Promise.reject()
    }
  }
  return (
    <>
      <BlockInner direction="column">
        <Title color="dark">Affordable rates for precise IP data</Title>
        <Subtitle>
          {
            'From new side projects to enterprise-grade IP data accuracy, \nour tailored solutions have you covered.'
          }
        </Subtitle>

        <BottomContainer>
          <ButtonsContainer>
            <Button
              color="primary"
              outline={tab !== 'api'}
              onClick={() => setTab('api')}
            >
              Our plans
            </Button>
            <Button
              color="primary"
              outline={tab !== 'custom'}
              onClick={() => setTab('custom')}
            >
              Create your plan
            </Button>
          </ButtonsContainer>

          <Switch
            labelOff="Yearly"
            labelOn="Monthly"
            value={period === 'month'}
            onChange={(value) => setPeriod(value ? 'month' : 'year')}
          />
        </BottomContainer>
        {tab === 'api' && (
          <APIAccess
            currentPlan={currentPlan}
            period={period}
            plans={plans}
            onPlanChange={(plan) => handleSubscription(plan, onPlanChange)}
          />
        )}
        {tab === 'custom' && (
          <CustomPlan
            details={customPlan}
            period={period}
            onSubscribe={(options) =>
              handleSubscription(options, setCustomPlan)
            }
          />
        )}
      </BlockInner>
    </>
  )
}

export default Pricing

const Title = styled(H1)`
  margin: 100px 0 40px;

  @media (max-width: 1140px) {
    margin: 48px 0 16px;
  }
`

const Subtitle = styled(H6)`
  @media (max-width: 1140px) {
    white-space: normal;
  }
`

const ButtonsContainer = styled(Flex)`
  gap: 20px;
  button {
    width: 220px;
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
