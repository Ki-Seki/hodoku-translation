---
title: "Naked Subsets"
---

# Naked Subsets

Naked Subsets are similar to Hidden Subsets, the only difference is that it is not about candidates being confined to cells (as in Hidden Subsets), but about cells containing only a certain number of candidates.

## Naked Pair / Locked Pair

### Naked Pair

If you can find two cells, both in the same house, that have only the same two candidates left, you can eliminate those two candidates from all other cells in that house.

![Naked Pair Example 1](/examples/n201.png)

Left example: cells r8c3 and r8c4 are both in the same house (row 8) and have both only candidates 3 and 9 left. It follows immediately that one of the cells has to be 3 and the other 9 (which is which is yet unknown). But we can safely say that r8c2 can not be 3. The sudoku solves with singles after that.

![Naked Pair Example 2](/examples/n202.png)

The example on the right shows a Naked Pair in a box: r4c5, r5c6 form a Naked Pair in box 5 thus eliminating candidates 8 and 9 from all other cells in that box.

### Locked Pair

If the two cells that form the Naked Pair are not only confined to one but to two houses (a row and a block or a column and a block), they are sometimes called a Locked Pair. Candidates can be eliminated from both houses.

![Locked Pair Example 1](/examples/l201.png)

On the left side r3c79 is a Locked Pair in row 3 and block 3, it therefore eliminates 2 from r3c3 (row 3) and from r1c9 (block 3).

![Locked Pair Example 2](/examples/l202.png)

The right side shows a Locked Pair in row 8 and block 8 eliminating 18 candidates.

## Naked Triple / Locked Triple

### Naked Triple

If you can find three cells, all in the same house, that have only the same three candidates left, you can eliminate those candidates from all other cells in that house. It is important to note that not all cells must contain all three candidates, but there must not be more than three candidates in the three cells all together.

![Naked Triple Example 1](/examples/n301.png)

Left example: cells r2c2, r4c2, and r5c2 are all in the same house (column 2) and together have only candidates 3, 6, and 9 left. It follows immediately, that one of the cells has to be 3, another 6, and the last 9 (which is which is yet unknown). But we can safely say that r1c2 cannot be 6. The sudoku solves with singles after that.

![Naked Triple Example 2](/examples/n302.png)

The example on the right shows a Naked Triple in a box: r3c45, r1c5 form a Naked Triple in box 2 thus eliminating candidates 1, 2, and 6 from all other cells in that box.

### Locked Triple

If three cells forming a Naked Triple span two houses, they form a Locked Triple. Eliminations apply to both houses.

![Locked Triple Example 1](/examples/l301.png)

Left example: r789c5 is a Locked Triple in column 5 and block 8, removing 9 from r8c4 (block 8) and from r2c5 (column 5).

![Locked Triple Example 2](/examples/l302.png)

Right example: A Locked Triple on 5, 6, 7 in row 5 and block 6 eliminates 18 candidates.

## Naked Quadruple

Four cells in the same house collectively containing only four candidates allow those candidates to be eliminated from all other cells in that house. A Locked Quadruple cannot exist because an intersection between a row or column and a box can have only three cells.

![Naked Quadruple Example 1](/examples/n401.png)

Left example: Candidates 3, 4, 8, 9 in cells r8c1346 in row 8, eliminating 3 and 8 from r8c7 and 9 from r8c8.

![Naked Quadruple Example 2](/examples/n402.png)

Right example: Candidates 4, 6, 7, 9 in cells r8c2, r789c3 in block 7.

## How to Find Them

Finding Naked Subsets is best done, when all remaining candidates have been penciled in into the grid. Since the cells that are part of the subset have to contain a certain number of candidates only, they are rather easy to spot and very efficient.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_naked.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
