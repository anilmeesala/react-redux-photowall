import React,{Component} from "react";

class AddPhoto extends Component{

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let desc1 = event.target.elements.imageUrl.value;
        let imageUrl1 = event.target.elements.desc.value;
        let photo={
          id:new Date().getMilliseconds(),
          desc: desc1,
          imageUrl:imageUrl1

        };

        console.log(photo);
        this.props.onPhotoAdded(photo)
    }
    render(){
       return <div>
           <form onSubmit={this.handleSubmit}>
               <div>ImageUrl:<input name="imageUrl" type="text"/></div>
               <div>Desc:<input name="desc" type="text"/></div>
                <div><button type="submit">Add Photo</button></div>
           </form>
       </div>
    }

}

export default AddPhoto
