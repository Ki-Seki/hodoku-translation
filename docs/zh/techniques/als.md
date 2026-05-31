---
title: "ALS (准锁集 — Almost Locked Sets)"
---

# ALS (准锁集 — Almost Locked Sets)

## 核心定义

**准锁集 (ALS)** 是一个宫中N个未解格子包含N+1个候选数的群组——比锁集/显性数集少一个候选数。ALS单独没有消除能力，但与其他ALS组合或用作链节点时变得有用。

**受限公共候选数 (RCC)** 是两个ALS共享的候选数，其中ALS 1中该候选数的所有实例都能看到ALS 2中的所有实例。RCC只能在两个ALS中的一个中放置，这迫使另一个ALS变成锁集。

两个ALS在任何技巧中可以重叠，但有一个限制：两个ALS之间的重叠区域不能包含RCC。

## ALS-XZ

### 单链接 ALS-XZ

最简单的ALS技巧。两个ALS共享一个RCC（称为X）。两个ALS中存在的任何公共数字Z（不是RCC）可以从能看到两个ALS中所有Z实例的格子中消除。

![ALS-XZ示例1](/examples/axz01.png)

左边的示例：ALS A是r1c67，候选数{679}，ALS B是r3c289，候选数{6789}。X=6（RCC，只在宫3中出现），Z=7。消除：r3c56 <> 7。

![ALS-XZ示例2](/examples/axz02.png)

右边的示例：ALS A是r456c3,r6c2，候选数{34568}，ALS B是r7c2,r9c1，候选数{378}。X=3，Z=8。消除：r789c3 <> 8。

### 双链接 ALS-XZ

两个ALS共享两个RCC。一个RCC必须在ALS A中（锁定ALS B），另一个在ALS B中（锁定ALS A）。两个RCC都在一个ALS中是不可能的——它会留下N-1个候选数对应N个格子。

消除包括：RCC可以从提供RCC的宫中非ALS格子中消除。所有非RCC数字被锁定在各自的ALS中，从能看到ALS中所有实例的格子中消除这些数字（可以是自噬的——在另一个ALS内的消除）。

![双链接ALS-XZ示例1](/examples/daxz01.png)

左边的示例：ALS A是r2c239，{2479}，ALS B是r4c23，{124}。X=2，Y=4。RCC 2被限制在列2中 => r1c2 <> 2。RCC 4被限制在列3中 => r16c3 <> 4。ALS A非RCC数字{7,9}被限制在行2中 => 从行2其他格子中消除7,9。ALS B非RCC数字{1}被限制在行4和宫4中 => 从那些宫中消除其他1。

![双链接ALS-XZ示例2](/examples/daxz02.png)

右边的示例：ALS A是r23c4，{467}，ALS B是r2c23,r3c23，{14678}。X=4，Y=6。RCC 4被限制在行3中（无消除）。RCC 6被限制在行2中 => r2c5 <> 6。ALS A数字7：从宫2和列4中消除。ALS B数字7,8：被限制在宫1中，从宫1中消除。ALS B数字1：被限制在宫1和列2的交叉中，从两个宫中消除。

## ALS-XY翼

需要三个ALS（A、B、C）形成链：z- A -x- C -y- B -z。ALS A与ALS C共享RCC X；ALS B与ALS C共享RCC Y（X≠Y）。公共数字Z可以从能看到A和B中所有Z实例的格子中消除。

![ALS-XY翼示例1](/examples/axy01.png)

左边的示例：ALS A是r7c156，{3678}，ALS B是r579c8，{2389}，ALS C是r9c34，{179}。X,Y=7,9；Z=3。RCC 7被限制在宫7中；RCC 9被限制在行9中。消除：r7c7 <> 3。

![ALS-XY翼示例2](/examples/axy02.png)

右边的示例：ALS A是r1c78，{247}，ALS B是r25c4，{679}，ALS C是r259c9，{3467}。X,Y=4,6；Z=7。

## ALS链

通过RCC连接的一系列ALS。第一个和最后一个ALS共享一个公共数字。该数字从能看到链两端所有实例的格子中消除。没有两个相邻的RCC可以相同。

![ALS链示例1](/examples/ach01.png)

左边的示例：链69- r1c4789 {24569} -5- r8c4 {56} -6- r58c3 {256} -2- r2c123,r3c3 {23469} -69。两个公共数字（6和9）。第二个ALS是双值格子（最小的可能ALS：一个格子中的两个候选数）。

![ALS链示例2](/examples/ach02.png)

右边的示例：链3- r2c1249 {23567} -7- r2c7 {37} -3- r7c7 {37} -7- r7c4,r8c5 {237} -3。两个ALS（r2c7和r7c7）通过{37}双链接。

## 死亡绽放 (Death Blossom)

由茎格子和花瓣（ALS）组成。每个花瓣与茎格子有RCC。如果茎格子的每个候选数都有花瓣存在，且所有花瓣共享一个公共数字，则该数字可以从能看到所有花瓣中所有实例的格子中消除。

![死亡绽放示例1](/examples/db01.png)

左边的示例：茎是r3c4。花瓣1：-4- r2c23,r3c23 {14678}。花瓣2：-7- r2c4 {67}。公共数字：6。消除：r2c5 <> 6。这实际上是一个ALS-XY翼。

![死亡绽放示例2](/examples/db02.png)

右边的示例：茎是r7c6。花瓣1：-3- r8c3456 {23569}。花瓣2：-6- r8c4 {56}。花瓣3：-9- r8c345 {2569}。ALS 2和3与ALS 1完全重叠（r8c4在所有三个中）。公共数字：5。消除：r8c2 <> 5。

---

*内容基于 [HoDoKu](https://hodoku.sourceforge.net/en/tech_als.php)，作者 Bernhard Hobiger，授权于 GNU FDLv1.3。*
