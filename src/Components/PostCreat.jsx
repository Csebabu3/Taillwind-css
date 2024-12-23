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
  { id: 1, name: "James", image: "/api/placeholder/48/48" },
  { id: 2, name: "Rashford", image: "/api/placeholder/48/48" },
  { id: 3, name: "Wersel Workdesk", image: "/api/placeholder/48/48" },
  { id: 4, name: "Nick", image: "/api/placeholder/48/48" },
  { id: 5, name: "Jenson", image: "/api/placeholder/48/48" },
];

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

const PostCreat = () => {
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
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <X className="w-6 h-6" />
        <h1 className="text-xl font-semibold">Create post</h1>
        <button className="px-4 py-1 text-gray-400 rounded-md bg-gray-100">
          Post
        </button>
      </div>

      {/* Profile Section */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full">
            <img
              src="/api/placeholder/40/40"
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold">Vishnuvardhan Thirumalaisamy</h2>

            <div className="flex flex-wrap gap-2 mt-2">
              <QuickActionButton
                icon={<Globe className="w-4 h-4" />}
                label="Public"
                onClick={() => setShowAudience(true)}
              >
                <ChevronDown className="w-4 h-4" />
              </QuickActionButton>

              <QuickActionButton
                icon={<Album className="w-4 h-4" />}
                label="Album"
              >
                <ChevronDown className="w-4 h-4" />
              </QuickActionButton>

              <QuickActionButton
                icon={<Bot className="w-4 h-4" />}
                label={getSelectedModelName()}
                onClick={() => setShowAILabels(true)}
                isActive={selectedAIModel !== "off"}
              >
                <ChevronDown className="w-4 h-4" />
              </QuickActionButton>

              <QuickActionButton
                icon={<Tag className="w-4 h-4" />}
                label="Add label"
              >
                <Plus className="w-4 h-4" />
              </QuickActionButton>
            </div>
          </div>
        </div>
      </div>

      {/* Post Input */}
      <div className="p-4">
        <textarea
          placeholder="What's on your mind?"
          className="w-full h-32 text-lg resize-none focus:outline-none"
        />
      </div>

      {/* Post Options */}
      <div className="border rounded-lg mx-4">
        {POST_OPTIONS.map((option) => (
          <button
            key={option.id}
            className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 border-b last:border-b-0"
            onClick={() => handleOptionClick(option.id)}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      {/* Tag People Modal */}
      {showTagPeople && (
        <TagPeopleModal onClose={() => setShowTagPeople(false)} />
      )}

      {/* AI Label Modal */}
      {showAILabels && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <X
                onClick={() => setShowAILabels(false)}
                className="w-6 h-6 cursor-pointer"
              />
              <h2 className="text-xl font-semibold">Select AI Model</h2>
              <button
                onClick={() => setShowAILabels(false)}
                className="text-blue-500 font-semibold"
              >
                Done
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="space-y-2">
              {AI_MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    handleModelSelect(model.id);
                  }}
                  className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg relative"
                >
                  <Bot
                    className={`w-6 h-6 ${
                      selectedAIModel === model.id ? "text-blue-500" : ""
                    }`}
                  />
                  <div className="text-left flex-1">
                    <div
                      className={`font-semibold ${
                        selectedAIModel === model.id ? "text-blue-500" : ""
                      }`}
                    >
                      {model.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {model.description}
                    </div>
                  </div>
                  {selectedAIModel === model.id && (
                    <CheckCircle2 className="w-5 h-5 text-blue-500 absolute right-4" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Audience Modal */}
      {showAudience && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <X
                onClick={() => setShowAudience(false)}
                className="w-6 h-6 cursor-pointer"
              />
              <h2 className="text-xl font-semibold">Post audience</h2>
              <button
                onClick={() => setShowAudience(false)}
                className="text-blue-500 font-semibold"
              >
                Done
              </button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Who can see this post?</h3>
            <p className="text-gray-600 mb-4">
              Your post may appear in Feed, on your profile, in search results
              and on Messenger
            </p>

            <div className="space-y-2">
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Public",
                  desc: "Anyone on or off Facebook",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Friends",
                  desc: "Your friends on Facebook",
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Only me",
                  desc: "Only me",
                },
              ].map((option, index) => (
                <button
                  key={index}
                  className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg"
                >
                  {option.icon}
                  <div className="text-left">
                    <div className="font-semibold">{option.title}</div>
                    <div className="text-sm text-gray-500">{option.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCreat;
