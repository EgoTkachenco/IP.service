import styled from 'styled-components'
import { Flex, H4, Button } from '@/core'
import Switch from '@/components/reusable/Switch'
import { useState, useEffect } from 'react'
import PlanCard from '@/components/reusable/UpgradePlanCard'
import Animation from '@/components/reusable/Animation'
import CustomPlan from '@/components/landing/blocks/CustomPlan'
import { useRouter } from 'next/router'

const Upgrade = ({
  currentPlan,
  customPlan,
  plans,
  setUserPlan,
  setCustomPlan,
}) => {
  const [period, setPeriod] = useState('month')
  const [tab, setTab] = useState('plans') // plans, custom
  const router = useRouter()

  useEffect(() => {
    if (router.query.tab) setTab(router.query.tab)
  }, [router])
  const changeTab = (tab) => {
    router.query.tab = tab
    router.push(router)
  }

  return (
    <Flex direction="column" gap="30px" width="100%">
      <TitleContainer>
        <H4 color="dark">Get two months free with annual billing</H4>
      </TitleContainer>

      <BottomContainer>
        <ButtonsContainer>
          <Button
            color="primary"
            outline={tab !== 'plans'}
            onClick={() => changeTab('plans')}
          >
            Our plans
          </Button>
          <Button
            color="primary"
            outline={tab !== 'custom'}
            onClick={() => changeTab('custom')}
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
      {tab === 'plans' && (
        <PlansList
          currentPlan={currentPlan}
          plans={plans}
          period={period}
          onPlanChoose={(name) => setUserPlan(name, period)}
        />
      )}
      {tab === 'custom' && (
        <CustomPlan
          details={customPlan}
          period={period}
          onSubscribe={(options) => setCustomPlan(options, period)}
        />
      )}
    </Flex>
  )
}

export default Upgrade

const PlansList = ({ currentPlan, plans, period, onPlanChoose }) => {
  let priceKey = period === 'year' ? 'year_price' : 'month_price'
  return (
    <CardsContainer flex="1 1">
      {plans &&
        plans.map((plan, i) => (
          <Animation
            key={plan.name}
            delay={i * 0.2}
            style={{ display: 'flex', alignItems: 'strench' }}
          >
            <PlanCard
              key={plan.name}
              name={plan.name}
              priceType={period}
              price={plan[priceKey]}
              description={plan.description}
              additional_description={plan.additional_description}
              options={plan.options}
              setPlan={() => onPlanChoose(plan.name)}
              isCurrent={currentPlan?.name === plan.name}
              buttonId={`${plan.name}-${period}-btn`}
            />
          </Animation>
        ))}
    </CardsContainer>
  )
}

const TitleContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 32px;

    & > :first-child {
      width: 100%;
    }
  }
`

const CardsContainer = styled(Flex)`
  width: 100%;
  gap: 24px;
  align-items: stretch;
  @media (max-width: 1140px) {
    flex-direction: column;
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
  margin: 20px 0 30px;
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
