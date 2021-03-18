import './ParkCodes.scss'

export const parkCodes = [

    {
        ALPHACODE: "ACAD",
        PARKNAME: "Acadia NP"
    },
    {
        ALPHACODE: "ARCH",
        PARKNAME: "Arches NP"
    },
    {
        ALPHACODE: "BADL",
        PARKNAME: "Badlands NP"
    },
    {
        ALPHACODE: "BISC",
        PARKNAME: "Biscayne NP"
    },
    {
        ALPHACODE: "BLCA",
        PARKNAME: "Black Canyon of the Gunnison NP"
    },
    {
        ALPHACODE: "BRCA",
        PARKNAME: "Bryce Canyon NP"
    },
    {
        ALPHACODE: "CANY",
        PARKNAME: "Canyonlands NP"
    },
    {
        ALPHACODE: "CARE",
        PARKNAME: "Capitol Reef NP"
    },
    {
        ALPHACODE: "CAVE",
        PARKNAME: "Carlsbad Caverns NP"
    },
    {
        ALPHACODE: "CHIS",
        PARKNAME: "Channel Islands NP"
    },
    {
        ALPHACODE: "CRLA",
        PARKNAME: "Crater Lake NP"
    },
    {
        ALPHACODE: "CUVA",
        PARKNAME: "Cuyahoga Valley NP"
    },
    {
        ALPHACODE: "DENA",
        PARKNAME: "Denali NP"
    },
    {
        ALPHACODE: "DEVA",
        PARKNAME: "Death Valley NP"
    },
    {
        ALPHACODE: "DRTO",
        PARKNAME: "Dry Tortugas NP"
    },
    {
        ALPHACODE: "EVER",
        PARKNAME: "Everglades NP"
    },
    {
        ALPHACODE: "GAAR",
        PARKNAME: "Gates of the Arctic NP"
    },
    {
        ALPHACODE: "GLAC",
        PARKNAME: "Glacier NP"
    },
    {
        ALPHACODE: "GLBA",
        PARKNAME: "Glacier Bay NP"
    },
    {
        ALPHACODE: "GRBA",
        PARKNAME: "Great Basin NP"
    },
    {
        ALPHACODE: "GRCA",
        PARKNAME: "Grand Canyon NP"
    },
    {
        ALPHACODE: "GRSM",
        PARKNAME: "Great Smoky Mountains NP"
    },
    {
        ALPHACODE: "GRTE",
        PARKNAME: "Grand Teton NP"
    },
    {
        ALPHACODE: "GUMO",
        PARKNAME: "Guadalupe Mountains NP"
    },
    {
        ALPHACODE: "HALE",
        PARKNAME: "Haleakala NP"
    },
    {
        ALPHACODE: "HAVO",
        PARKNAME: "Hawaii Volcanoes NP"
    },
    {
        ALPHACODE: "HOSP",
        PARKNAME: "Hot Springs NP"
    },
    {
        ALPHACODE: "ISRO",
        PARKNAME: "Isle Royale NP"
    },
    {
        ALPHACODE: "JOTR",
        PARKNAME: "Joshua Tree NP"
    },
    {
        ALPHACODE: "KATM",
        PARKNAME: "Katmai NP"
    },
    {
        ALPHACODE: "KEFJ",
        PARKNAME: "Kenai Fjords NP"
    },
    {
        ALPHACODE: "KICA",
        PARKNAME: "Kings Canyon NP"
    },
    {
        ALPHACODE: "KOVA",
        PARKNAME: "Kobuk Valley NP"
    },
    {
        ALPHACODE: "LACL",
        PARKNAME: "Lake Clark NP"
    },
    {
        ALPHACODE: "LAVO",
        PARKNAME: "Lassen Volcanic NP"
    },
    {
        ALPHACODE: "MACA",
        PARKNAME: "Mammoth Cave NP"
    },
    {
        ALPHACODE: "MEVE",
        PARKNAME: "Mesa Verde NP"
    },
    {
        ALPHACODE: "MORA",
        PARKNAME: "Mount Rainier NP"
    },
    {
        ALPHACODE: "NOCA",
        PARKNAME: "North Cascades NP"
    },
    {
        ALPHACODE: "NPSA",
        PARKNAME: "National Park of American Samoa"
    },
    {
        ALPHACODE: "OLYM",
        PARKNAME: "Olympic NP"
    },
    {
        ALPHACODE: "PEFO",
        PARKNAME: "Petrified Forest NP"
    },
    {
        ALPHACODE: "REDW",
        PARKNAME: "Redwood NP"
    },
    {
        ALPHACODE: "THRO",
        PARKNAME: "Theodore Roosevelt NP"
    },
    {
        ALPHACODE: "VIIS",
        PARKNAME: "Virgin Islands NP"
    },
    {
        ALPHACODE: "VOYA",
        PARKNAME: "Voyageurs NP"
    },
    {
        ALPHACODE: "WICA",
        PARKNAME: "Wind Cave NP"
    },
    {
        ALPHACODE: "YELL",
        PARKNAME: "Yellowstone NP"
    },
    {
        ALPHACODE: "YOSE",
        PARKNAME: "Yosemite NP"
    },
    {
        ALPHACODE: "ZION",
        PARKNAME: "Zion NP"
    }
]





export let parkInfo = parkCodes.map((park, index) => {
    return (

        <div className="card" key={index}>
            <span>
                <p>
                    {park.PARKNAME}

                </p>

            </span>

        </div>
    )
})

console.log(parkCodes.length);