const byteSize = (str) => {
    // Create a Blob object with the given string
    const blob = new Blob([str], { type: 'text/plain' });
    
    // Retrieve the size of the Blob object in bytes
    const sizeInBytes = blob.size;
    
    return sizeInBytes;
};

// Test the byteSize function
const str = prompt("Enter some string.");
alert(byteSize(str));
