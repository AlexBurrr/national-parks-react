import React from 'react'
// eslint-disable-next-line
import * as parkCodes from '../../Data/ParkCodes'

import Header from '../../Components/Header'



// import axios from 'axios';

const Parks = () => {

    // const url = 'https://developer.nps.gov/api/v1/parks?parkCode=yose&api_key=rSKRXSd5KcnyWwg0JkrzXQz4PJe5Uq9f6o0GNiYW';

    // // let params = {
    // //     api_key: 'rSKRXSd5KcnyWwg0JkrzXQz4PJe5Uq9f6o0GNiYW'
    // // }


    // const [parks, setParks] = useState('');

    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => {
    //             setParks(res);

    //         })
    // }, [])
    // console.log(parks)

    return (
        <div>
            <Header />
            Parks
        </div>
    )
}

export default Parks
