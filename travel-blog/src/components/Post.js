import {useParams} from 'react-router-dom';
import SingleBlogPost from './SinglePostPage';

export default function Post () {

    const BlogPost = () => {

        const { postId } = useParams();
        // const post = getBlogPostById(postId);

    return (
        <div>
            {/* <h1>{post.title}</h1>
            <p>{post.content}</p> */}
            <SingleBlogPost/>
        </div>
    )
}};