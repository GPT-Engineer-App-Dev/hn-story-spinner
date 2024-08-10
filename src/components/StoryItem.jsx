import React from 'react';
import { ArrowUpCircle, ExternalLink } from 'lucide-react';

const StoryItem = ({ story }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
      <div className="flex items-center text-gray-600 mb-2">
        <ArrowUpCircle className="w-4 h-4 mr-1" />
        <span>{story.points} points</span>
      </div>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        Read more <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

export default StoryItem;