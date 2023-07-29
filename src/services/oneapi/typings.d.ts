declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInterfaceInfoVO = {
    code?: number;
    data?: InterfaceInfoVO;
    message?: string;
  };

  type BaseResponseListInterfaceInvokeInfoVo = {
    code?: number;
    data?: InterfaceInvokeInfoVo[];
    message?: string;
  };

  type BaseResponseListSelfInterfaceDateVo = {
    code?: number;
    data?: SelfInterfaceDateVo[];
    message?: string;
  };

  type BaseResponseListUserInterfaceInfo = {
    code?: number;
    data?: UserInterfaceInfo[];
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMap = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageInterfaceInfoVO = {
    code?: number;
    data?: PageInterfaceInfoVO;
    message?: string;
  };

  type BaseResponsePageUserInterfaceInfo = {
    code?: number;
    data?: PageUserInterfaceInfo;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponsestring = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserInterfaceInfo = {
    code?: number;
    data?: UserInterfaceInfo;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getInterfaceInfoVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserInterfaceInfoByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    host?: string;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    requestParamsRemark?: RequestParamsRemarkVO[];
    responseHeader?: string;
    responseParamsRemark?: ResponseParamsRemarkVO[];
    status?: number;
    url?: string;
  };

  type InterfaceInfoInvokeRequest = {
    id?: number;
    requestParams?: string;
  };

  type InterfaceInfoQueryRequest = {
    createTime?: string;
    current?: number;
    description?: string;
    host?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    pageSize?: number;
    requestHeader?: string;
    requestParamsRemark?: RequestParamsRemarkVO[];
    responseHeader?: string;
    responseParamsRemark?: ResponseParamsRemarkVO[];
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoUpdateRequest = {
    description?: string;
    host?: string;
    id?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    requestParamsRemark?: RequestParamsRemarkVO[];
    responseHeader?: string;
    responseParamsRemark?: ResponseParamsRemarkVO[];
    status?: number;
    url?: string;
  };

  type InterfaceInfoVO = {
    createTime?: string;
    description?: string;
    host?: string;
    id?: number;
    isOwnerByCurrentUser?: boolean;
    leftNum?: number;
    method?: string;
    name?: string;
    requestHeader?: string;
    requestParams?: string;
    requestParamsRemark?: RequestParamsRemarkVO[];
    responseHeader?: string;
    responseParamsRemark?: ResponseParamsRemarkVO[];
    status?: number;
    totalNum?: number;
    updateTime?: string;
    url?: string;
    user?: UserVO;
    userId?: number;
  };

  type InterfaceInvokeInfoVo = {
    id?: number;
    name?: string;
    totalNum?: number;
  };

  type listUserByPageUsingGETParams = {
    createTime?: string;
    current?: number;
    gender?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };

  type listUserInterfaceInfoByPageUsingGETParams = {
    current?: number;
    id?: number;
    interfaceInfoId?: number;
    leftNum?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type listUserInterfaceInfoUsingGETParams = {
    current?: number;
    id?: number;
    interfaceInfoId?: number;
    leftNum?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    totalNum?: number;
    userId?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageInterfaceInfoVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: InterfaceInfoVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserInterfaceInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserInterfaceInfo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type payInterfaceUsingPOSTParams = {
    /** interfaceName */
    interfaceName?: string;
    /** adminPsd */
    adminPsd?: string;
    /** payAccount */
    payAccount?: string;
    /** num */
    num?: number;
  };

  type RequestParamsRemarkVO = {
    id?: number;
    isRequired?: string;
    name?: string;
    remark?: string;
    type?: string;
  };

  type ResponseParamsRemarkVO = {
    id?: number;
    name?: string;
    remark?: string;
    type?: string;
  };

  type SelfInterfaceDateVo = {
    interfaceName?: string;
    leftNum?: number;
    totalNum?: number;
  };

  type User = {
    accessKey?: string;
    createTime?: string;
    gender?: number;
    id?: number;
    isDelete?: number;
    secretKey?: string;
    signature?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    gender?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserInterfaceInfo = {
    createTime?: string;
    id?: number;
    interfaceInfoId?: number;
    isDelete?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
    updateTime?: string;
    userId?: number;
  };

  type UserInterfaceInfoAddRequest = {
    interfaceInfoId?: number;
    leftNum?: number;
    totalNum?: number;
    userId?: number;
  };

  type UserInterfaceInfoUpdateRequest = {
    id?: number;
    leftNum?: number;
    status?: number;
    totalNum?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateRequest = {
    gender?: number;
    id?: number;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserVO = {
    accessKey?: string;
    createTime?: string;
    gender?: number;
    id?: number;
    secretKey?: string;
    signature?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userRole?: string;
  };
}
