import { useEffect, useState } from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps"
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import GoogleMapReact from 'google-map-react';



Geocode.setApiKey( "AIzaSyDdzmIHbLacK7KPRzXM8TJza4ilbkghsSE" )

const Map = () => {

 
  
  const onPlaceSelected = (place) => {
    console.log('We selected a place', place)
  }
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: "AIzaSyB9OF0ZEL61XFJ0CA0K83y7e5r9lSh6X9s",
  });
  useEffect(() => {
   
  }, [placePredictions]);

  const [value, setValue] = useState(null);
{console.log(value)}
  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
        }}
      apiKey="AIzaSyB9OF0ZEL61XFJ0CA0K83y7e5r9lSh6X9s"
      />
      
     

    </div>
  );
}

export default Map;