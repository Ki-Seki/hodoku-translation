---
title: "Chains and Loops"
---

# Chains and Loops

## Overview

- Most fundamental and powerful techniques
- Every sudoku solvable using only chains and singles
- Chain = sequence of implications from premise to result

## Links and Inferences

- **Weak Link**: "If a is true then b is false" -- both can be false
- **Strong Link**: "If a is false then b is true" -- requires exactly 2 candidates in cell or 2 in house
- Strong links are always also weak links; can substitute but not vice versa

## Group Links

- Inferences between more than two candidates using house intersections
- Group Strong Link: "If both r3c12 are not 5, r3c7 has to be 5"
- Group Weak Link: "If one of r3c12 is 5, r3c7 cannot be 5"

![Linked Candidates example](/examples/lc101.png)
![Group Node example](/examples/gn101.png)

## ALS in Chains

- ALS = N+1 candidates in N cells within one house
- Functions as strong link node: removing one candidate converts to Locked Set

## Chains vs. Nets

- Chain: every link relies only on step immediately before
- Net: link depends on earlier step, or branches reconverge

## Notation Systems

- Forcing Chain: `r2c7<>4 => r2c7=5 => r2c2=4`
- Nice Loop: `r2c7 -5- r2c2 -4- r3c1 -5- r6c1` (weak = `-x-`, strong = `=x=`)
- AIC (Eureka): `(4=5)r2c7-(5=4)r2c2-(4=5)r3c1-(5=4)r6c1`

## Remote Pair

- Simplest chaining: only bivalue cells with same two candidates
- Min 4 cells; any external cell seeing two chain cells with opposite polarity values -> eliminate both digits
- Example 1: 4-cell chain on 4,5. r6c7 sees both endpoints -> r6c7!=4,5
- Example 2: 8-cell chain on 2,8
- Can be replicated by Simple Colors

![Remote Pair example 1](/examples/rp01.png)
![Remote Pair example 2](/examples/rp02.png)

## X-Chain

- Chains using one digit only; must start and end with strong link
- Elimination: chain digit removed from cells seeing both endpoints
- Length-4 X-Chains = Turbot Fishes (Skyscraper, 2-String Kite, ER)
- Example 1 (digit 7): r1c2=7=r1c9-7-r2c8=7=r7c8-7-r7c3=7=r4c3. Eliminate 7 from r4c2
- Example 2 (digit 3): Proves r4c2 or r6c5 is 3. Eliminate 3 from r6c123

![X-Chain example 1](/examples/x01.png)
![X-Chain example 2](/examples/x02.png)

## XY-Chain

- Only bivalue cells with arbitrary pairs; must start/end with strong link on same digit
- All strong links within cells; all weak between cells
- Example 1: 3-r7c4-9-r5c4-8-r5c6-2-r2c6-3. One endpoint must be 3
- Example 2: 8-r6c5-4-r8c5-1-r8c4-9-r3c4-8

![XY-Chain example 1](/examples/xyc01.png)
![XY-Chain example 2](/examples/xyc02.png)

## Nice Loop/AIC

### Propagation Rules

1. Two strong links at node -> digits must differ
2. Two weak links -> cell must be bivalue, digits differ
3. One weak + one strong -> digits must be same

### Discontinuous Nice Loop

- Contradiction at start cell

**Eliminate Candidate**: starts weak, ends strong on different digit -> contradiction.

![Discontinuous Nice Loop - Eliminate example](/examples/dnl01.png)

**Place Candidate**: starts strong, ends strong on same digit -> must be true.

![Discontinuous Nice Loop - Place example](/examples/dnl02.png)

### AIC Type 1

- Starts/ends with strong link on same digit -> digit must be in one end cell
- Eliminate from cells seeing both endpoints
- Can be cannibalistic

![AIC Type 1 example 1](/examples/aic101.png)
![AIC Type 1 example 2](/examples/aic102.png)

### AIC Type 2

- Starts/ends with strong links on different digits in cells that see each other
- Eliminate end digit from start cell; start digit from end cell

![AIC Type 2 example 1](/examples/aic201.png)
![AIC Type 2 example 2](/examples/aic202.png)

### Continuous Nice Loops / AIC Loops

- Loop closes without contradiction; all weak links become strong links
- Eliminate all additional candidates in houses/cells providing weak links

![Continuous Nice Loop example 1](/examples/cnl01.png)
![Continuous Nice Loop example 2](/examples/cnl02.png)

## Grouped Nice Loop/AIC

- Same as standard but using group links

![Grouped Discontinuous Nice Loop example](/examples/gdnl01.png)
![Grouped Continuous Nice Loop example](/examples/gcnl01.png)
![Grouped AIC example 1](/examples/gaic01.png)
![Grouped AIC example 2](/examples/gaic02.png)

## Group Nodes and ALS

- ALS nodes add significant power (disabled by default in HoDoKu from v1.2)
- In continuous loops, remaining ALS candidates become locked -> extra eliminations

![Grouped DNL with ALS example](/examples/gdnlals01.png)
![Grouped CNL with ALS example](/examples/gcnlals01.png)
![Grouped AIC Type 1 with ALS example 1](/examples/gaic1als01.png)
![Grouped AIC Type 1 with ALS example 2](/examples/gaic1als02.png)

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
