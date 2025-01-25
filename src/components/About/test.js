import React from 'react'
import About from './About'
import { Box, HStack, VStack, Flex } from '@chakra-ui/react'
import TimelineItem from './TimelineItem'

function test() {
  return (
    <VStack>
        Normal about section
        <HStack>
            <Box>Line Component</Box>
            <HStack>
                <Box>Line pointing from original vertical line box component to timeline component</Box>
                <TimelineItem />
            </HStack>
        </HStack>
    </VStack>
  )
}

export default test