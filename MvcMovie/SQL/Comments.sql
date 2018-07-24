--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Comments
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Comments" 
   (	"ID" VARCHAR2(20 BYTE), 
	"ItemItemID" VARCHAR2(20 BYTE), 
	"CommentInfo" VARCHAR2(140 BYTE), 
	"Reply" VARCHAR2(140 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Comments"
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index COMMENT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."COMMENT_PK" ON "C##LUDAN"."Comments" ("ID", "ItemItemID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table Comments
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Comments" MODIFY ("ID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Comments" MODIFY ("ItemItemID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Comments" ADD CONSTRAINT "COMMENT_PK" PRIMARY KEY ("ID", "ItemItemID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table Comments
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Comments" ADD CONSTRAINT "OrderComment" FOREIGN KEY ("ID")
	  REFERENCES "C##LUDAN"."Orders" ("OrderID") ENABLE;
  ALTER TABLE "C##LUDAN"."Comments" ADD CONSTRAINT "ITEMCOMMENT" FOREIGN KEY ("ItemItemID")
	  REFERENCES "C##LUDAN"."Items" ("ItemID") ENABLE;
