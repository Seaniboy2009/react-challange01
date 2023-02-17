import React, { useEffect, useState } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from './posts.json'
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {

    const [fetchedPosts, setFetchedPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFetchedPosts(savedPosts)
            setIsLoaded(true)
        }, 2000)
    }, [])

    const handleEvent = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter(post => {
          return post.name.toLowerCase().includes(name)
        })
        setFetchedPosts(filteredPosts)
    }

    return (
        <div className={css.Content}>
          <div className={css.TitleBar}>
              <h1>My Photos</h1>
              <form>
                <label for="searchInput">Search:</label>
                <input onChange={(event) => handleEvent(event)}
                      id="searchInput" 
                      type="search"
                      placeholder="By Author"></input>
                <h4>Posts found: {fetchedPosts.length}</h4>
              </form>
          </div>
          <div className={css.SearchResults}>
            {
                isLoaded ?
                <PostItem savedPosts={fetchedPosts} />
                :
                <Loader />
            }
  
          </div>
        </div>
    )
}

export default ContentHooks