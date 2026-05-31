---
title: "Single Digit Patterns"
---

# Single Digit Patterns

## Skyscraper

The Skyscraper is a simple pattern that occurs rather often in sudokus and can be easily spotted. It is a special form of Turbot Fish and can also be viewed as two Sashimi X-Wings.

To find a Skyscraper, focus on a single digit and find two rows (or columns) each containing exactly two candidates for that digit. If two of those candidates share the same column (or row), one of the other two must be true. All candidates that can see both of those non-shared cells are eliminatable. The two top cells have to be in the same band or nothing can be eliminated.

![Skyscraper Example 1](/examples/sk01.png)

Left example on digit 1: Column 6 has candidates in rows 1 and 5, column 9 has candidates in rows 3 and 5. r5c6 and r5c9 share the same row (the base). The chain reasoning is: if r1c6 is not true, r5c6 must be true (strong link), r5c9 cannot be true (weak link, same row), r3c9 must be true (strong link). Since one of r1c6 and r3c9 is always true, cells seeing both are eliminated: r1c78 and r3c45 for digit 1.

![Skyscraper Example 2](/examples/sk02.png)

Right example: A 90-degree clockwise rotated Skyscraper on digit 4.

Every Skyscraper can be interpreted as two overlapping Sashimi X-Wings.

## 2-String Kite

The 2-String Kite is another special form of Turbot Fish, commonly found in many puzzles.

To find a 2-String Kite, focus on one digit and find a row and column each with exactly two candidates (the "strings"). One candidate from the row and one from the column must share the same block. The candidate that sees the two remaining (non-shared) cells can be eliminated. 2-String Kites work similar to Skyscrapers: One of the two ends of the strings must be true.

![2-String Kite Example 1](/examples/2sk01.png)

Left example on digit 5: First string is column 7 (candidates r29c7), second string is row 8 (candidates r8c49). End points r9c7 and r8c9 both reside in box 9. If r2c7 is false, r9c7 is true, r8c9 is false, r8c4 is true. Elimination: r2c4 (sees both r2c7 and r8c4) cannot be 5.

![2-String Kite Example 2](/examples/2sk02.png)

Right example: Digit 9, strings r6c16 and r47c2, connected in box 4. Elimination: r7c6 cannot be 9.

### Dual 2-String Kite

Sometimes the same two connecting candidates in a common box can be linked to four different strings, forming two 2-String Kites simultaneously. These eliminate two different candidates. Those two 2-String Kites can be considered to be one move only and can be called Dual 2-String Kite.

![Dual 2-String Kite Example 1](/examples/d2sk01.png)

Left example on digit 1: Common candidates r1c3 and r3c1 in box 1. Kite 1 (r1c38/r36c1) eliminates 1 from r6c8. Kite 2 (r3c19/r14c3) eliminates 1 from r4c9.

![Dual 2-String Kite Example 2](/examples/d2sk02.png)

Right example on digit 4: Common candidates r7c2 and r9c1 in box 7. Kite 1 (r29c1/r7c28) eliminates 4 from r2c8. Kite 2 (r17c2/r9c19) eliminates 4 from r1c9.

## Turbot Fish

A Turbot Fish is really a chain and not a fish. It is an X-Chain exactly four candidates long. Various shapes can be built; one resembles a fish shape, giving the technique its name. Turbot Fishes have gone a bit out of style, since the principal turbot patterns now have their own named classifications: Skyscraper, 2-String Kite, and Empty Rectangle.

![Turbot Fish Example 1](/examples/tf01.png)
![Turbot Fish Example 2](/examples/tf02.png)
![Turbot Fish Example 3](/examples/tf03.png)
![Turbot Fish Example 4](/examples/tf04.png)

## Empty Rectangle (ER)

If one candidate is restricted to exactly one row and one column within a box, the remaining cells form an ER.

![Empty Rectangle Definition 1](/examples/er01.png)

Left definition example: Candidate 9 in box 5 restricted to row 4 and column 6. The ER cells are r5c45 and r6c45.

![Empty Rectangle Definition 2](/examples/er02.png)

Right definition example: Candidate 1 in box 5 restricted to row 4 and column 5. The ER cells are r5c46 and r6c46.

To use an ER, find a conjugate pair (a row or column with exactly two candidates). One candidate of the pair must be in the row (or column) forming the ER. If the column (or row) of the ER contains a candidate that can see the second candidate of the conjugate pair, that candidate can be eliminated. An ER pattern can always be seen as a Finned Mutant X-Wing or as a Grouped Nice Loop.

![Empty Rectangle Example 1](/examples/er01.png)

Left example on digit 9: Row 4 and column 6 form an ER in box 5. r48c2 form a conjugate pair. One side is in the ER row (r4c2); the other can see a candidate in the ER column (r8c6). Elimination: 9 from r8c6.

![Empty Rectangle Example 2](/examples/er02.png)

Right example: Row 4 and column 5 form the ER, r7c59 is the conjugate pair. Elimination: 4 from r4c9.

### ERs with Only Two Candidates

When the ER contains only two candidates, the Empty Rectangle is not clearly defined, but eliminations remain valid. The move can alternatively be recognized as a Turbot Fish or X-Chain. Some sudoku players don't consider ERs with only two candidates valid, so HoDoKu supports them only optionally.

![Two-Candidate ER Example 1](/examples/er201.png)
![Two-Candidate ER Example 2](/examples/er202.png)

### Dual Empty Rectangle

When the eliminated candidate and the conjugate pair's other end also form a conjugate pair, both strong links can serve as the "conjugate pair," producing two eliminations. This is called a Dual Empty Rectangle.

![Dual Empty Rectangle Example 1](/examples/der01.png)

Left example: ER formed by row 2 and column 3. r6c35 is a conjugate pair eliminating 2 from r2c5. Also r26c5 is a conjugate pair eliminating 2 from r6c3.

![Dual Empty Rectangle Example 2](/examples/der02.png)

Right example: Dual Empty Rectangle: 9 in b5 (r67c8/r7c48) eliminates 9 from r6c8 and r7c4.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_sdp.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
