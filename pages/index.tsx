import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

import { color, breakpoint } from "@styles/theme";
import { useState } from "react";
import Image from "next/image";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 1.25rem 1.5rem 1.25rem 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;

  @media (min-width: ${breakpoint("desktop")}) {
    padding: 0 7rem;
  }
`;

const MainLinks = styled.ul`
  display: none;
  gap: 32px;

  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
  }
`;

const HeaderLink = styled(Link)`
  color: ${color("gray", 500)};
  text-decoration: none;
`;

const LinkButton = styled(Link)`
  display: none;
  background-color: ${color("primary", 600)};
  padding: 10px 18px;
  color: white;
  text-decoration: none;
  border-radius: 8px;

  @media (min-width: ${breakpoint("desktop")}) {
    display: block;
  }
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }

  @media (min-width: ${breakpoint("desktop")}) {
    right: 2.5rem;
    bottom: 2.5rem;
  }
`;

const MobileBurger = styled.img`
  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(8px);
`;

const DialogPanel = styled(Dialog.Panel)`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 1.5rem;
  right: 1.5rem;
  background-color: white;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  text-align: center;
  border-radius: 0.75rem;
  max-width: 25rem;

  @media (min-width: ${breakpoint("desktop")}) {
    left: 50%;
    right: auto;
    transform: translate(-50%, -50%);
  }
`;

const DialogTitle = styled(Dialog.Title)`
  color: ${color("gray", 900)};
  font-size: 1.125rem;
  margin-top: 1.75rem;
`;

const DialogDescription = styled(Dialog.Description)`
  color: ${color("gray", 500)};
  font-size: 0.875rem;
  margin-block: 0.5rem 2rem;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  & > button {
    width: 100%;
  }
`;

const ModalButton = styled.button<{
  variant: "confirm" | `cancel`;
}>`
  color: ${(props) =>
    props.variant === "cancel" ? color("gray", 700) : "white"};
  border: 1px solid
    ${(props) =>
      props.variant === "cancel" ? color("gray", 300) : color("primary", 600)};
  background-color: ${(props) =>
    props.variant === "cancel" ? "white" : color("primary", 600)};
  font-weight: 500;
  padding-block: 0.625rem;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
`;

const IssuesPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onContactModalConfirmClick = () => {
    setIsOpen(false);
    window.location.href =
      "mailto:support@prolog-app.com?subject=Support Request: ";
  };

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
        <MobileBurger src="/icons/burger.svg" alt="burger nav" />
      </Header>
      <ContactButton onClick={() => setIsOpen(true)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBackdrop />
        <DialogPanel>
          <Image src="/icons/email.svg" alt="email" width={40} height={32} />
          <DialogTitle>Contact Us Via Email</DialogTitle>
          <DialogDescription>
            Any questions? Send us an email at prolog@profy.dev. We usually
            answer within 24 hours.
          </DialogDescription>

          <ModalButtonWrapper>
            <ModalButton variant="cancel" onClick={() => setIsOpen(false)}>
              Cancel
            </ModalButton>
            <ModalButton variant="confirm" onClick={onContactModalConfirmClick}>
              Open Email App
            </ModalButton>
          </ModalButtonWrapper>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default IssuesPage;
