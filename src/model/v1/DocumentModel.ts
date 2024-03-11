import EntityModel from "./EntityModel";
import APIDocumentModel from "../api/v1/APIDocumentModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";

class DocumentModel extends EntityModel {
    constructor(props: IEntityModelOptions = {}) {
        props.model = props.model ?? APIDocumentModel;
        super(props);
    }
}

export default DocumentModel;
