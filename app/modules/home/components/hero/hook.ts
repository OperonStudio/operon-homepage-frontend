import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_CARDS, HERO_METRICS } from "./data";

export const useHero = () => {
  const [activeCardId, setActiveCardId] = useState<string>(HERO_CARDS[0].id);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const selectCard = useCallback((id: string) => {
    setActiveCardId(id);
  }, []);

  const getStackDepth = useCallback(
    (cardId: string) => {
      const activeIndex = HERO_CARDS.findIndex((c) => c.id === activeCardId);
      const cardIndex = HERO_CARDS.findIndex((c) => c.id === cardId);
      if (activeIndex === -1 || cardIndex === -1) return 0;
      const count = HERO_CARDS.length;
      return (cardIndex - activeIndex + count) % count;
    },
    [activeCardId]
  );

  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      setActiveCardId((prevId) => {
        const currentIndex = HERO_CARDS.findIndex((c) => c.id === prevId);
        const nextIndex = (currentIndex + 1) % HERO_CARDS.length;
        return HERO_CARDS[nextIndex].id;
      });
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return {
    cards: HERO_CARDS,
    activeCardId,
    selectCard,
    getStackDepth,
    handleMouseEnter,
    handleMouseLeave,
    metrics: HERO_METRICS,
  };
};
