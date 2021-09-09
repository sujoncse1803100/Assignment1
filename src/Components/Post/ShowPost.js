import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowPost = (props) => {
    const { title, body, id } = props.post;

    return (
        <div>
            <Card  >
                <div className="row m-3">
                    <div className="col-md-4">
                        <Card.Img variant="top" src="https://i.im.ge/2021/09/03/Q2i3aL.png" />
                    </div>
                    <div className="col-md-7">

                        <Card.Title>{title}</Card.Title>
                        <p>{body}</p>
                        {/* <Link style={{ textDecoration: 'none', color: 'white' }} to={"/post/"} >See Details</Link> */}
                        <Button className="btn mt-5 btn-success" >
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/details/id/" + id} >See Details</Link>
                        </Button>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default ShowPost;