/******************
 * 部门管理
 *****************/

// 导入请求公用方法
import {
    request
} from '../../utils/axiosFun';
///admin/dept/tree
//测试接口
export function getAutomaticList(query) {
    return request('get', '/admin/log/page', query, "Y")
}
//所有事物
export function getThingsList(query) {
    return request('get', '/api/model/v1/things', query, "Y")
}
//新增事物
export function addThingsList(query) {
    return request('post', '/api/model/v1/things', query, "F")
}
// export function getAutomaticList(query) {
//     return request('get', '/api/model/v1/thingtypes', query, "Y")
// }
//测试视频抓图接口
export function postManualCapture(obj) {
    return request('get', '/user/show', obj)
}

export function delObj(id) {
    return request('delete', '/admin/dept/' + id, {})
}

export function putAutomaticObj(obj) {
    return request('put', '/admin/dept', obj)
}

