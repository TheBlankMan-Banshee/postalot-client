import React from "react";
import PlacesAutocomplete,{
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {address:''};
    }
    handleChange = address =>{
        this.setState({address});
    }
    handleSelect = address =>{
        geocodeByAddress(address)
        .then(result => getLatLng(result[0]))
        //Write Lat/Long to Cookies
        //.then(({lat, lng})=>
        //to cookie
        //);
        .catch(error => console.log('Error', error));
    };

    render() {
        return (
            <div>
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({getInputProps, suggestions, getSuggestionItemProps, loading})=>(
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className:'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading&& <div>Loading...</div>}
                                {suggestions.map(suggestion=>{
                                    const className= suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    const style = suggestion.active
                                        ?{backgroundColor: '#fafafa', cursor:'pointer'}
                                        :{backgroundColor: '#ffffff', cursor: 'pointer'};
                                return(
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                
            </div>
        )
    }
}

function Metadata(){
    return(
        <div className = 'Metadata-container'>
            <h1>Image Metadata</h1>\
            <p>Edit the Metadata for your selected image by editing the fields below</p>
            <form>
                <label>
                    Location:
                    <LocationSearchInput/>
                </label>
                <label>
                    Capture Date: 
                    <input type="date" name="Capture Date"/>
                </label>
                <label>
                    Tags:
                    <input type="text" name="TagSting"/>
                </label>
                <input type="submit" name="save" value="Save"/>
                <input type="button" name="cancel" value="Cancel"/>
            </form>

        </div>
    );
}

export default Metadata;