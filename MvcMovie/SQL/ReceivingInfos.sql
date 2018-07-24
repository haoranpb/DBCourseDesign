--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table ReceivingInfos
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."ReceivingInfos" 
   (	"CustomerID" VARCHAR2(20 BYTE), 
	"Address" VARCHAR2(100 BYTE), 
	"ReceivingName" VARCHAR2(20 BYTE), 
	"ReceivingPhone" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."ReceivingInfos"
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index ReceivingInfo_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."ReceivingInfo_PK" ON "C##LUDAN"."ReceivingInfos" ("CustomerID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table ReceivingInfos
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."ReceivingInfos" MODIFY ("CustomerID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."ReceivingInfos" ADD CONSTRAINT "ReceivingInfo_PK" PRIMARY KEY ("CustomerID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
  ALTER TABLE "C##LUDAN"."ReceivingInfos" MODIFY ("Address" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."ReceivingInfos" MODIFY ("ReceivingName" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."ReceivingInfos" MODIFY ("ReceivingPhone" NOT NULL ENABLE);
--------------------------------------------------------
--  Ref Constraints for Table ReceivingInfos
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."ReceivingInfos" ADD CONSTRAINT "CUSTOMERRECEIVING" FOREIGN KEY ("CustomerID")
	  REFERENCES "C##LUDAN"."Customers" ("ID") ENABLE;
