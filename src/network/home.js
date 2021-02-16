import {request} from 'network/request'
import axios from 'axios';

export function getHomeMutiData () {
 return request({url:'/home/multidata'});
  //请求本地json文件
  /*axios.get('api/home_multidata.json').then(res =>{

    console.log('============kylin============');
    console.log(res);
  });*/

}
