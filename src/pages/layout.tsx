import { Box, Stack, Heading, Container, Flex, HStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Logo } from "../components/Logo";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
export default function Layout({ pageTitle, pageIsLanding, children }) {
      return (
        <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg="gray.50"
      color="black"
      _dark={{
        bg: "gray.900",
        color: "white",
      }}
      transition="all 0.15s ease-out"
      height="100vh">
          <Box
          position="relative"
          top="0"
          width="100%"
          color="black"
          background="white"
        >
            <Flex
              display="flex"
              direction="row"
              width="100%"
              padding="20px 20px 20px 20px"
              justify="center" 
              >
                <HStack width={'70%'} spacing={'100px'}>
                  <Logo></Logo>
                  <NavBar></NavBar>
                  </HStack>
            </Flex>
          <Banner title={pageTitle} isLanding={pageIsLanding}></Banner>
        </Box>
        <Flex width="100%" justify="center" paddingBottom={'40px'}>
          <Box width={"70%"}>
          {children}
          </Box>
          
        </Flex>
        <Footer/>
        </Flex>
      );
  }