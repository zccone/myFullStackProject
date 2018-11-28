/*工具类-绝大多数页面都要用到的封装类集合*/
// noinspection JSAnnotator
import store from '../store/index';
/**
 *表格、右侧展示页高度自适应。窗口高度-头部高度-一些附加的高度
 * @param 表格id,根据不同情况页面减去的自定义高度
 */
export function Warning(msg) {
  alert(msg)
}
