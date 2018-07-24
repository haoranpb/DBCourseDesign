--------------------------------------------------------
--  文件已创建 - 星期二-七月-24-2018   
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
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12121','100001',299,'LILIFAN锁骨项链','LILIFAN莉莉梵设计师品牌项链简约时尚项圈个性气质宝石锁骨项链','12121',241,21);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12122','100001',228,'LILIFAN百搭锁骨项链','LILIFAN莉莉梵设计师品牌吊坠简约时尚个性项链气质百搭锁骨项链','12122',12,314);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12123','100001',620,'LILIFAN气质锁骨项链','LILIFAN莉莉梵设计师品牌吊坠双色珐琅项圈光芒简约气质锁骨项链','12123',21,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12131','100001',480,'LILIFAN珍珠长项链','LILIFAN莉莉梵设计师品牌项链ins长款吊坠三角形宝石饰珍珠长项链','12131',21,41);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12132','100001',560,'LILIFAN珐琅项链','LILIFAN莉莉梵设计师品牌吊坠气质个性ins锁骨项链女月色珐琅项链','12132',92,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('12133','100001',1830,'LILIFAN珐琅光芒项链','LILIFAN莉莉梵设计师品牌项链经典chocker项圈女单色珐琅光芒项链','12133',151,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13121','100001',445,' LILIFAN情侣戒指',' LILIFAN莉莉梵设计师品牌戒指一字宝石指环长款个性气质情侣戒指','13121',91,709);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13122','100001',1250,'LILIFA双环戒指','LILIFAN莉莉梵设计师品牌戒指ins开口指环施华洛世奇月色双环戒指','13122',82,38);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13123','100001',480,'LILIFAN珐琅柔光戒指','LILIFAN莉莉梵设计师品牌戒指赵丽颖同款开口指环粉珐琅柔光戒指','13123',78,112);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13131','100001',520,'LILIFAN开口戒指','LILIFAN莉莉梵设计师品牌戒指蓝珐琅柔光指环ins明星同款开口戒指','13131',91,98);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13132','100001',445,'LILIFAN双面镶嵌戒指','LILIFAN莉莉梵设计师品牌戒指个性曲面圆环旋转指环双面镶嵌戒指','13132',213,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13133','100001',415,'LILIFAN曲面圆环戒指','LILIFAN莉莉梵设计师品牌戒指曲面圆环旋转指环双面镶嵌开口戒指','13133',212,222);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13141','100001',376,'LILIFAN蕾丝纹路戒指','LILIFAN莉莉梵设计师品牌戒指个性开口指环女五边形蕾丝纹路戒指','13141',91,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13142','100001',390,'LILIFAN莉莉梵设计师品牌单色光芒戒指明星同款甜美百搭指环饰品','LILIFAN莉莉梵设计师品牌单色光芒戒指明星同款甜美百搭指环饰品','13142',97,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('13143','100001',360,'LILIFAN升记号戒指','LILIFAN莉莉梵设计师品牌戒指ins个性气质指环升记号开口镶钻戒指','13143',90,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('14121','100001',1650,'LILIFAN渐变珐琅手镯','LILIFAN莉莉梵设计师品牌手镯原创开口少女手环月色渐变珐琅手镯','14121',87,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('14122','100001',770,'LILIFAN月光镜面手镯','LILIFAN莉莉梵设计师品牌手环原创开口可调简约百搭月光镜面手镯','14122',22,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('14123','100001',1269,'LILIFAN开口手环手链','LILIFAN莉莉梵设计师品牌手镯蕾丝贝珠开口手环气质手链礼物女友','14123',765,345);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21121','100002',99,'CHEN YIYUAN 射线耳钉','[CHEN YIYUAN]陈艺元 Secret Garden 射线 基础款 耳钉','21121',2,998);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21122','100002',199,'CHEN YIYUAN裙边耳钉','[CHEN YIYUAN] 设计师 陈艺元 裙边系列-耳钉 925银 定制','21122',312,523);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21123','100002',228,'CHEN YIYUAN珐琅金耳环','[CHEN YIYUAN]陈艺元色戒系列 个性定制 珐琅镀18k金耳环','21123',94,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21131','100002',199,'CHEN YIYUAN裙边耳钉','[CHEN YIYUAN] 陈艺元 裙边系列-耳钉 925银 金色 定制','21131',88,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21132','100002',328,'CHEN YIYUAN双珍珠耳钉','CHEN YIYUAN 设计师陈艺元 百鬼夜行鬼爪C双珍珠耳钉','21132',74,516);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21133','100002',528,'CHEN YIYUAN空吊链珍珠耳钉','CHEN YIYUAN 设计师陈艺元 百鬼夜行系列 大吉镂空吊链珍珠耳钉','21133',34,92);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21141','100002',499,'CHEN YIYUAN大吉铃铛耳钉','CHEN YIYUAN 设计师陈艺元 百鬼夜行大吉铃铛耳钉','21141',12,96);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11121','100001',1126,'LILIFAN珍珠对称月光耳环','LILIFAN莉莉梵设计师品牌耳钉珍珠对称月光耳环明星同款气质耳坠','11121',457,543);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11122','100001',599,'LILIFAN气质简约耳坠','LILIFAN莉莉梵设计师品牌耳饰气质简约耳坠马眼石音符拼接长耳环','11122',234,312);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11123','100001',588,'LILIFAN鱼形淡水珍珠耳环','LILIFAN莉莉梵设计师品牌耳环原创个性气质耳坠鱼形淡水珍珠耳环','11123',423,432);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11131','100001',369,'LILIFAN个性音符饰钻耳环','LILIFAN莉莉梵设计师品牌耳饰时尚简约耳坠原创个性音符饰钻耳环','11131',234,434);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11132','100001',560,'LILIFAN红色气质耳环','LILIFAN莉莉梵设计师品牌耳饰明星同款绳带圆环耳坠红色气质耳环','11132',542,324);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11133','100001',395,'LILIFAN拉链摇曳耳环','LILIFAN莉莉梵设计师品牌耳饰原创个性百搭耳坠气质拉链摇曳耳环','11133',241,542);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11141','100001',528,'LILIFAN简约耳环','LILIFAN莉莉梵设计师品牌耳饰长款柱形宝石耳坠个性气质简约耳环','11141',342,841);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11142','100001',299,'LILIFAN订书针饰钻耳环','LILIFAN莉莉梵设计师品牌耳饰ins小号圆圈复古耳坠订书针饰钻耳环','11142',124,523);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11143','100001',490,'LILIFAN折叠珍珠耳坠','LILIFAN莉莉梵设计师品牌耳饰张慧雯同款耳环ins书签折叠珍珠耳坠','11143',214,534);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11151','100001',265,'LILIFAN回形针珍珠耳钉','LILIFAN莉莉梵设计师品牌耳环个性气质少女ins耳坠回形针珍珠耳钉','11151',124,453);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11152','100001',680,'LILIFAN简约百搭耳环','LILIFAN莉莉梵设计师品牌耳坠施华洛世奇月色耳坠ins简约百搭耳环','11152',124,345);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11153','100001',820,'LILIFAN月光双色珐琅耳环','LILIFAN莉莉梵设计师品牌耳坠明星同款气质简约月光双色珐琅耳环','11153',543,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11161','100001',199,'LILIFAN百搭耳环','LILIFAN莉莉梵设计师品牌耳钉曲面圆环耳坠旋转横版个性百搭耳环','11161',241,626);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11162','100001',699,'LILIFAN贝珠耳环','LILIFAN莉莉梵设计师品牌耳坠蕾丝卷边贝珠耳环时尚气质百搭耳钉','11162',214,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11163','100001',199,'LILIFAN旋转竖版耳钉','LILIFAN莉莉梵设计师品牌耳钉个性简约耳坠曲面圆环旋转竖版耳钉','11163',182,294);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11171','100001',779,'LILIFAN五边形耳坠','LILIFAN莉莉梵设计师品牌耳环珍珠复古肌理耳环女蕾丝五边形耳坠','11171',231,432);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11172','100001',488,'LILIFAN卷边圆环耳坠','LILIFAN莉莉梵设计师品牌耳坠长款珍珠气质耳环蕾丝卷边圆环耳坠','11172',213,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11173','100001',769,'LILIFANO形耳坠','LILIFAN莉莉梵设计师品牌耳环原创个性气质耳饰蕾丝蝴蝶结O形耳坠','11173',293,826);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11181','100001',760,'LILIFAN时尚竖琴耳环','LILIFAN莉莉梵设计师品牌耳饰原创百搭气质耳坠个性时尚竖琴耳环','11181',381,975);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11182','100001',396,'LILIFAN流苏耳环','LILIFAN莉莉梵设计师品牌耳环气质个性耳坠明星同款蕾丝流苏耳环','11182',491,929);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11183','100001',380,'LILIFAN复古耳环','LILIFAN莉莉梵设计师品牌耳饰原创订书针饰钻耳坠ins短发复古耳环','11183',291,985);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11191','100001',245,'LILIFAN圆环旋转耳环','LILIFAN莉莉梵设计师品牌耳环气质ins玫瑰金耳钉曲面圆环旋转耳环','11191',898,288);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11192','100001',309,'LILIFAN弧形单珠耳坠','LILIFAN莉莉梵设计师品牌耳环个性简约流线珍珠耳环弧形单珠耳坠','11192',317,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('11193','100001',760,'LILIFAN不对称耳环珍珠耳饰品','LILIFAN莉莉梵设计师品牌耳坠双色珐琅光芒不对称耳环珍珠耳饰品','11193',943,383);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21142','100002',199,'CHEN YIYUAN金色珍珠耳钉','[CHEN YIYUAN官方淘宝] 陈艺元 式日系列 火柴 金色珍珠定制耳钉','21142',51,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21143','100002',499,'CHEN YIYUAN吊管耳环','[CHEN YIYUAN] 裙边系列-吊管耳环925银 两用 个性定制','21143',13,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21151','100002',628,'CHEN YIYUAN可拆卸 耳钉','[CHEN YIYUAN] 陈艺元 Secret Garden两用 可拆卸 耳钉','21151',99,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21152','100002',228,'CHEN YIYUAN珍珠耳钉','[CHEN YIYUAN官方淘宝] Secret Garden系列定制珍珠耳钉','21152',190,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21153','100002',299,'CHEN YIYUAN枝耳环','[CHEN YIYUAN官方淘宝] 陈艺元 式日系列 枝 耳环 个性定制','21153',76,19);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21161','100002',228,'CHEN YIYUAN圣诞色戒','[CHEN YIYUAN官方淘宝] 圣诞特别款 色戒系列 陈艺元-- 闪片色','21161',61,190);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21162','100002',559,'CHEN YIYUAN冷珐琅 耳钉','[CHEN YIYUAN官方淘宝] Disco ball定制 翻白眼 冷珐琅 耳钉','21162',28,132);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21163','100002',499,'CHEN YIYUAN链珍珠舌头耳钉','CHEN YIYUAN 设计师陈艺元 百鬼夜行灯笼吊链珍珠舌头耳钉','21163',99,233);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21171','100002',399,'CHEN YIYUAN猫脸可拆卸耳钉','[CHEN YIYUAN官方淘宝]设计师陈艺元百鬼夜行系列 猫脸可拆卸耳钉','21171',28,199);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21172','100002',890,'CHEN YIYUAN Coherence耳环/领针/胸针','[CHEN YIYUAN官方淘宝] 陈艺元Coherence耳环/领针/胸针，男/女款','21172',124,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21173','100002',228,'CHEN YIYUAN圣诞色戒粉色','[CHEN YIYUAN] 圣诞特别款 色戒系列 陈艺元-- 粉色','21173',20,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21181','100002',699,'CHEN YIYUAN 施华洛耳钉','[CHEN YIYUAN官方淘宝] 式日系列 施华洛水钻 流苏 两用耳钉','21181',92,141);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21182','100002',599,'CHEN YIYUAN 单铃铛耳钉','CHEN YIYUAN 设计师陈艺元 百鬼夜行系列 单铃铛耳钉纯银 4.5g','21182',124,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21183','100002',699,'CHEN YIYUAN花瓣 吊链','[CHEN YIYUAN]Secret Garden 陈艺元 花瓣 吊链珍珠 耳夹','21183',21,414);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21191','100002',799,'CHEN YIYUAN可转动大球耳环','[CHEN YIYUAN] 陈艺元Disco ball 可转动大球 长款 耳环','21191',90,231);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21192','100002',1199,'CHEN YIYUAN9颗珍珠耳钉','[CHEN YIYUAN官方淘宝] 陈艺元 Disco ball系列 9颗珍珠 耳钉','21192',329,123);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('21193','100002',399,'CHEN YIYUAN冷法郎耳钉','[CHEN YIYUAN] 陈艺元 Disco ball 星星 冷法郎 耳钉','21193',123,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22121','100002',379,'CHEN YIYUAN吊坠锁骨链','[CHEN YIYUAN] 裙边系列 陈艺元 吊坠锁骨链 折纸 百搭','22121',93,523);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22122','100002',499,'CHEN YIYUAN 百鬼夜行大吉项链','CHEN YIYUAN 设计师陈艺元 百鬼夜行大吉项链吊链珍珠','22122',213,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22123','100002',379,'CHEN YIYUAN裙边吊坠锁骨链','[CHEN YIYUAN] 裙边系列-吊坠锁骨链 链装饰 折纸 百搭','22123',98,987);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22131','100002',699,'CHEN YIYUAN鬼爪珍珠吊链项圈','CHEN YIYUAN 设计师陈艺元 百鬼夜行鬼爪珍珠吊链项圈','22131',323,908);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22132','100002',299,'CHEN YIYUAN 百鬼夜行鬼爪C项链','CHEN YIYUAN 设计师陈艺元 百鬼夜行鬼爪C珍珠项链','22132',83,293);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22133','100002',799,'CHEN YIYUAN包金天然珍珠 项链','[CHEN YIYUAN官方淘宝]Secret Garden 两款 包金天然珍珠 项链','22133',123,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22141','100002',468,'CHEN YIYUAN单格项链','CHEN YIYUAN  设计师陈艺元 色戒系列单格项链','22141',29,525);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22142','100002',3899,'CHENYIYUAN光之魅影项链坠曲线款','CHENYIYUAN 纯14K金系列－SHADOW光之魅影项链坠曲线款','22142',30,222);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22143','100002',3788,'CHENYIYUAN多边形珍珠装饰项链','CHENYIYUAN 纯14K金系列－SHADOW光之魅影多边形珍珠装饰项链','22143',343,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22151','100002',10500,'CHENYIYUAN光之魅影曲线项链','CHENYIYUAN 纯14K金系列－SHADOW光之魅影曲线项链 8.3g重','22151',20,90);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22152','100002',1242,'CHEN YIYUAN四颗天然珍珠 项链','[CHEN YIYUAN]陈艺元 Secret Garden四颗天然珍珠 项链','22152',290,91);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22153','100002',959,'CHEN YIYUAN黑水钻 玛瑙','[CHEN YIYUAN] Coherence项链 设计师陈艺元 黑水钻 玛瑙','22153',291,312);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22161','100002',1479,'CHEN YIYUAN  Coherence项链','[CHEN YIYUAN官方淘宝] Coherence系列 - 陈艺元 项链','22161',212,211);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22162','100002',580,'CHEN YIYUAN顽皮的猴子胸针/项','[CHEN YIYUAN小伙伴- 顽皮的猴子（属相礼物 ） 胸针/项','22162',90,3872);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22163','100002',638,'CHEN YIYUAN日珍珠锁骨链项链','[CHEN YIYUAN官方淘宝] 式日珍珠锁骨链项链 镀18K金 日本珍珠','22163',77,291);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22171','100002',379,'CHEN YIYUAN项链 黑金','[CHEN YIYUAN官方淘宝] 裙边系列-项链 925银 黑金','22171',64,866);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22172','100002',580,'小伙伴法斗狗家族 项链','[CHEN YIYUAN]小伙伴 -陈艺元 法斗狗家族 项链 3色','22172',91,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22173','100002',786,'CHEN YIYUAN 天然珍珠项链','[CHEN YIYUAN]设计师陈艺元 天然珍珠项链','22173',482,318);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22181','100002',330,'CHEN YIYUAN小伙伴们 项链/摆件','[CHEN YIYUAN官方淘宝] 设计师陈艺元小伙伴们 项链/摆件','22181',291,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22182','100002',899,'CHEN YIYUAN  百鬼夜行灯笼吊链珍珠舌头项链','CHEN YIYUAN 设计师陈艺元 百鬼夜行灯笼吊链珍珠舌头项链','22182',90,76);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22183','100002',299,'CHEN YIYUAN 晴天娃娃项链','CHEN YIYUAN 设计师陈艺元 百鬼夜行系列 晴天娃娃项链','22183',33,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22191','100002',1290,'CHEN YIYUAN 多球 水钻 项链','[CHEN YIYUAN] 陈艺元Disco ball 多球 水钻 项链','22191',86,356);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22192','100002',368,'CHEN YIYUAN 中球 项圈','[CHEN YIYUAN] 陈艺元Disco ball 中球 项圈','22192',22,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('22193','100002',580,'CHENYIYUAN 项链金属质感','[CHENYIYUAN] 小伙伴系列 -鸡（属相礼物）项链金属质感','22193',85,24);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23121','100002',199,' CHEN YIYUAN 后指关节小戒指','[CHEN YIYUAN]式日系列金色珍珠前指关节/后指关节小戒指','23121',25,14);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23122','100002',530,'CHEN YIYUAN 海味系列-蓝','[CHEN YIYUAN] 海味系列-蓝','23122',75,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23123','100002',288,'CHEN YIYUAN 3颗珍珠 小戒指','[CHEN YIYUAN]设计师 陈艺元式日系列3颗珍珠 小戒指','23123',25,256);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23131','100002',680,'CHEN YIYUAN 远观戒指','[CHEN YIYUAN官方淘宝] 远观系列Far view戒指','23131',91,591);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23132','100002',228,'CHEN YIYUAN 鬼爪珍珠戒指1','CHEN YIYUAN 设计师陈艺元 百鬼夜行鬼爪珍珠戒指','23132',489,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23133','100002',199,'CHEN YIYUAN Disco ball基础款戒指','[CHEN YIYUAN] 陈艺元Disco ball 基础款戒指','23133',82,103);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23141','100002',199,'CHEN YIYUAN裙边戒指2','[CHEN YIYUAN] 裙边 戒指-陈艺元 925银材质','23141',82,421);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23142','100002',639,'CHEN YIYUAN 镂空珍珠戒指925银','CHEN YIYUAN 设计师陈艺元 百鬼夜行大吉镂空珍珠戒指925银','23142',315,613);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23143','100002',583,'CHEN YIYUAN花瓣珍珠戒指','[CHEN YIYUAN] 陈艺元 Secret Garden 花瓣 珍珠戒指','23143',41,414);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23151','100002',583,'CHEN YIYUAN Color rings 戒指','[CHEN YIYUAN官方淘宝] 色戒系列 陈艺元 Color rings 戒指','23151',51,624);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23152','100002',199,'CHEN YIYUAN x INKORY 星月戒指套戒开口戒','CHEN YIYUAN x INKORY | 新月系列 星月戒指套戒开口戒','23152',61,623);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23153','100002',1020,'CHEN YIYUAN 三颗白水钻 戒指','[CHEN YIYUAN官方淘宝]式日陈艺元 日本产金珍珠三颗白水钻 戒指','23153',51,241);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23161','100002',680,'CHEN YIYUAN Far view/远观 戒指','[CHEN YIYUAN] Far view/远观 戒指','23161',515,352);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23162','100002',199,'CHEN YIYUAN 漂亮裙边系列','[CHEN YIYUAN] 超漂亮裙边系列-戒指925银 指环可调节','23162',941,153);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23163','100002',4319,'CHENYIYUAN 光之魅影镶嵌红宝石戒指','CHENYIYUAN 纯14K金系列－SHADOW光之魅影镶嵌红宝石戒指0.395g重','23163',91,2451);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23171','100002',2488,'CHENYIYUAN光之魅影素圈戒指','CHENYIYUAN 纯14K金系列－SHADOW光之魅影素圈戒指','23171',91,525);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23172','100002',399,'CHEN YIYUAN 星星 冷珐琅 戒指','[CHEN YIYUAN] 陈艺元 Disco ball系列 星星 冷珐琅 戒指','23172',91,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23173','100002',568,'CHEN YIYUAN翻白眼 戒指','[CHEN YIYUAN] 陈艺元 Disco ball 翻白眼 戒指','23173',52,324);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23181','100002',799,' CHEN YIYUAN 珍珠舌头 耳环','[CHEN YIYUAN] 陈艺元 Disco bal系列 珍珠舌头 耳环','23181',41,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23182','100002',680,' CHEN YIYUAN Far view戒指2','[CHEN YIYUAN] 远观系列 Far view戒指','23182',99,914);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23183','100002',530,'CHEN YIYUAN big rings/逼格 戒指-2014020','[CHEN YIYUAN] 2015新款big rings/逼格 戒指-2014020','23183',18,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23191','100002',530,'CHEN YIYUAN big rings 戒指','[CHEN YIYUAN] 大戒指系列设计师陈艺元big rings 戒指','23191',82,471);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23192','100002',330,'CHEN YIYUAN 小斑鸠戒指','[CHEN YIYUAN] 小伙伴系列 陈艺元 小斑鸠戒指个性定制','23192',84,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('23193','100002',199,'CHEN YIYUAN 裙边戒指2','[CHEN YIYUAN] 裙边 戒指-925银电镀黑金 指圈可随意调节','23193',84,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24121','100002',689,'CHEN YIYUAN 折纸 手镯','[CHEN YIYUAN] 裙边系列- 折纸 手镯 百搭 3色款','24121',75,135);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24122','100002',689,'CHEN YIYUAN 折纸 银色','[CHEN YIYUAN] 裙边系列- 折纸 银色 百搭 3色款','24122',81,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24123','100002',638,'CHEN YIYUAN 半弧 可调节手镯','[CHEN YIYUAN]式日系列 半弧 可调节手镯','24123',91,215);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24131','100002',828,'CHEN YIYUAN  双行珍珠 手镯','[CHEN YIYUAN官方淘宝]式日系列 双行珍珠 手镯','24131',91,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24132','100002',1499,'CHEN YIYUAN鬼脸珐琅手环','CHEN YIYUAN 设计师陈艺元 百鬼夜行系列 鬼脸珐琅手环定做','24132',64,918);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('24133','100002',689,'CHEN YIYUAN百褶 黑色','[CHEN YIYUAN] 裙边系列- 百褶 925银镀黑金 黑色 3色款','24133',193,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31121','100003',1000,'ZHAO 安静花椒耳钉','ZHAO Jewelry 14k金珍珠 安静花椒 耳钉 简约','31121',98,213);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31122','100003',418,'ZHAO 齿轮长耳环','ZHAO Jewerly 进击的齿轮系列 可调节长耳环','31122',65,212);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31123','100003',700,'ZHAO 花椒与珍珠耳钉','ZHAO Jewelry 14k金珍珠 花椒与珍珠耳钉','31123',467,513);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31131','100003',720,'ZHAO 幸运饼耳钉','ZHAO Jewelry 幸运饼耳钉 14K金 珍珠','31131',686,134);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31132','100003',680,'ZHAO 苯与珍珠耳钉','ZHAO Jewelry 14K金 珍珠 苯与珍珠耳钉','31132',51,841);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31133','100003',300,'ZHAO 美甲控耳钉','ZHAO 曌 独立设计首饰 925银镀金 美甲控耳钉 创意 趣味','31133',81,241);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31141','100003',820,'ZHAO 剪纸耳钉','ZHAO Jewelry 925银镀金 剪纸耳钉 时尚简约','31141',73,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31142','100003',380,'ZHAO 铅笔屑耳钉','ZHAO Jewelry 北京女子图鉴 戚薇同款 铅笔屑耳钉','31142',99,111);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31143','100003',1280,'ZHAO 多巴胺耳钉','ZHAO Jewelry 刘诗诗同款14K金 珍珠 多巴胺耳钉','31143',9,135);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31151','100003',2500,'ZHAO 流苏不对称耳坠','ZHAO Jewelry 花椒 流苏不对称耳坠 14k金珍珠','31151',1,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31152','100003',1180,'ZHAO Jewelry  日出耳环','ZHAO Jewelry 14k金珍珠 日出耳环','31152',513,241);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31153','100003',980,'ZHAO日落耳钉','ZHAO Jewelry 北京女子图鉴戚薇同款 日落耳钉','31153',912,332);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31161','100003',1180,'ZHAO 艳阳天耳线','ZHAO Jewelry 14K金珍珠 艳阳天耳线 14k金珍珠','31161',92,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31162','100003',2280,'ZHAO 项链耳环套装','ZHAO Jewelry 14K金 鬼马巧克力 项链耳环套装','31162',0,135);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('31163','100003',1580,'ZHAO 鸡尾酒长耳线','ZHAO Jewelry 14K金珍珠 鸡尾酒长耳线','31163',92,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32121','100003',1500,'ZHAO 锁骨链','ZHAO Jewelry 14k金珍珠 坐在枝上的花椒 锁骨链','32121',92,153);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32122','100003',2000,'ZHAO 双层锁骨链','ZHAO Jewelry 花椒 双层锁骨链 14k金珍珠 复古','32122',142,412);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32123','100003',698,'ZHAO 齿轮长项链','ZHAO Jewelry 齿轮长项链 choker 多戴','32123',35,315);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32131','100003',1280,'ZHAO 幸运纸条项链','ZHAO Jewelry 幸运纸条项链 14K金','32131',2,4124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32132','100003',1280,'ZHAO 幸运饼锁骨链','ZHAO Jewelry 幸运饼锁骨链 14K金 珍珠','32132',231,21);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32133','100003',1800,'ZHAO 铅笔屑 锁骨链','ZHAO Jewelry 14k黄金白金拼色 铅笔屑 锁骨链','32133',21,152);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32141','100003',1200,'ZHAO 花椒锁骨链 简约','ZHAO Jewelry 14K金 珍珠 花椒锁骨链 简约','32141',31,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32142','100003',2280,'ZHAO 项链耳环套装','ZHAO Jewelry 14K金 鬼马巧克力 项链耳环套装','32142',23,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('32143','100003',2480,'ZHAO 鸡尾酒 长项链','ZHAO Jewelry  14k金珍珠 鸡尾酒 长项链','32143',23,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33121','100003',480,'ZHAO 折纸戒指','ZHAO Jewelry 925银镀金 折纸戒指 简约','33121',65,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33122','100003',380,'ZHAO 多肉植物戒指','ZHAO Jewelry 刘诗诗同款 多肉植物戒指','33122',231,24);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33123','100003',380,'ZHAO 螺母戒指','ZHAO Jewelry 刘诗诗同款 螺母戒指 925银镀金','33123',124,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33131','100003',1400,'ZHAO 花椒系列周年','ZHAO Jewelry 花椒系列周年纪念款 14K金珍珠','33131',52,145);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33132','100003',780,'ZHAO 花椒闭口戒指','ZHAO Jewelry 14k金珍珠 花椒闭口戒指 简约','33132',53,124);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33133','100003',980,'ZHAO1 日出日落戒指 开口','ZHAO Jewelry 14k金珍珠 日出日落戒指 开口','33133',52,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33141','100003',1280,'ZHAO 鸡尾酒戒指','ZHAO Jewelry 14k金珍珠 鸡尾酒戒指 简约','33141',24,1234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33142','100003',900,'ZHAO 开口戒指','ZHAO Jewelry 14k金珍珠 开口戒指 简约','33142',55,214);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('33143','100003',300,'ZHAO 进击的齿轮系列 戒指 情侣','ZHAO Jewelry 曌首饰官方店铺 进击的齿轮系列 戒指 情侣','33143',22,142);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41121','100004',429,'梭形镜像叶 耳钩耳环','美国 by boe 简约时尚14k注金 梭形镜像叶 耳钩耳环 现货','41121',12,42);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41122','100004',499,'方形耳钩','英国Lucas Jack 镀金高雅海蓝宝色方形耳钩耳环耳坠耳饰 定制','41122',21,41);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41123','100004',499,'金色线条型耳环','HeyJewel Rooyee 拉丝肌理系列金色线条型耳环ins气质优雅 现货','41123',32,35);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41131','100004',488,'卫星耳环 ','中国 nonmoi 时尚璀璨 宇宙星球系列 两色 卫星耳环 现货','41131',32,63);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41132','100004',549,'两色方形带链 耳钉 ','英国Lucas Jack 伦敦蓝托帕色 海蓝宝色 两色方形带链 耳钉 现货','41132',23,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41133','100004',599,'八芒星幸运钱币金银两色椭圆形大款耳环','HeyJewel Rooyee 八芒星幸运钱币金银两色椭圆形大款耳环 现货','41133',43,26);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41141','100004',289,'雏菊耳线女时尚耳饰','HeyJewel Le Loup 雏菊与蜜蜂系列不对称雏菊耳线女时尚耳饰 现货','41141',42,345);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41142','100004',499,'中国风吊坠多戴耳环','故宫文化珠宝 大吉福禄925银镀18K金珍珠中国风吊坠多戴耳环 现货','41142',52,53);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41143','100004',399,'简约梭形 耳环','美国 by boe 一滴泪珠 简约梭形 耳环 对售 现货','41143',634,98);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41151','100004',520,'镂空单坠耳线细款','法国设计师【Vlum】彩色流线 立体镂空单坠耳线细款 ','41151',76,76);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41152','100004',690,'波浪型绿玉髓 耳环','台湾 Spoiled Brat 14k注金 波浪型绿玉髓 耳环 现货','41152',85,25);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41153','100004',499,'不对称粉晶珍珠 耳环','台湾 Spoiled Brat 14k注金 不对称粉晶珍珠 耳环 现货','41153',23,35);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41161','100004',520,'葡萄石珍珠饰品耳','HeyJewel Spoiled Brat 森系耳环超仙葡萄石珍珠饰品耳饰 现货','41161',56,24);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41162','100004',399,'蓝托帕石耳坠','HeyJewel Gemstyle 珍珠耳环女蓝托帕石耳坠14k注金耳饰超仙 现货','41162',32,34);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41163','100004',129,'银镀金糖纸球耳钉','尤目YVMIN 甜食物系列小耳钉女迷你独特925银镀金糖纸球 现货','41163',5,46);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41171','100004',790,'檀木耳环女单只','中国 尤目YVMIN 镀18k金长款黑色碟形檀木耳环女单只 现货','41171',3,146);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41172','100004',209,'坐在月亮上耳钉','中国 yeah jewelry 小人国的梦呓 坐在月亮上耳钉 金银两色现货','41172',5,18);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41173','100004',599,'花瓣耳环精致简约耳坠','HeyJewel Rooyee 拉丝肌理系列金色花瓣耳环精致简约耳坠 现货','41173',23,30);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41181','100004',320,'樱花耳环','中国设计师【不华】花世界 手工捏塑瓷 樱满开 樱花耳环 限量现货','41181',34,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41182','100004',529,'大号花苞耳钉','中国 yeah jewelry 925银镀18k金 大号花苞耳钉 现货','41182',64,33);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('41183','100004',499,'两色圆形大款耳环','HeyJewel Rooyee 八芒星幸运钱币金银两色圆形大款耳环时尚 现货','41183',213,33);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42121','100004',299,'菊花瓣项链','HeyJewel Le Loup 雏菊与蜜蜂系列大雏菊花瓣项链女简约饰品 现货','42121',65,22);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42122','100004',299,'巴洛克珍珠项链项圈','HeyJewel 硬糖 巴洛克珍珠项链项圈锁骨链少女心choker颈带 现货','42122',46,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42123','100004',499,'伦敦蓝托帕色 短款项链','英国Lucas Jack 镀金简洁大气 伦敦蓝托帕色 短款项链 定制','42123',25,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42131','100004',299,'辟邪 珐琅项链锁骨链 ','希腊ARTEON 恶魔之眼辟邪 珐琅项链锁骨链 现货','42131',57,54);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42132','100004',269,'两色丝绒 珍珠','希腊ArtWearDimitriadis 气质时尚两色丝绒 珍珠可调节choker现货','42132',89,89);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42133','100004',569,'海蓝宝色 中长款项链','英国Lucas Jack 镀金柔和高雅 海蓝宝色 中长款项链 现货','42133',8,67);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42141','100004',759,'默念你的名字 签名 项链','台湾设计师【Spoiled Brat】 默念你的名字 签名 项链|手链 定制','42141',6,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42142','100004',499,'幸运钱币金银两色圆形大款项链','HeyJewel Rooyee 八芒星幸运钱币金银两色圆形大款项链 现货','42142',5,54);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42143','100004',560,'八月诞生石生辰石项链','台湾设计师 【Spoiled Brat】橄榄石八月诞生石生辰石项链 定制','42143',4,54);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42151','100004',399,'圆形两色晶钻小款项链','HeyJewel Rooyee 八芒星幸运钱币金色圆形两色晶钻小款项链 现货','42151',3,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42152','100004',229,'小人国的梦呓项链','yeah jewelry小人国的梦呓 <坐在月亮上>925银项链女镀金优雅现货','42152',45,68);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42153','100004',360,'小皇冠项链灵动锁骨链','希腊Kiss the Frog小皇冠项链灵动锁骨链女 现货','42153',43,96);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42161','100004',329,'橄榄枝丝带choker项链','加拿大 Le Loup 百变多戴 橄榄枝丝带choker项链 时尚女神款 现货','42161',565,68);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42162','100004',480,'小皇冠项链银镀金可爱锁骨链','希腊Kiss the Frog 个性镂空小皇冠项链银镀金可爱锁骨链 现货','42162',23,68);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42163','100004',1680,'复古蕾丝框架 项链','日本设计师Cheravir 10K金 珍珠 复古蕾丝框架 项链 现货','42163',5,56);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42171','100004',699,'天然珍珠项链锁骨链','荷兰Stones in Style简约经典天然珍珠项链锁骨链女现货','42171',4,290);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42172','100004',289,'丝绒choker项圈女颈带','HeyJewel Le Loup 雏菊与蜜蜂系列丝绒choker项圈女颈带 现货','42172',23,48);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42173','100004',520,'神秘礼物波点猫项链','希腊设计师Kiss the Frog 享受惬意生活 神秘礼物波点猫 项链现货','42173',45,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42181','100004',599,'彩色晶钻大款项链','HeyJewel Rooyee 八芒星幸运钱币金色圆形彩色晶钻大款项链 现货','42181',3,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42182','100004',698,'铂金 云雨 项链','中国 angs（谙诗）925银镀铂金 云雨 项链 天际璀璨款素银款 现货','42182',2,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('42183','100004',1580,'桃金娘 花簇 珍珠 项链','美国 Michael Michaud 桃金娘 花簇 珍珠 项链 现货','42183',535,92);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43121','100004',469,'蓝宝色不规则开口戒指','英国Lucas Jack 蓝托帕配海蓝宝色不规则开口戒指女潮人个性 现货','43121',34,93);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43122','100004',229,'细糖纸戒指','尤目YVMIN 银镀白金细糖纸戒指女俏皮可爱甜食物吃货系列 现货','43122',32,97);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43123','100004',529,'蓝玉髓不对称方形开口戒指','英国Lucas Jack 绿玛瑙 蓝玉髓不对称方形开口戒指现货','43123',32,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43131','100004',269,'圣诞绿水晶 可调节戒指','希腊ArtWearDimitriadis 清新时尚圣诞绿水晶 可调节戒指 现货','43131',23,13);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43132','100004',469,'海蓝宝色 开口戒指','英国Lucas Jack 伦敦蓝托帕色配海蓝宝色 开口戒指 现货','43132',3,80);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43133','100004',429,'蓝玉髓 气质款两色 戒指','英国Lucas Jack 绿玛瑙 蓝玉髓 气质款两色 戒指 现货','43133',45,90);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43141','100004',499,'金中国风吊坠戒指耳环项链','故宫文化珠宝 清风徐来925银镀18K金中国风吊坠戒指耳环项链 现货','43141',53,86);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43142','100004',1260,' 珍珠菊花花苞戒指','英国设计师【Alex Monroe】925银镀金 珍珠菊花花苞戒指 现货','43142',64,64);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43143','100004',599,'两色圆形个性开口戒指 ','HeyJewel SATELLITE Gisele 两色圆形个性开口戒指 现货','43143',54,86);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43151','100004',398,'小晶簇戒指','中国设计师【硬糖】925银镀金 晶簇系列 小晶簇戒指现货','43151',23,98);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43152','100004',499,'宽版 镀金女开口戒指','法国 SATELLITE Emma系列 森系绿色串珠宽版 镀金女开口戒指现货','43152',82,7);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43153','100004',390,'海之森林 戒指','中国设计师张小川 阿酷米拉系列 海之森林 戒指 现货','43153',38,99);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43161','100004',328,'银杏戒指','中国设计师【AG+】925银 银杏戒指 可调节现货','43161',42,78);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43162','100004',399,'金色四芒星戒指','HeyJewel Rooyee 拉丝肌理系列金色四芒星戒指简约原创设计 现货','43162',93,66);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43163','100004',299,'湖蓝色珐琅可调节戒指','希腊 ARTEON 辟邪之眼 湖蓝色珐琅眼睛 银镀金 可调节戒指 定制','43163',467,664);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43171','100004',698,'叶灵珠珐琅手工戒指','中国AG+ 卷叶灵珠珐琅手工戒指女原创925银精致优雅搭配 现货','43171',46,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43172','100004',6600,'Fischer 对戒婚戒','百年德国对戒品牌Fischer 对戒婚戒 定制','43172',29,3);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43173','100004',699,'对戒情侣原创设计刻字城市经纬度','中国Sweet Point对戒情侣原创设计刻字城市经纬度生日纪念日 定制','43173',50,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43181','100004',680,'祖母绿水晶珍珠镀18K金双指戒指','英国O.YANG 祖母绿水晶珍珠镀18K金双指戒指 现货','43181',38,6);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43182','100004',480,'拜占庭护身符 神佑 戒指','中国设计师【云Fusion】 拜占庭护身符 神佑 戒指 现货','43182',38,43);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('43183','100004',1500,'玫瑰色鹧鸪花束 戒指','英国Alex Monroe 30周年纪念版四季系列 玫瑰色鹧鸪花束 戒指现货','43183',4,65);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44121','100004',399,'大吉福禄系列 天然珍珠 手链','故宫文化珠宝 大吉福禄系列 天然珍珠 手链 现货','44121',7,87);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44122','100004',299,'灵感智慧银色手绳手工编织','英国LeJu 寓意灵感智慧银色手绳手工编织现货','44122',26,83);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44123','100004',759,'默念你的名字 签名 项链','台湾设计师【Spoiled Brat】 默念你的名字 签名 项链|手链 定制','44123',357,83);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44131','100004',369,'铜镀金珐琅 手链 ','HeyJewel Aurelie Joliff Zia 不规则圆形 铜镀金珐琅 手链 现货','44131',35,723);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44132','100004',1980,'山茱萸手链','美国设计师【Nicole Barr】山茱萸手链月白 定制','44132',53,52);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44133','100004',299,'锆石恶魔之眼 女款藏青色 手绳','希腊ARTEON 银镀金镶锆石恶魔之眼 女款藏青色 可调节手绳 现货','44133',40,62);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44141','100004',860,'彩色宝石 三层 手链','台湾 Spoiled Brat 14K注金 包边彩色宝石 三层 手链 蓝色 现货','44141',92,25);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44142','100004',599,'爱和吉祥的红手绳','英国 LeJu 手工编织 寓意爱和吉祥的红手绳 现货','44142',37,53);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44143','100004',269,'银镀金镶锆石恶魔之眼 女款湖蓝色 可调节手链 ','希腊ARTEON 银镀金镶锆石恶魔之眼 女款湖蓝色 可调节手链 现货','44143',10,34);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44151','100004',529,'纯净冰川蓝 手工编织手链','英国 LeJu 纯净冰川蓝 手工编织手链 带宝石 两件套 可调节 现货','44151',37,45);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44152','100004',659,'不对称方形开口手镯','英国Lucas Jack 绿玛瑙配蓝玉髓 不对称方形开口手镯 现货','44152',36,28);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44153','100004',488,'中国风吊坠海水母贝红绳 手链','故宫文化珠宝 福犬贺岁 银镀金中国风吊坠海水母贝红绳 手链 现货','44153',43,34);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44161','100004',660,'串联小宝石LOGO牌澳洲玉流苏手链','台湾 Spoiled Brat 14K注金 串联小宝石LOGO牌澳洲玉流苏手链定制','44161',32,234);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44162','100004',599,'手工编织 寓意爱和吉祥的红手绳/手链','英国 LeJu 手工编织 寓意爱和吉祥的红手绳/手链 组合1 现货','44162',6,434);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44163','100004',529,'金粉色蓝宝石月光石手链','HeyJewel Gemstyle 14k注金粉色蓝宝石月光石手链女气质简约 现货','44163',32,12);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44171','100004',490,'珍珠金珠手链女简约个性可调节手饰','HeyJewel Spoiled Brat 珍珠金珠手链女简约个性可调节手饰 现货','44171',56,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44172','100004',468,'红纹石 双圈手链','中国 Larmo朗睦 粉晶 珍珠 红纹石 双圈手链 现货','44172',34,432);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44173','100004',999,'金色四芒星宽版开口手镯流行','HeyJewel Rooyee 拉丝肌理系列金色四芒星宽版开口手镯流行 现货','44173',56,654);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44181','100004',599,'手工编织 寓意灵感和智慧的银色手绳','英国 LeJu 手工编织 寓意灵感和智慧的银色手绳/手链 组合2 现货','44181',44,32);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44182','100004',599,'金色四芒星窄版开口手镯','HeyJewel Rooyee 拉丝肌理系列金色四芒星窄版开口手镯复古 现货','44182',67,23);
Insert into C##LUDAN."Items" ("ItemID","ShopID","ItemPrice","ItemName","ItemInfo","ItemPic","ItemSales","ItemRemain") values ('44183','100004',499,'银镀金紫锂辉石可调节手链','HeyJewel Gemstyle 银镀金紫锂辉石可调节手链个性饰品 现货','44183',420,32);
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
