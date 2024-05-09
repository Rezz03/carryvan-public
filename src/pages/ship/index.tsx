import { Box, Stack, Heading, VStack } from "@chakra-ui/react";
import { InsideBanner } from "../../components/InsideBanner";
import { Logo } from "../../components/Logo";
import { NavBar } from "../../components/NavBar";
import { ShipmentForm } from '../../components/ShipmentForm';

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "SHIP A PACKAGE",
      pageIsLanding: false
    },
  };
}

const Page = () => (
  <VStack>
      <ShipmentForm/>
  </VStack>
);

export default Page;
