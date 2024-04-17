export function add(a, b) {
    return a + b;
  }
  
  export async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data,'data');
    return data;
  }