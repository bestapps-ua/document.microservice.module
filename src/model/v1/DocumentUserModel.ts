import EntityModel from "./EntityModel";
import APIDocumentUserModel from "../api/v1/APIDocumentUserModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";

class DocumentUserModel extends EntityModel {
    constructor(props: IEntityModelOptions = {}) {
        props.model = props.model ?? APIDocumentUserModel;
        super(props);
    }
}

export default DocumentUserModel;
