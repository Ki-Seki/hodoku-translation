---
title: "Methods of Last Resort"
---

# Methods of Last Resort

## Templates

- Single-digit pattern: 46,656 possibilities to place 9 instances on empty grid
- Eliminate digit from cells not in any remaining template; place in cells in ALL templates
- Not meant for humans; useful as indicator that no single-digit pattern exists
- If no template eliminations -> no complex fish to find

## Forcing Chain

- Generic term for chain leading to contradiction or verity
- Any Discontinuous Nice Loop or AIC qualifies
- Multiple chains can be combined into Multiple Forcing Chain

### Verity (multiple chains, same outcome)

- Chains from all candidates of a cell -> one must be true
- Chains from all instances of candidate in one house
- Example: All placements of digit 1 in row 4 lead to r1c7=4

![Forcing Chain Verity example 1](/examples/fcv01.png)
![Forcing Chain Verity example 2](/examples/fcv02.png)
![Forcing Chain Verity example 3](/examples/fcv03.png)
![Forcing Chain Verity example 4](/examples/fcv04.png)

### Contradiction (same premise, incompatible implications)

- Proving cell cannot contain digit; eliminating all instances from house; etc.

## Forcing Net

- Same as Forcing Chain but as a net (branches allowed)
- Real "Last Resort" -- findable manually only by very experienced players
- Example: r7c2 has 3 candidates (6,7,9); all lead to r1c2=5

![Forcing Net example 1](/examples/fnv01.png)
![Forcing Net example 2](/examples/fnv02.png)
![Forcing Net example 3](/examples/fnv03.png)
![Forcing Net example 4](/examples/fnv04.png)

## Kraken Fish

- Fish combined with chains; usually Finned Fish where eliminations can't see all fins

### Type 1

- If fin is false -> fish eliminations valid; if fin true -> chain from fin proves elimination
- Example: Finned Franken X-Wing with two chains proving r8c7!=2

![Kraken Fish Type 1 example 1](/examples/kf101.png)
![Kraken Fish Type 1 example 2](/examples/kf102.png)

### Type 2

- Fish guarantees one base candidate true in all cover sets; chains from each base candidate lead to same conclusion
- Example: Sashimi X-Wing with three chains proving r5c9!=7

![Kraken Fish Type 2 example 1](/examples/kf201.png)
![Kraken Fish Type 2 example 2](/examples/kf202.png)
![Kraken Fish Type 2 example 3](/examples/kf203.png)
![Kraken Fish Type 2 example 4](/examples/kf204.png)

## Brute Force

- Not really a technique -- place digit and check if solution results
- If enabled, every sudoku can be solved

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
