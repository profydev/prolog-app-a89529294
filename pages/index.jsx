import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";

import { color } from "@styles/theme";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 7rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const MainLinks = styled.ul`
  display: flex;
  gap: 32px;
`;

const HeaderLink = styled(Link)`
  color: ${color("gray", 500)};
  text-decoration: none;
`;

const LinkButton = styled(Link)`
  background-color: ${color("primary", 600)};
  padding: 10px 18px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <MainLinks>
          <HeaderLink href={Routes.home}>Home</HeaderLink>
          <HeaderLink href={Routes.products}>Products</HeaderLink>
          <HeaderLink href={Routes.documentation}>Documentation</HeaderLink>
          <HeaderLink href={Routes.pricing}>Pricing</HeaderLink>
        </MainLinks>
        <LinkButton href={Routes.projects}>Dashboard</LinkButton>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
