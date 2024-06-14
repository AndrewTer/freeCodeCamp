import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const quoteList = [
  {
    'text': 'Кто жил и мыслил, тот не может в душе не презирать людей.',
    'author': 'Пушкин А.С.',
    'color': '#0034C3'
  },
  {
    'text': 'Знание только тогда знание, когда оно приобретено уси­лиями своей мысли, а не памятью.',
    'author': 'Толстой Л.Н.',
    'color': '#87A96B'
  },
  {
    'text': 'Портрет хорош, - оригинал-то скверен!',
    'author': 'Лермонтов М.Ю.',
    'color': '#FFB82E'
  },
  {
    'text': 'Как ни глупы слова дурака, а иногда бывают они достаточны, чтобы смутить умного человека.',
    'author': 'Гоголь Н.В.',
    'color': '#80008E'
  }
];

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 0
    };
    this.showRandomQuote = this.showRandomQuote.bind(this);
    document.body.style = 'background: ' + quoteList[this.state.selectedKey]['color'];
  }
  showRandomQuote() {
    this.setState({
      selectedKey: Math.floor(Math.random() * quoteList.length)
    });
  }
  render() {
    document.body.style = 'background: ' + quoteList[this.state.selectedKey]['color'];
    return (
      <div>
        <QuoteBox selectedKey={this.state.selectedKey} clickBtnFunc={this.showRandomQuote} />
      </div>
    );
  }
};

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="quote-box" class="d-flex flex-column p-4">
        <QuoteText selectedKey={this.props.selectedKey} />
        <QuoteAuthor selectedKey={this.props.selectedKey} />
        <ButtonsGroup selectedKey={this.props.selectedKey} clickBtnFunc={this.props.clickBtnFunc} />
      </div>
    );
  }
};

class QuoteText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p id="text" class="text-center m-0 mb-2 p-0"
         style={{color: quoteList[this.props.selectedKey]['color']}}>{'"' + quoteList[this.props.selectedKey]['text'] + '"'}</p>
    );
  }
};

class QuoteAuthor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p id="author" class="text-end m-0 mb-4 p-0"
         style={{color: quoteList[this.props.selectedKey]['color']}}>{quoteList[this.props.selectedKey]['author']}</p>
    );
  }
}

class ButtonsGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="d-flex flex-row align-items-center justify-content-between">
        <a id="tweet-quote"
           target="_blank"
           href={'twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteList[this.props.selectedKey]['text']}>
          <p class="m-0 p-0 d-flex align-items-center justify-content-center"
             style={{backgroundColor: quoteList[this.props.selectedKey]['color']}}>
            <svg fill="#FFFFFF" width="24px" height="24px" viewBox="0 0 512 512">
              <path d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"> </path>
              </svg>
          </p>
        </a>
        <button id="new-quote" class="btn ml-auto"
                style={{backgroundColor: quoteList[this.props.selectedKey]['color']}}
                onClick={this.props.clickBtnFunc}>Случайная цитата</button>
      </div>
    );
  }
};

ReactDOM.render(<RandomQuoteMachine />, document.getElementById('app'));