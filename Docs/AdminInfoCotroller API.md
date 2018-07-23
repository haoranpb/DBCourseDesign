// GET: AdminInfo/Index

return Content("success") // finish redirect url in the front-end. Qustion: need to pass admin id through index func? 



// GET: AdminInfo/DeleteSaler/id 

return Content("success"); // redirect to index via front-end 



// GET: AdminInfo/DeleteCustomer/id

return Content("success"); // redirect to index via front-end 


// GET: AdminInfo/Search/ID

1. return Content("not found); //未找到

2. return Json(SalerInfo/CustomerInfo);

    2.1 Type = "saler", //返回的是卖家信息
        ID = saler.SalerID,
        Info = saler.SalerInfo,
        Phone = saler.SalerPhone,

    2.2 Type = "customer"; //返回的是买家信息
        ID = customer.ID,
        Age = customer.CustomerAge,
        Gender = customer.CustomerGender,
        Phone = customer.CustomerPhone,
        Credit = customer.CustomerCredit,