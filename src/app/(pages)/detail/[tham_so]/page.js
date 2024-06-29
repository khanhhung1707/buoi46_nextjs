import React from 'react'

const page = (props) => {
    const {tham_so} = props.params;
    console.log('tham_so', tham_so)

  return (
    <div className='container'>
        <h3>Detail</h3>
        <p>id: {tham_so}</p>
    </div>
  )
}

export default page