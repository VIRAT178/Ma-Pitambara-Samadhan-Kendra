// In-memory storage as fallback if MongoDB fails
export const submissions: Array<any> = []

export function addSubmission(submission: any) {
  submissions.push(submission)
}

export function getSubmissions() {
  return submissions
}
