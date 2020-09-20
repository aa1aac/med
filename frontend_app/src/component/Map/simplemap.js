import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow : false,
    activeMarker : {},
    selectedPlace : {}
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 37.759703,
            lng: -122.428093
          }
        }
      >

      {/* {
        this.props.donors.map((donor) => (
          <Marker
            name="Dolores"
            onClick={this.onMarkerClick}
            position={{ lat: 37.759703, lng: -122.428093 }}
          />
        ))
      } */}

      <InfoWindow
        marker={this.state.activeMarker}
        onClose={this.onInfoWindowClose}
        visible={this.state.showingInfoWindow}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
      </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD_ZXHJDPE3W44CXfY0nVlzu_hMeRNv4cc'
})(MapContainer);
