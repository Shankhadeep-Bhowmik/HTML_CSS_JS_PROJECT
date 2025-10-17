async function quoteGen(){
  let quoteText = document.getElementById('quote-text');
  let authorName = document.getElementById('author-name');
  
  try {
    let response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
    let data = await response.json();
    quoteText.textContent = data.quote;
    authorName.textContent = "- "+data.author;
    console.log(data)
  } catch (error) {
    console.log(`ERROR : ${error}`);
  }

}