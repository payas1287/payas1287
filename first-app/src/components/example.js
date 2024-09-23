import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from './actions'

class Counter extends React.Component{
    render() {
        // By connecting mapStateToProps and mapDispatchToProps, their returned values comes to as props
        const {counterValue, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <h1>Counter Component</h1>
                <h3>Counter Value: {counterValue}</h3>
                <div style={{margin: 40, flexDirection: 'row'}}>
                    <button style={{width: 90, height: 60, borderRadius: 10, padding:10}} onClick={onIncrement}>Increment</button>
                    <button style={{width: 90, height: 60, borderRadius: 10, padding:10}} onClick={onDecrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

// What action to dispatch to trigger reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    }
}

// What state to listen
const mapStateToProps = (state) => {
    return {
        counterValue: state.counterValue
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)