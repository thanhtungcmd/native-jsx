import { ApiService } from './api-service';
import { API_CONFIG } from './constants';

export class AuthServices extends ApiService {
    loginPhone = async (phone_number: string, password: string) => this.api().post(API_CONFIG.LOGIN, this.buildFormData({
        type: 2
    }));

  

}

