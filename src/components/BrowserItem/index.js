import './index.css'

const BrowserItem = props => {
  const {historyItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const handleClick = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="content-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img className="logo-url" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" onClick={handleClick} className="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItem
