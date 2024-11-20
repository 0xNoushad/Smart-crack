import React from "react";
import { Button, Container, Flex } from "@mantine/core";
import { FaXTwitter } from "react-icons/fa6";

interface LovedByProps {
  stars: number;
}

export const LovedBy = ({}: LovedByProps) => {
  return (
    <Container pos="relative" mx="auto" py={80}>
      <Flex wrap="wrap" justify="center" gap="md" mt="md">
        <Button
          component="a"
          href="#"
          target="_blank"
          color="black"
          leftSection={<FaXTwitter />}
          rel="noopener"
        >
          Share on X
        </Button>
      </Flex>
    </Container>
  );
};

// interface TweetCardProps {
//   username: string;
//   handle: string;
//   profileImage: string;
//   tweet: string;
//   tweetId: string;
//   verified?: "company" | "individual";
// }
//
// const TweetCard = ({
//   profileImage,
//   handle,
//   tweetId,
//   tweet,
//   username,
//   verified,
// }: TweetCardProps) => {
//   return (
//     <Paper p="sm" w="fit-content" withBorder radius="md" bg="gray.0" miw={300} maw={450}>
//       <Flex justify="space-between">
//         <Link href={`https://twitter.com/${handle}`} target="_blank">
//           <Flex align="flex-start" gap="sm" direction="row">
//             <Avatar src={profileImage} w={40} h={40} alt={handle} />
//             <Stack gap={0}>
//               <Flex align="center" gap={2}>
//                 <Text c="dark" fz="sm" fw={500}>
//                   {username}
//                 </Text>
//                 {verified && (
//                   <VscVerifiedFilled color={verified === "company" ? "#ECCC4B" : "#1D9BF0"} />
//                 )}
//               </Flex>
//               <Text fz="xs" c="gray.6">
//                 @{handle}
//               </Text>
//             </Stack>
//           </Flex>
//         </Link>
//         <Link title="twitter" target="_blank" href={`https://x.com/${handle}/status/${tweetId}`}>
//           <FaTwitter color="#1EA1F1" size={20} />
//         </Link>
//       </Flex>
//       <Text fz="sm" c="gray.8" mt="lg">
//         {tweet}
//       </Text>
//     </Paper>
//   );
// };
