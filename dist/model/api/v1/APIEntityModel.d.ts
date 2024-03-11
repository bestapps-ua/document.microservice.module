import ApiEntity from "../../../entity/api/v1/ApiEntity";
import IEntityModelOptions from "../../../interface/IEntityModelOptions";
declare class APIEntityModel {
    private _path;
    private _entity;
    constructor(props: IEntityModelOptions);
    get path(): any;
    set path(value: any);
    get entity(): ApiEntity;
    set entity(value: ApiEntity);
    action(name: string, params?: any): Promise<any>;
    generate(): Promise<void>;
}
export default APIEntityModel;
//# sourceMappingURL=APIEntityModel.d.ts.map