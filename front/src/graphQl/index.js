import { gql } from '@apollo/client';

const RANKING_QUERY = gql`
  {
    ranking {
      playerId
      rank
      points
      player {
        name
        surname
      }
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SignUpUser(
    $signupEmail: String!, 
    $signupUid: String!, 
    $signupName: String!, 
    $signupClub: String!) {
      signup(
        email: $signupEmail, 
        uid: $signupUid, 
        name: $signupName, 
        club: $signupClub) {
          token
          user {
            uid
            name
            email
            role
            verified
            club {
              name
            }
          }
      }
  }
`;

export { RANKING_QUERY, SIGNUP_MUTATION };
