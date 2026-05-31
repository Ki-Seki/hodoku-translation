---
title: "ALS (Almost Locked Sets)"
---

# ALS (Almost Locked Sets)

## Core Definitions

An **Almost Locked Set (ALS)** is a group of N unsolved cells within one house containing N+1 candidates — one candidate short of being a Locked Set/Naked Set. ALS alone has no elimination power but becomes useful when combined with other ALS or used as chain nodes.

A **Restricted Common Candidate (RCC)** is a candidate shared by two ALS where all instances of the candidate in ALS 1 see all instances of that candidate in ALS 2. An RCC can only be placed in one of the two ALS, which forces the other ALS to become a locked set.

Two ALS in any technique may overlap, with one restriction: The overlapping area between two ALS must not contain an RCC.

## ALS-XZ

### Singly Linked ALS-XZ

The simplest ALS technique. Two ALS share one RCC (called X). Any common digit Z (not the RCC) present in both ALS can be eliminated from cells that see all instances of Z within both ALS.

![ALS-XZ Example 1](/examples/axz01.png)

Left example: ALS A is r1c67 with candidates {679}, ALS B is r3c289 with candidates {6789}. X=6 (RCC, occurs only in block 3), Z=7. Elimination: r3c56 <> 7.

![ALS-XZ Example 2](/examples/axz02.png)

Right example: ALS A is r456c3,r6c2 with candidates {34568}, ALS B is r7c2,r9c1 with candidates {378}. X=3, Z=8. Elimination: r789c3 <> 8.

### Doubly Linked ALS-XZ

Two ALS sharing two RCCs. One RCC must be in ALS A (locking ALS B), the other in ALS B (locking ALS A). Both RCCs in one ALS is impossible — it would leave N-1 candidates for N cells.

Eliminations include: RCCs can be eliminated from non-ALS cells in the houses providing the RCCs. All non-RCC digits get locked within their respective ALS, eliminating those digits from cells that see all instances in the ALS (can be cannibalistic — elimination within the other ALS).

![Doubly Linked ALS-XZ Example 1](/examples/daxz01.png)

Left example: ALS A is r2c239 with {2479}, ALS B is r4c23 with {124}. X=2, Y=4. RCC 2 restricted to column 2 => r1c2 <> 2. RCC 4 restricted to column 3 => r16c3 <> 4. ALS A non-RCC digits {7,9} restricted to row 2 => eliminate 7,9 from other row 2 cells. ALS B non-RCC digit {1} restricted to row 4 and block 4 => eliminate other 1s from those houses.

![Doubly Linked ALS-XZ Example 2](/examples/daxz02.png)

Right example: ALS A is r23c4 with {467}, ALS B is r2c23,r3c23 with {14678}. X=4, Y=6. RCC 4 restricted to row 3 (no eliminations). RCC 6 restricted to row 2 => r2c5 <> 6. ALS A digit 7: eliminates from block 2 and column 4. ALS B digits 7,8: restricted to block 1, eliminate from block 1. ALS B digit 1: restricted to intersection of block 1 and column 2, eliminates from both houses.

## ALS-XY-Wing

Requires three ALS (A, B, C) forming a chain: z- A -x- C -y- B -z. ALS A shares RCC X with ALS C; ALS B shares RCC Y with ALS C (X≠Y). Common digit Z can be eliminated from cells seeing all Z instances in both A and B.

![ALS-XY-Wing Example 1](/examples/axy01.png)

Left example: ALS A is r7c156 with {3678}, ALS B is r579c8 with {2389}, ALS C is r9c34 with {179}. X,Y=7,9; Z=3. RCC 7 restricted to block 7; RCC 9 restricted to row 9. Elimination: r7c7 <> 3.

![ALS-XY-Wing Example 2](/examples/axy02.png)

Right example: ALS A is r1c78 with {247}, ALS B is r25c4 with {679}, ALS C is r259c9 with {3467}. X,Y=4,6; Z=7.

## ALS Chain

A series of ALS connected by RCCs. The first and last ALS share a common digit. That digit is eliminated from cells seeing all instances of it at both chain endpoints. No two adjacent RCCs may be the same.

![ALS Chain Example 1](/examples/ach01.png)

Left example: Chain 69- r1c4789 {24569} -5- r8c4 {56} -6- r58c3 {256} -2- r2c123,r3c3 {23469} -69. Two common digits (6 and 9). Second ALS is a bivalue cell (smallest possible ALS: two candidates in one cell).

![ALS Chain Example 2](/examples/ach02.png)

Right example: Chain 3- r2c1249 {23567} -7- r2c7 {37} -3- r7c7 {37} -7- r7c4,r8c5 {237} -3. Two ALS (r2c7 and r7c7) are doubly linked by {37}.

## Death Blossom

Comprises a stem cell and petals (ALS). Each petal has an RCC with the stem cell. If a petal exists for every candidate in the stem cell and all petals share a common digit, that digit can be eliminated from cells seeing all instances of it across all petals.

![Death Blossom Example 1](/examples/db01.png)

Left example: Stem is r3c4. Petal 1: -4- r2c23,r3c23 {14678}. Petal 2: -7- r2c4 {67}. Common digit: 6. Elimination: r2c5 <> 6. This is effectively an ALS-XY-Wing.

![Death Blossom Example 2](/examples/db02.png)

Right example: Stem is r7c6. Petal 1: -3- r8c3456 {23569}. Petal 2: -6- r8c4 {56}. Petal 3: -9- r8c345 {2569}. ALS 2 and 3 completely overlap with ALS 1 (r8c4 is in all three). Common digit: 5. Elimination: r8c2 <> 5.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_als.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
