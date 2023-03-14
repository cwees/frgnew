/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onCreateResponse(filter: $filter) {
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
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse($filter: ModelSubscriptionResponseFilterInput) {
    onUpdateResponse(filter: $filter) {
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
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse($filter: ModelSubscriptionResponseFilterInput) {
    onDeleteResponse(filter: $filter) {
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
export const onCreatePrompt = /* GraphQL */ `
  subscription OnCreatePrompt($filter: ModelSubscriptionPromptFilterInput) {
    onCreatePrompt(filter: $filter) {
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
export const onUpdatePrompt = /* GraphQL */ `
  subscription OnUpdatePrompt($filter: ModelSubscriptionPromptFilterInput) {
    onUpdatePrompt(filter: $filter) {
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
export const onDeletePrompt = /* GraphQL */ `
  subscription OnDeletePrompt($filter: ModelSubscriptionPromptFilterInput) {
    onDeletePrompt(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
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
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
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
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
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
