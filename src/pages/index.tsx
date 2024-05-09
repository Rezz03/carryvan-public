import { Box, Stack, Heading, VStack, Text, Highlight } from "@chakra-ui/react";

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "title",
      pageIsLanding: true
    },
  };
}

const Index = () => {
  return (
    <VStack paddingTop={'40px'}>
      <Heading size={'md'}>Solving unique packaging and delivery challenges with the ability to ship perishable, fragile, or
large items at lower than traditional private delivery costs.</Heading>
      <Text> With the emergence of the gig economy, also emerged an expectation of convenience in today's world.
            Get it now, do it now, easily and seamlessly.
            This is the generation of everyday owners and entrepreneurs. Owners who sell goods on FB
            Marketplace, rent out their rooms on AIRBNB and side hustle by providing rides on UBER.
      </Text>
      <Text>Despite this, delivery transportation is still antiquated and decades behind. For years the options
            have remained the same; postal services, couriers and pricey privately operated delivery
            companies.</Text>


      <Text><b>Carryvan</b> is that disruptor. By streamlining the process and placing deliveries in the hands of
            everyday owners and entrepreneurs deliveries become more convenient and affordable.</Text>
  </VStack>
);
}

export default Index;
