import styled from "styled-components";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalStyle onClick={(e) => e.stopPropagation()}>
        {title && (
          <div className="title">
            {" "}
            <h2>{title}</h2>{" "}
            <Button buttonSize="sm" ghost onClick={onClose} color="white">
              X
            </Button>
          </div>
        )}
        <div className="content">{children}</div>
      </ModalStyle>
    </Overlay>
  );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalStyle = styled.div`
  background-color: var(--bg-background, #1f1f1f);
  color: var(--text-white, #ededed);
  border-radius: 0.3rem;
  padding: 2rem;
  width: 400px;
  max-width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
    }

    .close-btn {
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background-color: #005fcc;
      }
    }
  }
`;
