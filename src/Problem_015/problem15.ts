/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

/*
The solution feels recursive with a divide-and-conquer method. From the starting point, there are two option: go right or go down. For ANY given path to
to the bottom right corner, the total path is 40 steps long and at each point only down and right are options. One way to "show this" would be to say you
have an x coordinate and a y coordinate. While x and y are below 20, you have to travel options. However, once you reach 20 on either one you can go straight
to the bottom right corner. If both x and y are at 20, the path is complete: increment your path counter and stop.
*/
/*
function pathCounter(): number {
  let numPaths: number = 0;

  let gridTraverser = (x: number, y: number) => {
    if (x < 20) {
      gridTraverser(x + 1, y);
    }

    if (y < 20) {
      gridTraverser(x, y + 1);
    }

    if (x === 20 && y === 20) {
      numPaths++;
    }
  }

  gridTraverser(0, 0);

  return numPaths;
}

console.log(pathCounter())

*/


/*
Above is how that solution would be implemented. However, such a solution would an incredibly long amount of time to run.
Instead, we can take advantage of the fact that we know there are a total of 40 directions taken, being some combination of
rights and downs. There are always 20 rights, and 20 downs for a total of 40, meaning that we can calculate the number of
combinations via 40!/(20!*20!) which gives us the total number of unique paths: 137846528820.
*/