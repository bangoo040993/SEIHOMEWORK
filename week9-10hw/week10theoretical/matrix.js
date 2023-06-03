function matrix(n) {
    // Create an empty matrix
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push([]);
    }
  
    let value = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Top row
      for (let col = startCol; col <= endCol; col++) {
        result[startRow][col] = value++;
      }
      startRow++;
  
      // Right column
      for (let row = startRow; row <= endRow; row++) {
        result[row][endCol] = value++;
      }
      endCol--;
  
      // Bottom row
      for (let col = endCol; col >= startCol; col--) {
        result[endRow][col] = value++;
      }
      endRow--;
  
      // Left column
      for (let row = endRow; row >= startRow; row--) {
        result[row][startCol] = value++;
      }
      startCol++;
    }
  
    return result;
  }
 
