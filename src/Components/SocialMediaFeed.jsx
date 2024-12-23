import React, { useState } from "react";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Image,
  Smile,
  Send,
} from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";

const SocialMediaFeed = () => {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      id: 1,
      author: "John Doe",
      avatar: "/api/placeholder/40/40",
      time: "2 hours ago",
      content: "Just finished my morning run! 🏃‍♂️ Beautiful day outside!",
      likes: 24,
      comments: 5,
      shares: 2,
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "/api/placeholder/40/40",
      time: "4 hours ago",
      content: "Check out this amazing sunset view from my balcony! 🌅",
      image: "/api/placeholder/500/300",
      likes: 156,
      comments: 12,
      shares: 8,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">social</h1>
          <div className="flex items-center space-x-2">
            <img
              src="/api/placeholder/32/32"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-lg shadow mt-4 mx-4 p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/api/placeholder/40/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <Image size={20} />
            <span>Photo</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
            <Smile size={20} />
            <span>Feeling</span>
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow mx-4 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {/* <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                /> */}
                <IoPersonSharp />
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-gray-500 text-sm">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <p className="mt-4">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="mt-4 rounded-lg w-full"
              />
            )}

            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <ThumbsUp size={20} />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <MessageCircle size={20} />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg">
                <Share2 size={20} />
                <span>{post.shares}</span>
              </button>
            </div>

            {/* Comment Input */}
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t">
              <img
                src="/api/placeholder/32/32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-1 bg-transparent focus:outline-none"
                />
                <button className="text-blue-600">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
