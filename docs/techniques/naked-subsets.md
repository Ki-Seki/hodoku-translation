---
title: Naked Subsets
---

# Naked Subsets

Naked Subsets occur when N cells within a house collectively contain only N candidates. Those candidates are locked into those cells and can be eliminated from all other cells in the house.

---

## Naked Pair / Locked Pair

Two cells in the same house share only the same two candidates. Those two candidates must go in those two cells, so they can be eliminated from all other cells in that house.

**Locked Pair:** When the two cells span two houses (e.g., a row and a block), eliminations apply to both houses. This makes the pattern more powerful since it can eliminate candidates in a larger area.

**Example 1 (Row):** r8c3 and r8c4 share candidates 3 and 9. Since one cell must be 3 and the other 9, eliminate 3 and 9 from all other cells in row 8 (e.g., 3 from r8c2).

![Naked Pair row example](/examples/n201.png)

**Example 2 (Box):** r4c5 and r5c6 form a Naked Pair in box 5 with shared candidates. Eliminate those candidates from all other cells in box 5.

![Naked Pair box example](/examples/n202.png)

**Locked Pair Example 1:** r3c7 and r3c9 form a Locked Pair in row 3 and block 3. Eliminations apply to both row 3 and block 3.

![Locked Pair example 1](/examples/l201.png)

**Locked Pair Example 2:** A pair in row 8 that also falls within block 8. Eliminations apply to both houses.

![Locked Pair example 2](/examples/l202.png)

---

## Naked Triple / Locked Triple

Three cells within a house collectively contain only three candidates. Those candidates can be eliminated from all other cells in that house.

Not all three cells must contain all three candidates. Each cell may have two or three of the candidates, as long as the total across all three cells does not exceed three distinct candidates.

**Example 1 (Column):** r2c2, r4c2, and r5c2 collectively hold only candidates 3, 6, and 9. Eliminate 6 from r1c2 and other eliminations from remaining cells in column 2.

![Naked Triple column example](/examples/n301.png)

**Example 2 (Box):** r3c4, r3c5, and r1c5 form a Naked Triple in box 2. The three cells share only three candidates between them.

![Naked Triple box example](/examples/n302.png)

**Locked Triple:** When the three cells span two houses (e.g., a row and a block), eliminations apply to both houses, increasing the number of cells that can be pruned.

**Locked Triple Example 1:**

![Locked Triple example 1](/examples/l301.png)

**Locked Triple Example 2:**

![Locked Triple example 2](/examples/l302.png)

---

## Naked Quadruple

Four cells within a house collectively contain only four candidates. Those candidates can be eliminated from all other cells in that house.

A Locked Quadruple cannot exist — an intersection between a block and a row/column can have at most 3 cells, so four cells cannot span two houses.

**Example 1 (Row):** Candidates 3, 4, 8, and 9 are confined to r8c1, r8c3, r8c4, and r8c6 in row 8. Eliminate these candidates from other cells in row 8.

![Naked Quadruple row example](/examples/n401.png)

**Example 2 (Box):** Candidates 4, 6, 7, and 9 are confined to r8c2, r7c3, r8c3, and r9c3 in block 7. Eliminate these candidates from other cells in block 7.

![Naked Quadruple box example](/examples/n402.png)

---

## How to Find Them

- Best done when all pencil marks (candidates) are filled in for the grid.
- Naked Subsets are rather easy to spot visually: look for groups of cells in a house that share a limited set of candidates.
- They are very efficient, often unlocking further progress in the puzzle.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
