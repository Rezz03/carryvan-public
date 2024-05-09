import { Box, Stack, Heading, VStack } from "@chakra-ui/react";
import { InsideBanner } from "../../components/InsideBanner";
import { Logo } from "../../components/Logo";
import { NavBar } from "../../components/NavBar";
import { DriverForm } from '../../components/DriverForm';

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "JOIN THE FLEET",
      pageIsLanding: false
    },
  };
}

const Page = () => (
  <VStack>
      <DriverForm/>
  </VStack>
);

export default Page;
