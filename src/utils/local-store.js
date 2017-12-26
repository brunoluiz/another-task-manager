export const getState = (key) => {
  try {
    const state = localStorage.getItem('state')

    const data = (state)
      ? JSON.parse(state)
      : undefined

    if (!data) return undefined

    return key ? data[key] : state
  } catch (e) {
    console.log('Error on localStorage.getItem', e)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    window.localStorage.setItem('state', JSON.stringify(state))
  } catch (e) {
    console.log('Error on localStorage.setItem', e)
  }
}

export default {
  get: getState,
  save: saveState
}
