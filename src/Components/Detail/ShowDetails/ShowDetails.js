import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowDetails = (props) => {
    const { userId, id, title, body } = props.post[0];

    return (
        <div>
            <Card  >
                <div className="row m-3">
                    <div className="col-md-4">
                        <Card.Img variant="top" src="https://i.im.ge/2021/09/03/Q2i3aL.png" />
                    </div>
                    <div className="col-md-7">

                        <h3>UserId : {userId}</h3>
                        <h4>Id : {id}</h4>
                        <Card.Title>{title}</Card.Title>
                        <p>{body}</p>
                        <Button className="btn mt-5 btn-success" variant="primary">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/comments/" + userId} >See Comments</Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ShowDetails;