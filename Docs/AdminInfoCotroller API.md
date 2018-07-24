// GET: AdminInfo/Index/adminID

return Content("success") // finish redirect url in the front-end. Qustion: need to pass admin id through index func? 

//GET: AdminInfo/AdminInfo/adminID

return Json(AdminInfo)


// GET: AdminInfo/DeleteSaler/id 

return Content("success"); // redirect to index via front-end 



// GET: AdminInfo/DeleteCustomer/id

return Content("success"); // redirect to index via front-end 



//GET: AdminInfo/SearchCustomer/ID

return Json(CustomerInfo);



//GET: AdminInfo/SalerSaler/ID

return Json(SalerInfo);



//GET: AdminInfo/SearchItem/ID

return Json(ItemInfo);



//GET: AdminInfo/SearchOrder/ID

return Content(orderlist); //orderlist:包含每个订单各项信息的字符串 个订单之间用“#”分割
