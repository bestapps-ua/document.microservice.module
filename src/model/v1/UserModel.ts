import EntityModel from "./EntityModel";
import APIUserModel from "../api/v1/APIUserModel";

class UserModel extends EntityModel {
    constructor(props) {
        props.model = APIUserModel;
        super(props);
    }
}

export default UserModel;
