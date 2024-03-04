import React, { useState, useEffect } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import { savedPosts } from '../posts.json'
import Loader from './Loader'

function ContentHooks() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, [])

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })

        setFetchedPosts(filteredPosts);
    }


    return (
        isLoaded ? (
            <div className={css.Content}>

                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search..."
                            onChange={(e) => handleChange(e)}
                        />
                        <h4>posts found: {fetchedPosts.length}</h4>
                    </form>
                </div>

                <div className={css.SearchResults}>
                    <PostItem savedPosts={fetchedPosts} />
                </div>
            </div>
        ) : (
            <Loader />
        )
    )
}

export default ContentHooks
