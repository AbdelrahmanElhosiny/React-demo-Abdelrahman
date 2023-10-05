import styled from "@emotion/styled";
import SVG from "../assets/svg";
import React from "react";
import color from "../styles/color";
import { NavLink } from "react-router-dom";
import font from "../styles/font";

interface SideNavLinkProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const SideNav = () => {
  return (
    <Holder>
      <div className="logo">
        <SVG.Logo.monotone />
      </div>

      <ul className="all-links-holder">
        <SideNavLink icon={<SVG.Icons.home />} label="Home" path="/" />
        <SideNavLink
          icon={<SVG.Icons.gear />}
          label="Settings"
          path="/settings"
        />
        <SideNavLink icon={<SVG.Icons.chat />} label="Chat" path="/chat" />
        <SideNavLink icon={<SVG.Icons.form />} label="Form" path="/form" />
      </ul>
      <div className="faq-link all-links-holder">
        <SideNavLink icon={<SVG.Icons.info />} label="FAQ" path="/faq" />
      </div>
    </Holder>
  );
};
// --------------------
// define SideNavLink
// --------------------
const SideNavLink = ({ icon, label, path }: SideNavLinkProps) => {
  return (
    <NavLink className="link-holder" to={path}>
      <span className="link-icon">{icon}</span>
      <span className="link-label">{label}</span>
    </NavLink>
  );
};

// --------------------
// STYLES
// --------------------
const Holder = styled.div`
  display: grid;
  color: ${color.white};
  padding: 2.5em 1em;
  grid-template-columns: 1em, auto;

  .logo svg {
    width: 8em;
    fill: currentColor;
  }
  .all-links-holder {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin: 0;
    padding: 0;

    .link-holder {
      ${font.regular}
      align-items: center;
      color: currentColor;
      list-style: none;
      display: flex;
      gap: 1.5em;
      text-decoration: none;

      .link-icon svg {
        width: 2em;
        fill: currentColor;
      }

      .link-label {
        font-size: 1.5em;
      }
    }
  }

  .faq-link {
    align-self: end;
    justify-content: center;
  }
`;

export default SideNav;
