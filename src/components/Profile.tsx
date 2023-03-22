import { Center, Image, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Center flexDirection="column" mb="20">
      <Image src="/images/pfp.png" h="130px" w="130px" />
      <Text fontWeight="600" mt="35px" fontSize="24px">
        Aleem Rehmtullah
      </Text>
      <Text mt="1" color="#ABABAB">
        wsp! iced coffee `{">"}` hot coffee 🤠
      </Text>
    </Center>
  );
};

export default Profile;
