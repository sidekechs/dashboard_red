export interface Answer {
  questionId: number;
  score: 0 | 1 | 2; // 0 = No, 1 = Partially, 2 = Yes
}

export interface Category {
  categoryTitle: string;
  answers: Answer[];
}

export interface AssessmentResponse {
  id: string;
  respondentName: string;
  date: string;
  responses: {
    senior: Category[];
    middle: Category[];
    entry: Category[];
  };
}

export interface CategoryScore {
  title: string;
  score: number;
  effectiveness: string;
  answers: Answer[];
}

export interface SectionScores {
  totalScore: number;
  effectiveness: string;
  description: string;
  categories: CategoryScore[];
}

export interface AssessmentScores {
  senior: SectionScores;
  middle: SectionScores;
  entry: SectionScores;
}

export const scoreRanges = [
  {
    min: 40,
    max: 50,
    label: "Strategic Change Champions",
    description: "Highly effective in managing change, excelling in planning, communication, support, monitoring, and employee involvement."
  },
  {
    min: 30,
    max: 39,
    label: "Progressive Implementers",
    description: "Competent but may have some areas for improvement to fully support and drive successful change initiatives."
  },
  {
    min: 20,
    max: 29,
    label: "Emerging Change Agents",
    description: "Developing level of change management skills, needs targeted support to improve practices."
  },
  {
    min: 10,
    max: 19,
    label: "Change Beginners",
    description: "Limited change management effectiveness, requires significant guidance and development."
  },
  {
    min: 0,
    max: 9,
    label: "Change Novices",
    description: "Struggles with change management, immediate attention needed to address fundamental areas."
  }
];

export const categoryScoreRanges = [
  {
    min: 8,
    max: 10,
    label: "Strongly effective",
    color: "red-600"
  },
  {
    min: 5,
    max: 7,
    label: "Moderately effective",
    color: "red-500"
  },
  {
    min: 0,
    max: 4,
    label: "Needs improvement",
    color: "red-400"
  }
];