import { gql } from "@apollo/client";

export const LOAD_QUESTIONS = gql`
query Questions {
    questions {
      input_data
      input_type
      question
    }
  }
`