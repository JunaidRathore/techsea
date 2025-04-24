import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  FileIcon,
  SparklesIcon,
} from "lucide-react";
import { useState } from "react";

// Create motion components
const MotionCard = motion(Card);
const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionHStack = motion(HStack);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const overviewStats = [
  {
    icon: <BriefcaseIcon style={{ width: "20px", height: "20px" }} />,
    title: "Jobs Tracked",
    value: "104",
    trend: "up",
  },
  {
    icon: <Image w="20px" h="20px" alt="Scroll" src="/scroll-1.svg" />,
    title: "Coverletters Generated",
    value: "95",
    trend: "right",
  },
  {
    icon: <FileIcon style={{ width: "20px", height: "20px" }} />,
    title: "Resume Updates",
    value: "9",
    trend: "up",
  },
  {
    icon: <SparklesIcon style={{ width: "20px", height: "20px" }} />,
    title: "AI Rewrite Use",
    value: "95",
    trend: "up",
  },
];

const timeOptions = [
  "Today",
  "This week",
  "This month",
  "This year",
  "All time",
];

function Overview() {
  const [timeFrame, setTimeFrame] = useState("This week");
  const [showAllData, setShowAllData] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
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

  const valueVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
        delay: 0.2,
      },
    },
  };

  const trendVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.2,
      },
    },
    floating: {
      y: [0, -3, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <MotionCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      bg="#f7f7f7"
      borderRadius="18px"
      border="1px solid"
      borderColor="#dee1e8"
    >
      <CardHeader
        px={4}
        py={3}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <MotionHeading
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          fontSize="base"
          fontWeight="semibold"
          fontFamily="Geist, Helvetica"
        >
          Overview
        </MotionHeading>

        {/* Converted button to Menu dropdown */}
        <Menu>
          <MenuButton
            as={Button}
            variant="outline"
            bg="white"
            borderRadius="10px"
            border="0.5px solid"
            borderColor="#e4e4e4"
            boxShadow="0px 1px 1px 0.05px rgba(0,0,0,0.05)"
            rightIcon={<ChevronDownIcon size={18} />}
            size="sm"
            _hover={{ bg: "gray.50" }}
          >
            <Text
              fontSize="xs"
              fontWeight="semibold"
              fontFamily="Geist, Helvetica"
            >
              {timeFrame}
            </Text>
          </MenuButton>
          <MenuList borderRadius="md" boxShadow="md">
            {timeOptions.map((option) => (
              <MenuItem
                key={option}
                onClick={() => setTimeFrame(option)}
                fontSize="xs"
                fontWeight={option === timeFrame ? "semibold" : "medium"}
              >
                {option}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </CardHeader>

      <CardBody px={0.5} pb={0}>
        <MotionSimpleGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          columns={{ base: 1, sm: 2 }}
          gap={1}
        >
          {overviewStats.map((stat, index) => (
            <MotionCard
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              }}
              bg="white"
              borderRadius="18px"
            >
              <CardBody p={3}>
                <MotionFlex
                  alignItems="center"
                  justifyContent="space-between"
                  mb={12}
                >
                  <MotionHStack spacing="5px">
                    <motion.div
                      initial={{ opacity: 0, rotate: -10 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <MotionText
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      fontSize="xs"
                      fontWeight="semibold"
                      color="brand.grayscale50"
                      lineHeight="5"
                      fontFamily="Geist, Helvetica"
                      noOfLines={1}
                    >
                      {stat.title}
                    </MotionText>
                  </MotionHStack>

                  {stat.trend === "up" ? (
                    <MotionImage
                      variants={trendVariants}
                      animate={["visible", "floating"]}
                      w="8.99px"
                      h="4.38px"
                      alt="Arrow"
                      src="/arrow-3.svg"
                    />
                  ) : (
                    <MotionImage
                      variants={trendVariants}
                      animate="visible"
                      w="14px"
                      h="1px"
                      alt="Arrow"
                      src="/arrow-3-1.svg"
                    />
                  )}
                </MotionFlex>

                <MotionText
                  variants={valueVariants}
                  color="#101419"
                  fontSize={{ base: "24px", md: "28px" }}
                  fontWeight="semibold"
                  fontFamily="Geist, Helvetica"
                >
                  {stat.value}
                </MotionText>
              </CardBody>
            </MotionCard>
          ))}
        </MotionSimpleGrid>
      </CardBody>

      <MotionFlex
        as={motion.div}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        justify="center"
        align="center"
        gap="3px"
        mt={4}
        cursor="pointer"
        pb={4}
        onClick={() => setShowAllData(!showAllData)}
      >
        <Text fontWeight="semibold" fontSize="sm" fontFamily="Geist, Helvetica">
          Show more data
        </Text>
        <motion.div
          animate={{ rotate: showAllData ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon style={{ width: "18px", height: "18px" }} />
        </motion.div>
      </MotionFlex>
    </MotionCard>
  );
}

export default Overview;
