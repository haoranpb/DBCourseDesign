--------------------------------------------------------
--  �ļ��Ѵ��� - ���ڶ�-����-24-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table Items
--------------------------------------------------------

  CREATE TABLE "C##LUDAN"."Items" 
   (	"ItemID" VARCHAR2(20 BYTE), 
	"ShopID" VARCHAR2(20 BYTE), 
	"ItemPrice" NUMBER(38,0), 
	"ItemName" VARCHAR2(100 BYTE), 
	"ItemInfo" VARCHAR2(200 BYTE), 
	"ItemPic" VARCHAR2(100 BYTE), 
	"ItemSales" NUMBER(38,0), 
	"ItemRemain" NUMBER(38,0)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
REM INSERTING into C##LUDAN."Items"
SET DEFINE OFF;
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12121','100001',299,'LILIFAN��������','LILIFAN���������ʦƷ��������Լʱ����Ȧ�������ʱ�ʯ��������','12121',241,21);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12122','100001',228,'LILIFAN�ٴ���������','LILIFAN���������ʦƷ�Ƶ�׹��Լʱ�и����������ʰٴ���������','12122',12,314);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12123','100001',620,'LILIFAN������������','LILIFAN���������ʦƷ�Ƶ�׹˫ɫ������Ȧ��â��Լ������������','12123',21,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12131','100001',480,'LILIFAN���鳤����','LILIFAN���������ʦƷ������ins�����׹�����α�ʯ�����鳤����','12131',21,41);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12132','100001',560,'LILIFAN��������','LILIFAN���������ʦƷ�Ƶ�׹���ʸ���ins��������Ů��ɫ��������','12132',92,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12133','100001',1830,'LILIFAN���Ź�â����','LILIFAN���������ʦƷ����������chocker��ȦŮ��ɫ���Ź�â����','12133',151,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13121','100001',445,' LILIFAN���½�ָ',' LILIFAN���������ʦƷ�ƽ�ָһ�ֱ�ʯָ����������������½�ָ','13121',91,709);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13122','100001',1250,'LILIFA˫����ָ','LILIFAN���������ʦƷ�ƽ�ָins����ָ��ʩ����������ɫ˫����ָ','13122',82,38);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13123','100001',480,'LILIFAN��������ָ','LILIFAN���������ʦƷ�ƽ�ָ����ӱͬ���ָ���۷�������ָ','13123',78,112);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13131','100001',520,'LILIFAN���ڽ�ָ','LILIFAN���������ʦƷ�ƽ�ָ���������ָ��ins����ͬ��ڽ�ָ','13131',91,98);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13132','100001',445,'LILIFAN˫����Ƕ��ָ','LILIFAN���������ʦƷ�ƽ�ָ��������Բ����תָ��˫����Ƕ��ָ','13132',213,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13133','100001',415,'LILIFAN����Բ����ָ','LILIFAN���������ʦƷ�ƽ�ָ����Բ����תָ��˫����Ƕ���ڽ�ָ','13133',212,222);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13141','100001',376,'LILIFAN��˿��·��ָ','LILIFAN���������ʦƷ�ƽ�ָ���Կ���ָ��Ů�������˿��·��ָ','13141',91,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13142','100001',390,'LILIFAN���������ʦƷ�Ƶ�ɫ��â��ָ����ͬ�������ٴ�ָ����Ʒ','LILIFAN���������ʦƷ�Ƶ�ɫ��â��ָ����ͬ�������ٴ�ָ����Ʒ','13142',97,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13143','100001',360,'LILIFAN���ǺŽ�ָ','LILIFAN���������ʦƷ�ƽ�ָins��������ָ�����Ǻſ��������ָ','13143',90,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('14121','100001',1650,'LILIFAN���䷩������','LILIFAN���������ʦƷ������ԭ��������Ů�ֻ���ɫ���䷩������','14121',87,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('14122','100001',770,'LILIFAN�¹⾵������','LILIFAN���������ʦƷ���ֻ�ԭ�����ڿɵ���Լ�ٴ��¹⾵������','14122',22,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('14123','100001',1269,'LILIFAN�����ֻ�����','LILIFAN���������ʦƷ��������˿���鿪���ֻ�������������Ů��','14123',765,345);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21121','100002',99,'CHEN YIYUAN ���߶���','[CHEN YIYUAN]����Ԫ Secret Garden ���� ������ ����','21121',2,998);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21122','100002',199,'CHEN YIYUANȹ�߶���','[CHEN YIYUAN] ���ʦ ����Ԫ ȹ��ϵ��-���� 925�� ����','21122',312,523);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21123','100002',228,'CHEN YIYUAN���Ž����','[CHEN YIYUAN]����Ԫɫ��ϵ�� ���Զ��� ���Ŷ�18k�����','21123',94,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21131','100002',199,'CHEN YIYUANȹ�߶���','[CHEN YIYUAN] ����Ԫ ȹ��ϵ��-���� 925�� ��ɫ ����','21131',88,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21132','100002',328,'CHEN YIYUAN˫�������','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�й�צC˫�������','21132',74,516);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21133','100002',528,'CHEN YIYUAN�յ����������','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ��ϵ�� ���οյ����������','21133',34,92);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21141','100002',499,'CHEN YIYUAN����������','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�д���������','21141',12,96);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11121','100001',1126,'LILIFAN����Գ��¹����','LILIFAN���������ʦƷ�ƶ�������Գ��¹��������ͬ�����ʶ�׹','11121',457,543);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11122','100001',599,'LILIFAN���ʼ�Լ��׹','LILIFAN���������ʦƷ�ƶ������ʼ�Լ��׹����ʯ����ƴ�ӳ�����','11122',234,312);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11123','100001',588,'LILIFAN���ε�ˮ�������','LILIFAN���������ʦƷ�ƶ���ԭ���������ʶ�׹���ε�ˮ�������','11123',423,432);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11131','100001',369,'LILIFAN���������������','LILIFAN���������ʦƷ�ƶ���ʱ�м�Լ��׹ԭ�����������������','11131',234,434);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11132','100001',560,'LILIFAN��ɫ���ʶ���','LILIFAN���������ʦƷ�ƶ�������ͬ������Բ����׹��ɫ���ʶ���','11132',542,324);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11133','100001',395,'LILIFAN����ҡҷ����','LILIFAN���������ʦƷ�ƶ���ԭ�����԰ٴ��׹��������ҡҷ����','11133',241,542);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11141','100001',528,'LILIFAN��Լ����','LILIFAN���������ʦƷ�ƶ��γ������α�ʯ��׹�������ʼ�Լ����','11141',342,841);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11142','100001',299,'LILIFAN�������������','LILIFAN���������ʦƷ�ƶ���insС��ԲȦ���Ŷ�׹�������������','11142',124,523);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11143','100001',490,'LILIFAN�۵������׹','LILIFAN���������ʦƷ�ƶ����Ż���ͬ�����ins��ǩ�۵������׹','11143',214,534);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11151','100001',265,'LILIFAN�������������','LILIFAN���������ʦƷ�ƶ�������������Ůins��׹�������������','11151',124,453);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11152','100001',680,'LILIFAN��Լ�ٴ����','LILIFAN���������ʦƷ�ƶ�׹ʩ����������ɫ��׹ins��Լ�ٴ����','11152',124,345);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11153','100001',820,'LILIFAN�¹�˫ɫ���Ŷ���','LILIFAN���������ʦƷ�ƶ�׹����ͬ�����ʼ�Լ�¹�˫ɫ���Ŷ���','11153',543,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11161','100001',199,'LILIFAN�ٴ����','LILIFAN���������ʦƷ�ƶ�������Բ����׹��ת�����԰ٴ����','11161',241,626);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11162','100001',699,'LILIFAN�������','LILIFAN���������ʦƷ�ƶ�׹��˿��߱������ʱ�����ʰٴ����','11162',214,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11163','100001',199,'LILIFAN��ת�������','LILIFAN���������ʦƷ�ƶ������Լ�Լ��׹����Բ����ת�������','11163',182,294);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11171','100001',779,'LILIFAN����ζ�׹','LILIFAN���������ʦƷ�ƶ������鸴�ż������Ů��˿����ζ�׹','11171',231,432);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11172','100001',488,'LILIFAN���Բ����׹','LILIFAN���������ʦƷ�ƶ�׹�����������ʶ�����˿���Բ����׹','11172',213,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11173','100001',769,'LILIFANO�ζ�׹','LILIFAN���������ʦƷ�ƶ���ԭ���������ʶ�����˿������O�ζ�׹','11173',293,826);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11181','100001',760,'LILIFANʱ�����ٶ���','LILIFAN���������ʦƷ�ƶ���ԭ���ٴ����ʶ�׹����ʱ�����ٶ���','11181',381,975);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11182','100001',396,'LILIFAN���ն���','LILIFAN���������ʦƷ�ƶ������ʸ��Զ�׹����ͬ����˿���ն���','11182',491,929);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11183','100001',380,'LILIFAN���Ŷ���','LILIFAN���������ʦƷ�ƶ���ԭ�������������׹ins�̷����Ŷ���','11183',291,985);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11191','100001',245,'LILIFANԲ����ת����','LILIFAN���������ʦƷ�ƶ�������insõ����������Բ����ת����','11191',898,288);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11192','100001',309,'LILIFAN���ε����׹','LILIFAN���������ʦƷ�ƶ������Լ�Լ��������������ε����׹','11192',317,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11193','100001',760,'LILIFAN���Գƶ����������Ʒ','LILIFAN���������ʦƷ�ƶ�׹˫ɫ���Ź�â���Գƶ����������Ʒ','11193',943,383);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21142','100002',199,'CHEN YIYUAN��ɫ�������','[CHEN YIYUAN�ٷ��Ա�] ����Ԫ ʽ��ϵ�� ��� ��ɫ���鶨�ƶ���','21142',51,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21143','100002',499,'CHEN YIYUAN���ܶ���','[CHEN YIYUAN] ȹ��ϵ��-���ܶ���925�� ���� ���Զ���','21143',13,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21151','100002',628,'CHEN YIYUAN�ɲ�ж ����','[CHEN YIYUAN] ����Ԫ Secret Garden���� �ɲ�ж ����','21151',99,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21152','100002',228,'CHEN YIYUAN�������','[CHEN YIYUAN�ٷ��Ա�] Secret Gardenϵ�ж����������','21152',190,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21153','100002',299,'CHEN YIYUAN֦����','[CHEN YIYUAN�ٷ��Ա�] ����Ԫ ʽ��ϵ�� ֦ ���� ���Զ���','21153',76,19);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21161','100002',228,'CHEN YIYUANʥ��ɫ��','[CHEN YIYUAN�ٷ��Ա�] ʥ���ر�� ɫ��ϵ�� ����Ԫ-- ��Ƭɫ','21161',61,190);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21162','100002',559,'CHEN YIYUAN�䷩�� ����','[CHEN YIYUAN�ٷ��Ա�] Disco ball���� ������ �䷩�� ����','21162',28,132);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21163','100002',499,'CHEN YIYUAN��������ͷ����','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�е�������������ͷ����','21163',99,233);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21171','100002',399,'CHEN YIYUANè���ɲ�ж����','[CHEN YIYUAN�ٷ��Ա�]���ʦ����Ԫ�ٹ�ҹ��ϵ�� è���ɲ�ж����','21171',28,199);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21172','100002',890,'CHEN YIYUAN Coherence����/����/����','[CHEN YIYUAN�ٷ��Ա�] ����ԪCoherence����/����/���룬��/Ů��','21172',124,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21173','100002',228,'CHEN YIYUANʥ��ɫ���ɫ','[CHEN YIYUAN] ʥ���ر�� ɫ��ϵ�� ����Ԫ-- ��ɫ','21173',20,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21181','100002',699,'CHEN YIYUAN ʩ�������','[CHEN YIYUAN�ٷ��Ա�] ʽ��ϵ�� ʩ����ˮ�� ���� ���ö���','21181',92,141);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21182','100002',599,'CHEN YIYUAN ����������','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ��ϵ�� �������������� 4.5g','21182',124,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21183','100002',699,'CHEN YIYUAN���� ����','[CHEN YIYUAN]Secret Garden ����Ԫ ���� �������� ����','21183',21,414);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21191','100002',799,'CHEN YIYUAN��ת���������','[CHEN YIYUAN] ����ԪDisco ball ��ת������ ���� ����','21191',90,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21192','100002',1199,'CHEN YIYUAN9���������','[CHEN YIYUAN�ٷ��Ա�] ����Ԫ Disco ballϵ�� 9������ ����','21192',329,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21193','100002',399,'CHEN YIYUAN�䷨�ɶ���','[CHEN YIYUAN] ����Ԫ Disco ball ���� �䷨�� ����','21193',123,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22121','100002',379,'CHEN YIYUAN��׹������','[CHEN YIYUAN] ȹ��ϵ�� ����Ԫ ��׹������ ��ֽ �ٴ�','22121',93,523);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22122','100002',499,'CHEN YIYUAN �ٹ�ҹ�д�����','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�д�������������','22122',213,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22123','100002',379,'CHEN YIYUANȹ�ߵ�׹������','[CHEN YIYUAN] ȹ��ϵ��-��׹������ ��װ�� ��ֽ �ٴ�','22123',98,987);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22131','100002',699,'CHEN YIYUAN��צ���������Ȧ','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�й�צ���������Ȧ','22131',323,908);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22132','100002',299,'CHEN YIYUAN �ٹ�ҹ�й�צC����','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�й�צC��������','22132',83,293);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22133','100002',799,'CHEN YIYUAN������Ȼ���� ����','[CHEN YIYUAN�ٷ��Ա�]Secret Garden ���� ������Ȼ���� ����','22133',123,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22141','100002',468,'CHEN YIYUAN��������','CHEN YIYUAN  ���ʦ����Ԫ ɫ��ϵ�е�������','22141',29,525);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22142','100002',3899,'CHENYIYUAN��֮��Ӱ����׹���߿�','CHENYIYUAN ��14K��ϵ�У�SHADOW��֮��Ӱ����׹���߿�','22142',30,222);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22143','100002',3788,'CHENYIYUAN���������װ������','CHENYIYUAN ��14K��ϵ�У�SHADOW��֮��Ӱ���������װ������','22143',343,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22151','100002',10500,'CHENYIYUAN��֮��Ӱ��������','CHENYIYUAN ��14K��ϵ�У�SHADOW��֮��Ӱ�������� 8.3g��','22151',20,90);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22152','100002',1242,'CHEN YIYUAN�Ŀ���Ȼ���� ����','[CHEN YIYUAN]����Ԫ Secret Garden�Ŀ���Ȼ���� ����','22152',290,91);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22153','100002',959,'CHEN YIYUAN��ˮ�� ���','[CHEN YIYUAN] Coherence���� ���ʦ����Ԫ ��ˮ�� ���','22153',291,312);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22161','100002',1479,'CHEN YIYUAN  Coherence����','[CHEN YIYUAN�ٷ��Ա�] Coherenceϵ�� - ����Ԫ ����','22161',212,211);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22162','100002',580,'CHEN YIYUAN��Ƥ�ĺ�������/��','[CHEN YIYUANС���- ��Ƥ�ĺ��ӣ��������� �� ����/��','22162',90,3872);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22163','100002',638,'CHEN YIYUAN����������������','[CHEN YIYUAN�ٷ��Ա�] ʽ���������������� ��18K�� �ձ�����','22163',77,291);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22171','100002',379,'CHEN YIYUAN���� �ڽ�','[CHEN YIYUAN�ٷ��Ա�] ȹ��ϵ��-���� 925�� �ڽ�','22171',64,866);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22172','100002',580,'С��鷨�������� ����','[CHEN YIYUAN]С��� -����Ԫ ���������� ���� 3ɫ','22172',91,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22173','100002',786,'CHEN YIYUAN ��Ȼ��������','[CHEN YIYUAN]���ʦ����Ԫ ��Ȼ��������','22173',482,318);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22181','100002',330,'CHEN YIYUANС����� ����/�ڼ�','[CHEN YIYUAN�ٷ��Ա�] ���ʦ����ԪС����� ����/�ڼ�','22181',291,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22182','100002',899,'CHEN YIYUAN  �ٹ�ҹ�е�������������ͷ����','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�е�������������ͷ����','22182',90,76);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22183','100002',299,'CHEN YIYUAN ������������','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ��ϵ�� ������������','22183',33,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22191','100002',1290,'CHEN YIYUAN ���� ˮ�� ����','[CHEN YIYUAN] ����ԪDisco ball ���� ˮ�� ����','22191',86,356);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22192','100002',368,'CHEN YIYUAN ���� ��Ȧ','[CHEN YIYUAN] ����ԪDisco ball ���� ��Ȧ','22192',22,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22193','100002',580,'CHENYIYUAN ���������ʸ�','[CHENYIYUAN] С���ϵ�� -��������������������ʸ�','22193',85,24);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23121','100002',199,' CHEN YIYUAN ��ָ�ؽ�С��ָ','[CHEN YIYUAN]ʽ��ϵ�н�ɫ����ǰָ�ؽ�/��ָ�ؽ�С��ָ','23121',25,14);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23122','100002',530,'CHEN YIYUAN ��ζϵ��-��','[CHEN YIYUAN] ��ζϵ��-��','23122',75,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23123','100002',288,'CHEN YIYUAN 3������ С��ָ','[CHEN YIYUAN]���ʦ ����Ԫʽ��ϵ��3������ С��ָ','23123',25,256);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23131','100002',680,'CHEN YIYUAN Զ�۽�ָ','[CHEN YIYUAN�ٷ��Ա�] Զ��ϵ��Far view��ָ','23131',91,591);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23132','100002',228,'CHEN YIYUAN ��צ�����ָ1','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�й�צ�����ָ','23132',489,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23133','100002',199,'CHEN YIYUAN Disco ball�������ָ','[CHEN YIYUAN] ����ԪDisco ball �������ָ','23133',82,103);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23141','100002',199,'CHEN YIYUANȹ�߽�ָ2','[CHEN YIYUAN] ȹ�� ��ָ-����Ԫ 925������','23141',82,421);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23142','100002',639,'CHEN YIYUAN �ο������ָ925��','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ�д��ο������ָ925��','23142',315,613);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23143','100002',583,'CHEN YIYUAN���������ָ','[CHEN YIYUAN] ����Ԫ Secret Garden ���� �����ָ','23143',41,414);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23151','100002',583,'CHEN YIYUAN Color rings ��ָ','[CHEN YIYUAN�ٷ��Ա�] ɫ��ϵ�� ����Ԫ Color rings ��ָ','23151',51,624);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23152','100002',199,'CHEN YIYUAN x INKORY ���½�ָ�׽俪�ڽ�','CHEN YIYUAN x INKORY | ����ϵ�� ���½�ָ�׽俪�ڽ�','23152',61,623);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23153','100002',1020,'CHEN YIYUAN ���Ű�ˮ�� ��ָ','[CHEN YIYUAN�ٷ��Ա�]ʽ�ճ���Ԫ �ձ������������Ű�ˮ�� ��ָ','23153',51,241);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23161','100002',680,'CHEN YIYUAN Far view/Զ�� ��ָ','[CHEN YIYUAN] Far view/Զ�� ��ָ','23161',515,352);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23162','100002',199,'CHEN YIYUAN Ư��ȹ��ϵ��','[CHEN YIYUAN] ��Ư��ȹ��ϵ��-��ָ925�� ָ���ɵ���','23162',941,153);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23163','100002',4319,'CHENYIYUAN ��֮��Ӱ��Ƕ�챦ʯ��ָ','CHENYIYUAN ��14K��ϵ�У�SHADOW��֮��Ӱ��Ƕ�챦ʯ��ָ0.395g��','23163',91,2451);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23171','100002',2488,'CHENYIYUAN��֮��Ӱ��Ȧ��ָ','CHENYIYUAN ��14K��ϵ�У�SHADOW��֮��Ӱ��Ȧ��ָ','23171',91,525);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23172','100002',399,'CHEN YIYUAN ���� �䷩�� ��ָ','[CHEN YIYUAN] ����Ԫ Disco ballϵ�� ���� �䷩�� ��ָ','23172',91,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23173','100002',568,'CHEN YIYUAN������ ��ָ','[CHEN YIYUAN] ����Ԫ Disco ball ������ ��ָ','23173',52,324);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23181','100002',799,' CHEN YIYUAN ������ͷ ����','[CHEN YIYUAN] ����Ԫ Disco balϵ�� ������ͷ ����','23181',41,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23182','100002',680,' CHEN YIYUAN Far view��ָ2','[CHEN YIYUAN] Զ��ϵ�� Far view��ָ','23182',99,914);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23183','100002',530,'CHEN YIYUAN big rings/�Ƹ� ��ָ-2014020','[CHEN YIYUAN] 2015�¿�big rings/�Ƹ� ��ָ-2014020','23183',18,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23191','100002',530,'CHEN YIYUAN big rings ��ָ','[CHEN YIYUAN] ���ָϵ�����ʦ����Ԫbig rings ��ָ','23191',82,471);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23192','100002',330,'CHEN YIYUAN С����ָ','[CHEN YIYUAN] С���ϵ�� ����Ԫ С����ָ���Զ���','23192',84,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23193','100002',199,'CHEN YIYUAN ȹ�߽�ָ2','[CHEN YIYUAN] ȹ�� ��ָ-925����ƺڽ� ָȦ���������','23193',84,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24121','100002',689,'CHEN YIYUAN ��ֽ ����','[CHEN YIYUAN] ȹ��ϵ��- ��ֽ ���� �ٴ� 3ɫ��','24121',75,135);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24122','100002',689,'CHEN YIYUAN ��ֽ ��ɫ','[CHEN YIYUAN] ȹ��ϵ��- ��ֽ ��ɫ �ٴ� 3ɫ��','24122',81,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24123','100002',638,'CHEN YIYUAN �뻡 �ɵ�������','[CHEN YIYUAN]ʽ��ϵ�� �뻡 �ɵ�������','24123',91,215);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24131','100002',828,'CHEN YIYUAN  ˫������ ����','[CHEN YIYUAN�ٷ��Ա�]ʽ��ϵ�� ˫������ ����','24131',91,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24132','100002',1499,'CHEN YIYUAN���������ֻ�','CHEN YIYUAN ���ʦ����Ԫ �ٹ�ҹ��ϵ�� ���������ֻ�����','24132',64,918);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24133','100002',689,'CHEN YIYUAN���� ��ɫ','[CHEN YIYUAN] ȹ��ϵ��- ���� 925���ƺڽ� ��ɫ 3ɫ��','24133',193,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31121','100003',1000,'ZHAO ������������','ZHAO Jewelry 14k������ �������� ���� ��Լ','31121',98,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31122','100003',418,'ZHAO ���ֳ�����','ZHAO Jewerly �����ĳ���ϵ�� �ɵ��ڳ�����','31122',65,212);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31123','100003',700,'ZHAO �������������','ZHAO Jewelry 14k������ �������������','31123',467,513);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31131','100003',720,'ZHAO ���˱�����','ZHAO Jewelry ���˱����� 14K�� ����','31131',686,134);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31132','100003',680,'ZHAO �����������','ZHAO Jewelry 14K�� ���� �����������','31132',51,841);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31133','100003',300,'ZHAO ���׿ض���','ZHAO �� ����������� 925���ƽ� ���׿ض��� ���� Ȥζ','31133',81,241);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31141','100003',820,'ZHAO ��ֽ����','ZHAO Jewelry 925���ƽ� ��ֽ���� ʱ�м�Լ','31141',73,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31142','100003',380,'ZHAO Ǧ��м����','ZHAO Jewelry ����Ů��ͼ�� ��ޱͬ�� Ǧ��м����','31142',99,111);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31143','100003',1280,'ZHAO ��Ͱ�����','ZHAO Jewelry ��ʫʫͬ��14K�� ���� ��Ͱ�����','31143',9,135);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31151','100003',2500,'ZHAO ���ղ��Գƶ�׹','ZHAO Jewelry ���� ���ղ��Գƶ�׹ 14k������','31151',1,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31152','100003',1180,'ZHAO Jewelry  �ճ�����','ZHAO Jewelry 14k������ �ճ�����','31152',513,241);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31153','100003',980,'ZHAO�������','ZHAO Jewelry ����Ů��ͼ����ޱͬ�� �������','31153',912,332);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31161','100003',1180,'ZHAO ���������','ZHAO Jewelry 14K������ ��������� 14k������','31161',92,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31162','100003',2280,'ZHAO ����������װ','ZHAO Jewelry 14K�� �����ɿ��� ����������װ','31162',0,135);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31163','100003',1580,'ZHAO ��β�Ƴ�����','ZHAO Jewelry 14K������ ��β�Ƴ�����','31163',92,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32121','100003',1500,'ZHAO ������','ZHAO Jewelry 14k������ ����֦�ϵĻ��� ������','32121',92,153);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32122','100003',2000,'ZHAO ˫��������','ZHAO Jewelry ���� ˫�������� 14k������ ����','32122',142,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32123','100003',698,'ZHAO ���ֳ�����','ZHAO Jewelry ���ֳ����� choker ���','32123',35,315);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32131','100003',1280,'ZHAO ����ֽ������','ZHAO Jewelry ����ֽ������ 14K��','32131',2,4124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32132','100003',1280,'ZHAO ���˱�������','ZHAO Jewelry ���˱������� 14K�� ����','32132',231,21);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32133','100003',1800,'ZHAO Ǧ��м ������','ZHAO Jewelry 14k�ƽ�׽�ƴɫ Ǧ��м ������','32133',21,152);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32141','100003',1200,'ZHAO ���������� ��Լ','ZHAO Jewelry 14K�� ���� ���������� ��Լ','32141',31,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32142','100003',2280,'ZHAO ����������װ','ZHAO Jewelry 14K�� �����ɿ��� ����������װ','32142',23,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32143','100003',2480,'ZHAO ��β�� ������','ZHAO Jewelry  14k������ ��β�� ������','32143',23,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33121','100003',480,'ZHAO ��ֽ��ָ','ZHAO Jewelry 925���ƽ� ��ֽ��ָ ��Լ','33121',65,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33122','100003',380,'ZHAO ����ֲ���ָ','ZHAO Jewelry ��ʫʫͬ�� ����ֲ���ָ','33122',231,24);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33123','100003',380,'ZHAO ��ĸ��ָ','ZHAO Jewelry ��ʫʫͬ�� ��ĸ��ָ 925���ƽ�','33123',124,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33131','100003',1400,'ZHAO ����ϵ������','ZHAO Jewelry ����ϵ���������� 14K������','33131',52,145);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33132','100003',780,'ZHAO �����տڽ�ָ','ZHAO Jewelry 14k������ �����տڽ�ָ ��Լ','33132',53,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33133','100003',980,'ZHAO1 �ճ������ָ ����','ZHAO Jewelry 14k������ �ճ������ָ ����','33133',52,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33141','100003',1280,'ZHAO ��β�ƽ�ָ','ZHAO Jewelry 14k������ ��β�ƽ�ָ ��Լ','33141',24,1234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33142','100003',900,'ZHAO ���ڽ�ָ','ZHAO Jewelry 14k������ ���ڽ�ָ ��Լ','33142',55,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33143','100003',300,'ZHAO �����ĳ���ϵ�� ��ָ ����','ZHAO Jewelry �����ιٷ����� �����ĳ���ϵ�� ��ָ ����','33143',22,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41121','100004',429,'���ξ���Ҷ ��������','���� by boe ��Լʱ��14kע�� ���ξ���Ҷ �������� �ֻ�','41121',12,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41122','100004',499,'���ζ���','Ӣ��Lucas Jack �ƽ���ź�����ɫ���ζ���������׹���� ����','41122',21,41);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41123','100004',499,'��ɫ�����Ͷ���','HeyJewel Rooyee ��˿����ϵ�н�ɫ�����Ͷ���ins�������� �ֻ�','41123',32,35);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41131','100004',488,'���Ƕ��� ','�й� nonmoi ʱ���� ��������ϵ�� ��ɫ ���Ƕ��� �ֻ�','41131',32,63);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41132','100004',549,'��ɫ���δ��� ���� ','Ӣ��Lucas Jack �׶�������ɫ ������ɫ ��ɫ���δ��� ���� �ֻ�','41132',23,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41133','100004',599,'��â������Ǯ�ҽ�����ɫ��Բ�δ�����','HeyJewel Rooyee ��â������Ǯ�ҽ�����ɫ��Բ�δ����� �ֻ�','41133',43,26);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41141','100004',289,'���ն���Ůʱ�ж���','HeyJewel Le Loup �������۷�ϵ�в��ԳƳ��ն���Ůʱ�ж��� �ֻ�','41141',42,345);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41142','100004',499,'�й����׹�������','�ʹ��Ļ��鱦 �󼪸�»925����18K�������й����׹������� �ֻ�','41142',52,53);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41143','100004',399,'��Լ���� ����','���� by boe һ������ ��Լ���� ���� ���� �ֻ�','41143',634,98);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41151','100004',520,'�οյ�׹����ϸ��','�������ʦ��Vlum����ɫ���� �����οյ�׹����ϸ�� ','41151',76,76);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41152','100004',690,'������������ ����','̨�� Spoiled Brat 14kע�� ������������ ���� �ֻ�','41152',85,25);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41153','100004',499,'���ԳƷ۾����� ����','̨�� Spoiled Brat 14kע�� ���ԳƷ۾����� ���� �ֻ�','41153',23,35);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41161','100004',520,'����ʯ������Ʒ��','HeyJewel Spoiled Brat ɭϵ������������ʯ������Ʒ���� �ֻ�','41161',56,24);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41162','100004',399,'������ʯ��׹','HeyJewel Gemstyle �������Ů������ʯ��׹14kע����γ��� �ֻ�','41162',32,34);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41163','100004',129,'���ƽ���ֽ�����','��ĿYVMIN ��ʳ��ϵ��С����Ů�������925���ƽ���ֽ�� �ֻ�','41163',5,46);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41171','100004',790,'̴ľ����Ů��ֻ','�й� ��ĿYVMIN ��18k�𳤿��ɫ����̴ľ����Ů��ֻ �ֻ�','41171',3,146);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41172','100004',209,'���������϶���','�й� yeah jewelry С�˹�����߽ ���������϶��� ������ɫ�ֻ�','41172',5,18);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41173','100004',599,'����������¼�Լ��׹','HeyJewel Rooyee ��˿����ϵ�н�ɫ����������¼�Լ��׹ �ֻ�','41173',23,30);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41181','100004',320,'ӣ������','�й����ʦ�������������� �ֹ����ܴ� ӣ���� ӣ������ �����ֻ�','41181',34,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41182','100004',529,'��Ż�������','�й� yeah jewelry 925����18k�� ��Ż������� �ֻ�','41182',64,33);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41183','100004',499,'��ɫԲ�δ�����','HeyJewel Rooyee ��â������Ǯ�ҽ�����ɫԲ�δ�����ʱ�� �ֻ�','41183',213,33);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42121','100004',299,'�ջ�������','HeyJewel Le Loup �������۷�ϵ�д���ջ�������Ů��Լ��Ʒ �ֻ�','42121',65,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42122','100004',299,'���������������Ȧ','HeyJewel Ӳ�� ���������������Ȧ��������Ů��choker���� �ֻ�','42122',46,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42123','100004',499,'�׶�������ɫ �̿�����','Ӣ��Lucas Jack �ƽ������ �׶�������ɫ �̿����� ����','42123',25,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42131','100004',299,'��а �������������� ','ϣ��ARTEON ��ħ֮�۱�а �������������� �ֻ�','42131',57,54);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42132','100004',269,'��ɫ˿�� ����','ϣ��ArtWearDimitriadis ����ʱ����ɫ˿�� ����ɵ���choker�ֻ�','42132',89,89);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42133','100004',569,'������ɫ �г�������','Ӣ��Lucas Jack �ƽ���͸��� ������ɫ �г������� �ֻ�','42133',8,67);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42141','100004',759,'Ĭ��������� ǩ�� ����','̨�����ʦ��Spoiled Brat�� Ĭ��������� ǩ�� ����|���� ����','42141',6,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42142','100004',499,'����Ǯ�ҽ�����ɫԲ�δ������','HeyJewel Rooyee ��â������Ǯ�ҽ�����ɫԲ�δ������ �ֻ�','42142',5,54);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42143','100004',560,'���µ���ʯ����ʯ����','̨�����ʦ ��Spoiled Brat�����ʯ���µ���ʯ����ʯ���� ����','42143',4,54);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42151','100004',399,'Բ����ɫ����С������','HeyJewel Rooyee ��â������Ǯ�ҽ�ɫԲ����ɫ����С������ �ֻ�','42151',3,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42152','100004',229,'С�˹�����߽����','yeah jewelryС�˹�����߽ <����������>925������Ů�ƽ������ֻ�','42152',45,68);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42153','100004',360,'С�ʹ������鶯������','ϣ��Kiss the FrogС�ʹ������鶯������Ů �ֻ�','42153',43,96);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42161','100004',329,'���֦˿��choker����','���ô� Le Loup �ٱ��� ���֦˿��choker���� ʱ��Ů��� �ֻ�','42161',565,68);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42162','100004',480,'С�ʹ��������ƽ�ɰ�������','ϣ��Kiss the Frog �����ο�С�ʹ��������ƽ�ɰ������� �ֻ�','42162',23,68);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42163','100004',1680,'������˿��� ����','�ձ����ʦCheravir 10K�� ���� ������˿��� ���� �ֻ�','42163',5,56);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42171','100004',699,'��Ȼ��������������','����Stones in Style��Լ������Ȼ��������������Ů�ֻ�','42171',4,290);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42172','100004',289,'˿��choker��ȦŮ����','HeyJewel Le Loup �������۷�ϵ��˿��choker��ȦŮ���� �ֻ�','42172',23,48);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42173','100004',520,'�������ﲨ��è����','ϣ�����ʦKiss the Frog ����������� �������ﲨ��è �����ֻ�','42173',45,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42181','100004',599,'��ɫ����������','HeyJewel Rooyee ��â������Ǯ�ҽ�ɫԲ�β�ɫ���������� �ֻ�','42181',3,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42182','100004',698,'���� ���� ����','�й� angs����ʫ��925���Ʋ��� ���� ���� ����貿������� �ֻ�','42182',2,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42183','100004',1580,'�ҽ��� ���� ���� ����','���� Michael Michaud �ҽ��� ���� ���� ���� �ֻ�','42183',535,92);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43121','100004',469,'����ɫ�����򿪿ڽ�ָ','Ӣ��Lucas Jack �������亣����ɫ�����򿪿ڽ�ָŮ���˸��� �ֻ�','43121',34,93);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43122','100004',229,'ϸ��ֽ��ָ','��ĿYVMIN ���ư׽�ϸ��ֽ��ָŮ��Ƥ�ɰ���ʳ��Ի�ϵ�� �ֻ�','43122',32,97);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43123','100004',529,'�����費�ԳƷ��ο��ڽ�ָ','Ӣ��Lucas Jack ����� �����費�ԳƷ��ο��ڽ�ָ�ֻ�','43123',32,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43131','100004',269,'ʥ����ˮ�� �ɵ��ڽ�ָ','ϣ��ArtWearDimitriadis ����ʱ��ʥ����ˮ�� �ɵ��ڽ�ָ �ֻ�','43131',23,13);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43132','100004',469,'������ɫ ���ڽ�ָ','Ӣ��Lucas Jack �׶�������ɫ�亣����ɫ ���ڽ�ָ �ֻ�','43132',3,80);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43133','100004',429,'������ ���ʿ���ɫ ��ָ','Ӣ��Lucas Jack ����� ������ ���ʿ���ɫ ��ָ �ֻ�','43133',45,90);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43141','100004',499,'���й����׹��ָ��������','�ʹ��Ļ��鱦 �������925����18K���й����׹��ָ�������� �ֻ�','43141',53,86);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43142','100004',1260,' ����ջ�������ָ','Ӣ�����ʦ��Alex Monroe��925���ƽ� ����ջ�������ָ �ֻ�','43142',64,64);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43143','100004',599,'��ɫԲ�θ��Կ��ڽ�ָ ','HeyJewel SATELLITE Gisele ��ɫԲ�θ��Կ��ڽ�ָ �ֻ�','43143',54,86);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43151','100004',398,'С���ؽ�ָ','�й����ʦ��Ӳ�ǡ�925���ƽ� ����ϵ�� С���ؽ�ָ�ֻ�','43151',23,98);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43152','100004',499,'��� �ƽ�Ů���ڽ�ָ','���� SATELLITE Emmaϵ�� ɭϵ��ɫ������ �ƽ�Ů���ڽ�ָ�ֻ�','43152',82,7);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43153','100004',390,'��֮ɭ�� ��ָ','�й����ʦ��С�� ��������ϵ�� ��֮ɭ�� ��ָ �ֻ�','43153',38,99);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43161','100004',328,'���ӽ�ָ','�й����ʦ��AG+��925�� ���ӽ�ָ �ɵ����ֻ�','43161',42,78);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43162','100004',399,'��ɫ��â�ǽ�ָ','HeyJewel Rooyee ��˿����ϵ�н�ɫ��â�ǽ�ָ��Լԭ����� �ֻ�','43162',93,66);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43163','100004',299,'����ɫ���ſɵ��ڽ�ָ','ϣ�� ARTEON ��а֮�� ����ɫ�����۾� ���ƽ� �ɵ��ڽ�ָ ����','43163',467,664);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43171','100004',698,'Ҷ���鷩���ֹ���ָ','�й�AG+ ��Ҷ���鷩���ֹ���ָŮԭ��925���������Ŵ��� �ֻ�','43171',46,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43172','100004',6600,'Fischer �Խ���','����¹��Խ�Ʒ��Fischer �Խ��� ����','43172',29,3);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43173','100004',699,'�Խ�����ԭ����ƿ��ֳ��о�γ��','�й�Sweet Point�Խ�����ԭ����ƿ��ֳ��о�γ�����ռ����� ����','43173',50,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43181','100004',680,'��ĸ��ˮ�������18K��˫ָ��ָ','Ӣ��O.YANG ��ĸ��ˮ�������18K��˫ָ��ָ �ֻ�','43181',38,6);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43182','100004',480,'��ռͥ����� ���� ��ָ','�й����ʦ����Fusion�� ��ռͥ����� ���� ��ָ �ֻ�','43182',38,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43183','100004',1500,'õ��ɫ��𳻨�� ��ָ','Ӣ��Alex Monroe 30���������ļ�ϵ�� õ��ɫ��𳻨�� ��ָ�ֻ�','43183',4,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44121','100004',399,'�󼪸�»ϵ�� ��Ȼ���� ����','�ʹ��Ļ��鱦 �󼪸�»ϵ�� ��Ȼ���� ���� �ֻ�','44121',7,87);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44122','100004',299,'����ǻ���ɫ�����ֹ���֯','Ӣ��LeJu Ԣ������ǻ���ɫ�����ֹ���֯�ֻ�','44122',26,83);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44123','100004',759,'Ĭ��������� ǩ�� ����','̨�����ʦ��Spoiled Brat�� Ĭ��������� ǩ�� ����|���� ����','44123',357,83);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44131','100004',369,'ͭ�ƽ��� ���� ','HeyJewel Aurelie Joliff Zia ������Բ�� ͭ�ƽ��� ���� �ֻ�','44131',35,723);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44132','100004',1980,'ɽ��������','�������ʦ��Nicole Barr��ɽ���������°� ����','44132',53,52);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44133','100004',299,'�ʯ��ħ֮�� Ů�����ɫ ����','ϣ��ARTEON ���ƽ����ʯ��ħ֮�� Ů�����ɫ �ɵ������� �ֻ�','44133',40,62);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44141','100004',860,'��ɫ��ʯ ���� ����','̨�� Spoiled Brat 14Kע�� ���߲�ɫ��ʯ ���� ���� ��ɫ �ֻ�','44141',92,25);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44142','100004',599,'���ͼ���ĺ�����','Ӣ�� LeJu �ֹ���֯ Ԣ�Ⱞ�ͼ���ĺ����� �ֻ�','44142',37,53);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44143','100004',269,'���ƽ����ʯ��ħ֮�� Ů�����ɫ �ɵ������� ','ϣ��ARTEON ���ƽ����ʯ��ħ֮�� Ů�����ɫ �ɵ������� �ֻ�','44143',10,34);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44151','100004',529,'���������� �ֹ���֯����','Ӣ�� LeJu ���������� �ֹ���֯���� ����ʯ ������ �ɵ��� �ֻ�','44151',37,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44152','100004',659,'���ԳƷ��ο�������','Ӣ��Lucas Jack ������������� ���ԳƷ��ο������� �ֻ�','44152',36,28);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44153','100004',488,'�й����׹��ˮĸ������ ����','�ʹ��Ļ��鱦 ��Ȯ���� ���ƽ��й����׹��ˮĸ������ ���� �ֻ�','44153',43,34);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44161','100004',660,'����С��ʯLOGO�ư�������������','̨�� Spoiled Brat 14Kע�� ����С��ʯLOGO�ư�����������������','44161',32,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44162','100004',599,'�ֹ���֯ Ԣ�Ⱞ�ͼ���ĺ�����/����','Ӣ�� LeJu �ֹ���֯ Ԣ�Ⱞ�ͼ���ĺ�����/���� ���1 �ֻ�','44162',6,434);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44163','100004',529,'���ɫ����ʯ�¹�ʯ����','HeyJewel Gemstyle 14kע���ɫ����ʯ�¹�ʯ����Ů���ʼ�Լ �ֻ�','44163',32,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44171','100004',490,'�����������Ů��Լ���Կɵ�������','HeyJewel Spoiled Brat �����������Ů��Լ���Կɵ������� �ֻ�','44171',56,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44172','100004',468,'����ʯ ˫Ȧ����','�й� Larmo���� �۾� ���� ����ʯ ˫Ȧ���� �ֻ�','44172',34,432);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44173','100004',999,'��ɫ��â�ǿ�濪����������','HeyJewel Rooyee ��˿����ϵ�н�ɫ��â�ǿ�濪���������� �ֻ�','44173',56,654);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44181','100004',599,'�ֹ���֯ Ԣ����к��ǻ۵���ɫ����','Ӣ�� LeJu �ֹ���֯ Ԣ����к��ǻ۵���ɫ����/���� ���2 �ֻ�','44181',44,32);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44182','100004',599,'��ɫ��â��խ�濪������','HeyJewel Rooyee ��˿����ϵ�н�ɫ��â��խ�濪�������� �ֻ�','44182',67,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44183','100004',499,'���ƽ���﮻�ʯ�ɵ�������','HeyJewel Gemstyle ���ƽ���﮻�ʯ�ɵ�������������Ʒ �ֻ�','44183',420,32);
--------------------------------------------------------
--  DDL for Index Item_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "C##LUDAN"."Item_PK" ON "C##LUDAN"."Items" ("ItemID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table Items
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Items" MODIFY ("ItemID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Items" MODIFY ("ShopID" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Items" MODIFY ("ItemPrice" NOT NULL ENABLE);
  ALTER TABLE "C##LUDAN"."Items" ADD CONSTRAINT "Item_PK" PRIMARY KEY ("ItemID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table Items
--------------------------------------------------------

  ALTER TABLE "C##LUDAN"."Items" ADD CONSTRAINT "SHOPITEM" FOREIGN KEY ("ShopID")
	  REFERENCES "C##LUDAN"."Shops" ("ShopID") ENABLE;
