import React from 'react'

class Listing extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [
                { name: 'Manu', phone: '872', email: 'mk@live.in' },
                { name: 'Deepali', phone: '350', email: 'deep@gmail.in' },
                { name: 'ish', phone: '142', email: 'ish@rediff.com' },
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Listing with Map</h1>

                {
                    this.state.list.map((item) =>
                        <div>
                            <span> Name: {item.name}</span>


                            <span>Phone: {item.phone}</span>


                            <span>Email: {item.email}</span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Listing