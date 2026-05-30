---
title: "翼 (Wings)"
---

# 翼 (Wings)

## XY翼 (XY-Wing)

XY翼是短XY链的可识别模式。

### 结构

- **枢轴：** 双值格子，候选数为X和Y
- **钳子：** 两个格子，分别为XZ和YZ（Z≠X,Y）

### 消除

从能看到两个钳子的格子中消除Z。

### 示例1

枢轴r1c3（5,7），钳子r1c6（5,2）和r2c1（7,2）。消除：r2c6≠2。

### 示例2

X=1,Y=6,Z=9；枢轴r4c1，钳子r4c4和r5c2。五个消除。

![XY翼示例1](/examples/xy01.png)
![XY翼示例2](/examples/xy02.png)

## XYZ翼 (XYZ-Wing)

XYZ翼是增强的XY翼：枢轴包含所有三个候选数X、Y、Z。

### 消除

Z只从能看到两个钳子和枢轴的格子中消除。

### 示例1

枢轴r7c2，钳子r2c2和r7c1。r9c2≠7。

### 示例2

4/7/6在r23c4和r3c7中 → r3c56≠6。

![XYZ翼示例1](/examples/xyz01.png)
![XYZ翼示例2](/examples/xyz02.png)

## W翼 (W-Wing)

两个双值格子共享相同的两个候选数，通过一个候选数上的强链接连接。

### 消除

从能看到两个双值格子的格子中消除另一个候选数。

### 示例1

格子r4c4和r8c9（候选数5,9），列8中9的强链接。从能看到两者的格子消除5。

### 示例2

W翼4/1在r1c9和r8c7中，通过r18c3中1的强链接连接。

![W翼示例1](/examples/w01.png)
![W翼示例2](/examples/w02.png)

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
