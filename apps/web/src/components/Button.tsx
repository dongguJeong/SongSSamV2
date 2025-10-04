import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  buttonSize?: "sm" | "md" | "lg";
  color?: string;
  ghost?: boolean;
  border?: boolean;
}

const Button = ({
  children,
  disabled,
  isLoading = false,
  buttonSize = "md",
  color = "var(--blue)",
  ghost = false,
  border = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      disabled={disabled || isLoading}
      buttonSize={buttonSize}
      color={color}
      ghost={ghost}
      border={border}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button<ButtonProps>`
  border: none;
  border-radius: 0.3rem;
  font-weight: 500;
  transition: all 0.2s ease;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  ${({ buttonSize }) => {
    switch (buttonSize) {
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

  ${({ color, ghost, border }) => {
    // 🎨 색상 관련 처리
    const mainColor = color || "var(--blue)";
    const hoverColor = "rgba(0, 0, 0, 0.1)";
    const textColor = ghost ? mainColor : "#fff";

    return css`
      color: ${textColor};
      background-color: ${ghost ? "transparent" : mainColor};
      border: ${border ? `2px solid ${mainColor}` : "none"};

      &:hover {
        background-color: ${ghost ? hoverColor : darken(mainColor, 0.15)};
      }
    `;
  }}
`;

/* ✅ 헬퍼 함수 — 색상 어둡게 (hover용) */
function darken(color: string, amount = 0.1) {
  // hex, rgb, var(--) 등 단순 처리
  if (color.startsWith("var(")) return color;
  if (!color.startsWith("#")) return color;

  const num = parseInt(color.slice(1), 16);
  const r = Math.max(0, (num >> 16) - 255 * amount);
  const g = Math.max(0, ((num >> 8) & 0x00ff) - 255 * amount);
  const b = Math.max(0, (num & 0x0000ff) - 255 * amount);

  return `rgb(${r}, ${g}, ${b})`;
}
