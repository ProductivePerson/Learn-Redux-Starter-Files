import React from 'react';
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    // es6 syntax to create 3 variables that pull their data from
    // this.props
    const { post, idx, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className = "grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>
          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className="likes-heart">{post.likes}</span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            {/*two ways to pass arguments to a function onClick:
              es6: () => this.props.increment(null, idx) OR
              onclick={this.props.increment.bind(null, idx)}  */}
            <button onClick={()=>this.props.increment(null, idx)}
                    className="likes">&hearts; {post.likes}</button>
            <Link className = "button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }

})

export default Photo;
