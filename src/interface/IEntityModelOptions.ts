import ApiEntity from "../entity/api/v1/ApiEntity";

export default interface IEntityModelOptions {
    path: string;
    entity: ApiEntity|any;
}
