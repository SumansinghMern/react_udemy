import './ExpenseForm.css'


const ExpenseForm = (props) => {

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"/>
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type="number" />
            </div>
            <div className="new-expense__control">
                <label>Price</label>
                <input type="date" />
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm