import React, {Component} from 'react'
import { Map, TileLayer } from 'react-leaflet'

const position = [33.9, 35.8]

export default class HomeMap extends Component {
  render () {
    return  (
      <div>
        <Map center={position} zoom={8} className="map" style={{height: "600px", width: "100%", margin: "0"}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    )
  }
}