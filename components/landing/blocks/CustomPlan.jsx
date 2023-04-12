import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex } from '@/core'
import SelectedServicesCart from '@/components/reusable/SelectedServicesCart'
import CustomServiceCard from '@/components/reusable/CustomServiceCard'

const CustomPlan = ({ period, details, onSubscribe }) => {
  const [selected, setSelected] = useState([])
  const handleSelect = (value) => {
    if (selected.includes(value))
      setSelected(selected.filter((v) => v !== value))
    else setSelected([...selected, value])
  }
  const removeItem = (id) => setSelected(selected.filter((v) => v !== id))
  return (
    <Container>
      <CardsContainer>
        {details.map((detail) => (
          <CustomServiceCard
            key={detail.id}
            period={period}
            details={detail}
            isActive={selected.includes(detail.id)}
            handleSelect={() => handleSelect(detail.id)}
          />
        ))}
      </CardsContainer>
      <SelectedServicesCart
        period={period}
        details={details}
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
  gap: 30px;
  flex-wrap: wrap;
  flex-grow: 1;
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
