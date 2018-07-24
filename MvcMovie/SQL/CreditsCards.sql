--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CreditsCards
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."CreditsCards" 
   (	"CustomerID" VARCHAR2(20 BYTE), 
	"CreditCardID" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."CreditsCards"
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index CREDIT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."CREDIT_PK" ON "C##LUDAN"."CreditsCards" ("CustomerID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table CreditsCards
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."CreditsCards" ADD CONSTRAINT "CREDIT_PK" PRIMARY KEY ("CustomerID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table CreditsCards
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."CreditsCards" ADD CONSTRAINT "CUSTOMERCREDITCARD" FOREIGN KEY ("CustomerID")
	  REFERENCES "C##LUDAN"."Customers" ("ID") ENABLE;
