import EntityModel from "./EntityModel";
import APICategoryModel from "../api/v1/APICategoryModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";

class CategoryModel extends EntityModel {
    constructor(props: IEntityModelOptions = {}) {
        props.model = props.model ?? APICategoryModel;
        super(props);
    }
}

export default CategoryModel;
