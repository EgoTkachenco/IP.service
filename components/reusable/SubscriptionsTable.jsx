import styled from 'styled-components'
import { Icon, Caption } from '@/core'
import { useState, useEffect } from 'react'

const SubscriptionsTable = ({ plans }) => {
  const [data, setData] = useState([])
  const columns = [
    'Requests per month',
    'Additional requests',
    'Geolocation',
    'ASN',
    'Privacy Detection',
    'Abuse',
    'Carrier',
    'Hosted Domains',
    'IP Ranges API',
    'Company',
    'Whois',
    'Support',
  ]

  const getCellValue = (column, planName) => {
    const plan = plans.find((el) => el.name === planName)

    switch (column) {
      case 'Requests per month':
        const limit = ((plan ? plan.requests_count : 50000) / 1000).toFixed(0)
        return <Caption>{limit}k</Caption>
      case 'Additional requests':
        if (!plan) return <Icon icon="close" size="24px" color="danger" />
        return (
          <Caption>{`$${plan.additional_requests_price} per extra \n${(
            plan.additional_requests_limit / 1000
          ).toFixed(0)}k requests`}</Caption>
        )
      case 'Support':
        if (!plan) return <Icon icon="close" size="24px" color="danger" />
        if (plan.name === 'Basic') return <Caption>Basic Support</Caption>
        return <Caption>Priority Support</Caption>
      default:
        let value =
          (plan &&
            plan.options.find((option) => option.name === column)?.included) ||
          false

        if (!plan && column === 'Geolocation') value = true
        return (
          <Icon
            icon={value ? 'done-outline' : 'close'}
            size="24px"
            color={value ? 'success' : 'danger'}
          />
        )
    }
  }

  return (
    <Table>
      <TableHeaderRow>
        <TableCell>Key features</TableCell>
        <TableCell>Free plan</TableCell>
        <TableCell>Basic</TableCell>
        <TableCell>Standard</TableCell>
        <TableCell>Business</TableCell>
      </TableHeaderRow>

      {columns.map((column, i) => (
        <TableRow key={i}>
          <TableCell>
            <Caption weight="600">{column}</Caption>
          </TableCell>
          <TableCell>{getCellValue(column, 'Free')}</TableCell>
          <TableCell>{getCellValue(column, 'Basic')}</TableCell>
          <TableCell>{getCellValue(column, 'Standard')}</TableCell>
          <TableCell>{getCellValue(column, 'Business')}</TableCell>
        </TableRow>
      ))}

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
