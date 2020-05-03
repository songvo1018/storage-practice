import React from 'react'

const ItemCard = (props) => {
  let data = props.data
  console.log(data);
  // for (let i = 0; i < data.arr.length; i++) {
  //   const element = data.arr[i];
  //   console.log(element.name);
  // }
  return (
    <div>
      <p>array {data.name}</p>
    </div>
  )
}


export default  ItemCard