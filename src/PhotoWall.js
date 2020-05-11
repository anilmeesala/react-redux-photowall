import React,{Component} from "react";
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

class PhotoWall extends Component{
    render(){
        let posts= this.props.posts;
        return(
            <div>
                {posts.map((p,i) => <Photo key={i} post={p} onRemovePhoto={this.props.onRemovePhoto}/>)}
                <Link to="/AddPhoto">Add Photo</Link>
            </div>
        )
    }
}

PhotoWall.propTypes={
  posts:PropTypes.array.isRequired,
  onRemovePhoto:PropTypes.func.isRequired
};

export default PhotoWall;