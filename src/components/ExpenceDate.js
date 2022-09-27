import './ExpenceDate.css'

const ExpenceData = (props) => {

    const mounth = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <div className="expense-date">
            <div className="expense-date__month">{mounth}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenceData