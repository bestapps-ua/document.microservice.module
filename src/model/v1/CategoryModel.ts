import EntityModel from "./EntityModel";
import APICategoryModel from "../api/v1/APICategoryModel";

class CategoryModel extends EntityModel {
    constructor(props) {
        props.model = APICategoryModel;
        super(props);
    }
}

export default CategoryModel;
