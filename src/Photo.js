import React from "react";
import PropTypes from 'prop-types'
function Photo(props) {

    const post = props.post;
    return <figure>
                <img src={post.imageUrl} />
                <figcaption>{post.desc}</figcaption>
                <div>{post.id}</div>
                <div>
                    <button onClick={
                        ()=>{
                            console.log("removing photo:" +props.onRemovePhoto);
                            props.onRemovePhoto(post)
                        }
                    }>Remove</button>
                </div>
           </figure>

}
Photo.propTypes={
    post:PropTypes.object.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
};
export default Photo;

