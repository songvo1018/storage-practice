import React from 'react'

const ItemCard = (props) => {
  let data = props.data
  console.log(data.arr[1].id);
  
  return (
    <div>
      <p>
        {data.arr[1].name}
      </p>
      <p>
        {data.arr[1].description}
      </p>
      <p>
        {data.arr[1].price}
      </p>
    </div>
  )
}


export default  ItemCard