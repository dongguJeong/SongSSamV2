import type { ReactNode } from "react";
import Header from "./Header";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyle>
      <Header />
      <main>{children}</main>
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-background);
  color: var(--text-white);

  main {
    overflow: hidden;
    padding: 1rem;
    width: 100%;
  }
`;

export default Layout;
