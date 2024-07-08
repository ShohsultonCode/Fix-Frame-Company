import { forwardRef, ReactNode } from "react";

type buttonType = {
  buttonRef?: any;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type: undefined | "button" | "reset" | "submit";
};

const Button = forwardRef(({ children, buttonRef, ...res }: buttonType) => {
  return (
    <button ref={buttonRef} {...res}>
      {children}
    </button>
  );
});

export default Button;
