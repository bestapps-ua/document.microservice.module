import EntityModel from "./EntityModel";
import APIDocumentNumberModel from "../api/v1/APIDocumentNumberModel";

class DocumentNumberModel extends EntityModel {
    constructor(props) {
        props.model = APIDocumentNumberModel;
        super(props);
    }
}

export default DocumentNumberModel;
