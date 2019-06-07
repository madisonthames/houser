import React, {Component} from 'react';
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP} from '../../store';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip: store.getState().zip 
        }
    }

    handleChangeName(nameVal) {
        this.setState({ name: nameVal})
    }

    handleChangeAddress(addressVal) {
        this.setState({ address: addressVal })
    }

    handleChangeCity(cityVal) {
        this.setState({ city: cityVal })
    }

    handleChangeState(stateVal) {
        this.setState({ state: stateVal })
    }

    handleChangeZip(zipVal) {
        this.setState({ zip: zipVal })
    }

    render() {

    return (

        <div className='wizard'>
            <div className='wizardHeader'>
                <h1 className='wizardTitle'>Add New Listing</h1>
                <button>Cancel</button>
            </div>

            <div className='wizardForm'>
                <p>Property Name:</p>
                <input type='text' value={this.state.name} name='propertyName' onChange={e => this.handleChangeName(e.target.value)}/>
                <p>Address:</p>
                <input type='text' value={this.state.address} name='address' onChange={e => this.handleChangeAddress(e.target.value)} />
                <p>City:</p>
                <input type='text' value={this.state.city} name='city' onChange={e => this.handleChangeCity(e.target.value)} />
                <p>State:</p>
                <input type='text' value={this.state.state} name='state' onChange={e => this.handleChangeState(e.target.value)} />
                <p>Zip:</p>
                <input type='text' value={this.state.zip} name='zip' onChange={e => this.handleChangeZip(e.target.value)} />
            </div>

            <div>
                <button>Complete</button>
            </div>
        </div>
    )
}
}

export default Wizard;