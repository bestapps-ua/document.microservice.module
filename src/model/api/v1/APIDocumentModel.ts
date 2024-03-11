import APIModel from "./APIModel";
import ApiDocument from "../../../entity/api/v1/ApiDocument";
import APIEntityModel from "./APIEntityModel";
import ApiCategory from "../../../entity/api/v1/ApiCategory";

class APIDocumentModel extends APIEntityModel {

}

export default new APIDocumentModel({
    path: 'v1.document',
    entity: ApiDocument,
});
