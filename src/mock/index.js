import Mock from 'mockjs'

/*const data=Mock.mock({
  //"|"后数字表示生成几组数据
  //'string|4':'哈哈-kylin'

  //随机生成字符串,括号中的字符串个数，@c表示生成的是中文
  'string':'@cword(3)'
});
console.log(data);*/

Mock.mock('/home/multidata','get',{
  banner:[{acm:'1001',image:require('@/assets/img/swiper/sw1.jpg'),
          link:'https://prodev.m.jd.com/mall/active/4SLmkE6ueBoYN4Xfy5XbjfP6GNYk/index.html',title:'珠宝钟表',width:700,height:200},
          {acm:'1002',image:require('@/assets/img/swiper/sw2.jpg'),
            link:'https://prodev.m.jd.com/mall/active/2Q9rZC2o18eiRisTRhPu89g3VQJc/index.html',title:'乐购国际',width:700,height:200},
          {acm:'1003',image:require('@/assets/img/swiper/sw3.jpg'),
          link:'http://pro.m.jd.com/mall/active/2YDd2VVRCvsCXJ251HxEKntb4vLL/index.html?innerAnchor=36819333950_40710279468_20166251063_32163177354_1593247833&focus=4',
              title:'飞驰人生',width:700,height:200},
          {acm:'1004',image:require('@/assets/img/swiper/sw4.jpg'),
            link:'https://h5.m.jd.com/babelDiy/Zeus/3a9Q8JhSik8yfwwjai9WWaessRZt/index.html',
             title:'真爱无距1',width:700,height:200},
          {acm:'1005',image:require('@/assets/img/swiper/sw5.jpg'),
            link:'http://pro.m.jd.com/mall/active/Aur81QqhKzwYkwRxQEWaGGF9Kr1/index.html',title:'黄昏之恋',width:700,height:200},
          {acm:'1006',image:require('@/assets/img/swiper/sw6.jpg'),
            link:'http://prodev.m.jd.com/mall/active/4SLmkE6ueBoYN4Xfy5XbjfP6GNYk/index.html',title:'关怀健康',width:700,height:200},
          {acm:'1007',image:require('@/assets/img/swiper/sw7.jpg'),
           link:'http://prodev.m.jd.com/mall/active/2Q9rZC2o18eiRisTRhPu89g3VQJc/index.html',title:'金融理财',width:700,height:200},
          {acm:'1008',image:require('@/assets/img/swiper/sw8.jpg'),
            link:'http://prodev.m.jd.com/mall/active/2Q9rZC2o18eiRisTRhPu89g3VQJc/index.html',title:'年货节',width:700,height:200},
        ],
  recommond:[
              {acm:2001,image:"https://s10.mogucdn.com/mlcdn/c45406/210127_6fg2d56i1cih8i2fbj1g1kkiiccfi_135x135.png_640x640.v1cAC.40.webp",
                url:"https://m.mogu.com/wall/s?q=%E5%A5%B3%E8%A3%85",title:'女装'},
              {acm:2002,image:"https://s10.mogucdn.com/mlcdn/c45406/210205_4081i2550ga0dl805ka7g7b9cc303_150x150.webp_999x999.v1c0.100.jpg",
                url:"https://act.mogu.com/0127xinren",title:'新人福利'},
              {acm:2003,image:"https://s10.mogucdn.com/mlcdn/c45406/210127_2l6d9cbif3381b7gg68gdaf25e8ab_135x135.png_640x640.v1cAC.40.webp",
                url:"https://m.mogu.com/wall/s?q=%E4%B8%8A%E8%A1%A3",title:'上衣'},
              {acm:2004,image:"https://s10.mogucdn.com/mlcdn/c45406/210127_2h46989jcg30bhiga7g8145b4h0k9_135x135.png_640x640.v1cAC.40.webp",
                url:"https://m.mogu.com/wall/s?q=%E5%A5%B3%E9%9E%8B",title:'女鞋'},
             ]
});
