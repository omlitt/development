import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

var commaNumber = require('comma-number')

export default class DisplayItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Card variant="outlined">
                <CardContent>
                    <h3>{this.props.car.name}</h3>
                    <img src={this.props.car.image} alt={this.props.car.name}></img>
                    <p><strong>Size: </strong>{this.props.car.size}</p>
                    <p><strong>Color: </strong>{this.props.car.color}</p>
                    <p><strong>Price: </strong>${commaNumber(this.props.car.price)}</p>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant="outlined"
                        onClick={() => this.props.onClick(this.props.car.name)}>
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        );

    }
}
