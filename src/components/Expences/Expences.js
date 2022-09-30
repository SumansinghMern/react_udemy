import Card from "../UI/Card"
import ExpenceItem from "./ExpenceItem"
import './Expences.css'

const Expences = (props) => {

    const expenses = props.expenses

    return(
        <Card className="expences">
            {
                expenses.map((expense, index) => {
                    return <ExpenceItem expense={expense} key={expense.id}></ExpenceItem>
                })
            }
        </Card>
        
    )
}

export default Expences