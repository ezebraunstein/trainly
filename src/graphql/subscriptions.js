/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExcerciseInstance = /* GraphQL */ `
  subscription OnCreateExcerciseInstance(
    $filter: ModelSubscriptionExcerciseInstanceFilterInput
  ) {
    onCreateExcerciseInstance(filter: $filter) {
      id
      reps
      exerciseID
      blockID
      __typename
    }
  }
`;
export const onUpdateExcerciseInstance = /* GraphQL */ `
  subscription OnUpdateExcerciseInstance(
    $filter: ModelSubscriptionExcerciseInstanceFilterInput
  ) {
    onUpdateExcerciseInstance(filter: $filter) {
      id
      reps
      exerciseID
      blockID
      __typename
    }
  }
`;
export const onDeleteExcerciseInstance = /* GraphQL */ `
  subscription OnDeleteExcerciseInstance(
    $filter: ModelSubscriptionExcerciseInstanceFilterInput
  ) {
    onDeleteExcerciseInstance(filter: $filter) {
      id
      reps
      exerciseID
      blockID
      __typename
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
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
export const onCreateBlock = /* GraphQL */ `
  subscription OnCreateBlock($filter: ModelSubscriptionBlockFilterInput) {
    onCreateBlock(filter: $filter) {
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
export const onUpdateBlock = /* GraphQL */ `
  subscription OnUpdateBlock($filter: ModelSubscriptionBlockFilterInput) {
    onUpdateBlock(filter: $filter) {
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
export const onDeleteBlock = /* GraphQL */ `
  subscription OnDeleteBlock($filter: ModelSubscriptionBlockFilterInput) {
    onDeleteBlock(filter: $filter) {
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
export const onCreateDay = /* GraphQL */ `
  subscription OnCreateDay($filter: ModelSubscriptionDayFilterInput) {
    onCreateDay(filter: $filter) {
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
export const onUpdateDay = /* GraphQL */ `
  subscription OnUpdateDay($filter: ModelSubscriptionDayFilterInput) {
    onUpdateDay(filter: $filter) {
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
export const onDeleteDay = /* GraphQL */ `
  subscription OnDeleteDay($filter: ModelSubscriptionDayFilterInput) {
    onDeleteDay(filter: $filter) {
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
export const onCreateRoutine = /* GraphQL */ `
  subscription OnCreateRoutine($filter: ModelSubscriptionRoutineFilterInput) {
    onCreateRoutine(filter: $filter) {
      id
      Days {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onUpdateRoutine = /* GraphQL */ `
  subscription OnUpdateRoutine($filter: ModelSubscriptionRoutineFilterInput) {
    onUpdateRoutine(filter: $filter) {
      id
      Days {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onDeleteRoutine = /* GraphQL */ `
  subscription OnDeleteRoutine($filter: ModelSubscriptionRoutineFilterInput) {
    onDeleteRoutine(filter: $filter) {
      id
      Days {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
export const onCreateCoach = /* GraphQL */ `
  subscription OnCreateCoach($filter: ModelSubscriptionCoachFilterInput) {
    onCreateCoach(filter: $filter) {
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
export const onUpdateCoach = /* GraphQL */ `
  subscription OnUpdateCoach($filter: ModelSubscriptionCoachFilterInput) {
    onUpdateCoach(filter: $filter) {
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
export const onDeleteCoach = /* GraphQL */ `
  subscription OnDeleteCoach($filter: ModelSubscriptionCoachFilterInput) {
    onDeleteCoach(filter: $filter) {
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
export const onCreateCoachClient = /* GraphQL */ `
  subscription OnCreateCoachClient(
    $filter: ModelSubscriptionCoachClientFilterInput
  ) {
    onCreateCoachClient(filter: $filter) {
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
export const onUpdateCoachClient = /* GraphQL */ `
  subscription OnUpdateCoachClient(
    $filter: ModelSubscriptionCoachClientFilterInput
  ) {
    onUpdateCoachClient(filter: $filter) {
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
export const onDeleteCoachClient = /* GraphQL */ `
  subscription OnDeleteCoachClient(
    $filter: ModelSubscriptionCoachClientFilterInput
  ) {
    onDeleteCoachClient(filter: $filter) {
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
