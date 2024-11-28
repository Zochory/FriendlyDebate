import React from 'react';
import { UserCircle } from 'lucide-react';
import { Participant } from '../types';

interface ParticipantListProps {
  participants: Participant[];
  onSelectSpeaker: (id: string) => void;
}

export function ParticipantList({ participants, onSelectSpeaker }: ParticipantListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Participants</h2>
      <div className="space-y-2">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
              participant.isCurrentSpeaker
                ? 'bg-blue-100 border-2 border-blue-500'
                : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => onSelectSpeaker(participant.id)}
          >
            <UserCircle className="w-6 h-6 text-gray-500 mr-3" />
            <span className="font-medium">{participant.name}</span>
            {participant.isCurrentSpeaker && (
              <span className="ml-auto text-sm text-blue-600 font-medium">
                Speaking
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}