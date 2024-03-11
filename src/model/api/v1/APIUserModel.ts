import ApiUser from "../../../entity/api/v1/ApiUser";
import APIEntityModel from "./APIEntityModel";

class APIUserModel extends APIEntityModel {

}

export default new APIUserModel({
    path: 'v1.documentUser',
    entity: ApiUser,
});
