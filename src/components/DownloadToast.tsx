import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, FileText, X } from 'lucide-react';

interface DownloadToastProps {
  filename: string | null;
  onClose: () => void;
}

export const DownloadToast: React.FC<DownloadToastProps> = ({ filename, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!filename) {
      setProgress(0);
      setIsDone(false);
      return;
    }

    setProgress(15);
    const t1 = setTimeout(() => setProgress(55), 350);
    const t2 = setTimeout(() => setProgress(90), 700);
    const t3 = setTimeout(() => {
      setProgress(100);
      setIsDone(true);
    }, 1100);

    const autoClose = setTimeout(() => {
      onClose();
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(autoClose);
    };
  }, [filename, onClose]);

  if (!filename) return null;

  return (
    <div className="download-toast-container">
      <div className="toast-icon-wrap">
        {isDone ? (
          <CheckCircle className="toast-done-icon" size={24} />
        ) : (
          <Download className="toast-loading-icon" size={24} />
        )}
      </div>

      <div className="toast-content">
        <div className="toast-title">
          {isDone ? 'Document Ready for Viewing' : 'Generating Federal PDF Document...'}
        </div>
        <div className="toast-filename">
          <FileText size={12} /> {filename}
        </div>
        {!isDone ? (
          <div className="toast-progress-bar">
            <div className="toast-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        ) : (
          <div className="toast-meta">
            Official publication rendered • High-Resolution Vector Cartography
          </div>
        )}
      </div>

      <button className="toast-close-btn" onClick={onClose}>
        <X size={16} />
      </button>
    </div>
  );
};
