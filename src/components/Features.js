import React from 'react'
import "./styles/features.scss"
export default function Features() {
  return (
    <section className='feature'>
        <div className='feature-text'>
        <h2>Features</h2>
        <p>
        Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
        </p>
    </div>

    <div className='video-div'>
       {/*  <video></video> */}
       <img alt="music" src="https://media.istockphoto.com/photos/blue-musical-instrument-wall-picture-id1283143454?b=1&k=20&m=1283143454&s=170667a&w=0&h=p-3qMtjQScHR8lG1iflIQFFcgwHNZ52Gv1nEUtweCHY=" />
    </div>
    </section>
  )
}
