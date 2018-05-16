/**
 *
 *  @author  56477
 *  @create 2018-05-15 14:02
 *  @note 干什么的呢？
 * */
import axios from 'axios';

const token = '';
axios.interceptors.request.use(config => {
  if (token) {
  }
});
export default { axios };
