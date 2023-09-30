/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExcerciseInstance = /* GraphQL */ `
  mutation CreateExcerciseInstance(
    $input: CreateExcerciseInstanceInput!
    $condition: ModelExcerciseInstanceConditionInput
  ) {
    createExcerciseInstance(input: $input, condition: $condition) {
      id
      reps
      exerciseID
      blockID
      __typename
    }
  }
`;
export const updateExcerciseInstance = /* GraphQL */ `
  mutation UpdateExcerciseInstance(
    $input: UpdateExcerciseInstanceInput!
    $condition: ModelExcerciseInstanceConditionInput
  ) {
    updateExcerciseInstance(input: $input, condition: $condition) {
      id
      reps
      exerciseID
      blockID
      __typename
    }
  }
`;
export const deleteExcerciseInstance = /* GraphQL */ `
  mutation DeleteExcerciseInstance(
    $input: DeleteExcerciseInstanceInput!
    $condition: ModelExcerciseInstanceConditionInput
  ) {
    deleteExcerciseInstance(input: $input, condition: $condition) {
      id
      reps
      exerciseID
      blockID
      __typename
    }
  }
`;
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
      id
      name
      category
      video
      description
      ExcerciseInstances {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
      id
      name
      category
      video
      description
      ExcerciseInstances {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
      id
      name
      category
      video
      description
      ExcerciseInstances {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createBlock = /* GraphQL */ `
  mutation CreateBlock(
    $input: CreateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    createBlock(input: $input, condition: $condition) {
      id
      name
      sets
      pause
      dayID
      ExcerciseInstances {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateBlock = /* GraphQL */ `
  mutation UpdateBlock(
    $input: UpdateBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    updateBlock(input: $input, condition: $condition) {
      id
      name
      sets
      pause
      dayID
      ExcerciseInstances {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteBlock = /* GraphQL */ `
  mutation DeleteBlock(
    $input: DeleteBlockInput!
    $condition: ModelBlockConditionInput
  ) {
    deleteBlock(input: $input, condition: $condition) {
      id
      name
      sets
      pause
      dayID
      ExcerciseInstances {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
      id
      name
      Blocks {
        nextToken
        __typename
      }
      routineID
      __typename
    }
  }
`;
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
      id
      name
      Blocks {
        nextToken
        __typename
      }
      routineID
      __typename
    }
  }
`;
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
      id
      name
      Blocks {
        nextToken
        __typename
      }
      routineID
      __typename
    }
  }
`;
export const createRoutine = /* GraphQL */ `
  mutation CreateRoutine(
    $input: CreateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    createRoutine(input: $input, condition: $condition) {
      id
      Days {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateRoutine = /* GraphQL */ `
  mutation UpdateRoutine(
    $input: UpdateRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    updateRoutine(input: $input, condition: $condition) {
      id
      Days {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteRoutine = /* GraphQL */ `
  mutation DeleteRoutine(
    $input: DeleteRoutineInput!
    $condition: ModelRoutineConditionInput
  ) {
    deleteRoutine(input: $input, condition: $condition) {
      id
      Days {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      name
      surname
      email
      DNI
      coachs {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      name
      surname
      email
      DNI
      coachs {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      name
      surname
      email
      DNI
      coachs {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createCoach = /* GraphQL */ `
  mutation CreateCoach(
    $input: CreateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    createCoach(input: $input, condition: $condition) {
      id
      name
      surname
      email
      DNI
      CUIL
      Clients {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const updateCoach = /* GraphQL */ `
  mutation UpdateCoach(
    $input: UpdateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    updateCoach(input: $input, condition: $condition) {
      id
      name
      surname
      email
      DNI
      CUIL
      Clients {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const deleteCoach = /* GraphQL */ `
  mutation DeleteCoach(
    $input: DeleteCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    deleteCoach(input: $input, condition: $condition) {
      id
      name
      surname
      email
      DNI
      CUIL
      Clients {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const createCoachClient = /* GraphQL */ `
  mutation CreateCoachClient(
    $input: CreateCoachClientInput!
    $condition: ModelCoachClientConditionInput
  ) {
    createCoachClient(input: $input, condition: $condition) {
      id
      clientId
      coachId
      client {
        id
        name
        surname
        email
        DNI
        __typename
      }
      coach {
        id
        name
        surname
        email
        DNI
        CUIL
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCoachClient = /* GraphQL */ `
  mutation UpdateCoachClient(
    $input: UpdateCoachClientInput!
    $condition: ModelCoachClientConditionInput
  ) {
    updateCoachClient(input: $input, condition: $condition) {
      id
      clientId
      coachId
      client {
        id
        name
        surname
        email
        DNI
        __typename
      }
      coach {
        id
        name
        surname
        email
        DNI
        CUIL
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCoachClient = /* GraphQL */ `
  mutation DeleteCoachClient(
    $input: DeleteCoachClientInput!
    $condition: ModelCoachClientConditionInput
  ) {
    deleteCoachClient(input: $input, condition: $condition) {
      id
      clientId
      coachId
      client {
        id
        name
        surname
        email
        DNI
        __typename
      }
      coach {
        id
        name
        surname
        email
        DNI
        CUIL
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
