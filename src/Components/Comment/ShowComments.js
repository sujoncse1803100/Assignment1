import React from 'react';

const ShowComments = (props) => {
    const { email, name, body } = props.comment;
    const styles = {
        width: '30px',
        borderRadius: '50%'
    }

    const bosyStyle = {
        textAlign: 'justify',
        fontSize: '10px',
        borderTop: '1px solid gray'
    }

    return (
        <div>

            <div className="d-flex mt-2">
                <div className="row mt-1 ms-1">
                    <div className="col-sm-1">
                        <img style={styles} src="https://i.im.ge/2021/09/03/Q20XAp.jpg" alt="" />
                    </div>
                    <div className="col-sm-10  text-start ">
                        <div className="">
                            <span><strong>{name}</strong></span><br />
                            <strong>{email}</strong>
                        </div>
                        <div style={bosyStyle}>
                            <small>{body}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowComments;