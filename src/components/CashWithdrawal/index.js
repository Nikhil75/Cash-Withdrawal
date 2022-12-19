import './index.css'

const CashWithdrawal = props => {
  const {denominationsList, onclickSubstractNumber} = props
  const {id, value} = denominationsList

  const getNumber = () => {
    onclickSubstractNumber(value)
  }

  return (
    <li className="Numbers-list">
      <button type="button" className="ten" onClick={getNumber}>
        {value}
      </button>
    </li>
  )
}
export default CashWithdrawal
