import { Card, CardBody, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

import HeroBanner from "./HeroBanner";
import Overview from "./Overview";
import QuickActions from "./QuickActions";
import Status from "./Status";

export default function Dashboard() {
  return (
    <Card
      w="full"
      borderRadius="17px"
      overflow="hidden"
      border="0.5px solid"
      borderColor="#e0e1e2"
      boxShadow="0px 1px 1px 0.06px rgba(0,0,0,0.1)"
    >
      <CardBody p={{ base: 3, md: 6 }}>
        <VStack w="full" align="start" spacing={{ base: "24px", md: "41px" }}>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
            fontFamily="Geist, Helvetica"
          >
            Hello, Chris
          </Heading>

          <HeroBanner />
          <QuickActions />

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 4, md: "24px 25px" }}
            w="full"
          >
            <Overview />
            <Status />
          </SimpleGrid>
        </VStack>
      </CardBody>
    </Card>
  );
}
