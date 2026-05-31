---
title: "Miscellaneous Techniques"
---

# Miscellaneous Techniques

## Sue de Coq (SDC)

Sue de Coq is a variant of Subset Counting, first introduced by a user nicknamed "Sue de Coq" under the name "Two-Sector Disjoint Subsets" on the EnjoySudoku forum. The community adopted the inventor's nickname as the technique's name.

### Basic Variants

The core concept is to find cells at the intersection of a row (or column) and a block containing either 2 cells with 4 candidates, or 3 cells with 5 candidates. Then locate a bivalue cell in the row outside the intersection, with candidates drawn entirely from the intersection set, and a bivalue cell in the block with candidates also from the intersection but different from those in the row cell.

All row cell candidates are eliminated from the rest of the row, all block cell candidates are eliminated from the rest of the block, and any intersection candidate remaining from both row and block sets is also eliminated.

![Sue de Coq Example 1](/examples/sdc01.png)

Left example: Intersection cells are r7c13 with candidates {3459}. Row cell is r7c7 with candidates {45}. Block cell is r8c3 with candidates {39}. Eliminations: 4 and 5 from the rest of row 7; 3 and 9 from the rest of the block.

The logic: The intersection has 4 candidates for 2 cells (2 too many). The row cell removes one possibility, leaving 3 candidates for 2 cells. The block cell removes another, leaving exactly 2 candidates for 2 cells. This produces two overlapping locked sets: {3,9} locked into r7c13 + r8c3 (all in the same block, eliminates from block) and {4,5} locked into r7c13 + r7c7 (all in the same row, eliminates from row).

![Sue de Coq Example 2](/examples/sdc02.png)

Right example: Intersection cells are r789c9 with candidates {24567} (3 cells, 5 candidates). Column cell is r2c9 with candidates {56}. Block cell is r9c7 with candidates {27}. Candidate 4 is locked within the intersection and eliminated from both block and column.

### Extended Types

Two enhancement directions exist: intersection cells with additional candidates (for each extra candidate, an additional cell in the row/column or block must be found) and row/block cells with candidates not from the intersection set (for each such candidate, one additional cell is needed).

Key constraints: only two cells maximum in the intersection (with a possible third cell being part of the row or block cells), and the same non-intersection candidate can appear in both row cells and block cells.

![Extended Sue de Coq Example A](/examples/sdc04.png)

Example A: Intersection is r46c8 with candidates {3578}. Column cell is r8c8 with candidates {35}. Block cells are r4c7 and r5c9 with candidates {789}. Enhancement: Block cells contain candidate 9 not from the intersection, requiring two block cells instead of one.

![Extended Sue de Coq Example B](/examples/sdc03.png)

Example B: Intersection is r456c1 with candidates {123479} (6 candidates in 3 cells — one too many). Column cells are r89c1 with candidates {234} (3 candidates in 2 cells). Block set includes additional candidate 5 not drawn from the intersection.

![Extended Sue de Coq Example C](/examples/sdc05.png)

Example C: Standard 4-candidates-in-2-cells variant. Both column cells and block cells contain the same additional candidate not from the intersection: candidate 1.

![Extended Sue de Coq Example D](/examples/sdc06.png)

Example D: Demonstrates all enhancements combined (5 candidates in 2 cells). The intersection of column 4 with block 2 has 3 unsolved cells, but only r23c4 form the intersection set with {13689}; r1c4 is part of the block cells. This SDC eliminates 13 candidates.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_misc.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
