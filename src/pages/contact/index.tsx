import { Box, Stack, Heading, HStack, Text } from "@chakra-ui/react";
import { InsideBanner } from "../../components/InsideBanner";
import { Logo } from "../../components/Logo";
import { NavBar } from "../../components/NavBar";
import { ContactForm } from '../../components/ContactForm';

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "CONTACT US",
      pageIsLanding: false
    },
  };
}

const Page = () => (
  <HStack>
    <Box width={'50%'}>
      <Text> Email: est@email.com </Text>
      <Text> Phone: 33333333 </Text>
    </Box>
      <ContactForm />
  </HStack>
);

export default Page;
