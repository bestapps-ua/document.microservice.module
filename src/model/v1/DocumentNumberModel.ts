import EntityModel from "./EntityModel";
import APIDocumentNumberModel from "../api/v1/APIDocumentNumberModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";

class DocumentNumberModel extends EntityModel {
    constructor(props: IEntityModelOptions = {}) {
        props.model = props.model ?? APIDocumentNumberModel;
        super(props);
    }
}

export default DocumentNumberModel;
