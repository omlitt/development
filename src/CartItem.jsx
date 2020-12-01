import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

var commaNumber = require('comma-number')

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card variant="outlined" key={this.props.car.name}>
                  <CardContent>
                    <h3>{this.props.car.name}</h3>
                    <img src={this.props.car.image} alt={this.props.car.name}></img>
                    {/* Quantity Controls */}
                    <Grid container justify="center" alignItems="center">
                      <Grid key={1} item>
                        <Button size="small" onClick={() => this.props.remove(this.props.car.name)}>-</Button>
                      </Grid>
                      <Grid key={2} item>
                        <p>{this.props.car.quantity}</p>
                      </Grid>
                      <Grid key={3} item>
                        <Button size="small" onClick={() => this.props.add(this.props.car.name)}>+</Button>
                      </Grid>
                    </Grid>
                    {/* Price for Quantity */}
                    <p>${commaNumber(this.props.car.price * this.props.car.quantity)}</p>
                  </CardContent>
                </Card>
        );

    }
}
