---
title: "ALS (Almost Locked Sets)"
---

# ALS (Almost Locked Sets)

## Definitions

- ALS: N unsolved cells in one house with N+1 candidates
- Restricted Common Candidate (RCC): shared candidate where all instances in ALS1 see all in ALS2
- ALS Overlap allowed, but overlapping area must not contain RCC

## ALS-XZ

### Singly Linked

- Two ALS share one RCC (X). Common digit Z can be eliminated from cells seeing all Z instances in both ALS
- Example 1: ALS A {679} and B {6789}, X=6, Z=7. Eliminate 7 from r3c56

![ALS-XZ Singly Linked example 1](/examples/axz01.png)

- Example 2: ALS A {34568} and B {378}, X=3, Z=8. Eliminate 8 from r789c3

![ALS-XZ Singly Linked example 2](/examples/axz02.png)

### Doubly Linked

- Two ALS share two RCCs. Both RCCs can be eliminated from non-ALS cells; non-RCC digits locked in respective ALS
- Example 1: ALS A {2479} and B {124}, X=2, Y=4

![ALS-XZ Doubly Linked example 1](/examples/daxz01.png)

- Example 2: ALS A {467} and B {14678}, X=4, Y=6

![ALS-XZ Doubly Linked example 2](/examples/daxz02.png)

## ALS-XY-Wing

- Three ALS (A,B,C) forming chain: z-A-x-C-y-B-z
- A shares RCC X with C; B shares RCC Y with C (X!=Y)
- Common digit Z eliminated from cells seeing all Z in A and B
- Example 1: A {3678}, B {2389}, C {179}, X,Y=7,9, Z=3

![ALS-XY-Wing example 1](/examples/axy01.png)

- Example 2: A {247}, B {679}, C {3467}, X,Y=4,6, Z=7

![ALS-XY-Wing example 2](/examples/axy02.png)

## ALS Chain

- Series of ALS connected by RCCs; first and last share common digit
- No two adjacent RCCs may be the same
- Example 1: Chain with two common digits (6,9)

![ALS Chain example 1](/examples/ach01.png)

- Example 2: Chain with doubly linked ALS

![ALS Chain example 2](/examples/ach02.png)

## Death Blossom

- Stem cell + petals (ALS); each petal has RCC with stem
- If petals exist for every stem candidate and share common digit -> eliminate that digit
- Example 1: Stem r3c4, petals with 4 and 7, common digit 6

![Death Blossom example 1](/examples/db01.png)

- Example 2: Stem r7c6, three petals, common digit 5

![Death Blossom example 2](/examples/db02.png)

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
