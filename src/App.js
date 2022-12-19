import {Component} from 'react'
import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component {
  state = {number: 2000}

  onclickSubstractNumber = val => {
    this.setState(prevState => ({number: prevState.number - val}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="cashWithDrawal-container">
        <div className="wallet-container">
          <div className="users">
            <div className="user-logo">
              <p className="user">S</p>
            </div>
            <div className="user-name">
              <p className="name">Sarah Williams</p>
            </div>
          </div>
          <div className="wallet-in-numbers">
            <div className="Wallet">
              <p className="balance-text">Your Balance</p>
            </div>
            <div className="rupees">
              <p className="rupessInNumbers">{number}</p>
              <p className="inRupees">In Rupees</p>
            </div>
          </div>
          <div className="Withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="sum-in-rupees">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="button-numbers-container">
            {denominationsList.map(eachItem => (
              <CashWithdrawal
                denominationsList={eachItem}
                key={eachItem.id}
                onclickSubstractNumber={this.onclickSubstractNumber}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default App
