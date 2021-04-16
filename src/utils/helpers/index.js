export const updateObjInArray = (items, propName, userId, newObjProps) => {
  return items.map(u => {
    if (u[propName] === userId) {
      return {...u, ...newObjProps}
    }
    return u;
  })
}