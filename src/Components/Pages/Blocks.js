import React from 'react'
import '../Styles/Blockslist.css'

const color = [
  "#621882",
  "#0bc4cf",
  "#f000db",
]

function Blocks({arr}) {
  return (
    <div className='Blocklist'>
      {
        arr.map((e, index) =>{
            return (
                <div className={`Block`} style={{"left": `${( index % 3 * 220 + 10) }px`, top: `${(Math.floor(index / 3) * 220 + 10)}px`, marginRight: "10px", backgroundColor: `${color[index % 3]}`}} key={index}>
                    <span>{e}</span>
                </div>
            );
        })
      }
    </div>
  )
}

export {Blocks}
