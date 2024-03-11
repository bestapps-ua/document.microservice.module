import EntityModel from "./EntityModel";
import APIDocumentCategoryModel from "../api/v1/APIDocumentCategoryModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";

class DocumentCategoryModel extends EntityModel {
    constructor(props: IEntityModelOptions = {}) {
        props.model = props.model ?? APIDocumentCategoryModel;
        super(props);
    }
}

export default DocumentCategoryModel;
