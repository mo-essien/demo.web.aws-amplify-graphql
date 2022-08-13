/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
      id
      title
      description
      slug
      collectionItems {
        items {
          id
          actionIDs
          collectionID
          title
          quantity
          done
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
      id
      title
      description
      slug
      collectionItems {
        items {
          id
          actionIDs
          collectionID
          title
          quantity
          done
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
      id
      title
      description
      slug
      collectionItems {
        items {
          id
          actionIDs
          collectionID
          title
          quantity
          done
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const createCollectionItem = /* GraphQL */ `
  mutation CreateCollectionItem(
    $input: CreateCollectionItemInput!
    $condition: ModelCollectionItemConditionInput
  ) {
    createCollectionItem(input: $input, condition: $condition) {
      id
      actionIDs
      collectionID
      title
      quantity
      done
      actions {
        items {
          id
          action
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const updateCollectionItem = /* GraphQL */ `
  mutation UpdateCollectionItem(
    $input: UpdateCollectionItemInput!
    $condition: ModelCollectionItemConditionInput
  ) {
    updateCollectionItem(input: $input, condition: $condition) {
      id
      actionIDs
      collectionID
      title
      quantity
      done
      actions {
        items {
          id
          action
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const deleteCollectionItem = /* GraphQL */ `
  mutation DeleteCollectionItem(
    $input: DeleteCollectionItemInput!
    $condition: ModelCollectionItemConditionInput
  ) {
    deleteCollectionItem(input: $input, condition: $condition) {
      id
      actionIDs
      collectionID
      title
      quantity
      done
      actions {
        items {
          id
          action
          createdAt
          updatedAt
        }
        nextToken
      }
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
      id
      action
      createdAt
      updatedAt
    }
  }
`;
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
      id
      action
      createdAt
      updatedAt
    }
  }
`;
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
      id
      action
      createdAt
      updatedAt
    }
  }
`;
