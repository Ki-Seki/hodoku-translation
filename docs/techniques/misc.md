# Miscellaneous Techniques

## Sue de Coq (SDC)

Sue de Coq is a variant of Subset Counting, introduced by a user named "Sue de Coq" on the EnjoySudoku forum. It is also known as "Two-Sector Disjoint Subsets."

### Basic Variants

1. Find cells at the intersection of a row (or column) and a block that contain 2 cells with 4 candidates, or 3 cells with 5 candidates.
2. Find a bivalue cell in the row (or column) outside the intersection.
3. Find a bivalue cell in the block outside the intersection.
4. **Eliminations:** The candidates from the row cell can be eliminated from the rest of the row; the candidates from the block cell can be eliminated from the rest of the block.

### Example 1

Intersection: r7c13 with candidates {3,4,5,9}. Row cell: r7c7 with candidates {4,5}. Block cell: r8c3 with candidates {3,9}. Eliminate 4 and 5 from the rest of row 7; eliminate 3 and 9 from the rest of the block.

![Sue de Coq Example 1](/examples/sdc01.png)

### Example 2

Intersection: r789c9 with candidates {2,4,5,6,7}. Column cell: r2c9 with candidates {5,6}. Block cell: r9c7 with candidates {2,7}.

![Sue de Coq Example 2](/examples/sdc02.png)

### Extended Types

Extended Sue de Coq patterns occur when:

- Intersection cells contain additional candidates beyond the basic pattern, requiring more cells in the row or block portion.
- Row or block cells contain candidates not found in the intersection, requiring additional cells.

The maximum is 2 cells in the intersection (with a possible third cell serving as a row or block cell). These enhancements can be combined, with examples eliminating up to 13 candidates.

![Sue de Coq Extended Example 1](/examples/sdc03.png)
![Sue de Coq Extended Example 2](/examples/sdc04.png)
![Sue de Coq Extended Example 3](/examples/sdc05.png)
![Sue de Coq Extended Example 4](/examples/sdc06.png)

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
