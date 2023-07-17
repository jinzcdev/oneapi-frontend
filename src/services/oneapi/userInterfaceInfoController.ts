// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserInterfaceInfo POST /oneapi/userInterfaceInfo/add */
export async function addUserInterfaceInfoUsingPOST(
  body: API.UserInterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/oneapi/userInterfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserInterfaceInfo POST /oneapi/userInterfaceInfo/delete */
export async function deleteUserInterfaceInfoUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/oneapi/userInterfaceInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserInterfaceInfoById GET /oneapi/userInterfaceInfo/get */
export async function getUserInterfaceInfoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserInterfaceInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserInterfaceInfo>('/oneapi/userInterfaceInfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserInterfaceInfo GET /oneapi/userInterfaceInfo/list */
export async function listUserInterfaceInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserInterfaceInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserInterfaceInfo>('/oneapi/userInterfaceInfo/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserInterfaceInfoByPage GET /oneapi/userInterfaceInfo/list/page */
export async function listUserInterfaceInfoByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserInterfaceInfoByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserInterfaceInfo>('/oneapi/userInterfaceInfo/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** payInterface POST /oneapi/userInterfaceInfo/payInterface */
export async function payInterfaceUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payInterfaceUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseobject>('/oneapi/userInterfaceInfo/payInterface', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** selfInterfaceData GET /oneapi/userInterfaceInfo/selfInterfaceData */
export async function selfInterfaceDataUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListSelfInterfaceDateVo>(
    '/oneapi/userInterfaceInfo/selfInterfaceData',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** getInterfaceStatistics GET /oneapi/userInterfaceInfo/statistics */
export async function getInterfaceStatisticsUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInvokeInfoVo>(
    '/oneapi/userInterfaceInfo/statistics',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** updateUserInterfaceInfo POST /oneapi/userInterfaceInfo/update */
export async function updateUserInterfaceInfoUsingPOST(
  body: API.UserInterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/oneapi/userInterfaceInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
