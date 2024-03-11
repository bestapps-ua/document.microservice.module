"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityModel_1 = __importDefault(require("./EntityModel"));
const APIDocumentCategoryModel_1 = __importDefault(require("../api/v1/APIDocumentCategoryModel"));
class DocumentCategoryModel extends EntityModel_1.default {
    constructor(props) {
        props.model = APIDocumentCategoryModel_1.default;
        super(props);
    }
}
exports.default = DocumentCategoryModel;
//# sourceMappingURL=DocumentCategoryModel.js.map