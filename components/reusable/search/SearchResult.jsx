import styled from 'styled-components'
import { Card, Chip, Flex, H6 } from '@/core'
import JSONPreview from './JSONPreview'
import PlanCard from './PlanCard'
import { Fragment } from 'react'
import CopyButton from '@/components/reusable/CopyButton'

const Result = ({ result }) => {
  if (!result) return ''

  const renderPlan = (plan_data, bottomSlot) => {
    if (!plan_data) return ''
    const last_element = plan_data.length - 1
    return plan_data.map((block, i) => (
      <Fragment key={i}>
        <DataPreviewBlock
          title={block.name}
          data={block.data}
          bottomSlot={i === last_element && bottomSlot}
        />
        {i !== last_element && <Divider />}
      </Fragment>
    ))
  }

  return (
    <WrapperCard color="white">
      {result.map((plan) => (
        <Fragment key={plan.name}>
          <PlanLabels plan={plan.name} />
          {renderPlan(
            plan.data_groups,
            <PlanCard
              name={plan.name}
              buttonColor={plan_color[plan.name]}
              buttonText={`Buy for $${plan.month_price.toFixed(2)}/mo`}
              onClick={() => {}}
            />
          )}
        </Fragment>
      ))}
    </WrapperCard>
  )
}

export default Result

const DataPreviewBlock = ({ title, data, bottomSlot }) => {
  return (
    <Flex direction="column" width="100%">
      <TitleContainer justify="space-between" align="center" width="100%">
        <H6>{title}</H6>
        <CopyButton
          outline
          color="dark"
          size="small-text"
          width="auto"
          data={data}
        >
          Copy JSON
        </CopyButton>
      </TitleContainer>

      <JSONPreview data={data} />

      {bottomSlot}
    </Flex>
  )
}

const PlanLabels = ({ plan }) => {
  const plans = ['Basic', 'Standard', 'Business']
  const filtered_plans = plans.slice(0, plans.indexOf(plan) + 1)
  return (
    <ChipContainer gap="10px">
      {filtered_plans.map((name, i) => (
        <Chip type={plan_color[name]} key={i}>
          {name}
        </Chip>
      ))}
    </ChipContainer>
  )
}

const plan_color = {
  Basic: 'success',
  Standard: 'secondary',
  Business: 'primary',
}

const WrapperCard = styled(Card)`
  width: 100%;
  @media (max-width: 1140px) {
    padding: 16px;
  }
`

const ChipContainer = styled(Flex)`
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 1px solid rgba(7, 22, 37, 0.1);
  margin-bottom: 30px;
`

const Divider = styled.div`
  height: 1px;
  background: rgba(7, 22, 37, 0.1);
  width: 100%;
  margin: 30px 0;

  @media (max-width: 1140px) {
    margin: 24px 0;
  }
`

const TitleContainer = styled(Flex)`
  margin-bottom: 10px;
`
