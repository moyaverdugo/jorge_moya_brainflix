import './comments.css'; 
import add_commentIcon from '../../assets/icons/add_comment.svg';
import photo from '../../assets/images/Mohan-muruge.jpg';

const Comments = ({ comments }) => {
    return (
        <div className="comments__container">
            <div className="comments__title">
                <h2>{comments.length} Comments</h2>
            </div>
            <div className="conversation__container">
                <img class="conversation__avatar avatar" src={photo} alt="converation photo" />
                <form class="conversation__sub_container">
                        <div className="conversation__form_container">
                            <label className="conversation__title">
                                <h4 class="silver__font">JOIN THE CONVERSATION</h4>
                            </label>
                            <input class="conversation__form form" type="text" name="comment" id="comment" placeholder="Add a new comment"/>
                        </div>
                        <button class="button__container conversation__button" type="submit">
                            <img src={add_commentIcon} alt="add comment Icon" className="button__icon" />
                            <h5 class="button__text">COMMENT</h5>
                        </button>
                </form>
            </div>


            {comments.map(comment => (
                <div className="comment__container">
                    <img class="conversation__avatar avatar" 
                    src="" alt="converation photo"
                    />
                    <div key={comment.id} className="comment">
                        <h3 className="comment-name">{comment.name}</h3>
                        <p className="comment-text">{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;