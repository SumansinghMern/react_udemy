import Card from '../UI/Card'
import ExpenceData from './ExpenceDate'
import './ExpenceItem.css'

const ExpenceItem = (props) => {
  
    return(
        <Card className='expense-item'>
            <ExpenceData date={props.expense.date}/>
            
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenceItem