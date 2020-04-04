import React, {Component} from 'react';
import searchingService from './searching-service';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            value: ''
        }
        this.changeInput = this.changeInput.bind(this);
        this.submitInput = this.submitInput.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }


    changeInput(e) {
        const newInput = e.target.value;

        this.setState({
            input: newInput
        })
    }

    changeValue(e) {
        const newInput = e.target.value;

        this.setState({
            value: newInput
        })
    }

    submitInput(e) {
        e.preventDefault();
        const {input} = this.state;

        const array = searchingService.convertToArray(input);

        this.props.setArrayAndValueState(array, this.state.value);
    }

    render(){
        return (
            <form className='submit-form' onSubmit={(e) => this.submitInput(e)}>
                <label htmlFor="input-field">Add search input here</label>
                <textarea id="input-field" onChange={(e) => this.changeInput(e)}/>
                <label htmlFor="value">Value to search for</label>
                <input type="text" id="value" onChange={(e) => this.changeValue(e)}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default InputForm;