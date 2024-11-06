import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { AssessmentResponse } from '../types/assessment';

export function useAssessments() {
  const [assessments, setAssessments] = useState<AssessmentResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchAssessments() {
      try {
        // Fetch assessments
        const { data: assessmentsData, error: assessmentsError } = await supabase
          .from('assessments')
          .select('*')
          .order('date', { ascending: false });

        if (assessmentsError) throw assessmentsError;

        // Fetch responses for each assessment
        const fullAssessments = await Promise.all(
          assessmentsData.map(async (assessment) => {
            const { data: responsesData, error: responsesError } = await supabase
              .from('responses')
              .select('*')
              .eq('assessment_id', assessment.id);

            if (responsesError) throw responsesError;

            // Transform the data to match AssessmentResponse type
            const responses = {
              senior: responsesData.filter(r => r.level === 'senior'),
              middle: responsesData.filter(r => r.level === 'middle'),
              entry: responsesData.filter(r => r.level === 'entry')
            };

            return {
              id: assessment.id,
              respondentName: assessment.respondent_name,
              date: assessment.date,
              responses: {
                senior: responses.senior.map(r => ({
                  categoryTitle: r.category,
                  answers: r.answers as any
                })),
                middle: responses.middle.map(r => ({
                  categoryTitle: r.category,
                  answers: r.answers as any
                })),
                entry: responses.entry.map(r => ({
                  categoryTitle: r.category,
                  answers: r.answers as any
                }))
              }
            };
          })
        );

        setAssessments(fullAssessments);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    }

    fetchAssessments();
  }, []);

  return { assessments, loading, error };
}