import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "All",
      color: "All"
    }
  }

  onSelectFilterSize = (event) => {
    this.setState({'size': event.target.value});
  }

  matchesFilterSize(car) {
    return (this.state.size === "All") || (this.state.size === car.size);
  }

  onSelectFilterColor = (event) => {
    this.setState({'color': event.target.value});
  }

  matchesFilterColor(car) {
    return (this.state.color === "All") || (this.state.color === car.color);
  }

  render() {
    return (
      <div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Size</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="All" onChange={this.onSelectFilterSize}>
              <FormControlLabel
                value="All"
                control={<Radio color="primary" />} 
                label="All"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Tiny"
                control={<Radio color="primary" />}
                label="Tiny"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Small"
                control={<Radio color="primary" />}
                label="Small"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Medium"
                control={<Radio color="primary" />}
                label="Medium"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Large"
                control={<Radio color="primary" />}
                label="Large"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Color</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="All" onChange={this.onSelectFilterColor}>
              <FormControlLabel
                value="All"
                control={<Radio color="primary" />}
                label="All"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Blue"
                control={<Radio color="primary" />}
                label="Blue"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Red"
                control={<Radio color="primary" />}
                label="Red"
                labelPlacement="top"
              />
              <FormControlLabel
                value="White"
                control={<Radio color="primary" />}
                label="White"
                labelPlacement="top"
              />
              <FormControlLabel
                value="Yellow"
                control={<Radio color="primary" />}
                label="Yellow"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>

          {this.props.list.filter((car) =>
            this.matchesFilterSize(car)
          ).filter((car) =>
            this.matchesFilterColor(car)
          ).map((car) => (
            <>
              <p>{car.name}, {car.size}, {car.color}, ${car.price}.00</p>
              <img src={car.image} alt={car.name}></img>
            </>
          ))}
        </div>
      </div>
    );

  }
}
