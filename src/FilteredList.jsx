import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export default class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "All",
      color: "All",
      sort: 0,
    }
  }

  onSelectFilterSize = (event) => {
    this.setState({ size: event.target.value });
  }

  matchesFilterSize(car) {
    return (this.state.size === "All") || (this.state.size === car.size);
  }

  onSelectFilterColor = (event) => {
    this.setState({ color: event.target.value });
  }

  matchesFilterColor(car) {
    return (this.state.color === "All") || (this.state.color === car.color);
  }

  handleSortChange = (event) => {
    this.setState({ sort: event.target.value });
  }

  compare = (carA, carB) => {
    if (this.state.sort === 0) {
      var nameA = carA.name.toUpperCase();
      var nameB = carB.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    }
    if (this.state.sort === 1) {
      return carA.price - carB.price;
    } else {
      return -(carA.price - carB.price);
    }
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
        </div>
        <div>
          <FormControl >
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.sort}
              onChange={this.handleSortChange}
            >
              <MenuItem value={0}>Featured</MenuItem>
              <MenuItem value={1}>Price: Low to High</MenuItem>
              <MenuItem value={2}>Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          {this.props.list.filter((car) =>
            this.matchesFilterSize(car)
          ).filter((car) =>
            this.matchesFilterColor(car)
          ).sort(this.compare)
            .map((car) => (
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
