import { Box, Stack } from "@chakra-ui/react";
import { css } from '@emotion/react'
import NextLink from 'next/link'
import { Link as ChakraLink, LinkProps, Center, Flex } from '@chakra-ui/react'

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

export const NavBar = () => (
    <Flex width={'100%'}>
        <Stack direction="row" width={'100%'} spacing='50px'>
                {NAV_ITEMS.map((navItem) => (
                    <ChakraLink as={NextLink} href={navItem.href}
                        display="block"
                        fontFamily='"Josefin Sans", sans-serif'
                        fontSize="14px"
                        fontWeight="500"
                        paddingTop={'30px'}
                        paddingLeft={'20px'}
                        paddingRight={'20px'}
                        lineHeight="1"
                        letterSpacing="0.05em"
                        textTransform="uppercase"
                        position="relative"
                        key={navItem.label}>

                        <Box>{navItem.label}</Box>
                    </ChakraLink>
                ))}
        </Stack>
        </Flex>
)