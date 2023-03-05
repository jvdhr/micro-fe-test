import React from 'react'

export default function Button() {
    function invokeAlert(){
        alert("Hi Everyone!")
    }
  return (
    <button className="bg-pink-500 text-white px-5 py-2 rounded-lg cursor-pointer" onClick={invokeAlert}>
        Hello
    </button>
  )
}
