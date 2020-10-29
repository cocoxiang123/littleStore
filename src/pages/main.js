import React from 'react'
import Nav from '../component/Nav'
import StoreList from '../component/StoreList'

function main(props) {
    return (
        <div>
            <Nav />

            <StoreList {...props} />
        </div>
    )
}

export default main
