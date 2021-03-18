import React, { useEffect, useState } from 'react'
// eslint-disable-next-line
import * as parkCodes from '../../Data/ParkCodes'
import './Parks.scss'




import axios from 'axios';

const Parks = () => {

    const url = 'https://developer.nps.gov/api/v1/parks?parkCode=yose&api_key=rSKRXSd5KcnyWwg0JkrzXQz4PJe5Uq9f6o0GNiYW';

    // let params = {
    //     api_key: 'rSKRXSd5KcnyWwg0JkrzXQz4PJe5Uq9f6o0GNiYW'
    // }

    const [search, setSearch] = useState('')
    const [parks, setParks] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setParks(res);

            })
    }, [])
    console.log(parks)




    return (
        <div>


            <div className="bodyContainer">

                <input type="text" className='search' placeholder='search park' onChange={e => setSearch(e.target.value)} />
                <div className="card-container">
                    {parkCodes.parkInfo}
                </div>
            </div>
        </div>
    )
}

export default Parks
