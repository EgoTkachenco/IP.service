import styled from 'styled-components'
import { H3, Flex } from '@/core'

export const ModalTitle = styled(H3).attrs(() => ({ color: 'dark' }))`
  margin-bottom: 15px;
`

export const ModalSubtitle = styled(Flex).attrs(() => ({ gap: '10px' }))`
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(7, 22, 37, 0.1);
`
