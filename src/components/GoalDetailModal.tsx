import { X, Target, ShieldAlert, Leaf, Bike, TrendingUp, Wrench, CheckCircle } from 'lucide-react';
import type { PlanGoal } from '../types';

interface GoalDetailModalProps {
  goal: PlanGoal | null;
  onClose: () => void;
}

export const GoalDetailModal: React.FC<GoalDetailModalProps> = ({ goal, onClose }) => {
  if (!goal) return null;

  const renderIcon = () => {
    switch (goal.id) {
      case 'safety': return <ShieldAlert size={36} />;
      case 'environment': return <Leaf size={36} />;
      case 'equity': return <Bike size={36} />;
      case 'connectivity': return <TrendingUp size={36} />;
      case 'repair': return <Wrench size={36} />;
      default: return <Target size={36} />;
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header-banner" style={{ background: goal.badgeBg }}>
          <div className="modal-goal-badge">
            {renderIcon()}
          </div>
          <div>
            <span className="modal-goal-num">GOAL #{goal.number} OF PLAN2050</span>
            <h2 className="modal-goal-title">{goal.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-desc-card">
            <h4>Regional Objective</h4>
            <p className="modal-desc-text">{goal.description}</p>
          </div>

          <div className="modal-deepdive">
            <h4>Strategic Implementation Focus</h4>
            <p>{goal.details}</p>
          </div>

          <div className="modal-metrics-section">
            <h4>Key Performance Benchmarks & 2050 Targets</h4>
            <div className="modal-metrics-grid">
              {goal.metrics.map((m, idx) => (
                <div key={idx} className="modal-metric-card">
                  <div className="metric-card-head">
                    <Target size={16} style={{ color: goal.accentColor }} />
                    <span className="metric-card-label">{m.label}</span>
                  </div>
                  <div className="metric-target-val" style={{ color: goal.accentColor }}>{m.target}</div>
                  <div className="metric-benchmark-sub">
                    <CheckCircle size={12} /> {m.benchmark}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-action-btn" onClick={onClose}>
            Close Explorer
          </button>
        </div>
      </div>
    </div>
  );
};
