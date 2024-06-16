import {Component} from 'react'
import HistoryItems from '../HistoryItems'
import './index.css'

class History extends Component {
  state = {
    searchInput: '',
    historyList: this.props.initialHistoryList,
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItems = id => {
    const {historyList} = this.state
    const filterList = historyList.filter(each => each.id !== id)

    this.setState({historyList: filterList})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResult = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="bg-container">
          <div className="history-container">
            <img
              className="history-logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
            <div className="input-container">
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search history"
                value={searchInput}
                onChange={this.onSearchInput}
              />
            </div>
          </div>
        </div>
        {searchResult.length === 0 ? (
          <div className="empty-history">
            <p>There is no history to show</p>
          </div>
        ) : (
          <ul>
            <div className="history-items-container">
              <div className="history-items-card">
                {searchResult.map(each => (
                  <HistoryItems
                    key={each.id}
                    historyDetails={each}
                    deleteItems={this.deleteItems}
                  />
                ))}
              </div>
            </div>
          </ul>
        )}
      </div>
    )
  }
}

export default History
