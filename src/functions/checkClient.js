import { getClient } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

const checkClient = async (user) => {
    const userData = await API.graphql(
        graphqlOperation(getClient, { id: user })
    );

    if (userData.data.getClient !== null) {
        return true;
    } else {
        return false;
    }
};

export default checkClient;