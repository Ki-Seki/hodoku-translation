---
title: "Hidden Subsets"
---

# Hidden Subsets

## Hidden Pair

All Hidden Subsets work the same way, the only thing that changes is the number of cells and candidates affected by the move. Take Hidden Pair: If you can find two cells within a house such that two candidates appear nowhere outside those cells in that house, those two candidates must be placed in the two cells. All other candidates can therefore be eliminated.

![Hidden Pair Example 1](/examples/h201.png)

Take a look at column 9 in the left example: The candidates 1 and 9 appear only in cells r5c9 and r7c9 (often abbreviated as r57c9) in that column (they appear elsewhere in row 5, row 7, block 6 and block 9, but that is not important here). One of those two cells has to be 1 and the other 9. We don't know yet which is which, but what we know is, that r5c9 can't possibly be 6.

![Hidden Pair Example 2](/examples/h202.png)

Hidden Pairs can be buried under lots of other candidates as shown in the right example: r1c12 is a Hidden Pair for candidates 4 and 7 (in this case they are hidden in row 1 and in block 1), but those cells house another 10 candidates, which can all be eliminated.

## Hidden Triple

Hidden Triples work in the same way as Hidden Pairs only with three cells and three candidates.

![Hidden Triple Example 1](/examples/h301.png)

The left example shows a Hidden Triple in block 7: Candidates 2, 4, and 5 appear only in cells r8c2, r9c2, and r9c3 in that block. 1 can be eliminated from r9c2 and 6 from r9c3, which cracks the sudoku.

![Hidden Triple Example 2](/examples/h302.png)

The example on the right is special, in that the Hidden Triple is the very first step of the solution (no singles available in the initial state of the sudoku). The triple is in column 6 (r468c6) with candidates 2, 5, and 6. After the triple only singles are needed to solve the sudoku.

## Hidden Quadruple

Hidden Quadruples (4 candidates in 4 cells) are relatively seldom. It is very hard to spot them without using pencil marks.

![Hidden Quadruple Example 1](/examples/h401.png)

The left example shows a Hidden Quadruple in block 8: Cells r7c56 and r8c56 contain candidates 2, 4, 5, and 8.

![Hidden Quadruple Example 2](/examples/h402.png)

The right example shows a Hidden Quadruple in column 9: Cells r1238c9 contain candidates 2, 4, 5, and 9.

## How to Find Them

![How to Find Hidden Pairs](/examples/h203.png)

Hidden Pairs become visible rather easily when pencil marks have been inserted into the grid. The example on the left shows the pencil marks for candidates 4 and 8: The Hidden Pair in r3c46 is immediately visible. No other candidate can go into one of those cells.

Finding bigger Hidden Subsets requires a fairly good short-term memory. Many players prefer using larger Naked Subsets over larger Hidden Subsets once pencil marks have been applied to the grid. This is entirely a matter of taste though.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_hidden.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
