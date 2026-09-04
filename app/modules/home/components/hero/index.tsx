import { Box } from "@operonstudio/ui";
import { HeroLeft } from "./components/hero-left";
import { HeroRight } from "./components/hero-right";
import { useHero } from "./hook";
import * as classes from "./style";

export const Hero = () => {
  const heroProps = useHero();

  return (
    <section {...classes.heroSectionStyle}>

      <Box {...classes.heroInnerStyle}>
        <HeroLeft metrics={heroProps.metrics} />
        <HeroRight {...heroProps} />
      </Box>
    </section>
  );
};
