// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value !== "" && prop === "artist")
    {
      records[id].artist = prop
      records[id][prop] = value
    } 
    else if (value !== "" && prop === "albumTitle")
    {
      records[id].albumTitle = prop
      records[id][prop] = value
      return records
    }
    else if (records[id][prop] === undefined && prop === "tracks")
    {
      
      records[id][prop] = [value]
      return records
    }
    else if (records[id][prop].length === 0 && prop === "tracks")
    {
      records[id][prop] = [value]
      console.log(records[id][prop])
      return records
    }
    else if (value !== "" && prop === "tracks")
    {
      [records[id][prop]].push(value)
      return records
    }
    else if (value === "")
    {
      delete records[id][prop]
      return records
    }
    else
    {
    return records;
  }
  return records;
  }
  
  updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love')
  console.log(updateRecords(recordCollection, 1245, 'tracks', "Addicted to Love"))