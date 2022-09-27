const ExpenceData = (props) => {

    const mounth = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <div>
            <div>{mounth}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ExpenceData