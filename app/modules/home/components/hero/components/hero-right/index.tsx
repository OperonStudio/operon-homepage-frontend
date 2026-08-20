import { Box, Button, Card } from "@operonstudio/ui";
import { type CSSProperties, Fragment } from "react";
import { HERO_CARDS } from "../../data";
import * as classes from "./style";

type HeroCardData = (typeof HERO_CARDS)[number];

interface HeroRightProps {
  cards: HeroCardData[];
  activeCardId: string;
  selectCard: (id: string) => void;
  getStackDepth: (id: string) => number;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const HeroRight = ({
  cards,
  activeCardId,
  selectCard,
  getStackDepth,
  handleMouseEnter,
  handleMouseLeave,
}: HeroRightProps) => {
  const getDepthStyle = (depth: number): CSSProperties => {
    if (depth === 0) {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 30,
        opacity: 1,
        transform: "translate3d(0px, 0px, 0px) scale(1)",
        borderColor: "var(--operon-color-primary)",
        boxShadow: "0 18px 42px rgba(9, 114, 211, 0.16)",
      };
    }
    if (depth === 1) {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 20,
        opacity: 0.94,
        transform: "translate3d(24px, 28px, 0px) scale(0.96)",
        borderColor: "var(--operon-color-border)",
        boxShadow: "0 10px 28px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
      };
    }
    return {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 10,
      opacity: 0.88,
      transform: "translate3d(48px, 56px, 0px) scale(0.92)",
      borderColor: "var(--operon-color-border)",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.05)",
      cursor: "pointer",
    };
  };

  return (
    <Box
      {...classes.stackWrapperStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Selection Tabs */}
      <Box {...classes.stackTabsRowStyle}>
        {cards.map((card) => (
          <Button
            key={card.id}
            size="sm"
            variant={card.id === activeCardId ? "primary" : "outline"}
            data-active={card.id === activeCardId}
            onClick={() => selectCard(card.id)}
          >
            {card.title}
          </Button>
        ))}
      </Box>

      {/* Interactive Stack Deck */}
      <Box {...classes.stackContainerStyle}>
        {cards.map((card) => {
          const depth = getStackDepth(card.id);

          return (
            <Card
              key={card.id}
              {...classes.stackedCardStyle}
              style={getDepthStyle(depth)}
              data-depth={depth}
              onClick={() => selectCard(card.id)}
              header={
                <Box {...classes.panelHeaderStyle}>
                  <Box {...classes.panelHeaderTitleStyle}>{card.title}</Box>
                </Box>
              }
            >
              {/* Flow visualization */}
              <Box {...classes.routeDiagramStyle}>
                <Box {...classes.laneRowStyle}>
                  <span {...classes.laneLabelStyle} data-variant="legacy">
                    {card.legacyLabel}
                  </span>
                  <Box {...classes.laneTrackStyle}>
                    {card.legacyNodes.map((node, i) => (
                      <Fragment key={node}>
                        {i > 0 && (
                          <span
                            {...classes.laneConnectorStyle}
                            data-variant="legacy"
                            aria-hidden="true"
                          />
                        )}
                        <span {...classes.laneNodeStyle} data-variant="legacy">
                          {node}
                        </span>
                      </Fragment>
                    ))}
                  </Box>
                  <span {...classes.laneDurationStyle} data-variant="legacy">
                    {card.legacyDuration}
                  </span>
                </Box>

                <Box {...classes.laneRowStyle}>
                  <span {...classes.laneLabelStyle} data-variant="live">
                    {card.operonLabel}
                  </span>
                  <Box {...classes.laneTrackStyle}>
                    {card.operonNodes.map((node, i) => (
                      <Fragment key={node}>
                        {i > 0 && (
                          <span
                            {...classes.laneConnectorStyle}
                            data-variant="live"
                            aria-hidden="true"
                          />
                        )}
                        <span {...classes.laneNodeStyle} data-variant="live">
                          {node}
                        </span>
                      </Fragment>
                    ))}
                  </Box>
                  <span {...classes.laneDurationStyle} data-variant="live">
                    {card.operonDuration}
                  </span>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
