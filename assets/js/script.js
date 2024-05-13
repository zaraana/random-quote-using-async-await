const button = document.getElementById('newQuote');
const quoteContainer = document.getElementById('quoteContainer');

button.addEventListener('click', getQuote);
async function getQuote() {
quoteContainer.style.display = 'block';
        
        try {
        const response = await fetch('https://thatsthespir.it/api');
        const data = await response.json();
        const quoteContainer = document.getElementById('quoteContainer');
        quoteContainer.innerHTML = `
        <img src="assets/images/love.png">
            <blockquote>
                ${data.quote} 
                <br>
                    <cite>
                        - ${data.author} -
                    </cite>
            </blockquote>
            
        `;
    } catch (error) {
        const quoteContainer = document.getElementById('quoteContainer');
        quoteContainer.innerHTML = `Error: ${error.message}`;
    }
    }