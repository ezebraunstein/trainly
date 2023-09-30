/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoutineCreateFormInputValues = {};
export declare type RoutineCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoutineCreateFormOverridesProps = {
    RoutineCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type RoutineCreateFormProps = React.PropsWithChildren<{
    overrides?: RoutineCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoutineCreateFormInputValues) => RoutineCreateFormInputValues;
    onSuccess?: (fields: RoutineCreateFormInputValues) => void;
    onError?: (fields: RoutineCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoutineCreateFormInputValues) => RoutineCreateFormInputValues;
    onValidate?: RoutineCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoutineCreateForm(props: RoutineCreateFormProps): React.ReactElement;
