import { when } from 'k-ramel'
import { todos, footer } from './reactions'

export default [
  when('@@krml/INIT')(todos.load),
  when('@@http/TODOS>GET>ENDED')(todos.set),
  when('@@ui/ADD_TODO_KEYDOWN', action => action.payload === 13)(todos.add),
  when('@@ui/ADD_TODO_KEYDOWN', action => action.payload === 27)(todos.clearNew),
  when('@@ui/ADD_TODO_CHANGE')(todos.setNew),
  when('@@ui/TODO_ON_REMOVE')(todos.remove),
  when('@@ui/TODO_ON_COMPLETE')(todos.toggleComplete),
  when('@@ui/FOOTER_ON_CLEAR_COMPLETED')(todos.clearCompleted),
  when(/@@krf\/.*>ALL/)(footer.updateCounts),
  when(/@@krf\/.*>DATA_TODOS>ALL/)(todos.updateViews),
  when('@@ui/HEADER_ON_COMPLETE_ALL')(todos.completeAll),
]
