---
title: "唯一性技巧 (Uniqueness Techniques)"
---

# 唯一性技巧 (Uniqueness Techniques)

## 引言

唯一性技巧基于一个假设：有效数独只有一个解。允许多解的配置必须避免。

关于唯一性技巧的有效性存在争议。可在HoDoKu偏好中禁用。

## 唯一矩形 (UR) 概述

四个格子恰好在2行、2列、2宫中，共享相同的两个候选数。这种配置通过交换两个候选数产生两个有效解。

![唯一矩形概述1](/examples/ur01.png)
![唯一矩形概述2](/examples/ur02.png)
![唯一矩形概述3](/examples/ur03.png)

## 二元通用坟墓 (BUG)

概括：所有未解格子只有两个候选数，每个候选数在每行/列/宫中恰好出现两次。

## UR 1型

四个UR格子中有一个有额外候选数 → UR候选数可以从该格子消除。

**示例：** 8/9几乎在r2c23和r6c23中形成UR；r2c2中有额外候选数3 → 消除r2c2中的8、9。

![UR 1型示例1](/examples/u101.png)
![UR 1型示例2](/examples/u102.png)

## UR 2型

两个非对角格子共享一个额外候选数 → 从能看到两者的格子中消除该候选数。

**示例：** 3/7在r7c29和r8c29中；r78c9中有额外8 → 从r9c9消除8。

![UR 2型示例1](/examples/u201.png)
![UR 2型示例2](/examples/u202.png)

## UR 3型

结合UR与显性/锁定数集。两个非对角格子有额外候选数 → 虚拟格子 + 显性数集。

**示例：** 1/5 UR，额外6、9和4、6 → 显性数三{4,6,9}。

![UR 3型示例1](/examples/u301.png)
![UR 3型示例2](/examples/u302.png)

## UR 4型

两个非对角格子有额外候选数；如果一个UR候选数在某宫中其他格子都没有 → 消除另一个UR候选数。

**示例：** 6/7在r3c79和r6c79中；候选数6在行3中没有 → 从r3c79消除7。

![UR 4型示例1](/examples/u401.png)
![UR 4型示例2](/examples/u402.png)

## UR 5型

2型变体，额外候选数可在对角格子中。

**示例：** 1必须在r7c8或r8c5中。r7c4能看到两者 → r7c4≠1。

![UR 5型示例1](/examples/u501.png)
![UR 5型示例2](/examples/u502.png)

## UR 6型

两个对角格子有额外候选数；如果一个UR候选数在UR的2行2列中别处没有 → 从额外候选数格子消除。总是导致两个填入。

**示例：** 候选数5在UR行/列中形成X-Wing → 从r4c3和r5c4消除5。

![UR 6型示例1](/examples/u601.png)
![UR 6型示例2](/examples/u602.png)

## 隐藏矩形 (Hidden Rectangle)

最多三个UR格子有额外候选数；从没有额外的格子开始。如果一个UR候选数在对角格子的行/列中UR外没有出现 → 从对角格子消除另一个。

![隐藏矩形示例1](/examples/hr01.png)
![隐藏矩形示例2](/examples/hr02.png)

## 可避免矩形 (AR)

一些UR格子已填入（但都不是给定数）。

### AR 1型

从未填入格子消除UR候选数。

![AR 1型示例1](/examples/ar101.png)
![AR 1型示例2](/examples/ar102.png)

### AR 2型

已填入格子有额外候选数 → 从能看到两者的格子消除。

![AR 2型示例1](/examples/ar201.png)
![AR 2型示例2](/examples/ar202.png)

## BUG+1

恰好一个格子有一个额外候选数 → 该候选数必须填入。

**示例：** r1c8有额外候选数6 → r1c8=6。

![BUG+1示例1](/examples/bug101.png)
![BUG+1示例2](/examples/bug102.png)

## 缺失候选数的UR

UR在不是所有格子都持有两个UR候选数时仍然有效。条件：UR格子中的UR候选数不能被给定数阻塞。

![缺失候选数的UR示例1](/examples/u101a.png)
![缺失候选数的UR示例2](/examples/u201a.png)
![缺失候选数的UR示例3](/examples/u601a.png)
![缺失候选数的UR示例4](/examples/h101a.png)

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
