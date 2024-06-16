import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteItems} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteItems(id)
  }
  return (
    <li>
      <div className="history-lists">
        <p className="time-stamp">{timeAccessed}</p>
        <div className="logo-name-container">
          <div className="logo-name">
            <img className="logos" alt="domain logo" src={logoUrl} />
            <div className="name-and-url">
              <p className="title">{title}</p>
              <p className="domainUrl">{domainUrl}</p>
            </div>
          </div>
          <div className="delete-container">
            <button
              data-testid="delete"
              className="btn-delete"
              onClick={onDelete}
            >
              <img
                alt="delete"
                className="delete-logo"
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItems
