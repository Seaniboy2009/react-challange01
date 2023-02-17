import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from './posts.json'
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
          posts: [],
          isLoaded: false

        }
    }

    componentDidMount() {
      console.log("Component did mount")
      this.setState({
        posts: savedPosts,
        isLoaded: true

      })
    }

    handleEvent = (event) => {
      const name = event.target.value
      const filteredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(name)
      })
      this.setState({
        posts: filteredPosts,
      })
      console.log(filteredPosts)
    }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label for="searchInput">Search:</label>
              <input onChange={(event) => this.handleEvent(event)}
                    id="searchInput" 
                    type="search"
                    placeholder="By Author"></input>
              <h4>Posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
          {
                this.state.isLoaded ?
                <PostItem savedPosts={this.state.posts} />
                :
                <Loader />
          }
        </div>
      </div>
    )
  }
}

export default Content