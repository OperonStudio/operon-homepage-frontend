import { Box } from "@operonstudio/ui";
import {
  Closing,
  Hero,
  PlatformSection,
  ProductSection,
  ReleaseCost,
  TrustSection,
} from "./components";
import { PRODUCTS } from "./data";
import * as classes from "./style";

/**
 * The marketing page, in the order somebody unfamiliar needs it: the promise,
 * why it matters, each product on its own terms, what they share, and how
 * access works.
 */
export const HomePage = () => (
  <Box {...classes.pageStyle}>
    <Hero />
    <ReleaseCost />
    {PRODUCTS.map((product, index) => (
      <ProductSection key={product.key} product={product} index={index} />
    ))}
    <PlatformSection />
    <TrustSection />
    <Closing />
  </Box>
);
