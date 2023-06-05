import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className='text-center  d-flex justify-content-center'>
            <div class="loading-wave">
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
                <div class="loading-bar"></div>
            </div>

        </div>
    )
}
