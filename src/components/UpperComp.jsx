import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

const UpperComp = () => {
  return (
    <div className="upper">
        <h1>👉 Higher order Components 👈</h1>
        <ul>
            <li>💡 Higher order components are advanced technique for reusing component logic.</li>
            <li>Basically,it is  a function that takes a component and returns a new component.</li>
            <li>it is easy to handle</li>
            <li>gets rid of copying the same logic in every component.</li>
            <li>it makes our code more readable.</li>
        </ul>
        <ClickCounter/>
        <HoverCounter/>
        <p>💡<span> Explanation</span>-both the button click and text hover have the same functionality where a state is getting updated.hence,instead of writing the same logic for both of them,make a separate higher order component and write the logic there.Now,pass both click and hover component as argument into higher order component which will assign some state and functionality to them and return a new component.</p>
    </div>
  )
}

export default UpperComp