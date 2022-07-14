import {
  Box,
  Heading,
  Input,
  Button,
  Stack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const Form = () => {
  const [isloading, setIsloading] = useState(false);
  const [otp, setOtp] = useState("");

  return (
    <Box>
      <Heading>Form</Heading>
      <Stack gap="0.5rem">
        <Box>
          <Input type="email" placeholder="email" />
        </Box>
        <Box>
          <Input type="password" placeholder="password" />
        </Box>
        <Box>
          <Stack direction="row">
            <PinInput value={otp} onChange={(value) => setOtp(value)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </Stack>
        </Box>
        <Box>
          <Text>{otp}</Text>
        </Box>
        <Box>
          <Button
            bg={"primaryColor.color1"}
            onClick={() => {
              setIsloading(true);
              setTimeout(() => {
                setIsloading(false);
              }, 2000);
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
