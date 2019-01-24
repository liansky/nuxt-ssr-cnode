// 按业务块拆分网络层
import { fetch } from '../plugins/axios'
import api from './api-conf'


/**
 * 创建测试主题
 * @param accesstoken 用户标识
 * @param tab 发表主题类型
 * @param content 内容
 * @param title 标题
 * @returns {Q.Promise<any>}
 */
export const creatTopics = ({ accesstoken, tab = 'dev', content, title }) => {
  return fetch(api.creatTopic, {
    data: {
      accesstoken: accesstoken,
      tab: tab,
      content: content,
      title: title
    }
  })
}
