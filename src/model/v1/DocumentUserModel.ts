import EntityModel from "./EntityModel";
import APIDocumentUserModel from "../api/v1/APIDocumentUserModel";

class DocumentUserModel extends EntityModel {
    constructor(props) {
        props.model = APIDocumentUserModel;
        super(props);
    }
}

export default DocumentUserModel;
