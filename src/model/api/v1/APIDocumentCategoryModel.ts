import APIEntityModel from "./APIEntityModel";
import ApiDocumentCategory from "../../../entity/api/v1/ApiDocumentCategory";

class APIDocumentCategoryModel extends APIEntityModel{

}

export default new APIDocumentCategoryModel({
    path: 'v1.documentDocumentCategory',
    entity: ApiDocumentCategory,
});
