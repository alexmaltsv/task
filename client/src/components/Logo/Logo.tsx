import { ImgHTMLAttributes } from 'react';
import { LogoStyled } from '../Logo/Logo.styled';

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Logo = (props: LogoProps) => (
  <LogoStyled {...props} />
);