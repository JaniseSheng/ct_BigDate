var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/chart',function(req,res,next){
  var body = {};
  res.render('pages/chart',{title:'Echarts',data:body})
})

//-------------------------------page1--------------------------------
router.get('/page1',function(req,res,next){
  res.render('pages/page1',{title:'首页'});
})
//page1/subpage1
router.get('/subpage1_1',function(req,res,next){
  res.render('pages/page1/subpage1',{title:''});
})
//page1/subpage2
router.get('/subpage1_2',function(req,res,next){
  res.render('pages/page1/subpage2',{title:''});
})
//page1/subpage3
router.get('/subpage1_3',function(req,res,next){
  res.render('pages/page1/subpage3',{title:''});
})
//page1/subpage4
router.get('/subpage1_4',function(req,res,next){
  res.render('pages/page1/subpage4',{title:''});
})

//-------------------------------page2--------------------------------
router.get('/page2',function(req,res,next){
  res.render('pages/page2',{title:'订单业务数'});
})
router.get('/subpage2_1',function(req,res,next){
  res.render('pages/page2/subpage1',{title:''});
})
router.get('/subpage2_2',function(req,res,next){
  res.render('pages/page2/subpage2',{title:''});
})
router.get('/subpage2_3',function(req,res,next){
  res.render('pages/page2/subpage3',{title:''});
})
router.get('/subpage2_4',function(req,res,next){
  res.render('pages/page2/subpage4',{title:''});
})

//-------------------------------page3--------------------------------
router.get('/page3',function(req,res,next){
  res.render('pages/page3',{title:'移动业务数'});
})
router.get('/subpage3_1',function(req,res,next){
  res.render('pages/page3/subpage1',{title:''});
})
router.get('/subpage3_2',function(req,res,next){
  res.render('pages/page3/subpage2',{title:''});
})
router.get('/subpage3_3',function(req,res,next){
  res.render('pages/page3/subpage3',{title:''});
})
router.get('/subpage3_4',function(req,res,next){
  res.render('pages/page3/subpage4',{title:''});
})

//-------------------------------page4--------------------------------
router.get('/page4',function(req,res,next){
  res.render('pages/page4',{title:'固网业务量'});
})
router.get('/subpage4_1',function(req,res,next){
  res.render('pages/page4/subpage1',{title:''});
})
router.get('/subpage4_2',function(req,res,next){
  res.render('pages/page4/subpage2',{title:''});
})
router.get('/subpage4_3',function(req,res,next){
  res.render('pages/page4/subpage3',{title:''});
})
router.get('/subpage4_4',function(req,res,next){
  res.render('pages/page4/subpage4',{title:''});
})

//-------------------------------page5--------------------------------
router.get('/page5',function(req,res,next){
  res.render('pages/page5',{title:'客服业务总汇'});
})
router.get('/subpage5_1',function(req,res,next){
  res.render('pages/page5/subpage1',{title:''});
})
router.get('/subpage5_2',function(req,res,next){
  res.render('pages/page5/subpage2',{title:''});
})
router.get('/subpage5_3',function(req,res,next){
  res.render('pages/page5/subpage3',{title:''});
})
router.get('/subpage5_4',function(req,res,next){
  res.render('pages/page5/subpage4',{title:''});
})

//-------------------------------page6--------------------------------
router.get('/page6',function(req,res,next){
  res.render('pages/page6',{title:'光网资源'});
})
router.get('/subpage6_1',function(req,res,next){
  res.render('pages/page6/subpage1',{title:''});
})
router.get('/subpage6_2',function(req,res,next){
  res.render('pages/page6/subpage2',{title:''});
})


//-------------------------------page7--------------------------------
router.get('/page7',function(req,res,next){
  res.render('pages/page7',{title:'光网资源2'});
})
router.get('/subpage7_1',function(req,res,next){
  res.render('pages/page7/subpage1',{title:''});
})
router.get('/subpage7_2',function(req,res,next){
  res.render('pages/page7/subpage2',{title:''});
})
router.get('/subpage7_3',function(req,res,next){
  res.render('pages/page7/subpage3',{title:''});
})
router.get('/subpage7_4',function(req,res,next){
  res.render('pages/page7/subpage4',{title:''});
})

router.get('/demo',function(req,res,next){
  res.render('demo',{title:"page2"})
})
module.exports = router;
