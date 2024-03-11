declare class ApiEntity {
    private _uid;
    private __type;
    private _created;
    private _updated;
    private _data;
    private _system;
    constructor(props: any);
    getClassName(): string;
    get data(): Object;
    set data(value: Object);
    get uid(): string;
    set uid(value: string);
    get created(): number;
    set created(value: number);
    get internalType(): string;
    get system(): Object;
    set system(value: Object);
    get updated(): number;
    set updated(value: number);
}
export default ApiEntity;
//# sourceMappingURL=ApiEntity.d.ts.map