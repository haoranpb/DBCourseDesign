--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Orders
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Orders" 
   (	"OrderID" VARCHAR2(20 BYTE), 
	"ShopID" VARCHAR2(20 BYTE), 
	"CustomerID" VARCHAR2(20 BYTE), 
	"OrderPrice" NUMBER(38,0), 
	"OrderCount" NUMBER(38,0), 
	"OrderTime" DATE, 
	"OrderState" VARCHAR2(20 BYTE), 
	"OrderAddress" VARCHAR2(100 BYTE), 
	"OrderPhone" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Orders"
SET DEFINE OFF;
Insert into C##LUDAN."Orders" ("OrderID","ShopID","CustomerID","OrderPrice","OrderCount","OrderTime","OrderState","OrderAddress","OrderPhone") values ('1','100001','ludan',1250,2,to_date('24-7月 -18','DD-MON-RR'),'Finish','上海市嘉定区曹安公路4800号同济大学嘉定校区','13112345678');
Insert into C##LUDAN."Orders" ("OrderID","ShopID","CustomerID","OrderPrice","OrderCount","OrderTime","OrderState","OrderAddress","OrderPhone") values ('2','100001','ludan',826,3,to_date('24-7月 -18','DD-MON-RR'),'Pay','上海市嘉定区曹安公路4800号同济大学嘉定校区','13112345678');
--------------------------------------------------------
--  DDL for Index Order_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."Order_PK" ON "C##LUDAN"."Orders" ("OrderID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table Orders
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Orders" MODIFY ("OrderID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Orders" ADD CONSTRAINT "Order_PK" PRIMARY KEY ("OrderID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table Orders
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Orders" ADD CONSTRAINT "CUSTOMERORDER" FOREIGN KEY ("CustomerID")
	  REFERENCES "C##LUDAN"."Customers" ("ID") ENABLE;
  ALTER TABLE "C##LUDAN"."Orders" ADD CONSTRAINT "SHOPORDER" FOREIGN KEY ("ShopID")
	  REFERENCES "C##LUDAN"."Shops" ("ShopID") ENABLE;
