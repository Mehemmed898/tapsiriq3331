import React, { Component } from 'react'
import './Buton.css'

class Buton extends Component {

    render() {
        return (
            <div>
                <button className='btn' onClick={() => console.log("Button click!")}>Click </button>
            </div>
        )
    }
}
export default Buton