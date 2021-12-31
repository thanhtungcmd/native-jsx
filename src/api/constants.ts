export const RSA_MODULE =
  'mUwDmM4v609j6qORK6Xb7r7hwcjkGEdILx6SSH+y4JphiXwrjDUHzkIMKvEygJ93UDOC1XbJEYvP/iNcKV8FngxAA2ymnjpe3GUlUTRoA6aIEt9I0S8acRZniywOtlFAOoqzlEavoEtB6EK6F9KTXNkSNTWXYCei99A4cceZGzE=';
export const RSA_EXPONENT = 'AQAB';

export enum API_CONFIG {
  BASE_URL = 'https://sandboxappkh.univest.vn/V2',
  DOMAIN_SHARE = 'https://',

  IMAGES_HOST = 'https://',

  GET_KEY_UPLOAD = '/api/KeyUpload',
  UPLOAD_IMAGE = '/UploadHandler.php',

  // common
  GET_VERSION = '/api/VersionApiStatic',
  GET_BANNERS = '/banner/get_all_home',
  GET_NEWS = '/banner/handbook',
  ENCRYPT = '/api/Encrypt',

  // authentication
  LOGIN = '/auth/signin',
  TOKEN = '/token',
  REFRESH_TOKEN = '/token',
  LOGOUT = '/api/Logout',

  // account

  // contracts
  CONTRACTS = 'contract/contract_tempo_by_user', // List danh sách hợp đồng.

  // property valuation
  GET_LIST_FORMALITY = 'configuration_formality/get_configuration_formality_app',
  GET_BRAND_NAME = 'property/get_property_parent',
  GET_MODEL_NAME = 'property/get_property_model',
  GET_PROPERTY_NAME = 'property/get_property_child',
  GET_DEPRECIATION_PROPERTY = 'property/get_property',
  GET_PRICE_PROPERTY = 'property/getPriceProperty',
}
