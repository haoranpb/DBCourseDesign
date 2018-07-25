--------------------------------------------------------
--  文件已创建 - 星期三-七月-25-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Orders
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Orders" 
   (	"OrderID" VARCHAR2(50 BYTE), 
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
Insert into C##LUDAN."Orders" ("OrderID","ShopID","CustomerID","OrderPrice","OrderCount","OrderTime","OrderState","OrderAddress","OrderPhone") values ('2018/7/24 20:54:47100001ludan','100001','ludan',0,0,to_date('24-7月 -18','DD-MON-RR'),'Cancel','Tongji University','13012345678');
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
--  DDL for Trigger ORDER_ORDERDETAIL_TRIGGER
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##LUDAN"."ORDER_ORDERDETAIL_TRIGGER" 
BEFORE DELETE ON "Orders"
FOR EACH ROW
BEGIN
  DELETE "OrderDetails" WHERE "OrderID" =:old."OrderID";
  DELETE "Comments" WHERE "ID" =:old."OrderID";
END;
/
ALTER TRIGGER "C##LUDAN"."ORDER_ORDERDETAIL_TRIGGER" ENABLE;
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
