import ApiEntity from "./ApiEntity";
import ApiDocumentNumber from "./ApiDocumentNumber";
import ApiDocumentUser from "./ApiDocumentUser";
import ApiDocumentCategory from "./ApiDocumentCategory";
import ApiUser from "./ApiUser";

class ApiDocument extends ApiEntity {

    private _name: string;
    private _status: string;
    private _type: string;
    private _numbers: ApiDocumentNumber[];
    private _users: ApiDocumentUser[];
    private _categories: ApiDocumentCategory[];
    private _user: ApiUser;

    constructor(props) {
        super(props);
        this._name = props.name;
        this._status = props.status;
        this._type = props.type;
        this._user = props.user ? new ApiUser(props.user) : undefined;
        this.numbers = props.numbers || [];
        this.users = props.users || [];
        this.categories = props.categories || [];
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get numbers(): ApiDocumentNumber[] {
        return this._numbers;
    }

    set numbers(value: ApiDocumentNumber[] | any) {
        this._numbers = [];
        for (const documentNumber of value) {
            this._numbers.push(new ApiDocumentNumber(documentNumber));
        }
    }

    get categories(): ApiDocumentCategory[] {
        return this._categories;
    }

    set categories(value: ApiDocumentCategory[] | any) {
        this._categories = [];
        for (const documentCategory of value) {
            this._categories.push(new ApiDocumentCategory(documentCategory));
        }
    }

    get users(): ApiDocumentUser[] {
        return this._users;
    }

    set users(value: ApiDocumentUser[] | any) {
        this._users = [];
        for (const documentUser of value) {
            this._users.push(new ApiDocumentUser(documentUser));
        }
    }

    get user(): ApiUser {
        return this._user;
    }

    set user(value: ApiUser) {
        this._user = value;
    }
}

export default ApiDocument;
