import { Box, Button, Center, Heading, VStack, HStack, StackDivider  } from "@chakra-ui/react";
import { css } from '@emotion/react'

export const Banner = ({ title, isLanding }) => {
    if(isLanding) {
        return (
            <Center 
                color='white'
                height="592px"
                backgroundPosition="50% 50%"
                backgroundRepeat="no-repeat"
                backgroundColor="transparent"
                backgroundSize="cover"
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
                            Everyday people changing<br/>the
                            way packages move
                        </Heading>
                        <HStack width="100%" padding-top={'15'}>
                            <Box width="50%">
                                <Button colorScheme="blue"> SHIP A PACKAGE</Button>
                            </Box>
                            <Box width="50%">
                                <Button colorScheme="gray" float={'right'}>JOIN THE FLEET</Button>
                            </Box>

                        </HStack>
                </VStack>

            </Center>
        );
    } 
    return (
        <Center 
            color='white'
            height="258px" 
            backgroundImage={'/van.jpg'}
            backgroundPosition={"50% 50%"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
        >
            <VStack 
            spacing={10}>
                    
                    <Heading fontSize={'90px'}
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
    );
}