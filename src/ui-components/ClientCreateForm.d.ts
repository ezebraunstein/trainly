/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClientCreateFormInputValues = {
    name?: string;
    surname?: string;
    email?: string;
    DNI?: number;
};
export declare type ClientCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    DNI?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientCreateFormOverridesProps = {
    ClientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    DNI?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientCreateFormProps = React.PropsWithChildren<{
    overrides?: ClientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClientCreateFormInputValues) => ClientCreateFormInputValues;
    onSuccess?: (fields: ClientCreateFormInputValues) => void;
    onError?: (fields: ClientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCreateFormInputValues) => ClientCreateFormInputValues;
    onValidate?: ClientCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCreateForm(props: ClientCreateFormProps): React.ReactElement;
