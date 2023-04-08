import React from 'react'
import { useGetData } from '../hooks/useGetData'
import { useParams } from 'react-router-dom'

type Props = {}


const SingleProduct = (props: Props) => {
    let { productID } = useParams();
    let {isLoading, error, data} = useGetData({key:productID , endpoint:`products/${productID}`})

    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>An Error has occurred ... {error?.message }</div>
        )
    }
	return (
        <div className='singleProduct'>
        {data?.data.title}
    </div>
	);

   
  }

export default SingleProduct