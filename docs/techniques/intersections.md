---
title: Intersections (Locked Candidates)
---

# Intersections (Locked Candidates)

Intersections, also known as Locked Candidates, exploit the overlap between blocks and rows/columns. When candidates for a digit are confined to the intersection of a block and a line, eliminations can be made in either direction.

---

## Locked Candidates Type 1 (Pointing)

When all candidates of a certain digit within a block are confined to a single row or column, that digit cannot appear outside the block in that row or column.

The candidates "point" along the line, eliminating the digit from other cells in that row or column beyond the block boundary.

**Example 1:** In Block 1, candidate 5 can only go into row 3 (r3c1 or r3c2). Since one of those cells must be 5, digit 5 cannot appear elsewhere in row 3. Therefore 5 can be eliminated from r3c7.

![Pointing example 1](/examples/lc101.png)

**Example 2:** In Box 8, candidate 1 is locked in row 7 (r7c4, r7c5, or r7c6). This means 1 cannot appear in row 7 outside Box 8. Eliminations apply to boxes 7 and 9 in row 7.

![Pointing example 2](/examples/lc102.png)

A single Locked Candidates Type 1 pattern can eliminate up to 6 candidates at once.

---

## Locked Candidates Type 2 (Claiming)

This works in the other direction: if all candidates of a digit in a row or column are confined to one block, that candidate can be eliminated from all other cells in that block.

The row or column "claims" the digit within the block, eliminating it from other cells in the block that are not part of that row or column.

**Example 1:** In row 2, candidate 7 can only go into Block 1 (r2c2 or r2c3). Since 7 must appear in one of those cells, it cannot appear elsewhere in Block 1. Eliminate 7 from r3c2 (which is in Block 1 but not in row 2).

![Claiming example 1](/examples/lc201.png)

**Example 2:** All candidates for digit 4 in column 6 are confined to Block 2 (r2c6 and r3c6). Therefore, 4 can be eliminated from any other cell in Block 2.

![Claiming example 2](/examples/lc202.png)

---

## How to Find Them

- Insert pencil marks for all cells. Look for candidates within a block that are confined to a single row or column (for Type 1), or candidates in a row/column confined to a single block (for Type 2).
- Use digit filters to highlight all instances of one digit. This makes it much easier to see when candidates are confined to an intersection.

![Finding Locked Candidates with pencil marks](/examples/lc203.png)

![Finding Locked Candidates with digit filters](/examples/lc204.png)

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
