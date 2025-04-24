import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  Briefcase,
  ChevronDown,
  File,
  Home,
  Linkedin,
  RefreshCcw,
  ScrollText,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function MenuItems() {
  const [institutionName, setInstitutionName] = useState("Institution Name");

  const navItems = [
    {
      icon: <Home size={20} />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <Briefcase size={20} />,
      label: "Job Board",
      active: false,
    },
    {
      icon: <RefreshCcw size={20} />,
      label: "Auto Apply",
      active: false,
    },
    {
      icon: <File size={20} />,
      label: "Resume",
      active: false,
    },
    {
      icon: <ScrollText size={20} />,
      label: "Cover Letter",
      active: false,
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn Analyzer",
      active: false,
    },
    {
      icon: <Users size={20} />,
      label: "Interview",
      active: false,
    },
  ];

  return (
    <Box as="nav" w="240px" p={3}>
      <VStack spacing={4} align="start" width="full">
        {/* Institution Dropdown */}
        <Menu>
          <MenuButton
            as={Flex}
            w="full"
            h="43px"
            bg="white"
            borderRadius="10px"
            border="0.5px solid"
            borderColor="brand.grayscale10"
            boxShadow="0px 1px 1px rgba(0,0,0,0.05)"
            cursor="pointer"
            justifyContent="space-between"
            alignItems="center"
            px={3}
          >
            <Flex justifyContent={"space-between"} alignItems="center" gap={2}>
              <Flex
                w="29px"
                h="27px"
                bg="brand.primary"
                borderRadius="5px"
                align="center"
                justify="center"
                color="white"
                fontWeight="bold"
                shrink={0}
              >
                M
              </Flex>
              <Text fontWeight="medium" fontSize="14px" noOfLines={1}>
                {institutionName}
              </Text>
              <Box flexShrink={0}>
                <ChevronDown size={18} />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setInstitutionName("Institution Name")}>
              Institution Name
            </MenuItem>
            <MenuItem onClick={() => setInstitutionName("Another Institution")}>
              Another Institution
            </MenuItem>
            <MenuItem onClick={() => setInstitutionName("Third Option")}>
              Third Option
            </MenuItem>
          </MenuList>
        </Menu>

        {/* Navigation Items */}
        <VStack spacing={0} align="stretch" w="full">
          {navItems.map((item, index) => (
            <Flex
              key={index}
              align="center"
              gap="10px"
              px={3}
              py={2.5}
              w="full"
              borderRadius="7px"
              bg={item.active ? "#ece9fb" : "transparent"}
              _hover={{
                bg: item.active ? "#ece9fb" : "gray.50",
              }}
              cursor="pointer"
              position="relative"
            >
              {item.active && (
                <Box
                  position="absolute"
                  left={0}
                  w="4px"
                  h="22px"
                  borderRadius="0 5px 5px 0"
                  bg="brand.primary"
                />
              )}
              <Box
                color={item.active ? "brand.primary" : "brand.black"}
                ml={item.active ? "5px" : 0}
              >
                {item.icon}
              </Box>
              <Text
                fontWeight="medium"
                fontSize="14px"
                color={item.active ? "brand.primary" : "brand.black"}
              >
                {item.label}
              </Text>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}
