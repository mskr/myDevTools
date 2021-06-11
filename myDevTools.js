//

export default function myDevTools() {

  // Show console output also on mobiles
  
  // Reference to an output container, use 'pre' styling for JSON output
  const output = document.getElementById('console');

  if (output) {

    // Reference to native method(s)
    const oldLog = console.log;

    console.log = function( ...items ) {

      // Call native method first
      oldLog.apply(this,items);

      // Use JSON to transform objects, all others display normally
      items.forEach( (item,i)=>{
        items[i] = (typeof item === 'object' ? JSON.stringify(item,null,4) : item);
      });
      output.innerHTML += items.join(' ') + '<br />';

    }
  }

}