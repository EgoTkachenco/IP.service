import { Card, Flex, H6, Chip, Caption } from '@/core'
import { useState } from 'react'
import {
  Area,
  AreaChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const tabs = ['14 days', '30 days', '12 month']

const UsageChart = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <Card width="100%" gap="64px" color="white">
      <Flex width="100%" justify="space-between">
        <H6>Usage</H6>

        <Flex gap="10px">
          {tabs.map((tab) => {
            const isActive = activeTab === tab
            return (
              <Chip
                key={tab}
                type={isActive ? 'primary' : 'grey-outline'}
                onClick={() => setActiveTab(tab)}
              >
                <Caption color={isActive ? 'white' : 'text'} weight="600">
                  {tab}
                </Caption>
              </Chip>
            )
          })}
        </Flex>
      </Flex>
      <ResponsiveContainer width="100%" aspect={10 / 3}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="73.24%" stopColor="#0E5DF6" stopOpacity={0.08} />
              <stop offset="98.65%" stopColor="#0E5DF6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Area
            type="monotone"
            dataKey="pv"
            stroke="transparent"
            fill="url(#colorPv)"
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#EE2354"
            fill="transparent"
            strokeWidth="2"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#0E5DF6"
            fill="transparent"
            strokeWidth="2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default UsageChart

const data = [
  {
    name: 'Dec 6',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Dec 8',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Dec 10',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Dec 12',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dec 14',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Dec 16',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dec 18',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
