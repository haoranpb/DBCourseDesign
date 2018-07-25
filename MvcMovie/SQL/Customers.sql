--------------------------------------------------------
--  文件已创建 - 星期三-七月-25-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Customers
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Customers" 
   (	"ID" VARCHAR2(20 BYTE), 
	"CustomerAge" NUMBER(38,0), 
	"CustomerPassword" VARCHAR2(20 BYTE), 
	"CustomerGender" VARCHAR2(20 BYTE), 
	"CustomerPhone" VARCHAR2(20 BYTE), 
	"CustomerCredit" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Customers"
SET DEFINE OFF;
Insert into C##LUDAN."Customers" (ID,"CustomerAge","CustomerPassword","CustomerGender","CustomerPhone","CustomerCredit") values ('ludan',0,'509','Female','12345','1');
Insert into C##LUDAN."Customers" (ID,"CustomerAge","CustomerPassword","CustomerGender","CustomerPhone","CustomerCredit") values ('test',0,'516','1','911','1');
Insert into C##LUDAN."Customers" (ID,"CustomerAge","CustomerPassword","CustomerGender","CustomerPhone","CustomerCredit") values ('liangjunqing',0,'111111','1','13313530656','1');
Insert into C##LUDAN."Customers" (ID,"CustomerAge","CustomerPassword","CustomerGender","CustomerPhone","CustomerCredit") values ('bukeneng',0,'509','1','119','1');
Insert into C##LUDAN."Customers" (ID,"CustomerAge","CustomerPassword","CustomerGender","CustomerPhone","CustomerCredit") values ('pdzsbl',0,'1111','1','13313530656','1');
--------------------------------------------------------
--  DDL for Index TABLE1_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."TABLE1_PK" ON "C##LUDAN"."Customers" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Trigger CUSTOMER_TRIGGERS
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "C##LUDAN"."CUSTOMER_TRIGGERS" 
BEFORE DELETE ON "Customers" 
FOR EACH ROW
BEGIN
    DELETE "Carts" WHERE "CustomerID" =:old."ID";
    DELETE "Addresses" WHERE "ID" =:old."ID";
    DELETE "Browsings" WHERE "ID" =:old."ID";
    DELETE "CreditCards" WHERE "CustomerID" =:old."ID";
END;
/
ALTER TRIGGER "C##LUDAN"."CUSTOMER_TRIGGERS" ENABLE;
--------------------------------------------------------
--  Constraints for Table Customers
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Customers" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Customers" MODIFY ("CustomerPassword" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Customers" ADD CONSTRAINT "Customer_PK" PRIMARY KEY ("ID")
  USING INDEX (CREATE UNIQUE INDEX "C##LUDAN"."TABLE1_PK" ON "C##LUDAN"."Customers" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" )  ENABLE;
