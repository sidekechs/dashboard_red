import React, { useState } from 'react';
import { calculateScores } from './utils/scoring';
import { AssessmentResponse } from './types/assessment';
import CategoryBreakdown from './components/CategoryBreakdown';
import ScoreCard from './components/ScoreCard';
import CategoryRadarChart from './components/CategoryRadarChart';
import ResponseSelector from './components/ResponseSelector';
import Header from './components/Header';
import { useAssessments } from './hooks/useAssessments';

function App() {
  const { assessments, loading, error } = useAssessments();
  const [selectedAssessment, setSelectedAssessment] = useState<AssessmentResponse | null>(null);

  // Set initial assessment when data loads
  React.useEffect(() => {
    if (assessments.length > 0 && !selectedAssessment) {
      setSelectedAssessment(assessments[0]);
    }
  }, [assessments, selectedAssessment]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-gray-600">Loading assessments...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-red-600">Error loading assessments: {error.message}</p>
          </div>
        </main>
      </div>
    );
  }

  if (!selectedAssessment) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <p className="text-lg text-gray-600">No assessments available</p>
          </div>
        </main>
      </div>
    );
  }

  const scores = calculateScores(selectedAssessment);

  const handleAssessmentSelect = (id: string) => {
    const assessment = assessments.find(r => r.id === id);
    if (assessment) {
      setSelectedAssessment(assessment);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Change Management Assessment</h1>
        
        <div className="mb-8">
          <ResponseSelector
            responses={assessments}
            selectedId={selectedAssessment.id}
            onSelect={handleAssessmentSelect}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ScoreCard title="Senior Leadership" scores={scores.senior} />
          <ScoreCard title="Middle Management" scores={scores.middle} />
          <ScoreCard title="Entry Level" scores={scores.entry} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <CategoryRadarChart scores={scores} />
          <CategoryBreakdown scores={scores} />
        </div>
      </main>
    </div>
  );
}

export default App;