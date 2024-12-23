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
  ArrowLeft,
} from "lucide-react";

const MobileCreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [privacy, setPrivacy] = useState("public");
  const [selectedImages, setSelectedImages] = useState([]);

  const privacyOptions = {
    public: { icon: <Globe2 className="w-5 h-5" />, label: "Public" },
    friends: { icon: <UserPlus className="w-5 h-5" />, label: "Friends" },
    private: { icon: <Lock className="w-5 h-5" />, label: "Only me" },
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prev) => [...prev, ...files.map((file) => file.name)]);
  };

  const Modal = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col h-screen">
        {/* Mobile Modal Header */}
        <div className="border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 p-2 -ml-2"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-bold">Create post</h2>
          </div>
          <button
            className={`px-6 py-1.5 rounded-full font-semibold ${
              postText || selectedImages.length
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-400"
            }`}
            disabled={!postText && !selectedImages.length}
          >
            Post
          </button>
        </div>

        {/* User Info */}
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <img
              src="/api/placeholder/48/48"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold text-base">John Doe</div>
              <button
                className="flex items-center space-x-1 bg-gray-100 mt-1 px-3 py-1.5 rounded-full text-sm"
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
            placeholder="What's on your mind?"
            className="w-full mt-6 text-lg focus:outline-none min-h-[150px] resize-none"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />

          {/* Image Preview */}
          {selectedImages.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2">
              {selectedImages.map((image, index) => (
                <div
                  key={index}
                  className="relative bg-gray-100 rounded-xl p-2"
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
                    className="absolute -top-2 -right-2 bg-white rounded-full shadow p-1"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add to Post - Fixed Bottom */}
        <div className="mt-auto border-t">
          <div className="p-4">
            <div className="text-sm font-semibold mb-3">Add to your post</div>
            <div className="flex justify-between">
              <label className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 text-green-500">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <Image size={24} />
              </label>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 text-yellow-500">
                <Smile size={24} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 text-blue-500">
                <UserPlus size={24} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 text-red-500">
                <MapPin size={24} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 text-purple-500">
                <Flag size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Mobile Header */}
      <div className="border-b px-4 py-3">
        <h1 className="text-2xl font-bold text-blue-600">social</h1>
      </div>

      {/* Create Post Trigger */}
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <img
            src="/api/placeholder/48/48"
            alt="User"
            className="w-12 h-12 rounded-full"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full px-4 py-3 text-left text-gray-500"
          >
            What's on your mind, John?
          </button>
        </div>

        {/* Quick Access Options */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t">
          <button className="flex-1 flex items-center justify-center space-x-2 py-3 text-gray-500">
            <Image size={24} className="text-green-500" />
            <span className="text-sm">Photo</span>
          </button>
          <div className="w-px h-6 bg-gray-300" />
          <button className="flex-1 flex items-center justify-center space-x-2 py-3 text-gray-500">
            <Smile size={24} className="text-yellow-500" />
            <span className="text-sm">Feeling</span>
          </button>
        </div>
      </div>

      {/* Create Post Modal */}
      <Modal isOpen={isModalOpen} />
    </div>
  );
};

export default MobileCreatePost;
