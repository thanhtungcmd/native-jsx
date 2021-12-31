import { ApiService } from './api-service';
import { API_CONFIG } from './constants';

export class PropertyValuationServices extends ApiService {
    getListFormalityLoan = async () =>
        this.api().post(
            API_CONFIG.GET_LIST_FORMALITY,
            this.buildFormData({
                type: 2
            })
        );

    getBrandName = async (codeMain: string) =>
        this.api().post(
            API_CONFIG.GET_BRAND_NAME,
            this.buildFormData({
                type: 2,
                code_main: codeMain
            })
        );

    getModelName = async (parentId: string) =>
        this.api().post(
            API_CONFIG.GET_MODEL_NAME,
            this.buildFormData({
                type: 2,
                parent_id: parentId
            })
        );

    getPropertyName = async (model: string) =>
        this.api().post(
            API_CONFIG.GET_PROPERTY_NAME,
            this.buildFormData({
                type: 2,
                model
            })
        );

    getDepreciationProperty = async (
        id: string,
        loanProduct: string
    ) =>
        this.api().post(
            API_CONFIG.GET_DEPRECIATION_PROPERTY,
            this.buildFormData({
                type: 2,
                id,
                loan_product:loanProduct
            })
        );

    getPropertyPrice= async (
        propertyId:string,
        codeTypeProperty:string,
        typeLoan:string,
        loanProduct: string
    ) =>
        this.api().post(
            API_CONFIG.GET_DEPRECIATION_PROPERTY,
            this.buildFormData({
                type: 2,
                property_id:propertyId,
                code_type_property:codeTypeProperty,
                type_loan:typeLoan,
                loan_product:loanProduct
            })
        );
}
