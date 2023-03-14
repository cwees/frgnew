/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
      id
      userID
      datetime
      text
      promptID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        datetime
        text
        promptID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncResponses = /* GraphQL */ `
  query SyncResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResponses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        datetime
        text
        promptID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrompt = /* GraphQL */ `
  query GetPrompt($id: ID!) {
    getPrompt(id: $id) {
      id
      adminID
      determines {
        items {
          id
          userID
          datetime
          text
          promptID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      datetim
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPrompts = /* GraphQL */ `
  query ListPrompts(
    $filter: ModelPromptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adminID
        determines {
          nextToken
          startedAt
        }
        datetim
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrompts = /* GraphQL */ `
  query SyncPrompts(
    $filter: ModelPromptFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrompts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        adminID
        determines {
          nextToken
          startedAt
        }
        datetim
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      adminID
      writes {
        items {
          id
          userID
          datetime
          text
          promptID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      firstname
      lastname
      storelocation
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        adminID
        writes {
          nextToken
          startedAt
        }
        firstname
        lastname
        storelocation
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        adminID
        writes {
          nextToken
          startedAt
        }
        firstname
        lastname
        storelocation
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      firstname
      lastname
      email
      storelocation
      username
      password
      isadmin
      manages {
        items {
          id
          adminID
          firstname
          lastname
          storelocation
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      decides {
        items {
          id
          adminID
          datetim
          text
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        email
        storelocation
        username
        password
        isadmin
        manages {
          nextToken
          startedAt
        }
        decides {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAdmins = /* GraphQL */ `
  query SyncAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstname
        lastname
        email
        storelocation
        username
        password
        isadmin
        manages {
          nextToken
          startedAt
        }
        decides {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const responsesByUserID = /* GraphQL */ `
  query ResponsesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responsesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        datetime
        text
        promptID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const responsesByPromptID = /* GraphQL */ `
  query ResponsesByPromptID(
    $promptID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    responsesByPromptID(
      promptID: $promptID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        datetime
        text
        promptID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const promptsByAdminID = /* GraphQL */ `
  query PromptsByAdminID(
    $adminID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPromptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promptsByAdminID(
      adminID: $adminID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        adminID
        determines {
          nextToken
          startedAt
        }
        datetim
        text
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const usersByAdminID = /* GraphQL */ `
  query UsersByAdminID(
    $adminID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByAdminID(
      adminID: $adminID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        adminID
        writes {
          nextToken
          startedAt
        }
        firstname
        lastname
        storelocation
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
