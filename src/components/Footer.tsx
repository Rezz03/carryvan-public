import { Flex, FlexProps, Stack, Link as ChakraLink, Box } from "@chakra-ui/react";
import NextLink from 'next/link';

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'HOME',
    href: '/home'
  },
  {
      label: 'SHIP A PACKAGE',
      href: '/ship'
  },
  {
      label: 'JOIN THE FLEET',
      href: '/join'
  },
  {
      label: 'CONTACT',
      href: '/contact'
  },
]


export const Footer = (props: FlexProps) => (
  <Stack direction="row" width="100%" textAlign="center" justify={'center'} backgroundColor={'rgb(43, 108, 176)'} paddingBottom={'30px'}>
                {NAV_ITEMS.map((navItem) => (
                    <ChakraLink as={NextLink} href={navItem.href}
                        display="block"
                        fontFamily='"Josefin Sans", sans-serif'
                        fontSize="12px"
                        fontWeight="500"
                        paddingTop={'30px'}
                        paddingLeft={'20px'}
                        paddingRight={'20px'}
                        lineHeight="1"
                        letterSpacing="0.05em"
                        textTransform="uppercase"
                        position="relative"
                        key={navItem.label}
                        color={'white'}>

                        <Box>{navItem.label}</Box>
                    </ChakraLink>
                ))}
        </Stack>
        
);
