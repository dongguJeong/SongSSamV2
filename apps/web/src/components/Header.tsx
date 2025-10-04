import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";

function Header() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <HeaderStyle>
      <span className="logo">SongSSam</span>

      {/* 로그인 버튼 */}
      <Button buttonSize="sm" onClick={() => setOpenSignIn(true)}>
        로그인
      </Button>

      {/* 로그인 모달 */}
      <Modal
        isOpen={openSignIn}
        onClose={() => setOpenSignIn(false)}
        title="로그인"
      >
        <div className="login_modal">
          <form>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" type="password" />
          </form>
          <Button>로그인</Button>
          <span className="auth-text">
            계정이 없으신가요?{" "}
            <a
              onClick={() => {
                setOpenSignIn(false);
                setOpenSignUp(true);
              }}
            >
              회원가입 하기
            </a>
          </span>
        </div>
      </Modal>

      {/* 회원가입 모달 */}
      <Modal
        isOpen={openSignUp}
        onClose={() => setOpenSignUp(false)}
        title="회원가입"
      >
        <div className="login_modal">
          <form>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" type="password" />
            <Input placeholder="비밀번호 확인" type="password" />
          </form>
          <Button>회원가입</Button>
          <span className="auth-text">
            이미 계정이 있으신가요?{" "}
            <a
              onClick={() => {
                setOpenSignUp(false);
                setOpenSignIn(true);
              }}
            >
              로그인 하기
            </a>
          </span>
        </div>
      </Modal>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.nav`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  background: var(--bg-background, #1f1f1f);

  .logo {
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--text-white, #ededed);
  }

  .login_modal {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .auth-text {
      font-size: 0.9rem;
      text-align: center;

      a {
        color: var(--blue, #007bff);
        cursor: pointer;
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
`;
