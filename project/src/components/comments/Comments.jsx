import './comments.scss'; 
import add_commentIcon from '../../assets/icons/add_comment.svg';
import photo from '../../assets/images/Mohan-muruge.jpg';

const Comments = ({ comments }) => {
    const handleCommentSubmit = async (event) => {
    event.preventDefault(); // Ensure the page does not refresh when submitting comment
    };
    return (
        <div className="comments__container">
            <div className="comments__title">
                <h2>{comments.length} Comments</h2>
            </div>
            <div className="conversation__container">
                <img className="conversation__avatar avatar" src={photo} alt="converation photo" />
                <form className="conversation__sub_container" onSubmit={handleCommentSubmit}>
                        <div className="conversation__form_container">
                            <label className="conversation__title">
                                <h4 className="silver__font">JOIN THE CONVERSATION</h4>
                            </label>
                            <input className="conversation__form form" type="text" name="comment" id="comment" placeholder="Add a new comment"/>
                        </div>
                        <button className="button__container conversation__button" type="submit">
                            <img src={add_commentIcon} alt="add comment Icon" className="button__icon" />
                            <h5 className="button__text">COMMENT</h5>
                        </button>
                </form>
            </div>


            {comments.map(comment => (
                <div key={comment.id} className="comment__container">
                    <img className="conversation__avatar avatar" 
                    src={comment.imageUrl ?? "https://via.placeholder.com/150/e1e1e1/e1e1e1.jpg"}
                     alt="converation photo"/>
                    <div className="comment">
                        <h3 className="comment-name">{comment.name}</h3>
                        <p className="comment-text">{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;