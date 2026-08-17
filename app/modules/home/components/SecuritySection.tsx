import { Box } from "@operon/ui";
import { SECURITY_FEATURES } from "../content/security";
import * as classes from "../style";

export const SecuritySection = () => {
  return (
    <section id="security" {...classes.securitySectionStyle}>
      <Box {...classes.securityInnerStyle}>
        <Box {...classes.sectionEyebrowStyle}>Enterprise Security & Trust</Box>
        <h2 {...classes.sectionTitleStyle}>
          Meet your unique security and compliance requirements
        </h2>
        <Box {...classes.sectionDescStyle}>
          Operon is engineered from the ground up for high-compliance workloads,
          protecting sensitive enterprise operations with zero-trust key management
          and sub-10ms global edge delivery.
        </Box>

        <Box {...classes.securityGridStyle}>
          {SECURITY_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <Box key={item.id} {...classes.securityCardStyle}>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box {...classes.securityStatStyle}>{item.stat}</Box>
                  <Box
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "var(--operon-radius-md)",
                      backgroundColor: "var(--operon-color-primary-ghost)",
                      color: "var(--operon-color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={18} />
                  </Box>
                </Box>
                <h3 {...classes.securityCardTitleStyle}>{item.title}</h3>
                <p {...classes.securityCardDescStyle}>{item.description}</p>
              </Box>
            );
          })}
        </Box>
      </Box>
    </section>
  );
};
