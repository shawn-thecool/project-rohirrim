/** NOTE: manage local storage */
type TLocalStorageType = 'AUTH_TOKEN' | 'REFRESH_TOKEN'
type TLocalStorageTypeMap = {
  [type in TLocalStorageType]: string
}
const LOCAL_STORAGE_TYPE_MAP: TLocalStorageTypeMap = {
  AUTH_TOKEN: 'storage-local-auth-token',
  REFRESH_TOKEN: 'storage-local-refresh-token',
}
export const getLocalData = (type: TLocalStorageType) =>
  localStorage.getItem(LOCAL_STORAGE_TYPE_MAP[type])
export const setLocalData = (type: TLocalStorageType, token: string) =>
  localStorage.setItem(LOCAL_STORAGE_TYPE_MAP[type], token)
export const removeLocalData = (type: TLocalStorageType) =>
  localStorage.removeItem(LOCAL_STORAGE_TYPE_MAP[type])
export const clearLocalData = () => localStorage.clear()

/** NOTE: manage session storage */
type TSessionStorageType = 'SITES'
type TSessionStorageTypeMap = {
  [type in TSessionStorageType]: string
}
const SESSION_STORAGE_TYPE_MAP: TSessionStorageTypeMap = {
  SITES: 'storage-session-sites',
}
export const getSessionData = (type: TSessionStorageType) =>
  sessionStorage.getItem(SESSION_STORAGE_TYPE_MAP[type])
export const setSessionData = (type: TSessionStorageType, token: string) =>
  sessionStorage.setItem(SESSION_STORAGE_TYPE_MAP[type], token)
export const removeSessionData = (type: TSessionStorageType) =>
  sessionStorage.removeItem(SESSION_STORAGE_TYPE_MAP[type])
export const clearSessionData = () => sessionStorage.clear()
