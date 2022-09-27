import ExpenceData from './ExpenceDate'
import './ExpenceItem.css'

const ExpenceItem = (props) => {
  
    return(
        <div className='expense-item'>

            <ExpenceData date={props.expense.date}/>
            
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
        </div>
    )
}

export default ExpenceItem