import styled from "@emotion/styled";
import SVG from "../assets/svg";
import React from "react";
import color from "../styles/color";
import { NavLink, Link } from "react-router-dom";
import font from "../styles/font";

interface SideNavLinkProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const SideNav = () => {
  return (
    <Holder>
      <Link to="/" className="logo">
        <SVG.Logo.monotone />
      </Link>

      <ul className="links-holder">
        <SideNavLink icon={<SVG.Icons.home />} label="Home" path="/" />
        <SideNavLink
          icon={<SVG.Icons.gear />}
          label="Settings"
          path="/settings"
        />
        <SideNavLink icon={<SVG.Icons.chat />} label="Chat" path="/chat" />
        <SideNavLink icon={<SVG.Icons.form />} label=" Form" path="/form" />
        <SideNavLink
          icon={<SVG.Icons.register />}
          label=" Register"
          path="/register"
        />
      </ul>
      <Link to="/faq" className="faq-link link">
        <span className="link-icon">
          <SVG.Icons.info />
        </span>
        <span className="link-label">FAQ</span>
      </Link>
    </Holder>
  );
};
// --------------------
// define SideNavLink
// --------------------
const SideNavLink = ({ icon, label, path }: SideNavLinkProps) => {
  return (
    <NavLink className="link" to={path}>
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
    fill: ${color.white};
  }

  .links-holder {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    margin: 0;
    padding: 0;
  }

  .link {
    position: relative;
    ${font.regular}
    align-items: center;
    color: currentColor;
    list-style: none;
    display: flex;
    gap: 1.5em;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;

    &::before {
      content: "";
      position: absolute;
      left: -2.1em;
      top: -0.1em;
      width: 0.8em;
      height: 100%;
      border-radius: 0em 0.8em 0.8em 0em;
      background-color: ${color.white};
      opacity: 0;
      transition: opacity 0.2s;
    }

    :hover {
      opacity: 0.8;
    }

    &.active {
      opacity: 1;

      &::before {
        opacity: 1;
      }
    }

    .link-icon svg {
      width: 2em;
      fill: currentColor;
    }

    .link-label {
      font-size: 1.5em;
    }
  }

  .faq-link {
    align-self: end;
  }
`;

export default SideNav;
