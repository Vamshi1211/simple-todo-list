// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDelete} = props
  const {title, id} = todoItem

  const deleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="list-item-container">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
