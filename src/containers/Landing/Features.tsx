import React from "react";
import {
  Container,
  Flex,
  Title,
  Text,
  Paper,
  Center,
  Badge,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import { FaBolt } from "react-icons/fa";
import { IoImages, IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import { TbTransformFilled } from "react-icons/tb";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: FeatureItem[] = [
  {
    title: "Visualizer",
    description:
      "Transform your Solana smart contract data into interactive graphs or trees. Visualize IDL files, instructions, accounts, and dependencies in real-time.",
    icon: <FaBolt size={20} />,
    color: "yellow",
  },
  {
    title: "Convert",
    description:
      "Convert Your Smart Contract To Graph, or transform your Solana account data into human-readable formats. Supports seamless integration with Solana tools.",
    icon: <TbTransformFilled size={20} />,
    color: "orange",
  },
  {
    title: "Format & Validate",
    description:
      "Format and beautify code for readability. Validate Solana smart contract structures, ensuring instructions and accounts are configured correctly.",
    icon: <MdOutlineFormatIndentIncrease size={20} />,
    color: "green",
  },

  {
    title: "Download Image",
    description:
      "Export visualizations of your Solana contract graph as PNG, JPEG, or SVG to share with your team.",
    icon: <IoImages size={20} />,
    color: "blue.4",
  },
  {
    title: "Secure",
    description:
      "Your Solana smart contract data is never stored on our servers. Everything happens securely on your device.",
    icon: <IoShieldCheckmark size={20} />,
    color: "green.4",
  },
];

export const Features = () => {
  return (
    <Container component="section" id="features" fluid py={80}>
      <Container size="xl">
        <Center>
          <Badge
            fw="600"
            tt="none"
            variant="outline"
            c="blue.7"
            color="blue.3"
            bg="blue.0"
            size="lg"
          >
            Features
          </Badge>
        </Center>
        <Title
          c="black"
          order={2}
          px="lg"
          fz={{
            base: 26,
            xs: 32,
            sm: 42,
          }}
          fw={600}
          mb={15}
          style={{ textAlign: "center" }}
        >
          Explore Your Smart Contract Visually
        </Title>
        <Title
          order={3}
          fw={500}
          c="gray.7"
          px="lg"
          mx="auto"
          ta="center"
          mb={50}
          fz={{ base: 16, sm: 18 }}
          w={{ base: "100%", xs: "80%", sm: "60%", md: "40%" }}
        >
          All in one tool for Your Rust Solana Contract. Formatter, validator, visualizer, and
          editor.
        </Title>

        <SimpleGrid
          cols={{
            base: 1,
            xs: 2,
            md: 4,
          }}
          spacing="xl"
        >
          {features.map((feature, index) => (
            <Paper key={index} bg="gray.0" p="lg" radius="md">
              <Flex gap="sm" align="center" justify="center" direction="column">
                <ThemeIcon radius="xl" size="xl" variant="light" color={feature.color}>
                  {feature.icon}
                </ThemeIcon>
                <Title fw={500} ta="center" c="gray.9" order={3}>
                  {feature.title}
                </Title>
                <Text fz="sm" c="gray.8">
                  {feature.description}
                </Text>
              </Flex>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
};
