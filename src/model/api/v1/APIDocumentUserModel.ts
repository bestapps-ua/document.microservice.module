import APIEntityModel from "./APIEntityModel";
import ApiDocumentNumber from "../../../entity/api/v1/ApiDocumentNumber";
import ApiDocumentUser from "../../../entity/api/v1/ApiDocumentUser";

class APIDocumentUserModel extends APIEntityModel{

}

export default new APIDocumentUserModel({
    path: 'v1.documentDocumentUser',
    entity: ApiDocumentUser,
});
