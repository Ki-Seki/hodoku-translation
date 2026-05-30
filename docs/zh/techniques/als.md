---
title: "ALS (准锁集 — Almost Locked Sets)"
---

# ALS (准锁集 -- Almost Locked Sets)

## 定义

- ALS：一个宫中N个未解格子有N+1个候选数
- 受限公共候选数 (RCC)：共享候选数，ALS1中所有实例都能看到ALS2中所有实例
- ALS重叠允许，但重叠区域不能包含RCC

## ALS-XZ

### 单链接

两个ALS共享一个RCC (X)。公共数字Z可以从能看到两个ALS中所有Z实例的格子消除。

- 示例1：ALS A{679}和B{6789}，X=6，Z=7。从r3c56消除7。图片：`/examples/axz01.png`
- 示例2：ALS A{34568}和B{378}，X=3，Z=8。从r789c3消除8。图片：`/examples/axz02.png`

### 双链接

两个ALS共享两个RCC。两个RCC可以从非ALS格子消除；非RCC数字锁定在各自的ALS中。

- 示例1：ALS A{2479}和B{124}，X=2，Y=4。图片：`/examples/daxz01.png`
- 示例2：ALS A{467}和B{14678}，X=4，Y=6。图片：`/examples/daxz02.png`

## ALS-XY翼

- 三个ALS (A,B,C)形成链：z-A-x-C-y-B-z
- A与C共享RCC X；B与C共享RCC Y（X不等于Y）
- 公共数字Z从能看到A和B中所有Z的格子消除
- 示例1：A{3678}，B{2389}，C{179}，X,Y=7,9，Z=3。图片：`/examples/axy01.png`
- 示例2：A{247}，B{679}，C{3467}，X,Y=4,6，Z=7。图片：`/examples/axy02.png`

## ALS链

- 通过RCC连接的ALS系列；第一个和最后一个共享公共数字
- 没有两个相邻的RCC可以相同
- 示例1：有两个公共数字（6,9）的链。图片：`/examples/ach01.png`
- 示例2：有双链接ALS的链。图片：`/examples/ach02.png`

## 死亡绽放 (Death Blossom)

- 茎格子 + 花瓣（ALS）；每个花瓣与茎有RCC
- 如果茎的每个候选数都有花瓣且共享公共数字 -> 消除该数字
- 示例1：茎r3c4，花瓣有4和7，公共数字6。图片：`/examples/db01.png`
- 示例2：茎r7c6，三个花瓣，公共数字5。图片：`/examples/db02.png`

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
