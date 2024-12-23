import React, { useState } from "react";
import {
  Globe,
  Users,
  Lock,
  ChevronDown,
  X,
  Camera,
  Video,
  Smile,
  MapPin,
  Type,
  Image,
  Gift,
  Flag,
  Music,
  Calendar,
  Plus,
  Bot,
  Album,
  Tag,
  CheckCircle2,
  Search,
} from "lucide-react";

// Constants
const POST_OPTIONS = [
  {
    id: "photo",
    icon: <Image className="w-6 h-6 text-green-500" />,
    label: "Photo/video",
  },
  {
    id: "tag",
    icon: <Users className="w-6 h-6 text-blue-500" />,
    label: "Tag people",
  },
  {
    id: "feeling",
    icon: <Smile className="w-6 h-6 text-yellow-500" />,
    label: "Feeling/activity",
  },
  {
    id: "checkin",
    icon: <MapPin className="w-6 h-6 text-red-500" />,
    label: "Check in",
  },
  {
    id: "live",
    icon: <Video className="w-6 h-6 text-red-500" />,
    label: "Live video",
  },
  {
    id: "background",
    icon: <Type className="w-6 h-6 text-teal-500" />,
    label: "Background colour",
  },
  {
    id: "camera",
    icon: <Camera className="w-6 h-6 text-blue-500" />,
    label: "Camera",
  },
  { id: "gif", icon: <Gift className="w-6 h-6 text-teal-500" />, label: "GIF" },
  {
    id: "life",
    icon: <Flag className="w-6 h-6 text-blue-500" />,
    label: "Life event",
  },
  {
    id: "music",
    icon: <Music className="w-6 h-6 text-orange-500" />,
    label: "Music",
  },
  {
    id: "event",
    icon: <Calendar className="w-6 h-6 text-red-500" />,
    label: "Tag event",
  },
];

const AI_MODELS = [
  { id: "off", name: "AI Label Off", description: "No AI model selected" },
  { id: "gpt4", name: "GPT-4", description: "Advanced language model" },
  { id: "wersel", name: "Wersel-AI", description: "Custom enterprise AI" },
  { id: "dalle", name: "DALL-E", description: "Image generation model" },
  { id: "llama", name: "Llama 3.2", description: "Open source language model" },
  { id: "custom", name: "Custom Model", description: "Your trained model" },
];

const USER_SUGGESTIONS = [
  { id: 1, name: "Mohanapriya", image: "/api/placeholder/48/48" },
  { id: 2, name: "Shankar Thiru", image: "/api/placeholder/48/48" },
  { id: 3, name: "Wersel Workdesk", image: "/api/placeholder/48/48" },
  { id: 4, name: "Thangaraj S P", image: "/api/placeholder/48/48" },
  { id: 5, name: "Vinayak Raj Kumar", image: "/api/placeholder/48/48" },
  { id: 6, name: "Pradeep Appusamy", image: "/api/placeholder/48/48" },
  { id: 7, name: "Shanthi Karthik", image: "/api/placeholder/48/48" },
  { id: 8, name: "Dinesh Kumar", image: "/api/placeholder/48/48" },
  { id: 9, name: "Aravind Siddarth", image: "/api/placeholder/48/48" },
  { id: 10, name: "Sangeetha Subramaniam", image: "/api/placeholder/48/48" },
  { id: 11, name: "Kavi", image: "/api/placeholder/48/48" },
];

// Header Component
const Header = ({ onClose }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <X className="w-6 h-6 cursor-pointer" onClick={onClose} />
    <h1 className="text-xl font-semibold">Create post</h1>
    <button className="px-4 py-1 text-gray-400 rounded-md bg-gray-100">
      Post
    </button>
  </div>
);

// Quick Action Button Component
const QuickActionButton = ({ icon, label, onClick, isActive, children }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1 text-sm px-3 py-1 rounded-md hover:bg-gray-200 ${
      isActive ? "bg-blue-50 text-blue-600" : "bg-gray-100"
    }`}
  >
    {icon}
    <span>{label}</span>
    {children}
  </button>
);

// Tag People Modal Component
const TagPeopleModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const filteredUsers = USER_SUGGESTIONS.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUserSelection = (userId) => {
    setSelectedUsers((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((id) => id !== userId);
      }
      return [...prev, userId];
    });
  };

  return (
    <div className="fixed inset-0 bg-white">
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">Tag people</h2>
        <button onClick={onClose} className="text-blue-500 font-semibold px-4">
          Done
        </button>
      </div>

      <div className="p-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Who are you with?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="px-4">
        <h3 className="text-lg font-semibold mb-2">Suggestions</h3>
        <div className="space-y-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">{user.name}</span>
              </div>
              <button
                onClick={() => toggleUserSelection(user.id)}
                className={`w-6 h-6 rounded border ${
                  selectedUsers.includes(user.id)
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedUsers.includes(user.id) && (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const PostCreator = () => {
  const [showAudience, setShowAudience] = useState(false);
  const [showAILabels, setShowAILabels] = useState(false);
  const [showTagPeople, setShowTagPeople] = useState(false);
  const [selectedAIModel, setSelectedAIModel] = useState("off");

  const handleModelSelect = (modelId) => {
    setSelectedAIModel(modelId);
    setShowAILabels(false);
  };

  const getSelectedModelName = () => {
    const model = AI_MODELS.find((m) => m.id === selectedAIModel);
    return model ? model.name : "AI Label Off";
  };

  const handleOptionClick = (optionId) => {
    if (optionId === "tag") {
      setShowTagPeople(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white min-h-screen">
      <Header onClose={() => {}} />

      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="/api/placeholder/48/48"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-medium">Mohanapriya</h2>
            <button
              className="flex items-center text-sm gap-1 px-3 py-1 bg-gray-100 rounded-md"
              onClick={() => setShowAudience(!showAudience)}
            >
              <Globe className="w-5 h-5" />
              <span>Public</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        <textarea
          className="w-full mt-3 p-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What's on your mind?"
          rows={4}
        />

        <div className="mt-3 space-y-2">
          <div className="flex gap-2">
            <button
              className="flex items-center text-sm px-3 py-1 bg-gray-100 rounded-md"
              onClick={() => setShowAILabels(!showAILabels)}
            >
              <Bot className="w-5 h-5 text-green-500" />
              <span className="ml-2">{getSelectedModelName()}</span>
              <ChevronDown className="w-5 h-5 ml-auto" />
            </button>
          </div>

          {showAILabels && (
            <div className="bg-white border rounded-md shadow-md mt-2">
              {AI_MODELS.map((model) => (
                <button
                  key={model.id}
                  className={`flex items-center justify-between w-full px-4 py-2 text-left ${
                    selectedAIModel === model.id
                      ? "bg-gray-100 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleModelSelect(model.id)}
                >
                  <div>
                    <h3 className="font-medium">{model.name}</h3>
                    <p className="text-sm text-gray-500">{model.description}</p>
                  </div>
                  {selectedAIModel === model.id && (
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between p-2 border-t border-b">
            <h2 className="font-medium text-gray-600">Add to your post</h2>
            <button className="w-8 h-8 flex items-center justify-center">
              <Plus className="w-5 h-5 text-blue-500" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 p-2">
            {POST_OPTIONS.map((option) => (
              <QuickActionButton
                key={option.id}
                icon={option.icon}
                label={option.label}
                onClick={() => handleOptionClick(option.id)}
              />
            ))}
          </div>
        </div>

        {showTagPeople && (
          <TagPeopleModal onClose={() => setShowTagPeople(false)} />
        )}
      </div>
    </div>
  );
};

export default PostCreator;
