import React, {ReactEventHandler} from 'react';
import styled from "styled-components";
import {Input} from "../input/Input";
import {ITheme, lightTheme} from "../../theme";
import {ButtonDefaultEmpty, LinkButton, PrimaryButton} from "../button/Button";
import {FlexFowSpaceBetweenCenter, Rectangle} from "../layout";

const AuthFormWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  
  width: 274px;
`;

const AuthFormLogoWrapper = styled.div`

`;

const AuthFormLogo = styled.img`

`;

const AuthFormTitle = styled.h1<{ theme: ITheme }>`
  margin-top: 0;
  
  color: ${(props) => props.theme.headingColor ?? lightTheme.headingColor};
  font-family: Roboto, sans-serif;
  font-size: 48px;
`;

const AuthFormInputsBlock = styled.div`
  margin-bottom: 30px;
  
  & > *:first-child {
    margin-bottom: 13px;
  }
`;

const AuthFormButtonsBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  
  width: 100%;
`;

const AuthFormLoginButton = styled(PrimaryButton)`
  padding: 0;
  width: 130px;
`;

const AuthFormSwitchTypeButton = styled(ButtonDefaultEmpty)`
  padding: 0;
  width: 130px;
`;

export interface IAuthFormProps {
  logoUrl?: string;
  logoAlt?: string;
  title?: string;
  autoComplete?: boolean;

  email?: string;
  emailPlaceholder?: string;
  emailErrors?: boolean;
  onEmailChange?: ReactEventHandler<HTMLInputElement>;

  password?: string;
  passwordPlaceholder?: string;
  passwordErrors?: boolean;
  onPasswordChange?: ReactEventHandler<HTMLInputElement>;

  errorMessage?: string | null;

  onSubmit?: Function;
}

export const AuthForm: React.FC<IAuthFormProps> = (props) => {
  return (
    <AuthFormWrapper>
      {props.logoUrl &&
        <AuthFormLogoWrapper>
          <AuthFormLogo src={props.logoUrl} alt={props.logoAlt ? props.logoAlt : 'logo'} />
        </AuthFormLogoWrapper>
      }
      {props.title &&
        <AuthFormTitle>{props.title}</AuthFormTitle>
      }
      <AuthFormInputsBlock>
        <Input type="email" name="email" placeholder={props.emailPlaceholder} autoComplete={props.autoComplete === undefined ? 'on' : 'off'} />
        <Input type="password" name="password" placeholder={props.passwordPlaceholder} />
      </AuthFormInputsBlock>
      <AuthFormButtonsBlock>
        <FlexFowSpaceBetweenCenter>
          <AuthFormLoginButton>Login</AuthFormLoginButton>
          <AuthFormSwitchTypeButton>Register</AuthFormSwitchTypeButton>
        </FlexFowSpaceBetweenCenter>
        <Rectangle height={15} />
        <LinkButton>Forgot your password?</LinkButton>
      </AuthFormButtonsBlock>
    </AuthFormWrapper>
  );
};
