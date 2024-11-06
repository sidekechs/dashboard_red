import { createClient } from '@supabase/supabase-js';
import { testResponses } from '../src/data/testData';
import { Database } from '../src/types/supabase';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

async function seed() {
  console.log('🌱 Starting seeding...');

  for (const response of testResponses) {
    // Insert assessment
    const { data: assessment, error: assessmentError } = await supabase
      .from('assessments')
      .insert({
        id: response.id,
        respondent_name: response.respondentName,
        date: response.date
      })
      .select()
      .single();

    if (assessmentError) {
      console.error('Error inserting assessment:', assessmentError);
      continue;
    }

    // Insert responses for each level
    const levels = ['senior', 'middle', 'entry'] as const;
    for (const level of levels) {
      const categories = response.responses[level];
      
      for (const category of categories) {
        const { error: responseError } = await supabase
          .from('responses')
          .insert({
            assessment_id: assessment.id,
            level,
            category: category.categoryTitle,
            answers: category.answers
          });

        if (responseError) {
          console.error(`Error inserting ${level} response:`, responseError);
        }
      }
    }
  }

  console.log('✅ Seeding completed');
}

seed()
  .catch(console.error)
  .finally(() => process.exit());