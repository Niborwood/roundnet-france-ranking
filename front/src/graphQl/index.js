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

const USER_QUERY = gql`
  query getUser {
    user {
      uid
      name
      email
      role
      verified
      club {
        name
      }
      tournaments {
        id
        name
        date
        participants
        place {
          name
        }
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

const LOGIN_MUTATION = gql`
  mutation LoginMutation($loginEmail: String!, $loginUid: String!) {
    login(email: $loginEmail, uid: $loginUid) {
      token
      user {
        uid
        }
      }
    }
`;

export {
  RANKING_QUERY,
  USER_QUERY,
  SIGNUP_MUTATION,
  LOGIN_MUTATION,
};
