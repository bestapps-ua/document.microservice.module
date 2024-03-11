import APIEntityModel from "./APIEntityModel";
import ApiDocumentNumber from "../../../entity/api/v1/ApiDocumentNumber";

class APIDocumentNumberModel extends APIEntityModel{

}

export default new APIDocumentNumberModel({
    path: 'v1.documentNumber',
    entity: ApiDocumentNumber,
});
