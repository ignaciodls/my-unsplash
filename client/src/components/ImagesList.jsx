import React, { useMemo } from 'react'
import Masonry from 'react-masonry-css'
import Card from './Card';
import { useData } from '../context/context'

const ImagesList = () => {

    const {data,query, loading} = useData()

    const filteredData = useMemo(() => {

        return data.filter(image => {
            return image["name"].toLowerCase().includes(query.toLowerCase())
        })

    },[query,data])

    const breakpointColumnsObj = {
        default: 5,
        1900: 5,
        1650: 4,
        1300: 3,
        950: 2,
        600: 1,
      };

    return (
        <>
        {
            !loading ?
            (<Masonry
                breakpointCols={breakpointColumnsObj}
                style={{display:'flex'}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
        
                    {
                        filteredData.map((obj,idx) => {
                            return(
        
                                <Card
                                key={idx}
                                url={obj.secure_url}
                                name={obj.name}
                                id={obj.public_id}/>
        
                            )
                        })
                    }
        
                </Masonry>):
                <div className='spinner-wrapper'>
                    <div className='spinner'></div>
                </div>
        }
        </>
    )
}

export default ImagesList
