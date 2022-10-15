export const selectToken = state => state.auth.token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefresh = state => state.auth.isRefresh;

export const selectError = state => state.auth.error