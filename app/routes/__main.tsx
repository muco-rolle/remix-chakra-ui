import type { MetaFunction } from "@remix-run/node";

import {
  Button,
  ChakraProvider,
  Container,
  extendTheme,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Link, Outlet, useCatch } from "@remix-run/react";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

const theme = extendTheme({});

export default function MainLayout() {
  return (
    <ChakraProvider theme={theme}>
      <Outlet />
    </ChakraProvider>
  );
}

export function CatchBoundary() {
  let caught = useCatch();
  let message = caught.statusText;
  if (typeof caught.data === "string") {
    message = caught.data;
  }
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <VStack>
          <Heading>{message}</Heading>

          <Button colorScheme="purple" as={Link} to="/">
            Back to Home
          </Button>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <ChakraProvider theme={theme}>
      <Heading>An unknown error occured.</Heading>
    </ChakraProvider>
  );
}
