import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.getAllHouses()
    }

    getAllHouses() {
        axios
        .get('http://localhost:5000/api/houses')
        .then(response => {
            this.setState({ houses: response.data })
        })
        .catch(error => console.log('There was an error getting the list of houses, try Oculus Reparo to resolve the issue.'))
    }

    deleteHouse() {
        axios
        .delete('http://localhost:4000/api/houses/${house_id}')
        .then(response => {
            this.setState({ houses: response.data})
        })
    }

    updateHouse() {
        axios
        .put('http://localhost:4000/api/houses/${house_id}')
        .then(response =>{
            this.setState({ houses: response.data})
        })
    }

    addHouse() {
        axios
        .post('http://localhost:4000/api/houses')
        .then(response => {
            this.setState({ houses: response.data})
        })
    }
   
    componentDidUpdate(previousProps) {
        if (this.props !== previousProps) {
          this.props.getAllHouses(this.props);
        }
      }

    render() {
        const map = this.state.houses.map(house => <li key={house} className='houseBox'>
            <div>{house.name}</div>
            <div>Address: {house.address}</div>
            <div>City: {house.city}</div>
            <div>State: {house.state}</div>
            <div>Zip: {house.zip}</div>
            <div className='delete'><button>X</button></div>
        </li>)
    return (
        <div className='dashboard'>
            <div className='dashboardHeader'>
                <h1 className='dashboardTitle'>Dashboard</h1>
                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>

            <div className='homeListings'>
                <h3>Home Listings</h3>
            </div>

            <div className='houseList'>
                {map}
            </div>
        </div>
    )
}
}

export default Dashboard;