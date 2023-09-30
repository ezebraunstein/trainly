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
export declare type RoutineUpdateFormInputValues = {};
export declare type RoutineUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoutineUpdateFormOverridesProps = {
    RoutineUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type RoutineUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoutineUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    routine?: any;
    onSubmit?: (fields: RoutineUpdateFormInputValues) => RoutineUpdateFormInputValues;
    onSuccess?: (fields: RoutineUpdateFormInputValues) => void;
    onError?: (fields: RoutineUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RoutineUpdateFormInputValues) => RoutineUpdateFormInputValues;
    onValidate?: RoutineUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoutineUpdateForm(props: RoutineUpdateFormProps): React.ReactElement;
