import {app} from 'services/FirebaseApp';
import React from 'react';

const REFERENCE = "/post";


class PostDao{

    constructor() {
        this.ref = app.database().ref(REFERENCE);
    }
    
    getPosts () {
        return this.ref.child().once('value')
            .then(snapshot => snapshot.val());
    }

}

export default PostDao;