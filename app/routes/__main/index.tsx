import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

export default function HomeRoute() {
  return (
    <Container>
      <VStack>
        <Heading>Remix Chakra</Heading>
        <Input placeholder="input field" />
        <Button colorScheme="purple" as={Link} to="/not-found">
          This Reads to Not Found Page
        </Button>
      </VStack>
    </Container>
  );
}
