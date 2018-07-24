--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
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
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('111','qqq','what','123');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Lucas','123456',null,'13012345678');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Ludan','123456',null,'13112345678');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Tom','123456',null,'13212345678');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('Jack','123456',null,'13312345678');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('2222','1111',null,'13313530656');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('123','1111',null,'13313530656');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('123124','1234',null,'13313530656');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('1111','234',null,'1235');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('usr','usr',null,'133');
Insert into C##LUDAN."Salers" ("SalerID","SalerPassword","SalerInfo","SalerPhone") values ('12344','1234',null,'1234');
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
