import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmojis = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕"
}

const ReactionButtons = (props) => {
    const dispatch = useDispatch();

    const reactionButtonsArray = Object.entries(reactionEmojis).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => dispatch(reactionAdded({ postId: props.post.id, reaction: name }))}
            >
                {emoji} {props.post.reactions[name]}
            </button>
        )
    })

  return (
    <div>
        {reactionButtonsArray}
    </div>
  )
}

export default ReactionButtons