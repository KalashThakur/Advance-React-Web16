import { Box, Button, SimpleGrid, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import {MoonIcon, SunIcon} from "@chakra-ui/icons"

export const Layouts = () => {
    const items = new Array(12).fill(0).map((a, i) => i + 1);
    const {colorMode, toogleColorMode} = useColorMode();

  return (
    <Box>
        <Button>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            
        </Button>
        {/* <SimpleGrid columns={[2,3,4]}> */}
        <SimpleGrid columns={{
            base: 2,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
            "2xl": 6
        }}
         bg={useColorModeValue("blue.400", "red.400")}>


        {items.map((item, index) => {
            return (
                <Box key={index} border="1px solid blue">
                    {item}
                </Box>
            )
        })}
        </SimpleGrid>
    </Box>
  )
}
