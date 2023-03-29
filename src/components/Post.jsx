import classes from "./Post.module.css";

function Post(props) {
    return (
        <div className={classes.post}>
            <p>
                {props.tech} - {props.exp}
            </p>
        </div>
    );
}

export default Post;
