import {
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import cn from "classnames";

import s from "./button.module.scss";
import { Svg } from "..";

interface ButtonProps {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
  variant: "primary" | "light" | "dark" | "slideBtn";
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  loading?: boolean;
  autoClick?: boolean;
}
export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = "primary",
  type,
  disabled = false,
  loading = false,
  autoClick,
}) => {

  const [tick, setTick] = useState(true)
  function handleClick(): void {
    setTick(false)
    onClick();
    setTimeout(() => setTick(true))
  }

  useEffect(() => {
    if (!autoClick) return;
    let timer = setTimeout(() => {
      handleClick();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick]);

  return (
    <button
      className={cn(s.button, s[variant], className)}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {loading ? <div className={s.loader}></div> : children}
      {autoClick && tick && <Svg name="process-circle" className={s.processCircle}/>}
    </button>
  );
}
