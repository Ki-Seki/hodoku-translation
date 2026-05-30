# Uniqueness Techniques

## Introduction

Uniqueness techniques assume that a valid puzzle has exactly one solution. Any configuration of candidates that would allow multiple solutions must therefore be avoided, and candidates leading to such configurations can be eliminated.

There is some controversy in the Sudoku community about whether uniqueness techniques are valid solving methods. If you prefer not to use them, they can be disabled in HoDoKu's preferences.

---

## Unique Rectangle (UR) — General

A Unique Rectangle consists of four cells that lie in exactly 2 rows, 2 columns, and 2 boxes, all sharing the same two candidates. Such a configuration produces two valid solutions by simply swapping the two candidates, which violates the uniqueness assumption.

![Unique Rectangle General 1](/examples/ur01.png)
![Unique Rectangle General 2](/examples/ur02.png)
![Unique Rectangle General 3](/examples/ur03.png)

---

## Binary Universal Grave (BUG)

BUG is a generalization of the Unique Rectangle concept. A BUG state exists when all unsolved cells have exactly two candidates, and every candidate appears exactly twice in every row, column, and box. This configuration always has multiple solutions.

---

## UR Type 1

If one of the four UR cells contains additional candidates beyond the two UR candidates, the UR candidates can be eliminated from that cell.

**Example:** 8/9 nearly form a UR in r2c23 and r6c23. The extra candidate 3 in r2c2 means that cell cannot hold both 8 and 9 without creating the deadly pattern. Eliminate 8 and 9 from r2c2.

![UR Type 1 Example 1](/examples/u101.png)
![UR Type 1 Example 2](/examples/u102.png)

---

## UR Type 2

If two non-diagonal UR cells share one extra candidate, that candidate can be eliminated from any cell that sees both of those cells.

**Example:** 3/7 in r7c29 and r8c29. Extra candidate 8 appears in both r7c9 and r8c9. Eliminate 8 from r9c9.

![UR Type 2 Example 1](/examples/u201.png)
![UR Type 2 Example 2](/examples/u202.png)

---

## UR Type 3

Type 3 combines a Unique Rectangle with Naked or Locked Subsets. If two non-diagonal UR cells have extra candidates, those extra candidates can form a virtual cell. Combined with other cells in the house, they may create a Naked Subset.

**Example:** A 1/5 UR has extra candidates 6,9 in one cell and 4,6 in another. The virtual cell {4,6,9} can form a Naked Triple with nearby cells.

![UR Type 3 Example 1](/examples/u301.png)
![UR Type 3 Example 2](/examples/u302.png)

---

## UR Type 4

If two non-diagonal UR cells have extra candidates, and one of the two UR candidates is absent from all other cells in a shared house, then the other UR candidate can be eliminated from those two cells.

**Example:** 6/7 in r3c79 and r6c79. Candidate 6 is absent from the rest of row 3 (outside the UR), so if 6 were placed in r3c79, the other cell would be forced to 7, creating the deadly pattern. Eliminate 7 from r3c79.

![UR Type 4 Example 1](/examples/u401.png)
![UR Type 4 Example 2](/examples/u402.png)

---

## UR Type 5

Type 5 is a variation of Type 2 where the extra candidates can be in diagonal cells. The extra candidate must appear in a cell that sees both diagonal cells.

**Example:** Candidate 1 must be in r7c8 or r8c5. Since r7c4 sees both of those cells, eliminate 1 from r7c4.

![UR Type 5 Example 1](/examples/u501.png)
![UR Type 5 Example 2](/examples/u502.png)

---

## UR Type 6

If two diagonal UR cells have extra candidates, and one of the UR candidates appears nowhere else in the two rows or two columns (outside the UR), that candidate can be eliminated from the extra-candidate cells. This always leads to two placements.

**Example:** Candidate 5 forms an X-Wing in the UR rows and columns. Eliminate 5 from r4c3 and r5c4.

![UR Type 6 Example 1](/examples/u601.png)
![UR Type 6 Example 2](/examples/u602.png)

---

## Hidden Rectangle

Up to three UR cells may have extra candidates. Starting from the cell without extras, if one of the UR candidates appears nowhere outside the UR in the row and column of the opposite corner, the other UR candidate can be eliminated from that opposite corner.

![Hidden Rectangle Example 1](/examples/hr01.png)
![Hidden Rectangle Example 2](/examples/hr02.png)

---

## Avoidable Rectangle (AR)

An Avoidable Rectangle occurs when some UR cells already have placed values, but none of those values are givens (clues). The solver must avoid creating the deadly pattern with the placed values.

### AR Type 1

Eliminate the UR candidates from the one unplaced cell in the pattern.

![AR Type 1 Example 1](/examples/ar101.png)
![AR Type 1 Example 2](/examples/ar102.png)

### AR Type 2

Extra candidates appear in the placed cells. These can be eliminated from cells that see both placed cells.

![AR Type 2 Example 1](/examples/ar201.png)
![AR Type 2 Example 2](/examples/ar202.png)

---

## BUG+1

A BUG+1 state occurs when every unsolved cell has exactly two candidates except one cell that has three. The cell with the extra candidate must hold that candidate.

**Example:** r1c8 has the extra candidate 6. Therefore r1c8 = 6.

![BUG+1 Example 1](/examples/bug101.png)
![BUG+1 Example 2](/examples/bug102.png)

---

## URs with Missing Candidates

UR techniques remain valid even when not all four cells contain both UR candidates. The key condition is that no UR candidate in a UR cell may be blocked by a given (clue). If a given blocks a candidate, the deadly pattern cannot form and the technique does not apply.

![UR with Missing Candidates Example 1](/examples/u101a.png)
![UR with Missing Candidates Example 2](/examples/u201a.png)
![UR with Missing Candidates Example 3](/examples/u601a.png)
![UR with Missing Candidates Example 4](/examples/h101a.png)

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
