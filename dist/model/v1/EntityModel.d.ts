import APIEntityModel from "../api/v1/APIEntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiEntity from "../../entity/api/v1/ApiEntity";
import ApiList from "../../entity/api/v1/ApiList";
declare class EntityModel {
    private _model;
    constructor(props: IEntityModelOptions);
    get model(): APIEntityModel;
    set model(value: APIEntityModel);
    action(action: string, params?: any): Promise<any>;
    create(params?: any): Promise<ApiEntity>;
    get(params?: any): Promise<ApiEntity>;
    delete(params?: any): Promise<boolean>;
    set(params?: any): Promise<ApiEntity>;
    list(params?: any): Promise<ApiList>;
}
export default EntityModel;
//# sourceMappingURL=EntityModel.d.ts.map