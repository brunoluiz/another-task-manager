export const getState = () => {
  try {
    const state = localStorage.getItem('state')

    return (state)
      ? JSON.parse(state)
      : undefined
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
  getState,
  saveState
}
