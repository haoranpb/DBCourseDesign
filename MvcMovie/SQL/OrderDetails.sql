--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table OrderDetails
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."OrderDetails" 
   (	"OrderDetailId" VARCHAR2(20 BYTE), 
	"OrderID" VARCHAR2(20 BYTE), 
	"ItemID" VARCHAR2(20 BYTE), 
	"OrderDetailCount" NUMBER(38,0)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."OrderDetails"
SET DEFINE OFF;
Insert into C##LUDAN."OrderDetails" ("OrderDetailId","OrderID","ItemID","OrderDetailCount") values ('1001','2','12121',2);
Insert into C##LUDAN."OrderDetails" ("OrderDetailId","OrderID","ItemID","OrderDetailCount") values ('1002','2','12122',1);
--------------------------------------------------------
--  DDL for Index OrderItem_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."OrderItem_PK" ON "C##LUDAN"."OrderDetails" ("OrderDetailId") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table OrderDetails
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."OrderDetails" MODIFY ("OrderDetailId" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."OrderDetails" ADD CONSTRAINT "OrderItem_PK" PRIMARY KEY ("OrderDetailId")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table OrderDetails
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."OrderDetails" ADD CONSTRAINT "ORDERDETAIL" FOREIGN KEY ("OrderID")
	  REFERENCES "C##LUDAN"."Orders" ("OrderID") ENABLE;
  ALTER TABLE "C##LUDAN"."OrderDetails" ADD CONSTRAINT "ORDERITEM" FOREIGN KEY ("ItemID")
	  REFERENCES "C##LUDAN"."Items" ("ItemID") ENABLE;
