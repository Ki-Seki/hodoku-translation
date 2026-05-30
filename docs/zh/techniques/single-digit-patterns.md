---
title: "单数字模式 (Single Digit Patterns)"
---

# 单数字模式 (Single Digit Patterns)

## 摩天楼 (Skyscraper)

摩天楼是一种简单模式，经常出现，容易发现。它是涡轮鱼的特殊形式，也可视为两个刺身X-Wing。

### 如何找

专注一个数字，找两行/列各有两个候选数，如果两个共享同一列/行，另外两个中必有一个为真。

**限制：** 两个顶部单元格必须在同一区域（band）才能消除。

### 示例1（数字1）

列6候选数在r15，列9候选数在r35。r5c6和r5c9共享行5（基础）。链：r1c6→r5c6→r5c9→r3c9。消除r1c78和r3c45中的1。

### 示例2

旋转的数字4摩天楼。

### 与刺身X-Wing的联系

摩天楼可视为两个刺身X-Wing的组合。

![摩天楼示例1](/examples/sk01.png)
![摩天楼示例2](/examples/sk02.png)

## 双线风筝 (2-String Kite)

双线风筝是涡轮鱼的特殊形式，非常常见。

### 如何找

一个数字，找一行和一列各有两个候选数（线），一个行候选数和一个列候选数共享同一宫。

### 示例1（数字5）

列7（r29c7）和行8（r8c49），在宫9连接。消除：r2c4≠5。

### 示例2（数字9）

线r6c16和r47c2，在宫4连接。消除：r7c6≠9。

### 双线风筝

两个风筝共享连接候选数，消除两个候选数。

![双线风筝示例1](/examples/2sk01.png)
![双线风筝示例2](/examples/2sk02.png)
![双重双线风筝示例1](/examples/d2sk01.png)
![双重双线风筝示例2](/examples/d2sk02.png)

## 涡轮鱼 (Turbot Fish)

涡轮鱼实际上是链而不是鱼——恰好4个候选数的X链。它已经过时，因为其模式现在有命名分类（摩天楼、双线风筝、空矩形）。

![涡轮鱼示例1](/examples/tf01.png)
![涡轮鱼示例2](/examples/tf02.png)
![涡轮鱼示例3](/examples/tf03.png)
![涡轮鱼示例4](/examples/tf04.png)

## 空矩形 (Empty Rectangle, ER)

如果一个候选数在宫中被限制在恰好一行和一列中，剩余格子形成空矩形（ER）。

### 使用方法

找共轭对（恰好两个候选数的行/列），检查一端是否在ER的行/列中。

总是可以视为鳍变异X-Wing或分组完美环。

### 示例1（数字9）

行4和列6在宫5中形成ER。共轭对r48c2。消除：r8c6中的9。

### 示例2（数字4）

行4和列5形成ER，共轭对r7c59。消除：r4c9中的4。

### 只有2个候选数的ER

一些玩家不认为有效；HoDoKu可选支持。

### 双重空矩形

一个结构观察产生两个消除。

![空矩形示例1](/examples/er01.png)
![空矩形示例2](/examples/er02.png)
![空矩形示例3](/examples/er201.png)
![空矩形示例4](/examples/er202.png)
![双重空矩形示例1](/examples/der01.png)
![双重空矩形示例2](/examples/der02.png)

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
