import ApiCategory from "../../../entity/api/v1/ApiCategory";
import APIEntityModel from "./APIEntityModel";

class APICategoryModel extends APIEntityModel {

}

export default new APICategoryModel({
    path: 'v1.documentCategory',
    entity: ApiCategory,
});
