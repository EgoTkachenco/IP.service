import { Card, Flex, H6, Chip, Caption, Text } from '@/core'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import styled from 'styled-components'

const tabs = [
  { name: '14 days', value: 14 },
  { name: '30 days', value: 30 },
  { name: '12 month', value: 365 },
]

const UsageChart = ({ data, duration, onDurationChange }) => {
  const [state, setState] = useState([])

  useEffect(() => {
    let chartData = []

    if (data) {
      const keys = Object.keys(data.all)
      chartData = keys.map((key) => ({
        name: key,
        all: data.all[key],
        failed: data.failed[key] || 0,
        successful: data.successful[key] || 0,
      }))
    }
    setState(chartData)
  }, [data])
  const isMobile = useMediaQuery('(max-width: 1140px)')

  return (
    <Wrapper color="white">
      <Flex width="100%" justify="space-between" align="center">
        <H6>Usage</H6>

        <Flex gap="10px">
          {tabs.map((tab) => {
            const isActive = duration === tab.value
            return (
              <Chip
                key={tab.name}
                type={isActive ? 'primary' : 'grey-outline'}
                onClick={() => onDurationChange(tab.value)}
              >
                <Caption
                  color={isActive ? 'white' : 'text'}
                  weight="600"
                  style={{ margin: '-2px' }}
                >
                  {tab.name}
                </Caption>
              </Chip>
            )
          })}
        </Flex>
      </Flex>
      {state && state.length ? (
        <Flex direction="column" gap="32px" width="100%">
          <style>
            {`.recharts-responsive-container {
								margin-left: -32px;
								width: calc(100% + 32px);
								
								@media (max-width: 1140px) {
									margin-left: -32px;
									width: calc(100% + 64px);
								}
							}
							.recharts-xAxis > .recharts-cartesian-axis-ticks text {
								transform: translateY(12px);
							}
						`}
          </style>
          <ResponsiveContainer aspect={isMobile ? 3 / 2 : 10 / 3}>
            <AreaChart data={state}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="73.24%"
                    stopColor="#0E5DF6"
                    stopOpacity={0.08}
                  />
                  <stop offset="98.65%" stopColor="#0E5DF6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Area
                type="monotone"
                dataKey="all"
                stroke="transparent"
                fill="url(#colorPv)"
              />
              <Area
                type="monotone"
                dataKey="failed"
                stroke="#EE2354"
                fill="transparent"
                strokeWidth="2"
              />
              <Area
                type="monotone"
                dataKey="successful"
                stroke="#0E5DF6"
                fill="transparent"
                strokeWidth="2"
              />
              {/* <Legend /> */}
            </AreaChart>
          </ResponsiveContainer>
          <LabelsContainer>
            <ChartLabel>
              <ChartLabelCircle />
              <Text>Total Requests</Text>
            </ChartLabel>
            <ChartLabel>
              <ChartLabelCircle color="primary" />
              <Text>Successfull Requests</Text>
            </ChartLabel>
            <ChartLabel>
              <ChartLabelCircle color="danger" />
              <Text>Failed Requests</Text>
            </ChartLabel>
          </LabelsContainer>
        </Flex>
      ) : (
        <Flex width="100%" justify="center">
          <Caption weight={700}>No usage</Caption>
        </Flex>
      )}
    </Wrapper>
  )
}

export default UsageChart

const Wrapper = styled(Card)`
  width: 100%;
  gap: 64px;

  ${Chip} {
    padding: 4px 10px !important;
  }

  @media (max-width: 1140px) {
    padding: 16px;
    gap: 32px;
  }
`
const LabelsContainer = styled(Flex)`
  gap: 30px;
  @media (max-width: 1140px) {
    flex-direction: column;
    gap: 16px;
  }
`
const ChartLabel = styled(Flex)`
  gap: 10px;
  align-items: center;
`
const ChartLabelCircle = styled.div`
  width: 30px;
  height: 30px;
  background: rgba(14, 93, 246, 0.1);
  border: 2px solid
    ${({ theme, color }) =>
      color ? theme.colors[color] : 'rgba(14, 93, 246, 0.1)'};
  border-radius: 50%;
`
