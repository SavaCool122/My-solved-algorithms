let t = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'] //["WEST"]

// north - south
// weast - east

function dirReduc(arr) {
  var opposite = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  }
  return arr.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop()
    else dirs.push(dir)
    return dirs
  }, [])
}
