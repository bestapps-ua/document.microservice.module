import EntityModel from "./EntityModel";
import APIDocumentModel from "../api/v1/APIDocumentModel";

class DocumentModel extends EntityModel {
    constructor(props) {
        props.model = APIDocumentModel;
        super(props);
    }
}

export default DocumentModel;
