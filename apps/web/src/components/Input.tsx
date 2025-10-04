import type React from "react";
import styled, { css } from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  inputSize?: "sm" | "md" | "lg";
  error?: boolean;
}

function Input({
  rightIcon,
  leftIcon,
  inputSize = "md",
  error = false,
  ...props
}: Props) {
  return (
    <InputStyle inputSize={inputSize} error={error}>
      {leftIcon && leftIcon}
      <input {...props} />
      {rightIcon && rightIcon}
    </InputStyle>
  );
}

export default Input;

const InputStyle = styled.div<Omit<Props, "rightIcon" | "leftIcon">>`
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "gray" : "white")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background-color 0.2s ease;
  box-shadow: ${({ error }) => (error ? "0 0 0 3px red" : "0 0 0 1px black")};

  &:focus-within {
    box-shadow: 0 0 0 3px var(--blue, #007bff);
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: inherit;
    width: 100%;
  }

  ${({ inputSize }) => {
    switch (inputSize) {
      case "sm":
        return css`
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
        `;
      case "lg":
        return css`
          padding: 0.75rem 1.25rem;
          font-size: 1.125rem;
        `;
      default:
        return css`
          padding: 0.5rem 0.75rem;
          font-size: 1rem;
        `;
    }
  }}
`;
