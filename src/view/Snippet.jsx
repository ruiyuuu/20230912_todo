import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";


export default function Snippet({loading}) {




  return (
    <div>
      <div className='loadingMask'>
        <SyncLoader
          color={"rgb(47, 179, 253)"}
          loading={loading}
          size={30}
        />
      </div>
    </div>
  )
}
