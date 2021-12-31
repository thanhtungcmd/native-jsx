import { ApiService } from './api-service';
import { API_CONFIG } from './constants';

export class CommonServices extends ApiService {
    getNews = async () => this.requestSavedData(API_CONFIG.GET_NEWS, {});

    getBanners = async () => this.requestSavedData(API_CONFIG.GET_BANNERS, {});
}

