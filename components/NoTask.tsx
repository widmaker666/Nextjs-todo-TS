import { Alert, AlertIcon, Flex } from '@chakra-ui/react'
import React from 'react'

const NoTask = () => {
  return (
   <Flex>
    <Alert status='warning'>
        <AlertIcon/>
        No tasks to display 
    </Alert>
   </Flex>
  )
}

export default NoTask