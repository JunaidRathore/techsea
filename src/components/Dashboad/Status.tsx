import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  PresentationIcon,
} from "lucide-react";
import { useState } from "react";

// Create motion components
const MotionCard = motion(Card);
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);
const MotionImage = motion(Image);
const MotionHStack = motion(HStack);
const MotionVStack = motion(VStack);
const MotionBadge = motion(Badge);
const MotionSimpleGrid = motion(SimpleGrid);

function Status() {
  const [selectedJob, setSelectedJob] = useState(-1);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
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

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 300,
      },
    },
    tap: { scale: 0.98 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
        delay: 0.6,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const jobItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.2 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.03,
      backgroundColor: "#f9f9f9",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
      },
    },
  };

  return (
    <MotionCard
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      bg="#f7f7f7"
      borderRadius="18px"
      border="1px solid"
      borderColor="#f2f2f2"
    >
      <CardHeader
        px={4}
        py={2.5}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={{ base: "flex-start", sm: "center" }}
        justifyContent="space-between"
        gap={2}
      >
        <MotionHeading
          variants={headerVariants}
          fontSize="base"
          fontWeight="semibold"
          fontFamily="Geist, Helvetica"
        >
          Continue where you left off
        </MotionHeading>
        <MotionButton
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          variant="outline"
          bg="white"
          borderRadius="10px"
          border="0.5px solid"
          borderColor="#e4e4e4"
          boxShadow="0px 1px 1px 0.05px rgba(0,0,0,0.05)"
          display="flex"
          alignItems="center"
          gap={1}
          px={3}
          py={2}
        >
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="#101419"
            fontFamily="Geist, Helvetica"
          >
            Start New
          </Text>
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
          >
            <PresentationIcon style={{ width: "20px", height: "20px" }} />
          </motion.div>
        </MotionButton>
      </CardHeader>
      <CardBody p={0}>
        <MotionCard
          variants={itemVariants}
          bg="white"
          borderRadius="18px"
          whileHover={{
            scale: 1.01,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.07)",
          }}
          transition={{ duration: 0.2 }}
        >
          <CardBody
            p={5}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            alignItems="center"
            gap={4}
          >
            <MotionBox
              variants={imageVariants}
              whileHover="hover"
              position="relative"
              w={{ base: "full", sm: "181px" }}
              h="124px"
              overflow="hidden"
              borderRadius="8px"
            >
              <Box position="relative" h="144px">
                <Box
                  position="absolute"
                  w="170px"
                  h="71px"
                  top="73px"
                  left="7px"
                  borderRadius="85px/35.67px"
                  bgGradient="radial(50% 50% at 50% 50%, rgba(98,98,98,1) 0%, rgba(255,255,255,0) 100%)"
                />
                <MotionImage
                  position="absolute"
                  w="full"
                  h="124px"
                  top="0"
                  left="0"
                  alt="Mask group"
                  src="/mask-group-3.png"
                  objectFit="cover"
                  animate={{
                    scale: [1, 1.03, 1],
                    transition: {
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                />
              </Box>
            </MotionBox>

            <MotionVStack
              variants={itemVariants}
              w={{ base: "full", sm: "191.76px" }}
              align="start"
              spacing={4}
            >
              <MotionHStack spacing="5px" w="full">
                <MotionImage
                  variants={itemVariants}
                  w="32px"
                  h="32px"
                  alt="Brand logo"
                  src="/brand-logo-7.svg"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      repeatDelay: 2,
                    },
                  }}
                />
                <VStack w="154.76px" align="start" spacing={0}>
                  <HStack spacing="5px">
                    <Text
                      fontSize="12.7px"
                      fontWeight="medium"
                      color="textbody"
                      letterSpacing="-0.13px"
                      lineHeight="15.9px"
                      whiteSpace="nowrap"
                      fontFamily="Geist, Helvetica"
                    >
                      SNAPCHAT
                    </Text>
                  </HStack>
                  <Text
                    fontSize="14.5px"
                    fontWeight="semibold"
                    color="#101419"
                    letterSpacing="-0.15px"
                    lineHeight="18.2px"
                    fontFamily="Geist, Helvetica"
                  >
                    Snr. Product Designer
                  </Text>
                </VStack>
              </MotionHStack>

              <MotionBadge
                variants={badgeVariants}
                animate={["visible", "pulse"]}
                display="flex"
                alignItems="center"
                gap="7.26px"
                px="6.36px"
                py="3.63px"
                bg="white"
                borderRadius="13.62px"
                border="0.45px solid"
                borderColor="#ededed"
              >
                <Text
                  fontSize="10.9px"
                  fontWeight="medium"
                  color="#000000"
                  fontFamily="Geist, Helvetica"
                >
                  Readiness
                </Text>
                <Text
                  fontSize="12.7px"
                  fontWeight="semibold"
                  color="#00d515"
                  fontFamily="Geist, Helvetica"
                >
                  85%
                </Text>
              </MotionBadge>

              <MotionButton
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                bg="black"
                borderRadius="9.08px"
                px="12.71px"
                py="7.26px"
                w="full"
              >
                <Text
                  fontSize="12.7px"
                  fontWeight="semibold"
                  color="white"
                  fontFamily="Geist, Helvetica"
                >
                  Continue&nbsp;&nbsp;Interview
                </Text>
              </MotionButton>
            </MotionVStack>
          </CardBody>
        </MotionCard>

        <MotionCard
          variants={itemVariants}
          mt={3}
          bg="white"
          borderRadius="18px"
        >
          <CardBody p={3}>
            <MotionHeading
              variants={headerVariants}
              fontSize="sm"
              fontWeight="semibold"
              fontFamily="Geist, Helvetica"
              mb={4}
            >
              Others
            </MotionHeading>
            <MotionSimpleGrid
              variants={containerVariants}
              columns={{ base: 1, sm: 2 }}
              spacing={{ base: 3, md: "21px 35px" }}
            >
              {[
                { company: "NETFLIX", logo: "/brand-logo-2.svg" },
                { company: "SNAPCHAT", logo: "/brand-logo-5.svg" },
                { company: "NOTION", logo: "/brand-logo-8.svg" },
                { company: "META", logo: "/brand-logo-6.svg" },
              ].map((job, index) => (
                <MotionHStack
                  key={index}
                  custom={index}
                  variants={jobItemVariants}
                  whileHover="hover"
                  spacing="25px"
                  justify="space-between"
                  p={2}
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() =>
                    setSelectedJob(selectedJob === index ? -1 : index)
                  }
                >
                  <HStack spacing={2}>
                    <MotionBox
                      position="relative"
                      w="40px"
                      h="40px"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 10, transition: { duration: 0.3 } }}
                    >
                      <Box
                        position="relative"
                        w="41px"
                        h="41px"
                        left="-1px"
                        bg="#f6f6f6"
                        borderRadius="9.04px"
                        border="0.6px solid"
                        borderColor="#e6e6e6"
                      >
                        <Box
                          position="absolute"
                          w="40px"
                          h="37px"
                          top="0"
                          left="0"
                          bg="white"
                          borderRadius="9.04px"
                        />
                        <MotionImage
                          position="absolute"
                          w="29px"
                          h="30px"
                          top="5px"
                          left="6px"
                          alt="Brand logo"
                          src={job.logo}
                          whileHover={{ scale: 1.1 }}
                        />
                      </Box>
                    </MotionBox>
                    <VStack align="start" spacing="2px">
                      <Text
                        fontSize="xs"
                        fontWeight="medium"
                        color="textbody"
                        letterSpacing="-0.12px"
                        lineHeight="15px"
                        fontFamily="Geist, Helvetica"
                      >
                        {job.company}
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color="textheading"
                        letterSpacing="-0.14px"
                        lineHeight="17.5px"
                        fontFamily="Inter, Helvetica"
                      >
                        Snr. Product Designer
                      </Text>
                    </VStack>
                  </HStack>
                  <motion.div
                    animate={{ rotate: selectedJob === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {selectedJob === index ? (
                      <ChevronDownIcon
                        style={{ width: "18px", height: "18px" }}
                      />
                    ) : (
                      <ChevronRightIcon
                        style={{ width: "18px", height: "18px" }}
                      />
                    )}
                  </motion.div>
                </MotionHStack>
              ))}
            </MotionSimpleGrid>
          </CardBody>
        </MotionCard>
      </CardBody>
    </MotionCard>
  );
}

export default Status;
