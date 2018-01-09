export const getTasksByList = (listId, tasks) => tasks
  .get('allIds')
  .map(id => tasks.getIn(['byId', id]))
  .reduce((acc, task) => {
    // Filter tasks which are not on the actual list
    if (!task || task.get('listId') !== listId) return acc

    // Maybe a bottleneck will be the toJS()
    return task.get('done')
      ? [...acc, task.toJS()]
      : [task.toJS(), ...acc]
  }, [])

export default {
  getTasksByList
}
