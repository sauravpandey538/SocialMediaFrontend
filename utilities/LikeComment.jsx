// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import PostBottom from "./PostBottom"; // Adjust the import path

// function LikeComment({ postId }) {
//   const [likeCount, setLikeCount] = useState(0);
//   const [commentCount, setCommentCount] = useState(0);
//   const [accountReached, setAccountReached] = useState(0);
//   const [like, setLike] = useState(false);
//   useEffect(() => {
//     // Fetch initial counts
//     const fetchCounts = async () => {
//       try {
//         const response = await axios.get(
//           `https://social-media-backend-mocha.vercel.app/post/${postId}`,
//           {
//             withCredentials: true,
//           }
//         );
//         setLikeCount(response.data.post.likeCount);
//         setCommentCount(response.data.post.commentCount);
//         setAccountReached(response.data.post.accountReached);
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchCounts();
//   }, [postId]);

//   //   {
//   //     "message": "Post fetched sucessfully",
//   //     "post": {
//   //         "_id": "66654a4d8fdc4333a4fcbb68",
//   //         "uploader": "666460488b870c8c300e2135",
//   //         "postImage": "http://res.cloudinary.com/ddqif698j/image/upload/v1717914189/svtujbgdv9xhadeybpsk.jpg",
//   //         "caption": "wef",
//   //         "customTimestamp": 1717914189551,
//   //         "likeCount": 0,
//   //         "commentCount": 0,
//   //         "accountReached": 0,
//   //         "__v": 0
//   //     }
//   // }

//   const handleLike = async () => {
//     try {
//       if (like === false) {
//         const response = await axios.post(
//           `https://social-media-backend-mocha.vercel.app/${postId}/like`,
//           {},
//           {
//             withCredentials: true,
//           }
//         );
//         setLike(true);
//         setLikeCount((prevCount) => prevCount + 1);

//         console.log(response);
//       } else {
//         setLikeCount((prevCount) => prevCount - 1);
//         setLike(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleComment = async () => {
//     try {
//       const response = await axios.post(
//         `https://social-media-backend-mocha.vercel.app/${postId}/comment`,
//         { comment },
//         {
//           withCredentials: true,
//         }
//       );
//       setCommentCount((prevCount) => prevCount + 1);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <PostBottom
//       accountReached={accountReached}
//       likeCount={likeCount}
//       commentCount={commentCount}
//       handleLike={handleLike}
//       handleComment={handleComment}
//     />
//   );
// }

// export default LikeComment;
