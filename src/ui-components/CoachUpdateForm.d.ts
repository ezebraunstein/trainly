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
export declare type CoachUpdateFormInputValues = {
    name?: string;
    surname?: string;
    email?: string;
    DNI?: number;
    CUIL?: number;
};
export declare type CoachUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    DNI?: ValidationFunction<number>;
    CUIL?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoachUpdateFormOverridesProps = {
    CoachUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    DNI?: PrimitiveOverrideProps<TextFieldProps>;
    CUIL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoachUpdateFormProps = React.PropsWithChildren<{
    overrides?: CoachUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coach?: any;
    onSubmit?: (fields: CoachUpdateFormInputValues) => CoachUpdateFormInputValues;
    onSuccess?: (fields: CoachUpdateFormInputValues) => void;
    onError?: (fields: CoachUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoachUpdateFormInputValues) => CoachUpdateFormInputValues;
    onValidate?: CoachUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CoachUpdateForm(props: CoachUpdateFormProps): React.ReactElement;
