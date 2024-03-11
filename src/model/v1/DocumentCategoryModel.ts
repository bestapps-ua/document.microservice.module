import EntityModel from "./EntityModel";
import APIDocumentCategoryModel from "../api/v1/APIDocumentCategoryModel";

class DocumentCategoryModel extends EntityModel {
    constructor(props) {
        props.model = APIDocumentCategoryModel;
        super(props);
    }
}

export default DocumentCategoryModel;
