export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      assessments: {
        Row: {
          id: string
          respondent_name: string
          date: string
          created_at: string
        }
        Insert: {
          id?: string
          respondent_name: string
          date: string
          created_at?: string
        }
        Update: {
          id?: string
          respondent_name?: string
          date?: string
          created_at?: string
        }
      }
      responses: {
        Row: {
          id: string
          assessment_id: string
          level: 'senior' | 'middle' | 'entry'
          category: string
          answers: Json
          created_at: string
        }
        Insert: {
          id?: string
          assessment_id: string
          level: 'senior' | 'middle' | 'entry'
          category: string
          answers: Json
          created_at?: string
        }
        Update: {
          id?: string
          assessment_id?: string
          level?: 'senior' | 'middle' | 'entry'
          category?: string
          answers?: Json
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}