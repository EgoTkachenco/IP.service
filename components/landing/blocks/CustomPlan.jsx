import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex } from '@/core'
import SelectedServicesCart from '@/components/reusable/SelectedServicesCart'
import CustomServiceCard from '@/components/reusable/CustomServiceCard'

const CustomPlan = ({ period, details = [], onSubscribe }) => {
  const [selected, setSelected] = useState([])
  const basic_support_id = details?.find(
    (el) => el.name === 'Basic support'
  )?.id
  const priority_support_id = details?.find(
    (el) => el.name === 'Priority Support'
  )?.id

  const handleSelect = (value) => {
    let newSelected = []
    if (selected.includes(value)) {
      newSelected = selected.filter((v) => v !== value)
    } else {
      newSelected = [...selected, value]
    }

    // add basic support
    if (
      !newSelected.includes(basic_support_id) &&
      !newSelected.includes(priority_support_id) &&
      newSelected.length >= 1
    )
      newSelected.push(basic_support_id)

    // remove basic if priority support added or no services selected
    if (
      value === priority_support_id ||
      (newSelected.length === 1 && newSelected.includes(basic_support_id))
    )
      newSelected = newSelected.filter((v) => v !== basic_support_id)

    setSelected(newSelected)
  }
  const removeItem = (id) => {
    if (id === basic_support_id) return

    let newSelected = selected.filter((v) => v !== id)

    if (id === priority_support_id && newSelected.length >= 1)
      newSelected.push(basic_support_id)

    if (newSelected.length === 1 && newSelected.includes(basic_support_id))
      newSelected = []

    setSelected(newSelected)
  }
  const getPriceAndDiscount = (selected = []) => {
    const options =
      details?.filter(
        (service) =>
          selected.includes(service.id) &&
          ![basic_support_id, priority_support_id].includes(service.id)
      ) || []
    const priceKey = period === 'month' ? 'month_price' : 'year_price'
    let price = options.reduce((acc, option) => (acc += option[priceKey]), 0)
    let discount = options?.length > 1 ? 2 * (options.length - 1) : 0
    let oldPrice = price

    if (!discount) return { discount, price }

    price = price * ((100 - discount) / 100)
    price =
      price >= 1000
        ? Math.floor(price / 100) * 100 + 99
        : Math.floor(price / 10) * 10 + 9

    // discount = ((oldPrice - price) / oldPrice) * 100
    // discount = discount.toFixed(0)
    // console.log(
    //   'old price: ',
    //   oldPrice,
    //   ' price: ',
    //   price,
    //   ' discount: ',
    //   discount
    // )
    return { price, discount }
  }
  const { price, discount } = getPriceAndDiscount(selected)
  return (
    <Container>
      <CardsContainer>
        {details &&
          details
            .filter((el) => el.id !== basic_support_id)
            .map((detail) => (
              <CustomServiceCard
                key={detail.id}
                period={period}
                details={detail}
                isActive={selected.includes(detail.id)}
                handleSelect={() => handleSelect(detail.id)}
                discount={
                  !selected.includes(detail.id) &&
                  ![basic_support_id, priority_support_id].includes(
                    detail.id
                  ) &&
                  getPriceAndDiscount([...selected, detail.id]).discount
                }
              />
            ))}
      </CardsContainer>
      <SelectedServicesCart
        period={period}
        discount={discount}
        price={price}
        details={details || []}
        selected={selected}
        onItemRemove={removeItem}
        onSubscribe={() => onSubscribe(selected).then(() => setSelected([]))}
      />
    </Container>
  )
}

export default CustomPlan

const Container = styled(Flex)`
  gap: 30px;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`

const CardsContainer = styled(Flex)`
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: stretch;
  & > * {
    flex: 0 1 calc((100% - 30px) / 2);
  }
  @media (max-width: 1140px) {
    gap: 24px;
    flex-direction: column;
    & > * {
      flex: 1 1 100%;
      width: 100%;
    }
  }
`
