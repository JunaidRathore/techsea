import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { Menu } from "lucide-react";

import Dashboard from "./components/Dashboad";
import Sidebar from "./components/Sidebar";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bg="white" w="full" minH="100vh">
      <Sidebar isOpen={isOpen} onClose={onClose} />

      <Box
        as="main"
        flex="1"
        w={{ base: "100%", lg: "calc(100% - 240px)" }}
        ml={{ base: 0, lg: "240px" }}
      >
        <Flex direction="column" w="full">
          {/* Mobile Menu Button */}
          <Box display={{ base: "block", lg: "none" }} p={4}>
            <IconButton
              aria-label="Open menu"
              icon={<Menu />}
              onClick={onOpen}
              variant="outline"
              color="brand.black"
              borderColor="brand.grayscale10"
            />
          </Box>

          {/* Main Content */}
          <Box p={{ base: 4, md: 6 }}>
            <Dashboard />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
