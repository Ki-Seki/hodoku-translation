# Single Digit Patterns

## Skyscraper

The Skyscraper is a simple pattern that occurs often and is easy to spot. It is a special form of Turbot Fish and can be viewed as two Sashimi X-Wings.

### How to Find

Focus on one digit and find two rows (or columns) that each have exactly two candidates for that digit. If two of the candidates share the same column (or row), one of the other two candidates must be true.

**Restriction:** The two top cells must be in the same band (three horizontally or vertically adjacent boxes) for eliminations to be valid.

### Example 1 (Digit 1)

Column 6 has candidates in r1 and r5; column 9 has candidates in r3 and r5. The cells r5c6 and r5c9 share row 5 (the base). The chain is: r1c6 → r5c6 → r5c9 → r3c9. This eliminates 1 from r1c78 and r3c45.

![Skyscraper Example 1](/examples/sk01.png)

### Example 2

A rotated Skyscraper on digit 4.

![Skyscraper Example 2](/examples/sk02.png)

### Connection to Sashimi X-Wing

Every Skyscraper can be interpreted as two overlapping Sashimi X-Wings.

---

## 2-String Kite

The 2-String Kite is a special form of Turbot Fish and is commonly found in puzzles.

### How to Find

Focus on one digit and find a row and a column that each have exactly two candidates (the strings). One candidate from the row and one from the column must share the same block (the connecting block).

### Example 1 (Digit 5)

Column 7 has candidates in r2c7 and r9c7; row 8 has candidates in r8c4 and r8c9. These are connected in box 9. Elimination: r2c4 ≠ 5.

![2-String Kite Example 1](/examples/2sk01.png)

### Example 2 (Digit 9)

Strings are r6c16 and r47c2, connected in box 4. Elimination: r7c6 ≠ 9.

![2-String Kite Example 2](/examples/2sk02.png)

### Dual 2-String Kite

A Dual 2-String Kite consists of two kites that share connecting candidates, resulting in two eliminations.

![Dual 2-String Kite Example 1](/examples/d2sk01.png)
![Dual 2-String Kite Example 2](/examples/d2sk02.png)

---

## Turbot Fish

A Turbot Fish is actually a chain, not a fish. It is an X-Chain exactly 4 candidates long. The pattern has gone out of style since its variations now have their own named classifications: Skyscraper, 2-String Kite, and Empty Rectangle.

![Turbot Fish Example 1](/examples/tf01.png)
![Turbot Fish Example 2](/examples/tf02.png)
![Turbot Fish Example 3](/examples/tf03.png)
![Turbot Fish Example 4](/examples/tf04.png)

---

## Empty Rectangle (ER)

If one candidate is restricted to exactly one row and exactly one column within a box, the remaining cells in that box form an Empty Rectangle.

### How to Use

Find a conjugate pair (a row or column with exactly two candidates for a digit). Check whether one end of the conjugate pair is in the ER row or column (within the ER box). If so, eliminations are possible.

An Empty Rectangle can always be interpreted as a Finned Mutant X-Wing or a Grouped Nice Loop.

### Example 1 (Digit 9)

Row 4 and column 6 form the ER in box 5. The conjugate pair is r48c2. Elimination: 9 from r8c6.

![Empty Rectangle Example 1](/examples/er01.png)

### Example 2 (Digit 4)

Row 4 and column 5 form the ER. The conjugate pair is r7c59. Elimination: 4 from r4c9.

![Empty Rectangle Example 2](/examples/er02.png)

### ER with Only 2 Candidates

When a box contains only 2 candidates for a digit, some players do not consider the resulting pattern a valid Empty Rectangle. HoDoKu supports this variant optionally.

### Dual Empty Rectangle

A Dual Empty Rectangle produces two eliminations from a single structural observation.

![Dual Empty Rectangle Example 1](/examples/der01.png)
![Dual Empty Rectangle Example 2](/examples/der02.png)

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
