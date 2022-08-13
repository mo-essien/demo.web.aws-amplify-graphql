/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
export const onCreateCollectionItem = /* GraphQL */ `
  subscription OnCreateCollectionItem {
    onCreateCollectionItem {
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
export const onUpdateCollectionItem = /* GraphQL */ `
  subscription OnUpdateCollectionItem {
    onUpdateCollectionItem {
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
export const onDeleteCollectionItem = /* GraphQL */ `
  subscription OnDeleteCollectionItem {
    onDeleteCollectionItem {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction {
    onCreateAction {
      id
      action
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction {
    onUpdateAction {
      id
      action
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction {
    onDeleteAction {
      id
      action
      createdAt
      updatedAt
    }
  }
`;
