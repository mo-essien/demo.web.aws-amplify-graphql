/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
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
          createdAt
          updatedAt
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
        slug
        collectionItems {
          nextToken
        }
        createdAt
        createdBy
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchCollections = /* GraphQL */ `
  query SearchCollections(
    $filter: SearchableCollectionFilterInput
    $sort: [SearchableCollectionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCollectionAggregationInput]
  ) {
    searchCollections(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        title
        description
        slug
        collectionItems {
          items {
            id
            quantity
            title
            done
            createdAt
            createdBy
            actionIDs
          }
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getCollectionItem = /* GraphQL */ `
  query GetCollectionItem($id: ID!) {
    getCollectionItem(id: $id) {
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
      createdAt
      updatedAt
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
        actionIDs
        collectionID
        title
        quantity
        done
        actions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const collectionItemByCollection = /* GraphQL */ `
  query CollectionItemByCollection(
    $collectionID: ID!
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionItemByCollection(
      collectionID: $collectionID
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        actionIDs
        collectionID
        title
        quantity
        done
        actions {
          nextToken
        }
        createdAt
        updatedAt
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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
