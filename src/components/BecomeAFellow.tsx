import { Button, Flex } from "@chakra-ui/react";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const BecomeAFellow = () => {
  return (
    <Button
      w={["100%", "max"]}
      h={["60px", "65px"]}
      bg="rgba(52, 52, 52, 0.54)"
      border="1px solid #3E3E3E"
      borderRadius="12px"
      px="8"
      variant="unstyled"
    >
      <Flex columnGap="5" justifyContent="center">
        Become a Founders, Inc. fellow
        <ArrowUpRightIcon width="25" />
      </Flex>
    </Button>
  );
};

export default BecomeAFellow;
