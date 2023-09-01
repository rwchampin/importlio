
import {Button as BB} from "@nextui-org/react";
import { ButtonProps } from "@/lib/constants";
import Link from "next/link";

// Button Props
// https://nextui.org/components/button

/** 
  @prop children: React.ReactNode;
  @prop href?: string;
  @prop className?: string;
  @prop variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  @prop size?: 'sm' | 'md' | 'lg';
  @prop color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @prop radius?: 'sm' | 'md' | 'lg' | 'none' | 'full';
  @prop spinner?: boolean;
  @prop startContent?: React.ReactNode;
  @prop endContent?: React.ReactNode;
  @prop spinnerPlacement?: 'start' | 'end';
  @prop isIconOnly?: boolean;
  @prop isDisabled?: boolean;
  @prop isLoading?: boolean;
  @prop onPress?: () => void;
  @prop onPressStart?: () => void;
  @prop onPressEnd?: () => void;
  @prop onPressChange?: () => void;
  @prop onPressUp?: () => void;
  @prop onKeyDown?: () => void;
  @prop onKeyUp?: () => void;
  @prop onClick?: () => void;
  @prop fullWidth?: boolean;
**/


export default function Button({
  children,
  variant="solid",
  radius="xl",
  size="md",
  color="primary",
  spinner=false,
  spinnerPlacement="end",
  isDisabled,
  isLoading,
  isIconOnly,
  onClick,
  onKeyDown,
  onKeyUp,
  onPress,
  onPressStart,
  onPressEnd,
  onPressChange,
  onPressUp,
  fullWidth,
  href,
  ...props
}:ButtonProps) {

  const elem = (
    <BB 
    variant={variant}
    radius={radius}
    size={size}
    spinner={spinner}
    spinnerPlacement={spinnerPlacement}
    isDisabled={isDisabled}
    isLoading={isLoading}
    isIconOnly={isIconOnly}
    onClick={onClick}
    fullWidth={fullWidth}
    href={href}
    {...props}
  >
    {children}
  </BB>
  );

  if(href) {
    return (
      <Link href={href}>
        {elem}
      </Link>

    )
  }
  return (
    <>
    {elem}
    </>
  );
}
