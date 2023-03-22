import { Button, Center, Flex } from "@chakra-ui/react";
import { Manrope } from "next/font/google";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Social from "@/components/Social";
import BecomeAFellow from "@/components/BecomeAFellow";
import Profile from "@/components/Profile";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600"] });

export default function Home() {
  const socials: {
    platform: string;
    icon: string;
    link: string;
  }[] = [
    {
      platform: "Github",
      icon: "/images/github.png",
      link: "https://twitter.com/fdotinc",
    },
    {
      platform: "LinkedIn",
      icon: "/images/linkedin.png",
      link: "https://twitter.com/fdotinc",
    },
    {
      platform: "Twitter",
      icon: "/images/twitter.png",
      link: "https://twitter.com/fdotinc",
    },
  ];

  return (
    <Center
      className={`${manrope.className}`}
      bg="#000"
      w="100%"
      h="100vh"
      color="white"
    >
      <Center maxW="800px" w="100%" px="5">
        <Flex w="100%" flexDirection="column" alignItems="center">
          <Profile />

          <Flex w="100%" flexDirection="column" rowGap="20px" alignItems="end">
            {socials.map((social) => (
              <Social
                platform={social.platform}
                icon={social.icon}
                link={social.link}
              />
            ))}
            <BecomeAFellow />
          </Flex>
        </Flex>
      </Center>
    </Center>
  );
}
