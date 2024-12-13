// src/store/slices/userSelectors.ts

export const selectPropertyList = (state: any) => state.property.propertyList;
export const selectPropertyDetail = (state: any) =>
  state.property.propertyDetail;
export const selectLoading = (state: any) => state.property.loading;
export const selectError = (state: any) => state.property.error;
