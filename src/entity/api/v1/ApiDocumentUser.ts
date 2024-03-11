import ApiEntity from "./ApiEntity";
import ApiDocument from "./ApiDocument";
import ApiUser from "./ApiUser";

class ApiDocumentUser extends ApiEntity {

    private _document: ApiDocument;
    private _user: ApiUser;
    private _status: string;

    constructor(props) {
        super(props);
        this._document = props.document ? new ApiDocument(props.document): undefined;
        this._user = props.user ? new ApiUser(props.user): undefined;
        this._status = props.status;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
    get user(): ApiUser {
        return this._user;
    }

    set user(value: ApiUser) {
        this._user = value;
    }
    get document(): ApiDocument {
        return this._document;
    }

    set document(value: ApiDocument) {
        this._document = value;
    }
}

export default ApiDocumentUser;
