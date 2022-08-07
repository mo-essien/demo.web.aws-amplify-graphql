/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
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
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        collectionItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCollectionItem = /* GraphQL */ `
  query GetCollectionItem($id: ID!) {
    getCollectionItem(id: $id) {
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
export const listCollectionItems = /* GraphQL */ `
  query ListCollectionItems(
    $filter: ModelCollectionItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectionItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
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
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        action
        collectionItem {
          id
          title
          quantity
          done
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
      nextToken
    }
  }
`;
