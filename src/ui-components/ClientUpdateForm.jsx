/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getClient } from "../graphql/queries";
import { updateClient } from "../graphql/mutations";
export default function ClientUpdateForm(props) {
  const {
    id: idProp,
    client: clientModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    DNI: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [surname, setSurname] = React.useState(initialValues.surname);
  const [email, setEmail] = React.useState(initialValues.email);
  const [DNI, setDNI] = React.useState(initialValues.DNI);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clientRecord
      ? { ...initialValues, ...clientRecord }
      : initialValues;
    setName(cleanValues.name);
    setSurname(cleanValues.surname);
    setEmail(cleanValues.email);
    setDNI(cleanValues.DNI);
    setErrors({});
  };
  const [clientRecord, setClientRecord] = React.useState(clientModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getClient,
              variables: { id: idProp },
            })
          )?.data?.getClient
        : clientModelProp;
      setClientRecord(record);
    };
    queryData();
  }, [idProp, clientModelProp]);
  React.useEffect(resetStateValues, [clientRecord]);
  const validations = {
    name: [{ type: "Required" }],
    surname: [{ type: "Required" }],
    email: [{ type: "Required" }],
    DNI: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          surname,
          email,
          DNI,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateClient,
            variables: {
              input: {
                id: clientRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClientUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              surname,
              email,
              DNI,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Surname"
        isRequired={true}
        isReadOnly={false}
        value={surname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname: value,
              email,
              DNI,
            };
            const result = onChange(modelFields);
            value = result?.surname ?? value;
          }
          if (errors.surname?.hasError) {
            runValidationTasks("surname", value);
          }
          setSurname(value);
        }}
        onBlur={() => runValidationTasks("surname", surname)}
        errorMessage={errors.surname?.errorMessage}
        hasError={errors.surname?.hasError}
        {...getOverrideProps(overrides, "surname")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              email: value,
              DNI,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Dni"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={DNI}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              surname,
              email,
              DNI: value,
            };
            const result = onChange(modelFields);
            value = result?.DNI ?? value;
          }
          if (errors.DNI?.hasError) {
            runValidationTasks("DNI", value);
          }
          setDNI(value);
        }}
        onBlur={() => runValidationTasks("DNI", DNI)}
        errorMessage={errors.DNI?.errorMessage}
        hasError={errors.DNI?.hasError}
        {...getOverrideProps(overrides, "DNI")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || clientModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || clientModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
