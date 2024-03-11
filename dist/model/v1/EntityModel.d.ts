import APIEntityModel from "../api/v1/APIEntityModel";
declare class EntityModel {
    private _model;
    constructor(props: any);
    get model(): APIEntityModel;
    set model(value: APIEntityModel);
    action(action: string, params?: any): Promise<any>;
    create(params?: any): Promise<any>;
    get(params?: any): Promise<any>;
    delete(params?: any): Promise<boolean>;
    set(params?: any): Promise<any>;
    list(params?: any): Promise<any>;
}
export default EntityModel;
//# sourceMappingURL=EntityModel.d.ts.map