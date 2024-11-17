import './comments.scss'; 
import add_commentIcon from '../../assets/icons/add_comment.svg';
import photo from '../../assets/images/Mohan-muruge.jpg';
import { useState } from 'react';

const Comments = ({ comments, api, videoId }) => {
    const [commentsList, setCommentsList] = useState(comments);
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        const commentInput = newComment;
    
        if (commentInput.trim()) {
            console.log("Posting comment for videoId:", videoId); // Ensure we have a valid videoId
            try {
                const newCommentResponse = await api.postComment(videoId, {
                    comment: commentInput,
                    name: "Anonymous User",
                    timestamp: Date.now()
                });
                setCommentsList([...commentsList, newCommentResponse]);
                setNewComment('');
            } catch (error) {
                console.error('Error posting comment:', error);
            }
        } else {
            alert("Comment cannot be empty");
        }
    };
    
    const handleCommentDelete = async (commentId) => {
        try {
            await api.deleteComment(videoId, commentId); // Pass both videoId and commentId to the API
            setCommentsList(prevComments => prevComments.filter(comment => comment.id !== commentId)); // Remove the comment from the local state
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    return (
        <div className="comments__container">
            <div className="comments__title">
                <h2>{commentsList.length} Comments</h2>
            </div>
            <div className="conversation__container">
                <img className="conversation__avatar avatar" src={photo} alt="conversation photo" />
                <form className="conversation__sub_container" onSubmit={handleCommentSubmit}>
                    <div className="conversation__form_container">
                        <label className="conversation__title">
                            <h4 className="silver__font">JOIN THE CONVERSATION</h4>
                        </label>
                        <input 
                            className="conversation__form form" 
                            type="text" 
                            name="comment" 
                            id="comment" 
                            placeholder="Add a new comment"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)} 
                        />
                    </div>
                    <button className="button__container conversation__button" type="submit">
                        <img src={add_commentIcon} alt="add comment Icon" className="button__icon" />
                        <h5 className="button__text">COMMENT</h5>
                    </button>
                </form>
            </div>

            {commentsList.map(comment => (
                <div key={comment.id} className="comment__container">
                    <img className="conversation__avatar avatar" 
                    src={comment.imageUrl ?? "https://via.placeholder.com/150/e1e1e1/e1e1e1.jpg"}
                    alt="conversation photo"/>
                    <div className="comment">
                        <h3 className="comment-name">{comment.name}</h3>
                        <p className="comment-text">{comment.comment}</p>
                        <button onClick={() => handleCommentDelete(comment.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Comments;