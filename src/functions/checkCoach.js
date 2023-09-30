import { getCoach } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

const checkCoach = async (user) => {
    const userData = await API.graphql(
        graphqlOperation(getCoach, { id: user })
    );

    if (userData.data.getUser !== null) {
        return true;
    } else {
        return false;
    }
};

export default checkCoach;