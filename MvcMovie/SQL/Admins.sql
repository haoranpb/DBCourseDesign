--------------------------------------------------------
--  文件已创建 - 星期一-七月-23-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Admins
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Admins" 
   (	"AdminID" VARCHAR2(20 BYTE), 
	"AdminPassword" VARCHAR2(20 BYTE), 
	"AdminInfo" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Admins"
SET DEFINE OFF;
Insert into C##LUDAN."Admins" ("AdminID","AdminPassword","AdminInfo") values ('Ludandan','Abc123456','13012345678');
--------------------------------------------------------
--  DDL for Index Admin_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."Admin_PK" ON "C##LUDAN"."Admins" ("AdminID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table Admins
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Admins" MODIFY ("AdminID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Admins" MODIFY ("AdminPassword" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Admins" ADD CONSTRAINT "Admin_PK" PRIMARY KEY ("AdminID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
