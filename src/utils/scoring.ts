import { 
  AssessmentResponse, 
  CategoryScore, 
  SectionScores, 
  AssessmentScores,
  scoreRanges,
  categoryScoreRanges 
} from '../types/assessment';

const getEffectiveness = (score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 50;
  const range = scoreRanges.find(range => percentage >= range.min && percentage <= range.max);
  return range ? range.label : "Not Rated";
};

const getDescription = (score: number, maxScore: number) => {
  const percentage = (score / maxScore) * 50;
  const range = scoreRanges.find(range => percentage >= range.min && percentage <= range.max);
  return range ? range.description : "No description available";
};

const getCategoryEffectiveness = (score: number) => {
  const range = categoryScoreRanges.find(range => score >= range.min && score <= range.max);
  return range ? range.label : "Not Rated";
};

const calculateCategoryScore = (category: any): CategoryScore => {
  const score = category.answers.reduce((sum: number, answer: any) => sum + answer.score, 0);
  
  return {
    title: category.categoryTitle,
    score,
    effectiveness: getCategoryEffectiveness(score),
    answers: category.answers
  };
};

const calculateSectionScores = (categories: any[]): SectionScores => {
  const categoryScores = categories.map(calculateCategoryScore);
  const totalScore = categoryScores.reduce((sum, cat) => sum + cat.score, 0);
  
  return {
    totalScore,
    effectiveness: getEffectiveness(totalScore, 50),
    description: getDescription(totalScore, 50),
    categories: categoryScores
  };
};

export const calculateScores = (response: AssessmentResponse): AssessmentScores => {
  return {
    senior: calculateSectionScores(response.responses.senior),
    middle: calculateSectionScores(response.responses.middle),
    entry: calculateSectionScores(response.responses.entry)
  };
};