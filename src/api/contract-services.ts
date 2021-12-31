import { ApiService } from './api-service';
import { API_CONFIG } from './constants';

export class ContractServices extends ApiService {
    getContracts = async (status: number, lastIndex: number, keyword: string, pageSize: number) => this.api().post(API_CONFIG.CONTRACTS, this.buildFormData({
        type: 2,
        status,
        per_page: pageSize,
        uriSegment: lastIndex,
        code_contract_disbursement: keyword
    }));
}

