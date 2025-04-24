import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";
import { Bell, ChevronRight, HelpCircle } from "lucide-react";

export default function Support() {
  const theme = useTheme();

  return (
    <Box w="240px">
      <Box mx={3} mt={1} mb={3}>
        <Box
          w="full"
          bg={theme.colors.brand.background}
          p={4}
          borderRadius="xl"
        >
          <Box>
            <Text
              fontWeight="bold"
              fontSize="18px"
              lineHeight="1.2"
              color="brand.black"
            >
              10x Job Search
              <br />
              With A Pro Account
            </Text>

            <Box mt={4}>
              <Button
                bg="brand.black"
                color="white"
                borderRadius="full"
                py={1}
                px={6}
                height="38px"
                _hover={{ bg: "gray.800" }}
                fontWeight="medium"
              >
                Upgrade
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <VStack spacing={5} align="start" w="full" px={5} pt={1} pb={3}>
        <HStack spacing={3}>
          <HelpCircle size={20} color={theme.colors.brand.grayscale50} />
          <Text color="brand.grayscale50" fontSize="14px" fontWeight="medium">
            Help and Support
          </Text>
        </HStack>

        <HStack spacing={3}>
          <Bell size={20} color={theme.colors.brand.grayscale50} />
          <Text color="brand.grayscale50" fontSize="14px" fontWeight="medium">
            Notifications
          </Text>
        </HStack>
      </VStack>

      <Divider borderColor="brand.grayscale10" />

      <Flex w="full" justify="space-between" align="center" px={5} py={3}>
        <HStack spacing={3}>
          <Flex
            w="40px"
            h="40px"
            bg="brand.black"
            color="white"
            borderRadius="md"
            justify="center"
            align="center"
            fontWeight="bold"
            fontSize="lg"
          >
            MC
          </Flex>
          <Text fontWeight="medium" fontSize="14px" color="brand.black">
            Moremi Chris
          </Text>
        </HStack>

        <Box>
          <ChevronRight size={20} color={theme.colors.brand.grayscale50} />
        </Box>
      </Flex>
    </Box>
  );
}
