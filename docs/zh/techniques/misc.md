---
title: "杂项技巧 (Miscellaneous)"
---

# 杂项技巧 (Miscellaneous)

## Sue de Coq (SDC)

Sue de Coq是子集计数的变体，由用户"Sue de Coq"在EnjoySudoku论坛引入。也称为"双区域不相交子集"。

### 基本变体

找行/列和宫交叉处的格子，包含：2个格子有4个候选数，或3个格子有5个候选数。

在交叉外的行中找一个双值格子，在宫中找一个双值格子。

**消除：** 行格子候选数从行的其余部分消除；宫格子候选数从宫的其余部分消除。

#### 示例1

交叉r7c13{3459}，行格子r7c7{45}，宫格子r8c3{39}。从行7消除4、5；从宫消除3、9。

#### 示例2

交叉r789c9{24567}，列格子r2c9{56}，宫格子r9c7{27}。

![Sue de Coq示例1](/examples/sdc01.png)
![Sue de Coq示例2](/examples/sdc02.png)

### 扩展类型

扩展类型包含以下变体：

- 有额外候选数的交叉格子 → 需要行/宫中更多格子
- 有非交叉候选数的行/宫格子 → 需要更多格子
- 交叉中最多2个格子（可能第三个作为行/宫格子）

示例展示所有增强组合，消除多达13个候选数。

![Sue de Coq扩展示例1](/examples/sdc03.png)
![Sue de Coq扩展示例2](/examples/sdc04.png)
![Sue de Coq扩展示例3](/examples/sdc05.png)
![Sue de Coq扩展示例4](/examples/sdc06.png)

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
