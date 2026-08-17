import type { IconProps } from "@operon/icons";
import { Globe, KeyRound, Network, ShieldCheck } from "@operon/icons";

export interface SecurityFeature {
  id: string;
  stat: string;
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  badge: string;
}

export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    id: "soc2-compliance",
    stat: "SOC 2",
    title: "SOC 2 Type II Readiness",
    description:
      "Audited security controls, end-to-end data encryption in transit and at rest, and automated compliance tracking.",
    icon: ShieldCheck,
    badge: "Enterprise Standard",
  },
  {
    id: "rbac-roles",
    stat: "RBAC",
    title: "Granular Access & Org Governance",
    description:
      "Enforce organization, team, and project-scoped permissions with full audit logging and SAML SSO integration.",
    icon: KeyRound,
    badge: "Zero-Trust",
  },
  {
    id: "zero-trust-keys",
    stat: "AES-256",
    title: "Envelope Key Management",
    description:
      "API keys and environment secrets are encrypted using envelope key architecture with short-lived session tokens.",
    icon: Network,
    badge: "Encrypted",
  },
  {
    id: "global-edge",
    stat: "40+ Regions",
    title: "Sub-10ms Global Edge Routing",
    description:
      "Distributed edge nodes execute rules and codeblocks close to users for resilient, sub-10ms median latency.",
    icon: Globe,
    badge: "99.99% SLA",
  },
];
