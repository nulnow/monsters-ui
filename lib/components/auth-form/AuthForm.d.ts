import React, { ReactEventHandler } from 'react';
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
export declare const AuthForm: React.FC<IAuthFormProps>;
//# sourceMappingURL=AuthForm.d.ts.map