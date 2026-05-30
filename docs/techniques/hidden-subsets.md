---
title: Hidden Subsets
---

# Hidden Subsets

Hidden Subsets occur when a set of N candidates appears in exactly N cells within a house. Those candidates must occupy those cells, so all other candidates can be eliminated from those cells.

---

## Hidden Pair

Two candidates appear in only two cells within a house. Those two candidates must go in those two cells, so all other candidates can be eliminated from those cells.

**Example 1:** In column 9, candidates 1 and 9 only appear in r5c9 and r7c9. Since 1 and 9 must occupy these two cells, no other digit can go there. Therefore r5c9 cannot be 6.

![Hidden Pair example 1](/examples/h201.png)

**Example 2:** r1c1 and r1c2 form a Hidden Pair for candidates 4 and 7 in row 1 and block 1. Both digits are restricted to these two cells in both houses.

![Hidden Pair example 2](/examples/h202.png)

---

## Hidden Triple

Three candidates appear exclusively in three cells within a house. All other candidates can be eliminated from those three cells.

**Example 1:** In Block 7, candidates 2, 4, and 5 are confined to r8c2, r9c2, and r9c3. Since these three digits must occupy these three cells, eliminate 1 from r9c2 and 6 from r9c3.

![Hidden Triple example 1](/examples/h301.png)

**Example 2:** In column 6, candidates 2, 5, and 6 are confined to cells r4c6, r6c6, and r8c6. All other candidates in these cells can be eliminated.

![Hidden Triple example 2](/examples/h302.png)

---

## Hidden Quadruple

Four candidates appear only in four cells within a house. This technique is relatively seldom encountered and can be hard to spot.

**Example 1:** In Block 8, candidates 2, 4, 5, and 8 are confined to cells r7c5, r7c6, r8c5, and r8c6. All other candidates in these four cells can be eliminated.

![Hidden Quadruple example 1](/examples/h401.png)

**Example 2:** In column 9, candidates 2, 4, 5, and 9 are confined to cells r1c9, r2c9, r3c9, and r8c9. All other candidates in these cells can be eliminated.

![Hidden Quadruple example 2](/examples/h402.png)

---

## How to Find Them

- Use pencil marks (full candidate notation) to make Hidden Pairs visible. When two candidates appear only in two cells in a house, the pattern becomes apparent.
- Finding larger Hidden Subsets (Triples and Quadruples) requires strong short-term memory and careful scanning of each house.
- Many players prefer Naked Subsets over larger Hidden Subsets, since Naked Subsets are often easier to identify visually. Ultimately, it is a matter of personal taste.

![Finding Hidden Pairs with pencil marks](/examples/h203.png)

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
