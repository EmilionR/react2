import React, { Component } from 'react'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import { savedPosts } from '../posts.json'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 2000)
    }

    handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.name.toLowerCase().includes(name);
        })

        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            this.state.isLoaded ? (
                <div className={css.Content}>

                    <div className={css.TitleBar}>
                        <h1>My Photos</h1>
                        <form>
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Search..."
                                onChange={(e) => this.handleChange(e)}
                            />
                            <h4>posts found: {this.state.posts.length}</h4>
                        </form>
                    </div>

                    <div className={css.SearchResults}>
                        <PostItem savedPosts={this.state.posts} />
                    </div>
                </div>
            ) : (
                <Loader />
            )
        )
    }
}

export default Content
