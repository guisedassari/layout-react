import React from 'react';

function PostHeader({ author, date }) {
   return (
      <div className='post-header'>
         <img className="avatar" src={author.avatar} alt='avatar' />
         <div className='details'>
            <strong>{author.name}</strong>
            <span>{date}</span>
         </div>
      </div>
   );
}

function PostComments({ comments }) {
   return (
      <div className='post-comments'>
         {comments.map(comment => (
            <div key={comment.id} className='comment'>
               <img className='avatar' src={comment.author.avatar} alt='avatar' />
               <p>
                  <strong>{comment.author.name + '. '}</strong>

                  {comment.content}
               </p>
            </div>
         ))}
      </div>
   );
}

function PostItem({ author, date, content, comments }) {

   return (
      <div className='post-item'>
         <PostHeader author={author} date={date} />
         <p className="post-content">{content}</p>
         <div className='dividing-line'></div>
         <PostComments comments={comments} />
      </div>

   );
}
export default PostItem;
