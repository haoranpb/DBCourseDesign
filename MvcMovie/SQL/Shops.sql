--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Shops
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Shops" 
   (	"ShopID" VARCHAR2(20 BYTE), 
	"SalerID" VARCHAR2(20 BYTE), 
	"ShopName" VARCHAR2(20 BYTE), 
	"SalerCredit" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Shops"
SET DEFINE OFF;
Insert into C##LUDAN."Shops" ("ShopID","SalerID","ShopName","SalerCredit") values ('111','Lucas','111','111');
Insert into C##LUDAN."Shops" ("ShopID","SalerID","ShopName","SalerCredit") values ('100002','Ludan','CHENYIYUAN','2');
Insert into C##LUDAN."Shops" ("ShopID","SalerID","ShopName","SalerCredit") values ('100003','Tom','ZHAO','3');
Insert into C##LUDAN."Shops" ("ShopID","SalerID","ShopName","SalerCredit") values ('100004','Jack','HEYJEWEL','3');
Insert into C##LUDAN."Shops" ("ShopID","SalerID","ShopName","SalerCredit") values ('100001','Lucas','LILIFAN','1');
--------------------------------------------------------
--  DDL for Index Shop_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."Shop_PK" ON "C##LUDAN"."Shops" ("ShopID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table Shops
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Shops" MODIFY ("ShopID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Shops" ADD CONSTRAINT "Shop_PK" PRIMARY KEY ("ShopID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table Shops
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Shops" ADD CONSTRAINT "SALERSHOP" FOREIGN KEY ("SalerID")
	  REFERENCES "C##LUDAN"."Salers" ("SalerID") ENABLE;
