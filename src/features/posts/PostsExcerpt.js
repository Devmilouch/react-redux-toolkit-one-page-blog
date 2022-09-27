import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = (props) => {
  return (
    <article>
        <h3>{props.post.title}</h3>
        <p>{props.post.body.substring(0, 100)}</p>
        <p className="postCredit">
            <PostAuthor userId={props.post.userId} />
            <TimeAgo timestamp={props.post.date} />
        </p>
        <ReactionButtons post={props.post} />
    </article>
  )
}

export default PostsExcerpt