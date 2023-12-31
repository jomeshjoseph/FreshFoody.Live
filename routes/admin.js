const admin_controller= require('../controller/user_controller')
const adminHeplers=require('../helpers/user-helpers');
const { response } = require('../app');
const multer = require('multer');
const path = require('path')
const Swal = require('sweetalert');

var express = require('express');

var router = express.Router();
var MongoClient = require('mongodb').MongoClient



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/pro-images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '- ' + Date.now() + path.extname(file.originalname))
    }
  })
  
  var uploadPro = multer({
    storage: storage
  })

const {adminlogin,adminreg,admininfo,adminhomepage,adminallusers,adminBlockUser, 
    adminUnBlockUser,adminallproducts,adminaddproductpage,adminaddproduct,logout,admineditproduct,
    adminupdateproduct,admindeleteproduct,adminaddcategorypage,adminaddcatogory,adminallcategory,
    admindeletecategory,admineditcategory,adminupdatecategory,adminallorders,adminhome,getorderstatus,
    getorderproduct,getorderdetails,getallreport,viewOffer,addCoupenPost,productCoupen,productOfferPost,
    inventoryManagement,editStockPost,getsalesgraph,removeCoupen } = require('../controller/admin_controller');


router.get('/',adminlogin)
router.get('/adminsignup',adminreg)
router.post('/adminsignup',admininfo)
router.post('/dashboard',adminhomepage)
router.get('/home',adminhomepage)
router.get('/allusers',adminallusers)
router.get('/blockUser/:id',adminBlockUser)
 router.get('/unBlockUser/:id',adminUnBlockUser)
 router.get('/allproducts',adminallproducts)
 router.get('/addproductpage',adminaddproductpage)
 router.post('/addproduct',uploadPro.array('image') ,adminaddproduct)
 router.get('/logout',logout)
 router.get('/editproduct/:id',admineditproduct)
router.post('/editpro/:id',uploadPro.array('image'),adminupdateproduct)
router.get('/deleteproduct/:id',admindeleteproduct)
router.get('/allcategory',adminallcategory)
// router.get('/category',adminaddcategorypage)
router.post('/addcategory',adminaddcatogory)
router.get('/deletecategory/:id',admindeletecategory)
router.get('/editcategory/:id',admineditcategory)
router.post('/updatecatogery/:id',adminupdatecategory)
router.get('/allorders',adminallorders)
router.get('/orderstatus',getorderstatus)
router.post('/order-status',getorderstatus)
router.get('/orderdetail/:id',getorderdetails)
router.get('/allreports',getallreport)
router.get('/offer',viewOffer)
router.post('/addcoupon' ,addCoupenPost)
router.get('/delete-coupen/:id' , removeCoupen)
router.get('/productOffer',productCoupen)
router.post('/addProductOffer/:id' , productOfferPost)
router.get('/inventory' , inventoryManagement)
router.post('/edit-stock/:id' , editStockPost)
router.get('/filtersalesgraph/:filtertype',getsalesgraph)
module.exports = router;
