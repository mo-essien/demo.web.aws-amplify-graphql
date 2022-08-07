/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection {
    onCreateCollection {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection {
    onUpdateCollection {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection {
    onDeleteCollection {
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
export const onCreateCollectionItem = /* GraphQL */ `
  subscription OnCreateCollectionItem {
    onCreateCollectionItem {
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
export const onUpdateCollectionItem = /* GraphQL */ `
  subscription OnUpdateCollectionItem {
    onUpdateCollectionItem {
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
export const onDeleteCollectionItem = /* GraphQL */ `
  subscription OnDeleteCollectionItem {
    onDeleteCollectionItem {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction {
    onCreateAction {
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
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction {
    onUpdateAction {
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
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction {
    onDeleteAction {
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
