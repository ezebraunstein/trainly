/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExcerciseInstance = /* GraphQL */ `
  query GetExcerciseInstance($id: ID!) {
    getExcerciseInstance(id: $id) {
      id
      reps
      exerciseID
      blockID
      __typename
    }
  }
`;
export const listExcerciseInstances = /* GraphQL */ `
  query ListExcerciseInstances(
    $filter: ModelExcerciseInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExcerciseInstances(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reps
        exerciseID
        blockID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const excerciseInstancesByExerciseID = /* GraphQL */ `
  query ExcerciseInstancesByExerciseID(
    $exerciseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExcerciseInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    excerciseInstancesByExerciseID(
      exerciseID: $exerciseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reps
        exerciseID
        blockID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const excerciseInstancesByBlockID = /* GraphQL */ `
  query ExcerciseInstancesByBlockID(
    $blockID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExcerciseInstanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    excerciseInstancesByBlockID(
      blockID: $blockID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reps
        exerciseID
        blockID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        video
        description
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
    getBlock(id: $id) {
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
export const listBlocks = /* GraphQL */ `
  query ListBlocks(
    $filter: ModelBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sets
        pause
        dayID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const blocksByDayID = /* GraphQL */ `
  query BlocksByDayID(
    $dayID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blocksByDayID(
      dayID: $dayID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        sets
        pause
        dayID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDay = /* GraphQL */ `
  query GetDay($id: ID!) {
    getDay(id: $id) {
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
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        routineID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const daysByRoutineID = /* GraphQL */ `
  query DaysByRoutineID(
    $routineID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    daysByRoutineID(
      routineID: $routineID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        routineID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoutine = /* GraphQL */ `
  query GetRoutine($id: ID!) {
    getRoutine(id: $id) {
      id
      Days {
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const listRoutines = /* GraphQL */ `
  query ListRoutines(
    $filter: ModelRoutineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        email
        DNI
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoach = /* GraphQL */ `
  query GetCoach($id: ID!) {
    getCoach(id: $id) {
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
export const listCoaches = /* GraphQL */ `
  query ListCoaches(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        email
        DNI
        CUIL
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoachClient = /* GraphQL */ `
  query GetCoachClient($id: ID!) {
    getCoachClient(id: $id) {
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
export const listCoachClients = /* GraphQL */ `
  query ListCoachClients(
    $filter: ModelCoachClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoachClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        coachId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const coachClientsByClientId = /* GraphQL */ `
  query CoachClientsByClientId(
    $clientId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCoachClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coachClientsByClientId(
      clientId: $clientId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientId
        coachId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const coachClientsByCoachId = /* GraphQL */ `
  query CoachClientsByCoachId(
    $coachId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCoachClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coachClientsByCoachId(
      coachId: $coachId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clientId
        coachId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
