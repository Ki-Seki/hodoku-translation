# Wings

## XY-Wing

An XY-Wing is a short XY-Chain presented as a recognizable pattern.

### Structure

- **Pivot:** A bivalue cell with candidates X and Y
- **Pincer 1:** A bivalue cell with candidates X and Z (sees the pivot)
- **Pincer 2:** A bivalue cell with candidates Y and Z (sees the pivot)

Where Z is a candidate different from both X and Y.

### Elimination

Candidate Z can be removed from any cell that sees both pincer cells.

### Example 1

Pivot: r1c3 with candidates 5 and 7. Pincer 1: r1c6 with candidates 5 and 2. Pincer 2: r2c1 with candidates 7 and 2. Elimination: r2c6 ≠ 2.

![XY-Wing Example 1](/examples/xy01.png)

### Example 2

X = 1, Y = 6, Z = 9. Pivot: r4c1. Pincer 1: r4c4. Pincer 2: r5c2. This produces five eliminations.

![XY-Wing Example 2](/examples/xy02.png)

---

## XYZ-Wing

An XYZ-Wing is an enhanced XY-Wing where the pivot cell contains all three candidates X, Y, and Z.

### Structure

- **Pivot:** A trivalue cell with candidates X, Y, and Z
- **Pincer 1:** A bivalue cell with candidates X and Z (sees the pivot)
- **Pincer 2:** A bivalue cell with candidates Y and Z (sees the pivot)

### Elimination

Candidate Z can be removed only from cells that see both pincer cells **and** the pivot cell. This is more restrictive than XY-Wing because the pivot itself could hold Z.

### Example 1

Pivot: r7c2. Pincer 1: r2c2. Pincer 2: r7c1. Elimination: r9c2 ≠ 7.

![XYZ-Wing Example 1](/examples/xyz01.png)

### Example 2

Candidates 4/7/6 in r23c4 and r3c7. Elimination: r3c56 ≠ 6.

![XYZ-Wing Example 2](/examples/xyz02.png)

---

## W-Wing

A W-Wing consists of two bivalue cells that share the same two candidates, connected by a strong link on one of those candidates.

### Structure

- **Cell 1:** A bivalue cell with candidates X and Y
- **Cell 2:** A bivalue cell with candidates X and Y
- **Strong link:** A conjugate pair on candidate X that connects to one candidate in each cell (or a grouped strong link)

### Elimination

Candidate Y can be removed from any cell that sees both bivalue cells.

### Example 1

Cells r4c4 and r8c9 both have candidates 5 and 9. A strong link on 9 exists in column 8. Eliminate 5 from cells that see both r4c4 and r8c9.

![W-Wing Example 1](/examples/w01.png)

### Example 2

A W-Wing with candidates 4 and 1 in r1c9 and r8c7, connected by a strong link on 1 in r18c3.

![W-Wing Example 2](/examples/w02.png)

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
