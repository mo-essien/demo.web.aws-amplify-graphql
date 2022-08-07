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
      collectionItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
          collectionCollectionItemsId
          collectionItemCollectionId
        }
        nextToken
      }
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
      collectionItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
          collectionCollectionItemsId
          collectionItemCollectionId
        }
        nextToken
      }
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
      collectionItems {
        items {
          id
          title
          quantity
          done
          createdAt
          updatedAt
          collectionCollectionItemsId
          collectionItemCollectionId
        }
        nextToken
      }
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
      title
      quantity
      done
      collection {
        id
        title
        description
        collectionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          collectionItemActionsId
          actionCollectionItemId
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionCollectionItemsId
      collectionItemCollectionId
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
      title
      quantity
      done
      collection {
        id
        title
        description
        collectionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          collectionItemActionsId
          actionCollectionItemId
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionCollectionItemsId
      collectionItemCollectionId
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
      title
      quantity
      done
      collection {
        id
        title
        description
        collectionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          action
          createdAt
          updatedAt
          collectionItemActionsId
          actionCollectionItemId
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionCollectionItemsId
      collectionItemCollectionId
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
      collectionItem {
        id
        title
        quantity
        done
        collection {
          id
          title
          description
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionItemsId
        collectionItemCollectionId
      }
      createdAt
      updatedAt
      collectionItemActionsId
      actionCollectionItemId
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
      collectionItem {
        id
        title
        quantity
        done
        collection {
          id
          title
          description
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionItemsId
        collectionItemCollectionId
      }
      createdAt
      updatedAt
      collectionItemActionsId
      actionCollectionItemId
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
      collectionItem {
        id
        title
        quantity
        done
        collection {
          id
          title
          description
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionItemsId
        collectionItemCollectionId
      }
      createdAt
      updatedAt
      collectionItemActionsId
      actionCollectionItemId
    }
  }
`;
