export const flatter = (jsonTree: { [key: string]: string }, upperNode = '') => {
  return Object.keys(jsonTree).reduce((accMsg: { [key: string]: string }, key) => {
    const value = jsonTree[key]
    const separatedKey = upperNode ? `${upperNode}.${key}` : key

    if (typeof value === 'string') {
      accMsg[separatedKey] = value
    } else {
      accMsg = { ...accMsg, ...flatter(value, separatedKey) }
    }

    return accMsg
  }, {})
}
