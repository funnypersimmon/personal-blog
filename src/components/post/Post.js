import React from 'react';
import {postDao} from 'services/dao/PostDao';

const getPost = () =>{
    return postDao.getPost();
}

class Post extends React.PureComponent {

    render(){
        return <div className="content-center">
            <h2 >
                Title
            </h2>
            </div>
    }
}

export default Post;