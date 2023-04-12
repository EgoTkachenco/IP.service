import styled from 'styled-components'
import { Icon, Caption } from '@/core'
import { useState, useEffect } from 'react'

const SubscriptionsTable = ({ plans }) => {
  const getCellValue = (value) => {
    if (!value || typeof value === 'boolean')
      return value ? (
        <Icon icon="done-outline" size="24px" color="success" />
      ) : (
        <Icon icon="close" size="24px" color="danger" />
      )

    return <Caption>{value}</Caption>
  }

  const [data, setData] = useState([])

  useEffect(() => {
    const free_key = 'free_plan'
    const req_key = 'Requests per month'
    const add_req_key = 'Additional requests'
    let order = 1
    let newData = {
      [req_key]: { [free_key]: '50k lookups', order: order++ },
      [add_req_key]: { [free_key]: false, order: order++ },
    }

    plans.forEach((plan) => {
      const planKey = plan.name.toLowerCase()
      const text = document.createElement('span')
      text.innerHTML = plan.additional_description
      newData[req_key][planKey] = (
        <span
          dangerouslySetInnerHTML={{
            __html: text.childNodes[0].childNodes[0].innerText,
          }}
        />
      )
      newData[add_req_key][planKey] = (
        <span
          dangerouslySetInnerHTML={{
            __html: text.childNodes[0].childNodes[2].data,
          }}
        />
      )
      plan.options.forEach((option) => {
        if (!newData[option.name])
          newData[option.name] = { [free_key]: false, order: order++ }
        newData[option.name][planKey] = !!option.included
      })
    })
    newData = Object.keys(newData)
      .map((key) => ({ key, ...newData[key] }))
      .sort((a, b) => a.order - b.order)
    setData(newData)
  }, [plans])

  return (
    <Table>
      <TableHeaderRow>
        <TableCell>Key features</TableCell>
        <TableCell>Free plan</TableCell>
        <TableCell>Basic</TableCell>
        <TableCell>Standard</TableCell>
        <TableCell>Business</TableCell>
      </TableHeaderRow>

      {data.map((row, i) => (
        <TableRow key={i}>
          <TableCell>
            <Caption weight="600">{row.key}</Caption>
          </TableCell>
          <TableCell>{getCellValue(row.free_plan)}</TableCell>
          <TableCell>{getCellValue(row.basic)}</TableCell>
          <TableCell>{getCellValue(row.standard)}</TableCell>
          <TableCell>{getCellValue(row.business)}</TableCell>
        </TableRow>
      ))}
    </Table>
  )
}

export default SubscriptionsTable

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 168px;

  @media (max-width: 1140px) {
    display: none;
  }
`
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  height: 80px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  align-items: center;
`
const TableHeaderRow = styled(TableRow)`
  height: 58px;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`

const TableCell = styled.div`
  padding: 0 30px;
`

const data = [
  {
    key: 'Requests per month',
    free_plan: '50k',
    basic: '150k',
    standard: '250k',
    business: '500k',
  },
  {
    key: 'Requests per month',
    free_plan: false,
    basic: '$20 per extra \n 10k requests',
    standard: '$30 per extra \n 25k requests',
    business: '$60 per extra \n 50k requests',
  },
  {
    key: 'IP Geolocation',
    free_plan: true,
    basic: true,
    standard: true,
    business: true,
  },
  {
    key: 'ASN',
    free_plan: false,
    basic: true,
    standard: true,
    business: true,
  },
  {
    key: 'Privacy Detection',
    free_plan: false,
    basic: false,
    standard: true,
    business: true,
  },
  {
    key: 'Abuse Contact',
    free_plan: false,
    basic: false,
    standard: false,
    business: true,
  },
  {
    key: 'IP to Mobile Carrier',
    free_plan: false,
    basic: false,
    standard: false,
    business: true,
  },
  {
    key: 'IP to Company',
    free_plan: false,
    basic: false,
    standard: false,
    business: true,
  },
  {
    key: 'Hosted Domains',
    free_plan: false,
    basic: false,
    standard: false,
    business: true,
  },
  {
    key: 'IP Whois',
    free_plan: false,
    basic: false,
    standard: false,
    business: false,
  },
  {
    key: 'IP Ranges',
    free_plan: false,
    basic: false,
    standard: false,
    business: false,
  },
]
