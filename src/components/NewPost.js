import React from "react";

class NewPost extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          title:'',
          subject:''
        };
      }

    render() {
        return (
          <div>
                <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                    <input type="text" className="form-control" id="s" name="title" placeholder="Title" required />
                </div>
                
                <div className="form-group">
                    <textarea className="form-control" type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
                </div>
                     
                <button type="button" id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
                </form>
          </div>
        )
    }
}

export default NewPost;