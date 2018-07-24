--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Carts
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Carts" 
   (	"CustomerID" VARCHAR2(20 BYTE), 
	"CartID" VARCHAR2(20 BYTE), 
	"ItemCount" NUMBER(38,0), 
	"CartPrice" NUMBER(38,0)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Carts"
SET DEFINE OFF;
Insert into C##LUDAN."Carts" ("CustomerID","CartID","ItemCount","CartPrice") values ('ludan','12122',1,228);
Insert into C##LUDAN."Carts" ("CustomerID","CartID","ItemCount","CartPrice") values ('ludan','12121',2,598);
--------------------------------------------------------
--  DDL for Index Cart_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."Cart_PK" ON "C##LUDAN"."Carts" ("CustomerID", "CartID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table Carts
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Carts" MODIFY ("CustomerID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Carts" MODIFY ("CartID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Carts" ADD CONSTRAINT "Cart_PK" PRIMARY KEY ("CustomerID", "CartID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table Carts
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Carts" ADD CONSTRAINT "CustomerCart" FOREIGN KEY ("CustomerID")
	  REFERENCES "C##LUDAN"."Customers" ("ID") ENABLE;
  ALTER TABLE "C##LUDAN"."Carts" ADD CONSTRAINT "CARTITEM" FOREIGN KEY ("CartID")
	  REFERENCES "C##LUDAN"."Items" ("ItemID") ENABLE;
