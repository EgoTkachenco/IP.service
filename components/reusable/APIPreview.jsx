import { useState } from 'react'
import { Flex, Text, Icon, Card, Input, Chip } from '@/core'
import JSONPreview from '@/components/reusable/search/JSONPreview'
import { useIP } from '@/hooks'
import styled from 'styled-components'
import { validateIP } from '@/utils'
import { useForm } from '@mantine/form'
import Search from '@/pages/app/search'

const example_list = ['', '215.204.222.212', '247.193.70.173', '66.131.120.255']

const APIPreview = () => {
  const { ip, setIp, data, isFetch } = useIP('')
  const form = useForm({
    initialValues: {
      search: ip,
    },

    validate: {
      search: (value) => {
        if (!value) return 'Required'
        if (!validateIP(value)) return 'Invalid IP'
        return null
      },
    },
  })
  const onSubmit = form.onSubmit((values) => setIp(values.search))
  return (
    <Flex direction="column">
      <SearchForm onSubmit={onSubmit}>
        <Input
          {...form.getInputProps('search')}
          rightSlot={
            <IconContainer onClick={onSubmit}>
              <Icon icon="search" size="16px" color="white" />
            </IconContainer>
          }
        />
      </SearchForm>

      <ContentCard color="dark">
        <JSONPreview data={data || {}} />
      </ContentCard>
      <ChipContainer flex="1">
        {example_list.map((example, i) => (
          <Chip
            key={i}
            type={example === ip ? 'primary-flat' : 'dark'}
            onClick={() => setIp(example)}
          >
            {example ? example : 'Your IP'}
          </Chip>
        ))}
      </ChipContainer>
    </Flex>
  )
}

export default APIPreview

const ContentCard = styled(Card)`
  width: 100%;
  margin: 16px 0 4px;
  flex-grow: 1;
  border-radius: 8px;
`

const ChipContainer = styled(Flex)`
  width: 100%;
  gap: 4px;
  max-width: 100%;
  overflow: auto;
  & > * {
    min-width: 120px;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
`

const SearchForm = styled.form`
  width: 100%;
`
