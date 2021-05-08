import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';


const MyImages = () => {
    const [{user}, dispatch] = useStateValue();
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        db.collection(`users/${user.uid}/posts`)
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => 
                setMyPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })))
            );
    }, []);

    console.log(myPosts);

    return (
        <div>
            My Images
        </div>
    )
}

export default MyImages
