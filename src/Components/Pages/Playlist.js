import React from 'react'
import '../Styles/Playlist.css'
import {BiHeadphone} from 'react-icons/bi'
import {ImBin2} from 'react-icons/im'


function Playlist() {
  return (
    <div className='playList'>
        <div className='title'>Playlists</div>
        <ul>
          <li><i><BiHeadphone /></i><span>Playlist1</span><i className='i2'><ImBin2 /></i></li>
          <li><i><BiHeadphone /></i><span>Playlist1</span><i className='i2'><ImBin2 /></i></li>
          <li><i><BiHeadphone /></i><span>Playlist1</span><i className='i2'><ImBin2 /></i></li>
          <li><i><BiHeadphone /></i><span>Playlist1</span><i className='i2'><ImBin2 /></i></li>
          <li><i><BiHeadphone /></i><span>Playlist1</span><i className='i2'><ImBin2 /></i></li>
        </ul>
    </div>
  )
}

export {Playlist}
