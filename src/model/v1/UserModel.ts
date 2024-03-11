import EntityModel from "./EntityModel";
import APIUserModel from "../api/v1/APIUserModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";

class UserModel extends EntityModel {
    constructor(props: IEntityModelOptions = {}) {
        props.model = props.model ?? APIUserModel;
        super(props);
    }
}

export default UserModel;
