---
title: "鳍鱼/刺身鱼 (Finned/Sashimi Fish)"
---

# 鳍鱼/刺身鱼 (Finned/Sashimi Fish)

## 鳍鱼/刺身 X-Wing

常规X-Wing中一个或多个基础候选数未被覆盖集覆盖（鳍）。只有能看到所有鳍的覆盖候选数可以被消除。

**刺身：** 当所有鳍为假时剩余的鱼是退化的。

**示例1（鳍鱼）：** X-Wing r24/c35，鳍在r2c1。消除：r3c3。

**示例2（刺身）：** c36/r37，鳍在r89c3。消除：r7c1。

![鳍鱼X-Wing示例](/examples/fbf201.png)
![刺身X-Wing示例](/examples/sbf201.png)

## 鳍鱼/刺身剑鱼

与鳍X-Wing相同但有3个基础/覆盖集。

**示例1（鳍鱼）：** 剑鱼 c159/r357，鳍r1c9。消除：r3c7。

**示例2（刺身）：** 剑鱼 r269/c258，鳍r6c4。消除：r45c5。

![鳍鱼剑鱼示例](/examples/fbf301.png)
![刺身剑鱼示例](/examples/sbf301.png)

## 鳍鱼/刺身水母

比剑鱼多一个基础/覆盖集组合。

**示例1（鳍鱼）：** 水母 r2479/c1348，鳍r4c9。消除：r56c8。

**示例2（刺身）：** 水母 r1469/c1289，鳍r9c3。消除：r7c12、r8c12。

![鳍鱼水母示例](/examples/fbf401.png)
![刺身水母示例](/examples/sbf401.png)

## 更大的鳍鱼

存在互补鱼产生相同消除 — 搜索超过水母是不必要的。

## 关键消除逻辑

1. 鳍为假 → 标准鱼消除
2. 鳍为真 → 消除其行/列/宫中的候选数
3. 可操作的消除 = 交集：两种情况下都被消除的候选数

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
