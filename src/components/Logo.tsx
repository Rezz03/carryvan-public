import { jsx, css } from '@emotion/react'
import { Box, Link, Image } from "@chakra-ui/react";


export const Logo = () => (
    <Link href='/' >
        <Box
            textAlign="left"
            verticalAlign="middle"
        >
            <Image boxSize={'80px'} src={'logo-small.png'} />
        </Box>
    </Link>
)