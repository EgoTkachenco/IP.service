import styled from 'styled-components'
import { Card, H6, Chip, H5, Caption } from '@/core'
import { CardTitle, CardContent } from '@/components/reusable/styled.jsx'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@/hooks'

const MonthUsage = () => {
  return (
    <Card color="white">
      <CardTitle>
        <H6>This month</H6>
        <Chip type="grey-outline">Manage Overages</Chip>
      </CardTitle>

      <CardContent
        style={{ position: 'relative', width: 'auto', margin: 'auto' }}
      >
        <Progress progress={12} />

        <ProgressContent>
          <H5 color="dark">63 978</H5>
          <Caption>435 022 request left</Caption>
        </ProgressContent>
        <ProgressLabel color="primary" weight="700">
          12%
        </ProgressLabel>
      </CardContent>
    </Card>
  )
}

export default MonthUsage

const ProgressContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProgressLabel = styled(Caption)`
  position: absolute;
  bottom: 0;
  left: 12%;
`

const Progress = ({ progress: initialProgress }) => {
  const [ready, setReady] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    setProgress(initialProgress)
  }, [initialProgress])

  // For svg resize
  const size = useWindowSize()
  useEffect(() => {
    setReady(false)
    setTimeout(() => setReady(true), 300)
  }, [size])
  if (!ready) return null
  return (
    <SVG>
      <Track />
      <Indicator progress={progress} />
    </SVG>
  )
}

const SVG = styled.svg`
  transform: rotate(-180deg);

  width: 410px;
  height: 220px;

  @media (max-width: 550px) {
    width: 300px;
    height: 200px;
  }
  @media (max-width: 450px) {
    width: 250px;
    height: 160px;
  }
`

const Circle = styled.circle`
  fill: transparent;
  stroke-width: 7.5%;
  cx: 50%;
  cy: 7.5%;
  r: 55%;
  stroke-dasharray: calc(2 * ${Math.PI} * 55%);
  stroke-linecap: round;
`

const Track = styled(Circle)`
  stroke: #ddd;
  stroke-dashoffset: calc(2 * ${Math.PI} * 55% * (100 - 50) / 100);
`

const Indicator = styled(Circle)`
  transition: all 0.3s;
  stroke-dashoffset: calc(
    2 * ${Math.PI} * 55% *
      (100 - ${({ progress }) => (progress / 2).toFixed(2)}) / 100
  );
  stroke: ${({ theme }) => theme.colors.primary};
`