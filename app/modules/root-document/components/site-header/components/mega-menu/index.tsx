import { ChevronDown } from "@operonstudio/icons";
import { Box, Button } from "@operonstudio/ui";
import { Link } from "@tanstack/react-router";
import { megaMenuSections } from "../../data";
import * as classes from "../../style";
import { useMegaMenu } from "./hook";

export const ProductsMegaMenu = () => {
  const { isOpen, containerRef, toggleOpen, closeMenu } = useMegaMenu();

  return (
    <li ref={containerRef} {...classes.navItemStyle}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleOpen}
        {...classes.navButtonLinkStyle}
        aria-expanded={isOpen}
      >
        Products <ChevronDown size={14} />
      </Button>
      {isOpen && (
        <Box {...classes.megaMenuContainerStyle}>
          {megaMenuSections.map((section) => {
            const IconComponent = section.Icon;
            return (
              <Box key={section.header} {...classes.megaMenuColStyle}>
                <Box {...classes.megaMenuHeaderStyle}>{section.header}</Box>
                <Link
                  to={section.to}
                  {...classes.megaMenuItemStyle}
                  onClick={closeMenu}
                >
                  <Box {...classes.megaMenuIconStyle}>
                    <IconComponent size={16} />
                  </Box>
                  <Box {...classes.megaMenuTextGroupStyle}>
                    <span {...classes.megaMenuTitleStyle}>{section.title}</span>
                    <span {...classes.megaMenuDescStyle}>
                      {section.description}
                    </span>
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>
      )}
    </li>
  );
};
