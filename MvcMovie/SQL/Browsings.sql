--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Browsings
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Browsings" 
   (	"ID" VARCHAR2(20 BYTE), 
	"BrowsingTime" VARCHAR2(20 BYTE), 
	"ItemID" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Browsings"
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index Browsing_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."Browsing_PK" ON "C##LUDAN"."Browsings" ("ID", "BrowsingTime") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table Browsings
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Browsings" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Browsings" MODIFY ("BrowsingTime" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Browsings" MODIFY ("ItemID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Browsings" ADD CONSTRAINT "Browsing_PK" PRIMARY KEY ("ID", "BrowsingTime")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table Browsings
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Browsings" ADD CONSTRAINT "CustomerBrowsing" FOREIGN KEY ("ID")
	  REFERENCES "C##LUDAN"."Customers" ("ID") ENABLE;
  ALTER TABLE "C##LUDAN"."Browsings" ADD CONSTRAINT "BROWSINGITEM" FOREIGN KEY ("ItemID")
	  REFERENCES "C##LUDAN"."Items" ("ItemID") ENABLE;
