import { useColorMode } from "@chakra-ui/react";
import ParticleBackgroundDark from "./bgDark";
import ParticleBackgroundLight from "./bgLight";

export const MyParticleBackground = () => {
  const { colorMode } = useColorMode();

  return (
    colorMode === 'dark' ? (
        <ParticleBackgroundDark />
      ) : (
        <ParticleBackgroundLight />
      )
  );
};