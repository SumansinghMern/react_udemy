import './ExpenceItem.css'

const ExpenceItem = () => {
    return(
        <div className='expense-item'>
            <div>28 Sep 2021</div>
            <div className='expense-item__description'>
                <h2>New Books</h2>
                <div className='expense-item__price'>$18.69</div>
            </div>
        </div>
    )
}

export default ExpenceItem