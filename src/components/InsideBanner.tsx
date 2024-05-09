import { Box, Button, Center, Heading, VStack, HStack, StackDivider  } from "@chakra-ui/react";
import { css } from '@emotion/react'

export const InsideBanner = ({ title }: { title: string }) => (
    <Center 
        color='white'
        height="258px" 
        backgroundImage={'/van.jpg'}
    >
        <VStack 
        spacing={10}>
                
                <Heading fontSize={'48px'}
                    fontFamily={"'Montserrat', sans-serif;"}
                    fontWeight={700}
                    letterSpacing={"1px"}
                    lineHeight={"1.25"}
                    margin="15px auto"
                    flexGrow={'1'}
                    flexShrink={'0'}
                    textAlign={'center'}
                >
                    { title }
                </Heading>
        </VStack>

    </Center>
)