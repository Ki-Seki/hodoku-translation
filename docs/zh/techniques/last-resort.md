---
title: "最后手段 (Methods of Last Resort)"
---

# 最后手段 (Methods of Last Resort)

## 模板法 (Templates)

- 单数字模式：空网格上有46,656种放置9个数字的方式
- 从不在任何剩余模板中的格子消除数字；在所有模板中的格子填入
- 不是给人类用的；作为不存在单数字模式的指标
- 如果没有模板消除 -> 不存在复杂鱼

## 强制链 (Forcing Chain)

- 导致矛盾或真相的链的通用术语
- 任何不连续完美环或AIC都符合
- 多条链可以组合成多重强制链

### 真相（多条链，相同结果）

- 从格子的所有候选数出发的链 -> 一个必须为真
- 从一个宫中某数字的所有实例出发的链
- 示例：行4中数字1的所有填入都导致r1c7=4
- 图片：`/examples/fcv01.png`、`/examples/fcv02.png`、`/examples/fcv03.png`、`/examples/fcv04.png`

### 矛盾（同一前提，不兼容的推论）

- 证明格子不能包含某数字；从宫中消除所有实例等

## 强制网 (Forcing Net)

- 与强制链相同但作为网（允许分支）
- 真正的"最后手段" -- 只有非常有经验的玩家才能手动找到
- 示例：r7c2有3个候选数（6,7,9）；都导致r1c2=5
- 图片：`/examples/fnv01.png`、`/examples/fnv02.png`、`/examples/fnv03.png`、`/examples/fnv04.png`

## 海怪鱼 (Kraken Fish)

- 鱼与链结合；通常是消除无法看到所有鳍的鳍鱼

### 1型

- 如果鳍为假 -> 鱼消除有效；如果鳍为真 -> 从鳍出发的链证明消除
- 示例：鳍弗兰肯X-Wing有两条链证明r8c7不等于2
- 图片：`/examples/kf101.png`、`/examples/kf102.png`

### 2型

- 鱼保证一个基础候选数在所有覆盖集中为真；从每个基础候选数出发的链指向同一结论
- 示例：刺身X-Wing有三条链证明r5c9不等于7
- 图片：`/examples/kf201.png`、`/examples/kf202.png`、`/examples/kf203.png`、`/examples/kf204.png`

## 暴力破解 (Brute Force)

- 不算真正的技巧 -- 填入数字看是否有解
- 如果启用，每个数独都能解决

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
