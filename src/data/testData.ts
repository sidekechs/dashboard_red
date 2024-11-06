import { AssessmentResponse } from '../types/assessment';

export const testResponses: AssessmentResponse[] = [
  {
    id: '1',
    respondentName: 'John Smith',
    date: '2024-03-05',
    responses: {
      senior: [
        {
          categoryTitle: 'Planning and Strategy',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Communication',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Support and Resources',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Monitoring and Evaluation',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Employee Involvement',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        }
      ],
      middle: [
        {
          categoryTitle: 'Planning and Strategy',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Communication',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Support and Resources',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Monitoring and Evaluation',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Employee Involvement',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 1 }
          ]
        }
      ],
      entry: [
        {
          categoryTitle: 'Understanding and Involvement',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Adaptability and Support',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Communication and Feedback',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        },
        {
          categoryTitle: 'Engagement and Morale',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Performance and Implementation',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        }
      ]
    }
  },
  {
    id: '2',
    respondentName: 'Sarah Johnson',
    date: '2024-03-04',
    responses: {
      senior: [
        {
          categoryTitle: 'Planning and Strategy',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Communication',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Support and Resources',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Monitoring and Evaluation',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Employee Involvement',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        }
      ],
      middle: [
        {
          categoryTitle: 'Planning and Strategy',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Communication',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Support and Resources',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Monitoring and Evaluation',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        },
        {
          categoryTitle: 'Employee Involvement',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 2 }
          ]
        }
      ],
      entry: [
        {
          categoryTitle: 'Understanding and Involvement',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Adaptability and Support',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Communication and Feedback',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Engagement and Morale',
          answers: [
            { questionId: 1, score: 2 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 2 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Performance and Implementation',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 2 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 2 },
            { questionId: 5, score: 1 }
          ]
        }
      ]
    }
  },
  {
    id: '3',
    respondentName: 'Michael Chen',
    date: '2024-03-03',
    responses: {
      senior: [
        {
          categoryTitle: 'Planning and Strategy',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        },
        {
          categoryTitle: 'Communication',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Support and Resources',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        },
        {
          categoryTitle: 'Monitoring and Evaluation',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Employee Involvement',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        }
      ],
      middle: [
        {
          categoryTitle: 'Planning and Strategy',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Communication',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        },
        {
          categoryTitle: 'Support and Resources',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Monitoring and Evaluation',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        },
        {
          categoryTitle: 'Employee Involvement',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        }
      ],
      entry: [
        {
          categoryTitle: 'Understanding and Involvement',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 0 }
          ]
        },
        {
          categoryTitle: 'Adaptability and Support',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Communication and Feedback',
          answers: [
            { questionId: 1, score: 1 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 1 },
            { questionId: 5, score: 0 }
          ]
        },
        {
          categoryTitle: 'Engagement and Morale',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 1 },
            { questionId: 3, score: 0 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 1 }
          ]
        },
        {
          categoryTitle: 'Performance and Implementation',
          answers: [
            { questionId: 1, score: 0 },
            { questionId: 2, score: 0 },
            { questionId: 3, score: 1 },
            { questionId: 4, score: 0 },
            { questionId: 5, score: 0 }
          ]
        }
      ]
    }
  }
];