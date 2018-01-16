import { FETCHING_NEW_LISTINGS } from '../constants';

export function fetchNewListings() {
  return {
    type: FETCHING_NEW_LISTINGS
  }
}

export const fetchEntities = (entityName, apiAction, args = {}, searchParamters = {}) => ({
  type: 'FETCH_ENTITIES',
  entityName,
  apiAction,
  args,
  searchParamters
});

export const fetchEntitiesSuccess = (entityName, entities, batchIndex) => ({
  type: 'FETCH_ENTITIES_SUCCESS',
  entityName,
  entities,
  batchIndex
});

export const fetchEntitiesError = (entityName, error, batchIndex) => ({
  type: 'FETCH_ENTITIES_ERROR',
  entityName,
  error,
  batchIndex
});
