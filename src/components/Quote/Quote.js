import './Quote.css'

export const Quote = () => {
  const QuoteContainer = document.createElement('article')
  QuoteContainer.className = 'quoteContainer'
  const Quote$$ = document.createElement('blockquote')
  Quote$$.className = 'Quote'
  const quote = document.createElement('q')
  quote.className = 'quoteText'
  quote.textContent =
    'Qué bonito sería ver los árboles del bosque huyendo del incendio'
  const author = document.createElement('h4')
  author.className = 'quoteAuthor'
  author.textContent = '- José Saramago'
  Quote$$.appendChild(quote)
  Quote$$.appendChild(author)
  QuoteContainer.appendChild(Quote$$)

  return QuoteContainer
}
