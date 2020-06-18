const INITIAL_STATE = {
  projects: [
    { id: '1', title: 'title _ 1', content: 'asd qwea asd' },
    { id: '2', title: 'title _ 2', content: 'zxc asdc lkj' },
    { id: '3', title: 'title _ 3', content: 'mnb ghjd qwe' },
  ]
}

const projectReducer = (state = INITIAL_STATE, action) => {
  return state
}

export default projectReducer