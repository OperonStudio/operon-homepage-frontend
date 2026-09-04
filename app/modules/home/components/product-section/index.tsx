import { Box } from "@operonstudio/ui";
import type { ProductSpec } from "../../data";
import * as page from "../../style";
import * as classes from "./style";

/**
 * One product, told the same way three times: what it is, who it is for, what
 * it can do, and the same change made with and without it.
 *
 * `index` alternates the band's surface so consecutive products separate by
 * tone rather than by a rule between them.
 */
export const ProductSection = ({
  product,
  index,
}: {
  product: ProductSpec;
  index: number;
}) => {
  const onSurface = index % 2 === 1;

  return (
    <Box
      id={product.key}
      {...page.merge(
        page.bandStyle,
        onSurface ? page.bandSurfaceStyle : classes.emptyStyle,
      )}
    >
      <Box {...page.innerStyle}>
        <Box {...classes.layoutStyle}>
          <Box {...classes.leadStyle}>
            <span {...classes.audienceStyle}>{product.audience}</span>
            <h2 {...classes.nameStyle}>{product.name}</h2>
            <p {...classes.taglineStyle}>{product.tagline}</p>
            <p {...classes.bodyStyle}>{product.body}</p>
          </Box>

          <Box
            {...page.merge(
              classes.flowStyle,
              onSurface ? classes.flowSunkenStyle : classes.flowSurfaceStyle,
            )}
          >
            <span {...classes.flowCaptionStyle}>{product.flow.caption}</span>
            <Box {...classes.pathStyle}>
              <span {...classes.pathLabelStyle}>
                {product.flow.before.label}
              </span>
              <Box {...classes.stepsStyle}>
                {product.flow.before.steps.map((step) => (
                  <span key={step} {...classes.stepStyle}>
                    {step}
                  </span>
                ))}
              </Box>
              <span {...classes.durationStyle}>
                {product.flow.before.duration}
              </span>
            </Box>
            <Box {...classes.pathStyle}>
              <span {...classes.pathLabelStyle}>
                {product.flow.after.label}
              </span>
              <Box {...classes.stepsStyle}>
                {product.flow.after.steps.map((step) => (
                  <span key={step} {...classes.stepAccentStyle}>
                    {step}
                  </span>
                ))}
              </Box>
              <span {...classes.durationAccentStyle}>
                {product.flow.after.duration}
              </span>
            </Box>
          </Box>
        </Box>

        <Box {...classes.capabilitiesStyle}>
          {product.capabilities.map((capability) => {
            const CapabilityIcon = capability.icon;
            return (
              <Box
                key={capability.title}
                {...page.merge(
                  page.featureStyle,
                  onSurface ? classes.emptyStyle : classes.featureOnCanvasStyle,
                )}
              >
                <span {...page.featureIconStyle}>
                  <CapabilityIcon size={18} />
                </span>
                <span {...page.featureTitleStyle}>{capability.title}</span>
                <p {...page.featureBodyStyle}>{capability.body}</p>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
