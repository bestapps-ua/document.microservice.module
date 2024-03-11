"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityModel_1 = __importDefault(require("./EntityModel"));
const APIDocumentModel_1 = __importDefault(require("../api/v1/APIDocumentModel"));
class DocumentModel extends EntityModel_1.default {
    constructor(props) {
        props.model = APIDocumentModel_1.default;
        super(props);
    }
}
exports.default = DocumentModel;
//# sourceMappingURL=DocumentModel.js.map