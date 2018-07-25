--------------------------------------------------------
--  文件已创建 - 星期三-七月-25-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Salers
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Salers" 
   (	"SalerID" VARCHAR2(20 BYTE), 
	"SalerPassword" VARCHAR2(20 BYTE), 
	"SalerInfo" VARCHAR2(20 BYTE), 
	"SalerPhone" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Salers"
SET DEFINE OFF;
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Lucas','123456',null,'13012345678');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Ludan','123456',null,'13112345678');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Tom','123456',null,'13212345678');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Jack','123456',null,'13312345678');
--------------------------------------------------------
--  DDL for Index Saler_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."Saler_PK" ON "C##LUDAN"."Salers" ("SalerID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Trigger SALER_SHOP_TRIGGER
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##LUDAN"."SALER_SHOP_TRIGGER" 
BEFORE DELETE ON "Salers" 
FOR EACH ROW
BEGIN
  DELETE "Shops" WHERE "SalerID" =:old."SalerID";
END;
/
ALTER TRIGGER "C##LUDAN"."SALER_SHOP_TRIGGER" ENABLE;
--------------------------------------------------------
--  Constraints for Table Salers
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Salers" MODIFY ("SalerID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Salers" MODIFY ("SalerPassword" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Salers" ADD CONSTRAINT "Saler_PK" PRIMARY KEY ("SalerID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
