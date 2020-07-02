import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(dish){
        if(dish != null){
            return (
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }
        else{
            return(
                <div>
                    
                </div>
            );
        }
    }

    renderComments(comments){

        if(comments != null){
            let commentsDiv = comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, <span>{new Intl.DateTimeFormat("en-US",{year:"numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(comment.date)))}</span> </li>
                    </div>
                );
            })

            return (
                <div className = "col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsDiv}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div>
                    
                </div>
            );
        }
    }


    render(){
        let dish = this.props.dish;
        let comments = null;
        if(dish != null)
            comments = dish.comments;
        return(
                <div className = "container">
                    <div className = "row">
                        {this.renderDish(dish)}
                        {this.renderComments(comments)}
                    </div>
                </div>
        )
    }
}

export default DishDetail;