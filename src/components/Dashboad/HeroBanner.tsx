import { Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PlayIcon } from "lucide-react";

// Create motion components
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

function HeroBanner() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.3,
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
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay: 0.2,
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <MotionFlex
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      w="full"
      h={{ base: "100%", md: "183px" }}
      bg="#eff1ff"
      borderRadius="3xl"
      bgImage="url(/mask-group.png)"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      overflow="hidden"
      alignItems={"center"}
      direction={{ base: "column", md: "row" }}
    >
      <MotionVStack
        variants={containerVariants}
        w={{ base: "full", md: "430px" }}
        align="start"
        spacing={{ base: 4, md: 8 }}
        position="relative"
        p={{ base: 4, md: "27px 34px" }}
      >
        <MotionVStack
          variants={containerVariants}
          align="start"
          spacing="3px"
          w="full"
        >
          <MotionHeading
            variants={itemVariants}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
            fontFamily="Geist, Helvetica"
          >
            Getting Started
          </MotionHeading>
          <MotionText
            variants={itemVariants}
            fontSize="sm"
            fontWeight="medium"
            fontFamily="Geist, Helvetica"
          >
            Description Text
          </MotionText>
        </MotionVStack>

        <MotionButton
          variants={buttonHoverVariants}
          whileHover="hover"
          whileTap="tap"
          variant="outline"
          bg="white"
          borderRadius="10px"
          boxShadow="0px 1px 1px 0.05px rgba(0,0,0,0.05)"
          px={2}
          py={2.5}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <MotionText
            fontSize="xs"
            fontWeight="semibold"
            fontFamily="Geist, Helvetica"
          >
            See how it works
          </MotionText>
          <motion.div initial="initial" whileHover="hover">
            <PlayIcon style={{ width: "16px", height: "16px" }} />
          </motion.div>
        </MotionButton>
      </MotionVStack>

      <MotionImage
        variants={imageVariants}
        w={{ base: "100%", md: "544px" }}
        h="full"
        top="0"
        right="0"
        alt="Mask group"
        src="/mask-group-1.png"
        objectFit="cover"
        animate={{
          scale: [1, 1.02, 1],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
    </MotionFlex>
  );
}

export default HeroBanner;
