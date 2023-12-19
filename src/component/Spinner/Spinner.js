import React from 'react'
import { useSelector } from 'react-redux'
import { PropagateLoader } from 'react-spinners'

export default function Spinner() {
    const isLoading = useSelector(state => state.spinnerReducer.isLoading)

    return isLoading ? (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 10,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255,0.8)',
        }}>
            <PropagateLoader color="#36d7b7" size={30} />
        </div>
    ) : <></>
}
