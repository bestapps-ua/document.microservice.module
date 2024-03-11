import ApiEntity from "./ApiEntity";
import ApiDocument from "./ApiDocument";
import ApiCategory from "./ApiCategory";

class ApiDocumentCategory extends ApiEntity {
    private _document: ApiDocument;
    private _category: ApiCategory;
    private _type: string;

    constructor(props) {
        super(props);
        this._category = props.category ? new ApiCategory(props.category): undefined;
        this._document = props.document ? new ApiDocument(props.document): undefined;
        this._type = props.type;
    }


    get document(): ApiDocument {
        return this._document;
    }

    set document(value: ApiDocument) {
        this._document = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
    get category(): ApiCategory {
        return this._category;
    }

    set category(value: ApiCategory) {
        this._category = value;
    }
}

export default ApiDocumentCategory;
