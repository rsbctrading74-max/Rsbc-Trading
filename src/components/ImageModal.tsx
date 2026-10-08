import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <span className="text-sm font-bold text-white truncate">{title}</span>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_DETAILS.googlePhotosAlbumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C9A84C] hover:underline flex items-center gap-1"
            >
              <span>View in Google Photos</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-h-[75vh] flex items-center justify-center bg-black">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
