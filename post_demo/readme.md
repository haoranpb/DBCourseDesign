##login demo

mvc一个参考性质的demo，login page without db，只是用于参考如何实现网页和controller的交互，使用post方式传入id，然后由controller解析并返回纯文本，controller可以返回的类型在https://www.cnblogs.com/supersnowyao/archive/2018/01/15/8287775.html有介绍。

##使用
运行后在url后面加上/User,如果有error那么可以尝试根据机器对应的端口修改view下user中index.cshtml的url，因为之前测试时使用相对地址会有一点问题，所以我写的是绝对地址。