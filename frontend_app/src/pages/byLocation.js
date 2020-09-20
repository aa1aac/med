import Map from "../component/Map/Map";

import React, { Component } from "react";
import { toast } from "react-toastify";

class ByLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    };
  }

  componentDidMount() {
    const self = this;
    navigator.geolocation.getCurrentPosition((position) => {
      self.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  render() {
    if (this.state.lat && this.state.lng) {
      return (
        <div>
          <Map location={{ lat: this.state.lat, lng: this.state.lng }} />
        </div>
      );
    } else {
      toast.error("please enable location to use this feature");
      return null;
    }
  }
}

export default ByLocation;
