import ApiEntity from "./ApiEntity";
import ApiCategory from "./ApiCategory";

class ApiDocumentNumber extends ApiEntity {

    private _number: string;
    private _category: ApiCategory;

    constructor(props) {
        super(props);
        this._number = props.number;
        this._category = props.category ? new ApiCategory(props.category) : undefined;
    }

    get category(): ApiCategory {
        return this._category;
    }

    set category(value: ApiCategory) {
        this._category = value;
    }
    get number(): string {
        return this._number;
    }

    set number(value: string) {
        this._number = value;
    }
}

export default ApiDocumentNumber;
