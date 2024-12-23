import React, { useState } from "react";
import {
  Image,
  Smile,
  UserPlus,
  MapPin,
  Flag,
  X,
  ChevronDown,
  Globe2,
  Lock,
} from "lucide-react";

const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [privacy, setPrivacy] = useState("public");
  const [selectedImages, setSelectedImages] = useState([]);

  const privacyOptions = {
    public: { icon: <Globe2 className="w-4 h-4" />, label: "Public" },
    friends: { icon: <UserPlus className="w-4 h-4" />, label: "Friends" },
    private: { icon: <Lock className="w-4 h-4" />, label: "Only me" },
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // For demo purposes, we'll just store the file names
    setSelectedImages((prev) => [...prev, ...files.map((file) => file.name)]);
  };

  const Modal = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl w-full max-w-xl mx-4">
          {/* Modal Header */}
          <div className="border-b px-4 py-3 relative">
            <h2 className="text-xl font-bold text-center">Create post</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-3 text-gray-500 hover:bg-gray-100 p-2 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Info */}
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/40/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-semibold">John Doe</div>
                <button
                  className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-lg text-sm"
                  onClick={() => {}}
                >
                  {privacyOptions[privacy].icon}
                  <span>{privacyOptions[privacy].label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Post Input */}
            <textarea
              placeholder="What's on your mind, John?"
              className="w-full mt-4 min-h-[150px] resize-none text-lg focus:outline-none"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />

            {/* Image Preview */}
            {selectedImages.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {selectedImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative bg-gray-100 rounded-lg p-2"
                  >
                    <div className="aspect-video flex items-center justify-center">
                      <span className="text-sm text-gray-500">{image}</span>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="absolute -top-2 -right-2 bg-white rounded-full shadow"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Add to Post */}
            <div className="mt-4 border rounded-lg p-4">
              <div className="text-sm font-semibold mb-2">Add to your post</div>
              <div className="flex space-x-2">
                <label className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer text-green-500">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <Image size={20} />
                </label>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-yellow-500">
                  <Smile size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-blue-500">
                  <UserPlus size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-red-500">
                  <MapPin size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-purple-500">
                  <Flag size={20} />
                </button>
              </div>
            </div>

            {/* Post Button */}
            <button
              className={`w-full mt-4 py-2 rounded-lg font-semibold ${
                postText || selectedImages.length
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!postText && !selectedImages.length}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-4">
      {/* Create Post Trigger */}
      <div className="flex items-center space-x-4">
        <img
          src="/api/placeholder/40/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-2 text-left text-gray-500"
        >
          What's on your mind, John?
        </button>
      </div>

      {/* Post Options */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg text-gray-500">
          <Image size={20} className="text-green-500" />
          <span>Photo/video</span>
        </button>
        <button className="flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-lg text-gray-500">
          <Smile size={20} className="text-yellow-500" />
          <span>Feeling/activity</span>
        </button>
      </div>

      {/* Create Post Modal */}
      <Modal isOpen={isModalOpen} />
    </div>
  );
};

export default CreatePost;
