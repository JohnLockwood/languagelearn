import { User, Lesson } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

/** Dummy user data. */
export const sampleLessonData: Lesson[] = [

  { id: '101', foreign_language: 'en', native_language: 'es', foreign_text: 'Hello', native_text: 'Hola'},
  { id: '102', foreign_language: 'en', native_language: 'es', foreign_text: 'How are you?', native_text: '¿Cómo está?'},
  { id: '103', foreign_language: 'en', native_language: 'es', foreign_text: 'Please', native_text: 'Por favor'},
  { id: '104', foreign_language: 'en', native_language: 'es', foreign_text: 'Thank you', native_text: 'Gracias'},
]
