import { Button, Center, Flex, Grid, Image, Text } from "@chakra-ui/react";

const Social = ({
  platform,
  icon,
  link,
}: {
  platform: string;
  icon: string;
  link: string;
}) => {
  return (
    <Button
      w="100%"
      h={["60px", "65px"]}
      bg="rgba(52, 52, 52, 0.54)"
      border="1px solid #3E3E3E"
      borderRadius="12px"
      variant="unstyled"
    >
      <Grid px={["25px", "30px"]} templateColumns="repeat(3, 1fr)">
        <Center justifyContent="start" w="100%">
          <Image src={icon} alt={platform} />
        </Center>
        <Text>{platform}</Text>
        <div></div>
      </Grid>
    </Button>
  );
};

export default Social;
