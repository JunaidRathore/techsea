import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useTheme,
} from "@chakra-ui/react";

import MenuItems from "./MenuItems";
import Support from "./Support";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: IProps) {
  const theme = useTheme();

  return (
    <>
      {/* Desktop Sidebar */}
      <Box
        as="aside"
        position="fixed"
        left={0}
        top={0}
        bottom={0}
        zIndex={10}
        display={{ base: "none", lg: "block" }}
        w="240px"
        h="100vh"
        bg={theme.colors.brand.sidebarBg}
        borderRight={`1px solid ${theme.colors.brand.grayscale10}`}
        overflowY="auto"
      >
        <Flex direction="column" h="full" justifyContent="space-between" py={6}>
          <MenuItems />
          <Support />
        </Flex>
      </Box>

      {/* Mobile Sidebar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="240px" bg={theme.colors.brand.sidebarBg} p={0}>
          <DrawerBody p={0}>
            <Flex
              direction="column"
              h="full"
              justifyContent="space-between"
              py={4}
            >
              <MenuItems />
              <Support />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Sidebar;
