---
title: "Methods of Last Resort"
---

# Methods of Last Resort

## Templates

Templates are a single-digit pattern method. On an empty grid, exactly 46,656 possibilities exist to place all 9 instances of a digit. Each time a digit instance is placed, all combinations not containing that cell become invalid; each time another digit occupies a cell, all combinations containing that cell become invalid.

A digit can be eliminated from any cell not present in at least one remaining template, and can be set in cells contained in all remaining templates. Templates are not meant for human players but serve as indicators: if no template eliminations exist, no single-digit pattern can be found (making complex fish searches unnecessary). The reverse is not necessarily valid.

## Forcing Chain

A generic term for any chain leading to a contradiction or verity that forces an elimination or placement. Any Discontinuous Nice Loop or AIC qualifies. Chains that individually don't produce a contradiction can be combined into a Multiple Forcing Chain.

### Verity (multiple chains, same outcome)

If one premise must be true, the result must be true. Premises include chains starting from all candidates of a cell (one must be true, at least one false), chains starting from all instances of a candidate in one house, and chains starting from all additional digits of a UR.

![Forcing Chain Verity Example](/examples/fcv01.png)

Example proving r1c7=4: r4c4=1 => r8c4=6 => r6c8=6 => r1c8=3 => r1c7=4. r4c6=1 => r4c7=3 => r1c7=4. r4c7=1 => r5c8=5 => r1c8=3 => r1c7=4. Meaning: For every possible placement of digit 1 in row 4, r1c7 is 4.

The three chains traced individually:

![Forcing Chain Verity — Chain 1 (r4c4=1 → r1c7=4)](/examples/fcv02.png)
![Forcing Chain Verity — Chain 2 (r4c6=1 → r1c7=4)](/examples/fcv03.png)
![Forcing Chain Verity — Chain 3 (r4c7=1 → r1c7=4)](/examples/fcv04.png)

### Contradiction (same premise, incompatible implications)

Proving a cell cannot contain a digit, eliminating all instances of a digit from a house, setting more than one digit in a cell, or setting more than one instance of a digit in a house.

## Forcing Net

Built on the same principle as a Forcing Chain but structured as a net (branches allowed). Described as a real "Last Resort" method findable manually only by very experienced players.

![Forcing Net Example 1](/examples/fnv01.png)

Example proving r1c2=5: Cell r7c2 has three candidates: 6, 7, and 9. All lead to r1c2=5.

The three branches traced individually:

![Forcing Net — Branch (r7c2=6)](/examples/fnv02.png)
![Forcing Net — Branch (r7c2=7)](/examples/fnv03.png)
![Forcing Net — Branch (r7c2=9)](/examples/fnv04.png)

## Kraken Fish

Combines a fish with one or more chains. Usually uses Finned Fishes that don't provide eliminations because possible eliminations cannot see all fins.

### Kraken Fish Type 1

If all fins are false, all possible eliminations are valid; if a fin is true, the fish is destroyed and placement eliminates all fish-digit candidates in the fin's peers. Enhanced principle: if a possible elimination must be false for all possible fins, eliminate that candidate.

![Kraken Fish Type 1 Example 1](/examples/kf101.png)

Example: Basis is a Finned Franken X-Wing: 2 r6b2 c57 fr6c2 fr6c9. Chain 1 (fin r6c2 => r8c7): r6c2 -2- ALS:r4c2,r5c13 -4- r2c1 =4= r2c6 -4- r8c6 =4= r8c7.

![Kraken Fish Type 1 Example 2](/examples/kf102.png)

Chain 2 (fin r6c9 => r8c7): r6c9 -2- ALS:r13479c9 -8- ALS:r8c238 -2- r8c7. If both fins false, fish is true, eliminating r1c7, r5c7, r8c7. If fin r6c2 is true, 2 eliminated from r8c7 (Chain 1). If fin r6c9 is true, 2 eliminated from r8c7 (Chain 2).

### Kraken Fish Type 2

A fish guarantees exactly one base candidate is true in all cover sets. Chains starting with a weak link from each base candidate in a cover set plus each fin, all leading to the same conclusion, form a Forcing Chain verity.

![Kraken Fish Type 2 Example](/examples/kf201.png)

Example: Sashimi X-Wing: 4 r15 c12 fr1c7 fr1c9. Cover set column 2 has only one base candidate (r5c2); r3c2 is a cover candidate. The chains together prove r5c9 cannot be 7.

The individual chains that establish the verity:

![Kraken Fish Type 2 — Chain 1 (cover candidate r3c2)](/examples/kf202.png)
![Kraken Fish Type 2 — Chain 2 (fin r1c7)](/examples/kf203.png)
![Kraken Fish Type 2 — Chain 3 (fin r1c9)](/examples/kf204.png)

## Brute Force

Not really a technique. Place a digit in a cell and check whether a solution results. If enabled, every sudoku can be solved.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_last.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
