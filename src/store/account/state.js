import { EMPTY_ACCOUNT } from "../../data/account/AccountModel";

export default function() {
  return {
    account: { ...EMPTY_ACCOUNT },
    isLoggedIn: false,
    homeVisited: false,
    strategiInputActivitiesVisited: false,
    strategiVisited: false,
    distortionVisited: false
  };
}
