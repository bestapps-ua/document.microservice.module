import APIEntityModel from "../api/v1/APIEntityModel";
import IEntityModelOptions from "../../interface/IEntityModelOptions";
import ApiEntity from "../../entity/api/v1/ApiEntity";
import ApiList from "../../entity/api/v1/ApiList";

class EntityModel {
    private _model: APIEntityModel;

    constructor(props: IEntityModelOptions) {
        this._model = props.model;
    }

    get model(): APIEntityModel {
        return this._model;
    }

    set model(value: APIEntityModel) {
        this._model = value;
    }

    async action(action: string, params: any = {}) {
        return await this.model.action(action, params);
    }

    async create(params: any = {}): Promise<ApiEntity> {
        return await this.action('create', params);
    }

    async get(params: any = {}): Promise<ApiEntity> {
        return await this.action('get', params);
    }

    async delete(params: any = {}): Promise<boolean> {
        await this.action('delete', params);
        return true;
    }

    async set(params: any = {}): Promise<ApiEntity> {
        return await this.action('set', params);
    }

    async list(params: any = {}): Promise<ApiList> {
        return await this.action('list', params);
    }
}

export default EntityModel;
