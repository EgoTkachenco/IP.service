import { useState, useEffect } from 'react'
import { Flex, Text, Icon, Card, Input, Chip } from '@/core'
import JSONPreview from '@/components/reusable/search/JSONPreview'
import { useService } from '@/hooks'
import styled from 'styled-components'
import { validateIP } from '@/utils'
import { useForm } from '@mantine/form'
import { gradient } from '@/styles/animations'

const example_list = ['', '215.204.222.212', '247.193.70.173', '66.131.120.255']

const APIPreview = ({
  service,
  validation,
  examples = example_list,
  placeholder = 'Search IP',
  autoload = true,
  examplesfirst = false,
}) => {
  let defaultValue = ''
  if (examples.indexOf('') === -1) defaultValue = examples[0]
  const { ip, setIp, data, isFetch, userIP } = useService(
    defaultValue,
    service,
    autoload
  )

  const form = useForm({
    initialValues: {
      search: defaultValue,
    },

    validate: {
      search: (value) => {
        if (validation) return validation(value)
        if (!value) return 'Required'
        if (!validateIP(value)) return 'Invalid IP'
        return null
      },
    },
  })

  const onSubmit = form.onSubmit((values) => !isFetch && setIp(values.search))

  useEffect(() => {
    form.setFieldValue('search', ip)
  }, [ip])

  return (
    <Flex direction="column">
      <SearchForm onSubmit={onSubmit}>
        <Input
          {...form.getInputProps('search')}
          placeholder={placeholder}
          rightSlot={
            <IconContainer onClick={onSubmit}>
              <Icon icon="search" size="16px" color="white" />
            </IconContainer>
          }
        />
      </SearchForm>

      <ContentCard color="dark" isFetch={isFetch} order={examplesfirst ? 3 : 2}>
        <ContentCardInner className="custom-scroll-dark">
          {!isFetch ? (
            <JSONPreview data={data || {}} errorColor="white" />
          ) : (
            <LoadingText />
          )}
        </ContentCardInner>
      </ContentCard>
      <ChipContainer
        flex="0 1 150px"
        className="custom-scroll"
        order={examplesfirst ? 2 : 3}
      >
        {examples.map((example, i) => (
          <Chip
            key={i}
            type={
              (example ? example === ip : userIP === ip)
                ? 'primary-flat'
                : 'dark'
            }
            onClick={() => !isFetch && setIp(example)}
          >
            {example ? example : 'Your IP'}
          </Chip>
        ))}
      </ChipContainer>
    </Flex>
  )
}

export default APIPreview

const LoadingText = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    const interval = setInterval(
      () => setCount((count) => (count === 3 ? 1 : count + 1)),
      300
    )
    return () => {
      clearInterval(interval)
    }
  }, [])
  const dots = new Array(count).fill('.').join('')
  return <Text>Loading {dots}</Text>
}

const ContentCard = styled(Card)`
  position: relative;
  width: 100%;
  margin: 16px 0;
  flex-grow: 1;
  border-radius: 8px;
  height: 385px;
  max-height: 385px;
  max-width: 550px;
  min-width: 550px;
  order: ${({ order }) => order};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({ isFetch }) => (isFetch ? '6px' : 0)};
    transition: all 0.3s ease-in;
    background: ${({ theme }) =>
      `linear-gradient(-45deg, ${theme.colors.primary}, ${theme.colors.success})`};
    background-size: 200% 200%;
    animation: ${gradient} ${({ isFetch }) => (isFetch ? '5s' : '0')} ease
      infinite;
  }

  @media (max-width: 1140px) {
    max-width: 100%;
    min-width: 100%;
  }
`

const ContentCardInner = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;

  ${Text} {
    font-size: 14px;
  }
`

const ChipContainer = styled(Flex)`
  width: 100%;
  gap: 4px;
  max-width: 100%;
  overflow: auto;
  margin-top: 4px;
  padding-bottom: 8px;
  margin-bottom: -8px;
  order: ${({ order }) => order};

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
  order: 1;
`
