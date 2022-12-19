import React from 'react'
import { Box } from '@chakra-ui/react'
import {
  Breadcrumb as DefaultBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { colors } from '../../themes'
import './style.scss'

type itemProps = {
  href?: string
  label?: string
}
type itemsProps = {
  items: itemProps[]
}

function Breadcrumb(props: itemsProps) {
  const { items } = props
  const location = useLocation()
  const isActive = (item: itemProps) => {
    if (item?.href) {
      return item?.href == location.pathname
    }
    return false
  }
  return (
    <Box className="Breadcrumb__container">
      <DefaultBreadcrumb className="breadcrumb-container">
        {items.map((item: itemProps,index:number) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              color={isActive(item) ? colors?.primary : 'initial'}
              href={item?.href ?? '#'}
            >
              {item?.label ?? ''}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </DefaultBreadcrumb>
    </Box>
  )
}

export default Breadcrumb