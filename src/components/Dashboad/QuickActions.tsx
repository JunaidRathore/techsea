import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FileIcon } from "lucide-react";

// Create motion components
const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionSimpleGrid = motion(SimpleGrid);

const quickActions = [
  {
    icon: <FileIcon style={{ width: "20px", height: "20px" }} />,
    title: "Create Resume",
  },
  {
    icon: (
      <Box position="relative" w="20px" h="20px">
        <Box position="relative" w="17px" h="16px" top="2px" left="2px">
          <Box position="absolute" w="17px" h="8px" top="8px" left="0">
            <Image
              position="absolute"
              w="17px"
              h="2px"
              top="6px"
              left="0"
              alt="Vector stroke"
              src="/vector-4244--stroke-.svg"
            />
            <Image
              position="absolute"
              w="13px"
              h="8px"
              top="0"
              left="2px"
              alt="Subtract"
              src="/subtract.svg"
            />
          </Box>
          <Image
            position="absolute"
            w="8px"
            h="8px"
            top="0"
            left="4px"
            alt="Vector"
            src="/vector.svg"
          />
        </Box>
      </Box>
    ),
    title: "Practice Mock Interview",
  },
  {
    icon: <Image w="20px" h="20px" alt="User story" src="/user-story.svg" />,
    title: "Complete Profile",
  },
  {
    icon: <Image w="20px" h="20px" alt="Mask group" src="/mask-group-2.png" />,
    title: "Linkedin Review",
  },
];

function QuickActions() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
        delay: 0.1,
      },
    },
    hover: {
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box as="section" w="full">
      <MotionHeading
        fontSize="base"
        fontWeight="semibold"
        fontFamily="Geist, Helvetica"
        mb={3.5}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Quick Actions
      </MotionHeading>

      <MotionSimpleGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        columns={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 3, md: "22px" }}
        w="full"
      >
        {quickActions.map((action, index) => (
          <MotionCard
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderColor: "brand.grayscale50",
            }}
            whileTap={{ scale: 0.98 }}
            bg="white"
            borderRadius="14px"
            border="1px solid"
            borderColor="#e2e2e2"
            cursor="pointer"
            transition={{ duration: 0.2 }}
          >
            <CardBody
              display="flex"
              alignItems="center"
              gap="7px"
              pl={3.5}
              pr={2.5}
              py={3.5}
            >
              <MotionBox variants={iconVariants} whileHover="hover">
                {action.icon}
              </MotionBox>
              <Tooltip
                label={action.title}
                placement="top"
                hasArrow
                bg="gray.700"
                color="white"
                fontSize="sm"
                borderRadius="md"
                px={3}
                py={2}
              >
                <Text
                  as={motion.p}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  fontWeight="semibold"
                  fontSize="base"
                  letterSpacing="-0.16px"
                  lineHeight="5"
                  fontFamily="Geist, Helvetica"
                  noOfLines={1}
                >
                  {action.title}
                </Text>
              </Tooltip>
            </CardBody>
          </MotionCard>
        ))}
      </MotionSimpleGrid>
    </Box>
  );
}

export default QuickActions;
