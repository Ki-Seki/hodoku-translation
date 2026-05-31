---
title: "Chains and Loops"
---

# Chains and Loops

Chains represent both the most fundamental and most powerful Sudoku solving techniques. Every known sudoku can be solved using only chains of various degrees of complexity and singles. A chain is a sequence of implications flowing from a premise to a result.

A chain producing a contradiction proves the original premise false. If the premise was "candidate x is set," that candidate can be eliminated. If the premise was "candidate x is not set," the candidate can be placed. Non-contradictory chains prove nothing alone but can be combined: two chains from opposite premises reaching the same result create a verity (that result must be true).

## Links and Inferences

### Weak Links

When two entities are weakly linked, they cannot be true at the same time. If one is true, the other must be false. However, both can be false simultaneously, so one being false yields no conclusion about the other. In basic chains, the entities are typically candidates sharing a house or cell.

### Strong Links

When two entities are strongly linked, they cannot be false at the same time. If one is false, the other must be true. For candidates, this requires exactly two candidates sharing a cell, or exactly two instances of the same candidate sharing a house (conjugate pair).

Summary: Weak Link means "If a is true then b is false." Strong Link means "If a is false then b is true." Chains must alternate link types (hence "Alternating Inference Chain" / AIC). Strong links are always also weak links, so a strong link can substitute as a weak link, but not vice versa.

## Group Links

Group Links form inferences between more than two candidates using intersections between houses.

![Group Nodes Example](/examples/lc101.png)

Group Strong Link logic: "If both r3c12 are not 5, r3c7 has to be 5" and "If r3c7 is not 5, one of r3c12 has to be 5."

Group Weak Link logic: "If one of r3c12 is 5, r3c7 cannot be 5" and "If r3c7 is 5, neither r3c1 nor r3c2 can be 5."

![Group Nodes Between Blocks](/examples/gn101.png)

Links can exist between group nodes as well, demonstrated with candidate 2 in row 9, column 4, and block 8.

## ALS in Chains

ALS (Almost Locked Set) = N+1 candidates in N cells within one house. An ALS proves nothing alone but functions as a strong link node in chains. Removing one candidate from an ALS converts it into a Locked Set (Naked Subset).

## Chains vs. Nets

In a chain every link relies only on the step immediately before it. If a link depends on an earlier step in the chain, or if the chain forks and branches reconverge, it becomes a net.

## Notation Systems

**Forcing Chain Notation** uses `[cell]=[value]` or `[cell]<>[value]` expressions: `r2c7<>4 => r2c7=5 => r2c2=4 => r3c1=5 => r6c1=4`

**Nice Loop Notation** uses `-x-` for weak links and `=x=` for strong links (only between cells): `r2c7 -5- r2c2 -4- r3c1 -5- r6c1`

**AIC (Eureka) Notation** uses `-` for weak and `=` for strong, with candidates in parentheses before cells: `(4=5)r2c7-(5=4)r2c2-(4=5)r3c1-(5=4)r6c1`

## Remote Pair

The simplest chaining technique. Uses only bivalue cells containing the same two candidates. Strong links exist within every cell between the two candidates; weak links connect cells that see each other. Minimum chain length is 4 cells to produce eliminations.

Cells in the chain alternate values. Any external cell seeing two chain cells with different (opposite polarity) values cannot contain either Remote Pair digit.

![Remote Pair Example 1](/examples/rp01.png)

4-cell Remote Pair on digits 4,5. Chain r2c7→r2c2→r3c1→r6c1. If r2c7 is 5, then r6c1 is 4, and vice versa. Cell r6c7 sees both endpoints, so r6c7 ≠ 4 and ≠ 5.

![Remote Pair Example 2](/examples/rp02.png)

8-cell Remote Pair on digits 2,8. Remote Pairs can be replicated by one or two Simple Color moves.

## X-Chain

Chains using one digit only. Must start and end with a strong link, ensuring one endpoint contains the chain digit. The chain digit can be removed from any cell seeing both endpoints. X-Chains of length 4 are sometimes called Turbot Fishes and include Skyscraper, 2-String Kite, and Empty Rectangle variants.

![X-Chain Example 1](/examples/x01.png)

X-Chain on digit 7: r1c2=7= r1c9 -7- r2c8 =7= r7c8 -7- r7c3 =7= r4c3. One of r1c2 or r4c3 must be 7. r4c2 sees both => r4c2 ≠ 7.

![X-Chain Example 2](/examples/x02.png)

X-Chain on digit 3: Proves either r4c2 or r6c5 is 3. Eliminates 3 from r6c123.

## XY-Chain

Uses only bivalue cells with arbitrary candidate pairs (unlike Remote Pairs which require the same two digits). Must start and end with a strong link on the same digit. All strong links are within cells; all weak links are between cells.

![XY-Chain Example 1](/examples/xyc01.png)

XY-Chain on digit 3: 3- r7c4 -9- r5c4 -8- r5c6 -2- r2c6 -3. The chain proves one of the endpoint cells (r7c4 or r2c6) must be 3.

![XY-Chain Example 2](/examples/xyc02.png)

XY-Chain on digit 8: 8- r6c5 -4- r8c5 -1- r8c4 -9- r3c4 -8.

## Nice Loop / AIC

### Propagation Rules

Nice Loops link back to their starting cell. Propagation rules (only inter-cell links considered): When a node has two strong links, the digits must be different. When a node has two weak links, the cell must be bivalue and the digits must be different. When a node has two different links (one weak, one strong), the digits must be the same.

The closing link determines loop type: Discontinuous (contradiction at start cell) or Continuous (links close smoothly).

### Discontinuous Nice Loop

The loop closes with a contradiction at the start cell.

**Eliminate Candidate type:**

![Discontinuous Nice Loop - Eliminate](/examples/dnl01.png)

Chain: r1c8 -7- r7c8 -8- r7c9 -4- r4c9 -5- r4c8 =5= r1c8. Starts weak on 7 (premise: "if r1c8 is 7"), reaches start cell via strong link on 5. This means "if r1c8 is 7 it is 5" — since 5 and 7 share a cell (weak link) — "if r1c8 is 7 it is not 7" — contradiction. Eliminate 7 from r1c8.

**Place Candidate type:**

![Discontinuous Nice Loop - Place](/examples/dnl02.png)

Chain: r8c2 =4= r8c9 -4- r9c9 -2- r9c3 =2= r7c2 =4= r8c2. Starts strong on 4 (premise: "if r8c2 is not 4"), ends strong on 4. Means "if r8c2 is not 4, it is 4" — contradiction — r8c2 must be 4.

### AIC Type 1

Starts and ends with a strong link on the same digit. Proves the digit must be in one of the end cells. Eliminates that digit from all cells seeing both endpoints.

![AIC Type 1 Example](/examples/aic101.png)

5- r1c2 -3- r1c4 =3= r3c4 =9= r7c4 =2= r7c2 -2- r8c3 -5. Either r1c2 or r8c3 is 5. Eliminates 5 from r123c3, r78c2.

![AIC Type 1 Cannibalistic](/examples/aic102.png)

Cannibalistic AIC: 6- r2c5 -7- r2c1 =7= r6c1 =6= r6c7 -6- r2c7 =6= r3c8 -6. One eliminated candidate (6 in r2c7) is part of the chain itself.

### AIC Type 2

Starts and ends with strong links on two different digits in two cells that see each other. The end digit is removed from the start cell; the start digit is removed from the end cell.

![AIC Type 2 Example 1](/examples/aic201.png)

4- r6c2 =4= r9c2 -4- r9c5 -9- r5c5 =9= r5c4 =8= r6c4 -8. Start: 4 in r6c2; End: 8 in r6c4. Eliminates 4 from r6c4 and 8 from r6c2.

![AIC Type 2 Example 2](/examples/aic202.png)

8- r1c8 -2- r1c7 =2= r6c7 =6= r6c3 =5= r4c2 =2= r4c8 -2. Eliminates 2 from r1c8 and 8 from r4c8.

### Continuous Nice Loops / AIC Loops

Continuous Nice Loops and AIC Loops are identical. Less common than Discontinuous Loops but usually very effective. A loop is continuous when the closing link plus the first link obey propagation rules — no contradiction occurs. All weak links in the loop are converted into strong links. All additional candidates in the houses or cells providing the weak links can be eliminated.

![Continuous Nice Loop Example 1](/examples/cnl01.png)

5= r7c6 =2= r6c6 -2- r4c5 -3- r8c5 =3= r8c6 =5= r7c6 =2. r7c6 left on strong link of 2, reached on strong link of 5 (first propagation rule). Weak link exists between 2 and 5 in r7c6.

![Continuous Nice Loop Example 2](/examples/cnl02.png)

9= r7c5 =1= r7c9 =7= r3c9 -7- r3c3 =7= r1c3 =5= r1c6 -5- r8c6 =5= r8c4 =7= r7c4 =9= r7c5 =1. Weak links within cells in r7c5, r7c9, r1c3, r8c4, r7c4. Weak links between cells in row 3 and column 6.

## Grouped Nice Loop / AIC

### Group Nodes Only

Differ from standard Nice Loops/AICs only by using group links.

![Grouped DNL Example](/examples/gdnl01.png)

Grouped Discontinuous Nice Loop: r7c1 =2= r2c1 -2- r2c5 =2= r1c5 =8= r13c4 -8- r5c4 -3- r5c3 -2- r79c3 =2= r7c1. Group links: candidate 8 in r13c4 and candidate 2 in r79c3.

![Grouped CNL Example](/examples/gcnl01.png)

Grouped Continuous Nice Loop: 2= r6c4 =1= r6c3 -1- r9c3 =1= r9c9 =2= r9c56 -2- r78c4 =2= r6c4 =1. Group links on candidate 2: row 9 intersection with block 8 (r9c56) and column 4 intersection with block 8 (r78c4).

![Grouped AIC Type 1 Example](/examples/gaic01.png)
![Grouped AIC Type 2 Example](/examples/gaic02.png)

### Group Nodes and ALS

ALS nodes add significant power. Must be enabled in HoDoKu options (disabled by default from v1.2). Special property in Continuous Loops: After subtracting entry and exit candidates (which become strong links as usual), remaining ALS candidates become locked within ALS cells. Eliminations occur in all cells seeing all instances of a locked candidate within the ALS. This only works in continuous loops.

![Grouped DNL with ALS](/examples/gdnlals01.png)
![Grouped CNL with ALS](/examples/gcnlals01.png)
![Grouped AIC Type 1 with ALS](/examples/gaic1als01.png)
![Grouped AIC Type 1 with ALS 2](/examples/gaic1als02.png)

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_chains.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
