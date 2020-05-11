import React,{Component} from "react";
import PhotoWall from "./PhotoWall";
import {Route} from "react-router-dom";
import AddPhoto from './AddPhoto'

class Main extends Component{

    constructor(){
        super();
        this.state={
            posts:[
                {
                    id:1,
                    imageUrl:"",
                    desc:"image1"
                },
                {
                    id:2,
                    imageUrl:"",
                    desc:"image2"
                },
                {
                    id:3,
                    imageUrl:"",
                    desc:"image3"
                }
            ]
        };
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
    }

    removePhoto(photoToRemove){
        this.setState(state=>({
            posts:state.posts.filter(p=>p !== photoToRemove)
        }));
    }

    addPhoto(photoAdded) {
        this.setState((state)=>({
                posts:[...state.posts,photoAdded]
            }
        ));
    }

    render(){
        return(
            <div>
                <Route exact path="/" render={()=> (
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                    )}/>
                <Route path="/AddPhoto" render={({history})=>(
                    <AddPhoto onPhotoAdded={(photoAdded)=>{
                        this.addPhoto(photoAdded);
                        history.push("/")
                    }}/>
                )}/>
            </div>
        )
    }


}

export default Main